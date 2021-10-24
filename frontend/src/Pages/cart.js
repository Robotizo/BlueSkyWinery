import React, {useEffect, useState} from 'react';
import { Box, Button, Grid, Image, Select, Container, Text } from "@chakra-ui/react";
import { Link, useLocation, useHistory } from "react-router-dom"; 
import { addToCart, removeFromCart } from '../Actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';




function NavArea(){
    const [loaded, setLoaded] = useState(false);
    


    return(
        <>
             
         
             <div style={{width: '100vw', height: '160px', backgroundColor: 'rgba(0,0,0,0.5)', position: 'absolute' }} ></div>

                {loaded ? null : 
                        <div style={{
                            height: '160px',
                            width: '100vw',
                            backgroundColor: 'black'
                        }}></div>
                        
                    }

              
                <Image src="https://images.pexels.com/photos/442116/pexels-photo-442116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="blue-sky-winery" onLoad={() => (setLoaded(true), console.log('Done'))} style={ loaded ? {width: '100vw', height: '160px', objectFit: 'cover'} : { display: 'none' }} />
                
       
        </>
    )
}


export default function Cart() {

    const location = useLocation();
    const history = useHistory();

    
    const wineId = location.state ? location.state.wineId : null;
    const qty = location.state ? location.state.qty : null;

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    var itemPrice = (cartItems.reduce((a, c) => (a + c.price * c.qty), 0)).toFixed(2);
    var taxGST = (cartItems.reduce((a, c) => ((a + c.price * c.qty) * 0.05), 0)).toFixed(2);
    var taxPST = (cartItems.reduce((a, c) => ((a + c.price * c.qty) * 0.1), 0)).toFixed(2);
    var totalPrice = toPrice(itemPrice + taxGST + taxPST);
 





    const dispatch = useDispatch();



    useEffect(() => {
        if(wineId) {
            dispatch(addToCart(wineId, qty));
        }
    }, [dispatch, wineId, qty]);


    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    }

    const checkoutHandler = () => {
        history.push({pathname: '/signin', search: '?redirect=shipping'});
    }




    // const wineId = match.params.id;
    // useEffect(() => {
    //     console.log(location.state.wineId);
    //     console.log(location.state.qty);
    // }, []);

    return(
       
        <div>
             <NavArea/>

             <Container maxW={["92vw", "92vw", "80%"]} p={["0px", "1rem", "1rem"]}>
            <Text  fontWeight="700" fontSize="25px"  mt="25px"  >
                Your Cart
            </Text>
            <Grid templateColumns={[ "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)", "60% minmax(250px, 1fr);"]} gap={6}>


                {cartItems.length === 0 ? 
                    <div>
                        Cart is empty.
                    </div>
                    :
                    (



                        <ul>


                            {cartItems.map((item) => (


                                
                                    <Box key={item.product} bg="#F2F0EC" my={6}>
                                    <Grid templateColumns={[ "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "30% minmax(250px, 1fr);"]} >
                                        <Box>
                                            <Image src={item.image} alt={item.name} />
                                        </Box>

                                        <Box>
                                            <Text px={5} pb={2} pt={5} fontWeight={700} fontSize="18px">
                                                {item.name}
                                            </Text>
                                            <Text px={5} pb={3} fontWeight={700} fontSize="18px">
                                                {item.price}
                                            </Text>
                            
                                            <Box>
                                                <Select pb={3} value={item.qty} w="90%" pl={5} bg={"#E5E5E5"}
                                                    onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))
                                                }>
                                                    {[...Array(item.stockCount).keys()].map((x) => (
                                                            <option key={x+1} value={x+1}>
                                                                {x+1}
                                                            </option>
                                                    ))}
                                                </Select>
                                            </Box>

                                            <Box px={5}>
                                                <Grid templateColumns={[ "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)"]} gap={5}>
                                                    <Link to={`/shop/${item.product}`}>
                                                        <Button w="full">
                                                            To Product
                                                        </Button>
                                                    </Link>
                                                    <Button onClick={() => removeFromCartHandler(item.product)} colorScheme="red">
                                                        Delete
                                                    </Button>
                                                </Grid>
                                            </Box>
                                        </Box>

                                    </Grid>

                                    </Box>
                            




                            ))
                            }
                            
                        </ul>




                    )
                }

                <Box my={6} bg="#F2F0EC" h={"400px"} pos="sticky">
                    <Text p={5} fontWeight="700" fontSize="18px" >
                        Checkout Summary
                    </Text>
                
                    <hr/>

                    <Grid templateColumns={[ "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(2, 1fr)"]} >

                    <Text px={5} py={2} fontWeight="600" fontSize="16px" >
                        Products total
                    </Text>
                    <Text px={5} py={2} fontWeight="600" fontSize="16px" textAlign="right" >
                    ${(cartItems.reduce((a, c) => (a + c.price * c.qty), 0)).toFixed(2)}
                        
                    </Text>

                    </Grid>
                    <Grid templateColumns={[ "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(2, 1fr)"]} >

                        <Text px={5} py={2} fontWeight="600" fontSize="16px" >
                            GST (5%)
                        </Text>
                        <Text px={5} py={2} fontWeight="600" fontSize="16px" textAlign="right" >
                        ${(cartItems.reduce((a, c) => ((a + c.price * c.qty) * 0.05), 0)).toFixed(2)}
                        </Text>

                    </Grid>
                    <Grid templateColumns={[ "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(2, 1fr)"]} >

                        <Text px={5} py={2} fontWeight="600" fontSize="16px" >
                            PST (10%)
                        </Text>
                        <Text px={5} py={2} fontWeight="600" fontSize="16px" textAlign="right" >
                            ${(cartItems.reduce((a, c) => ((a + c.price * c.qty) * 0.1), 0)).toFixed(2)}
                        </Text>

                    </Grid>

                    <hr/>

                    <Grid templateColumns={[ "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(2, 1fr)"]} >

                        <Text px={5} py={2} fontWeight="600" fontSize="16px" >
                            Total
                        </Text>
                        <Text px={5} py={2} fontWeight="600" fontSize="16px" textAlign="right" >
                        ${totalPrice}
                        </Text>

                    </Grid>

        

                    <hr/>


                    <Box mx={5} mt={"55px"}>
                  
                    <Button  
                            borderRadius="0"   
                            type="submit"
                            bg="#313131"
                            _hover={{ bg: "#1d1d1d" }}
                            _focusWithin={{ bg: "black" }}
                            size="md" 
                            color="white"
                            py={7} 
                            w={"full"} 
                            onClick={checkoutHandler}
                            disabled={cartItems.length === 0}
                                >
                                Confirm
                            </Button>
                    </Box>
                    
                </Box>
            </Grid>
            </Container>
        </div>
    )
    
}