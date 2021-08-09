import { Box, Text, Spinner, Image, Container, Table, TableCaption, Tr, Th, Td, Thead, Tbody, Tfoot, Button  } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { myOrderList } from '../Actions/orderActions';


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

export default function OrderHistory(){
    const myOrderListFetch = useSelector(state => state.myOrderListFetch);
    const { loading, error, orders } = myOrderListFetch;
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(myOrderList());
    }, [dispatch])


    return(
        <>
        <NavArea/>
          <Container maxW={["92vw", "92vw", "80%"]} p={["0px", "1rem", "1rem"]}>
            
            <Text fontSize="24px" fontWeight={900} mb="10px">Order History</Text>
            {
                loading ? (
                    <Box  textAlign="center">
                        <Spinner color="red.500" size="xl"/>
                    </Box>
                ) : error ? (
                    <Box bg="tomato" w="100%" p={4} color="white">
                        Error has occured
                    </Box>
                ) : (
                    <>
                    <Table variant="simple">
                        <TableCaption>Wines Ordered</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>ID</Th>
                                <Th>Date</Th>
                                <Th>Total</Th>
                                <Th>Action</Th>
                         
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                orders.map((order) => (
                                    <Tr key={order._id}>
                                        <Td>{order._id}</Td>
                                        <Td>{order.createdAt}</Td>
                                        <Td>${order.totalPrice.toFixed(2)}</Td>
                                        <Td>
                                            <Button onClick={() => {history.push(`/orderConfirmed/${order._id}`)}} >
                                                View
                                            </Button>
                                        </Td>


                                    </Tr>

                                ))
                            }
        
                        </Tbody>
                        <Tfoot>
                            <Tr>
                                <Th>ID</Th>
                                <Th>Date</Th>
                                <Th>Total</Th>
                                <Th>Action</Th>
                            </Tr>
                        </Tfoot>
                        </Table>
                    </>
                )
            }
        </Container>
        </>
    )
}