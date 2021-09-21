import React, {useEffect, useState} from 'react';

import { Image, Box, Text, Grid, AlertIcon, Spinner, Container, Alert } from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { detailsOrder } from '../Actions/orderActions';




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


export default function OrderDetail(props){



    const orderId = props.match.params.id;
    const orderDetails = useSelector((state) => state.orderDetails);
    const { order, loading, error } = orderDetails;
 

    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch(detailsOrder(orderId));


    }, [dispatch, orderId])



    return(
        <>

            <NavArea/>

            {
                    loading ? (
                        <Box  textAlign="center">
                            <Spinner color="red.500" size="xl"/>
                        </Box>
                    ) : error ? (
                        <Box bg="tomato" w="100%" p={4} color="white">
                            Error has occured
                        </Box>
                    ) : 
                    (
                    <Container maxW={["92vw", "92vw", "80%"]} p={["0px", "1rem", "1rem"]}>
                              <Alert status="success">
                        <AlertIcon />
                        Your order was successfully placed!
                       
                    </Alert>

                        <Grid templateColumns={[ "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)", "60% minmax(250px, 1fr);"]} gap={6}>
                        
                        <Box my={6} bg="#F2F0EC" pos="sticky">
                                <Text pt={5} px={5} pb={1} fontWeight="700" fontSize="20px" >
                                    Order Info 
                                </Text>
                                <Text pt={1} px={5} pb={5} fontWeight="700" fontSize="14px" >
                                    Order {order._id} 
                                </Text>
                                <hr/>
                                <Text py={2} px={5} fontWeight="700" fontSize="18px" >
                                    Shipping Info
                                </Text>
                                <Text py={2} px={5} fontWeight="700" fontSize="16px" >
                                    Name: {order.shippingInfo.fullName}
                                </Text>
                
                                <Text py={2} px={5} fontWeight="700" fontSize="16px" >
                                    Address: {order.shippingInfo.address}, {order.shippingInfo.city}, {order.shippingInfo.postalCode}
                                </Text>
                                {/* {order.isDelivered ? <Box></Box> : <Box  bg="#f06c6c"  p={4} m={4} borderRadius="10px"  fontWeight={700} color="#fff">Not delivered yet</Box>} */}
                                <br/>
                                <Text py={2} px={5} fontWeight="700" fontSize="18px" >
                                    Order Items
                                </Text>

                                <ul>
            
            
                                {order.orderItems.map((item) => (
            
            
                                    
                                        <Box key={item.product} bg="#F2F0EC" m={4} p={4} bg="#dcd8cd">
                                        <Grid templateColumns={[ "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "30% minmax(250px, 1fr);"]} >
                                            <Box>
                                                <Image src={item.image} alt={item.name} />
                                            </Box>
            
                                            <Box>
                                                <Text px={5} pb={2} pt={5} fontWeight={700} fontSize="18px">
                                                    {item.name}
                                                </Text>
                                                <Text px={5} pb={3} fontWeight={700} fontSize="18px">
                                                    {item.qty} for ${item.price.toFixed(2)} each = ${(item.qty * item.price.toFixed(2)).toFixed(2)}
                                                </Text>
            
                            
                                            </Box>
            
                                        </Grid>
            
                                        </Box>
            
                                ))
                                }
            
            </ul>
                     
            
            
            
                        </Box>
            
            
                        <Box my={6} bg="#F2F0EC" h={"300px"} pos="sticky">
                                <Text p={5} fontWeight="700" fontSize="18px" >
                                    Checkout Summary
                                </Text>
                            
                                <hr/>
            
                                <Grid templateColumns={[ "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(2, 1fr)"]} >
            
                                    <Text px={5} py={2} fontWeight="600" fontSize="16px" >
                                        Products total
                                    </Text>
            
                                    <Text px={5} py={2} fontWeight="600" fontSize="16px" textAlign="right">
                                        ${order.itemsPrice.toFixed(2)}
                                    </Text>
                        
            
                                </Grid>
            
            
                                <Grid templateColumns={[ "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(2, 1fr)"]} >
            
                                    <Text px={5} py={2} fontWeight="600" fontSize="16px" >
                                        GST (5%)
                                    </Text>
                                    <Text px={5} py={2} fontWeight="600" fontSize="16px" textAlign="right" >
                                        ${order.taxPriceGST.toFixed(2)}
                                    </Text>
            
                                </Grid>
                                <Grid templateColumns={[ "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(2, 1fr)"]} >
            
                                    <Text px={5} py={2} fontWeight="600" fontSize="16px" >
                                        PST (7%)
                                    </Text>
                                    <Text px={5} py={2} fontWeight="600" fontSize="16px" textAlign="right" >
                                        ${order.taxPricePST.toFixed(2)}
                                    </Text>
            
                                </Grid>
                                <Grid templateColumns={[ "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(2, 1fr)"]} >
            
                                <Text px={5} py={2} fontWeight="600" fontSize="16px" >
                                    Shipping
                                </Text>
                                <Text px={5} py={2} fontWeight="600" fontSize="16px" textAlign="right" >
                                    ${order.shippingPrice.toFixed(2)}
                                </Text>
            
                                </Grid>
            
                                <hr/>
            
                                <Grid templateColumns={[ "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(2, 1fr)"]} >
            
                                    <Text px={5} py={2} fontWeight="600" fontSize="16px" >
                                        Total
                                    </Text>
                                    <Text px={5} py={2} fontWeight="600" fontSize="16px" textAlign="right">
                                        ${order.totalPrice.toFixed(2)}
                                    </Text>
                              
            
                                </Grid>
            
                      
                            
            
                            
                                
                            </Box>
                        </Grid>
                        </Container>
                    )

            }
      
     

        </>
    )
}