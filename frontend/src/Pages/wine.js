import  React, {useEffect, useState} from "react";
import { Box, Container, Grid, Image, Text, Button, Spinner, Select } from "@chakra-ui/react";
import { useParams, useHistory } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import { detailsProduct } from "../Actions/productActions";






export default function Wine(){

    let { wineId } = useParams();


    const history = useHistory();
    // const wine = wineslist.find(({id}) => id === wineId);


    const [qty, setQty] = useState(1)

    const dispatch = useDispatch();

    // const productId = wineId;

    const addToCartHandler = () => {
        history.push({
            pathname: `/cart/${wineId}`,
            search: `?qty=${qty}`,
            state: {
                wineId: wineId,
                qty: qty
            }
        });
    }



    const wineDetails = useSelector( (state) => state.wineDetails );
    const { loading, error, wine } = wineDetails;
    
    useEffect(() =>{
        window.scrollTo(0, 0);
        dispatch(detailsProduct(wineId));
    }, [dispatch, wineId]);
 

    return(
        <>

        {
            loading ? (
                <Box  textAlign="center">
                    <Spinner color="red.500" size="xl"/>
                </Box>
            ) : error ? (
                <Box bg="tomato" w="100%" p={4} color="white">
                    This is the Box
                </Box>
            ) : (
                <Container maxW={["92vw", "92vw", "80%"]} p={["0px", "1rem", "1rem"]}  key={wine._id} >

                    <Grid templateColumns={[ "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(1, 1fr)", "38% minmax(250px, 1fr);"]} py="95px" gap={24}>
                        <Box>
                            <Image src={wine.image}  w="full" />
                        </Box>
                        <Box>
                            <Text textAlign="left" 
                                pt={3} 
                                pb={1}
                                fontFamily="EB Garamond" 
                                fontSize="40px"
                                fontWeight="400" >
                                    {wine.name}
                            </Text>
                            <Text   textAlign="left" 
                        
                                    color="#838383"
                                    fontFamily="EB Garamond" 
                                    fontSize="22px"
                                    fontWeight="600" 
                                    py={3}>
                                            {wine.price} + tax
                                        </Text>


                                        <Box>
                                            {wine.stockCount > 0 ? (
                                                <Text>
                                                    In Stock
                                                </Text>
                                            ):(
                                                <Text>
                                                    Unavailible
                                                </Text>
                                            )}
                                        </Box>


                                        <Text   textAlign="left" 
                                    
                                    color="#838383"
                                
                                    fontSize="18px"
                                    fontWeight="600"
                            >
                                
                                {wine.description}
                            </Text>

 
          

                                {
                                    wine.stockCount > 0 && (
                                        <>

                                        <Box mt={8}>
                                        <Text  fontWeight="600" mb={2} >
                                            Quantity
                                        </Text>
                                        <Select value={qty} onChange={e => setQty(e.target.value)}>
                                            {
                                                [...Array(wine.stockCount).keys()].map(
                                                    (x) => (
                                                        <option key={x+1} value={x+1}>{x+1}</option>
                                                    )
                                                )
                                            }
                                        </Select>
                                    </Box>
                                        <Button 
                                        onClick={addToCartHandler}
                                        w="300px"
                                        mt={"30px"} 
                                        color="white" 
                                        rounded="0"
                                        transition=".8s"
                                        color={["primary.500", "primary.500", "white", "white"]}
                                        bg={"#313131"}
                                        _hover={{ bg: "black" }}
                                        > 

                                            Add to cart
                                        </Button>

                                    </>
                                    )
                                }
                      
                        </Box>
    
    
                    </Grid>
    
                </Container>

                )
            }


  


        </>
    )
}