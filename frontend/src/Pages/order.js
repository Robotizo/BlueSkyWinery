import React, {useEffect, useState} from 'react';
import Steps from '../Components/steps';
import { Image, Box, Text, Grid, useToast, Button, Container } from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createOrder } from "../Actions/orderActions";
import { ORDER_CREATE_RESET } from '../Constants/orderConstants';
import {Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import axios from 'axios';
import emailjs from 'emailjs-com';



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



const CheckoutForm = (props) => {
    const stripe = useStripe();
    const elements = useElements();

    const [isLoading, setLoading] = useState(false);

    const [error, setError] = useState(null);
    const toast = useToast()
    // const stripeBack = require("stripe")("sk_test_51IplL2C37SytJ6awuAIVFongzAgy6cL1RhXQFRDwKGWL5LFgjUI0SZdvucdKAgzmQyxvCcyLYd9L3ZxUzYs4G7ZM00JeKUNaxX");

    const billingDetails = {
        name: props.cart.shippingInfo.fullName,
        email: props.cart.shippingInfo.email,
        address: {
            city: props.cart.shippingInfo.city,
            line1: props.cart.shippingInfo.address,
            postal_code: props.cart.shippingInfo.postalCode
        }
    }

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);
        // const payload = await stripe.createPaymentMethod({
        //     type: 'card',
        //     card: cardElement,
        //     billing_details: billingDetails
        // });

        const payload = await stripe.confirmCardPayment(props.clientSecret.toString(), {
            payment_method: {
              card: elements.getElement(CardElement),
              billing_details: billingDetails
            }
          });
       

        if (payload.error) {
            setError(`Payment failed ${payload.error.message}`);
            setLoading(false);
          } else {
            props.placeOrderHandler();

 



            setLoading(false);
       
            toast({
                title: "Order Placed",
                description: "Thank you for your purchase.",
                status: "success",
                duration: 5000,
                isClosable: true,
              })
        }
        
    }

    return(
        <>
         <form onSubmit={handleSubmit}>

         <Grid templateColumns={[ "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)", "60% minmax(250px, 1fr);"]} gap={6}>
           
       
         
           <Box my={6} bg="#F2F0EC" pos="sticky">
           
              
          
                   <Text p={5} fontWeight="700" fontSize="20px" >
                       Order Info
                   </Text>
                   <hr/>
                   <Text py={2} px={5} fontWeight="700" fontSize="18px" >
                       Shipping Info
                   </Text>
                   <Text py={2} px={5} fontWeight="700" fontSize="16px" >
                       Name: {props.cart.shippingInfo.fullName}
                      
                   </Text>
   
                   <Text py={2} px={5} fontWeight="700" fontSize="16px" >
                       Address: {props.cart.shippingInfo.address}, {props.cart.shippingInfo.city}, {props.cart.shippingInfo.postalCode}
                   </Text>
                   <br/>

                          
                   <Text py={2} px={5} fontWeight="700" fontSize="18px" >
                       Payment Method
                   </Text>

                   
                       <Box p={5}>
                       <CardElement />

                       </Box>


                   

                


                   <br/>
                   <Text py={2} px={5} fontWeight="700" fontSize="18px" >
                       Order Items
                   </Text>

                   
                   <ul>


                   {props.cart.cartItems.map((item) => (


                       
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


           <Box my={6} bg="#F2F0EC" h={"400px"} pos="sticky">
               
                   <Text p={5} fontWeight="700" fontSize="18px" >
                       Checkout Summary
                   </Text>
               
                   <hr/>

                   <Grid templateColumns={[ "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(2, 1fr)"]} >

                       <Text px={5} py={2} fontWeight="600" fontSize="16px" >
                           Products total
                       </Text>

                       <Text px={5} py={2} fontWeight="600" fontSize="16px" textAlign="right">
                           ${props.cart.itemsPrice.toFixed(2)}
                       </Text>
           

                   </Grid>


                   <Grid templateColumns={[ "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(2, 1fr)"]} >

                       <Text px={5} py={2} fontWeight="600" fontSize="16px" >
                           GST (5%)
                       </Text>
                       <Text px={5} py={2} fontWeight="600" fontSize="16px" textAlign="right" >
                           ${props.cart.taxPriceGST.toFixed(2)}
                       </Text>

                   </Grid>
                   <Grid templateColumns={[ "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(2, 1fr)"]} >

                       <Text px={5} py={2} fontWeight="600" fontSize="16px" >
                           PST (10%)
                       </Text>
                       <Text px={5} py={2} fontWeight="600" fontSize="16px" textAlign="right" >
                           ${props.cart.taxPricePST.toFixed(2)}
                       </Text>

                   </Grid>
                   <Grid templateColumns={[ "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(2, 1fr)"]} >

                   <Text px={5} py={2} fontWeight="600" fontSize="16px" >
                       Shipping
                   </Text>
                   <Text px={5} py={2} fontWeight="600" fontSize="16px" textAlign="right" >
                       ${props.cart.shippingPrice.toFixed(2)}
                   </Text>

                   </Grid>

                   <hr/>

                   <Grid templateColumns={[ "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(2, 1fr)"]} >

                       <Text px={5} py={2} fontWeight="600" fontSize="16px" >
                           Total
                       </Text>
                       <Text px={5} py={2} fontWeight="600" fontSize="16px" textAlign="right">
                           ${props.cart.totalPrice.toFixed(2)}
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
                           isLoading={isLoading}
                           disabled={props.cart.cartItems.length === 0 && !stripe}
                               >
                               Place Order
                           </Button>
                   </Box>
                   <Box m={6}>
                   {props.error &&  <Box bg="#f06c6c" w="100%" p={4} mb={4} borderRadius="10px"  color="#fff" fontWeight={700}>An error has occured</Box>}
                   </Box>

       
                   
               </Box>
             
        
           </Grid>

         </form>
        </>
    )
}



export default function Order(){



    const history = useHistory();
    const cart = useSelector(state => state.cart);
    let printResult = [];

    // if(!cart.shippingInfo.address){
    //     history.push('/shipping');
    // }
    const orderCreate = useSelector((state) => state.orderCreate);
    const {loading, success, error, order} = orderCreate;
    const toPrice = (num) => Number(num.toFixed(2));

    const [clientSecret, setClientSecret] = useState('');
    cart.itemsPrice = toPrice(cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0));



    cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);

    cart.taxPriceGST = toPrice(0.05 * cart.itemsPrice);
    cart.taxPricePST = toPrice(0.1 * cart.itemsPrice);

    cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPricePST + cart.taxPriceGST;

    const dispatch = useDispatch();


    const placeOrderHandler = async (e) => {
        // await axios.post('/create-payment-intent');
        dispatch(createOrder({...cart, orderItems: cart.cartItems, email: cart.shippingInfo.email}));
    }

    useEffect(() => {
        axios.post('/create-payment-intent', {
            amount: Math.round(cart.totalPrice.toFixed(2) * 100),
            name: cart.shippingInfo.fullName,
            email: cart.shippingInfo.email,
        }).then(data => {
            setClientSecret(data.data.clientSecret);
            // console.log(data.data.clientSecret);
          });

         


        if(success){
            // stripeScript();
            printResult = cart.cartItems.map(item => {
                return ["Wine Name: " + item.name, "Quantity: " + item.qty, "  "]
            });
  
            emailjs.send('service_64844wj', 'template_1fj3xbo', {
                order_id: order._id,
                cust_name: cart.shippingInfo.fullName,
                cust_email: cart.shippingInfo.email,
                city: cart.shippingInfo.city,
                address: cart.shippingInfo.address,
                postal_code: cart.shippingInfo.postalCode,
                order_list: printResult.toString()
            }, 
            'user_mEuPE9kyrhUNYGzDFWI0c') .then(res => {
              console.log(res, 'Email successfully sent!')
            }).catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err));
            history.push(`/orderConfirmed/${order._id}`);
            dispatch({type: ORDER_CREATE_RESET});
        }
    }, [success, dispatch, order, history])

    const stripePromise = loadStripe('pk_test_51IplL2C37SytJ6awMwFV7Ma0qNozptKRbpg7etmGtC7PDgLt7ABJk5tguYG6mdwBYgFfU9PFq6vMLoeVvcSSGKlu00aFniZqE9');


    return(
        <>
            <NavArea/>
            <Steps step1 step2 step3/>
            <Container maxW={["92vw", "92vw", "80%"]} p={["0px", "1rem", "1rem"]}>
                          
            <Elements stripe={stripePromise}>

      
                <CheckoutForm cart={cart} placeOrderHandler={placeOrderHandler} error={error} clientSecret={clientSecret} />

            </Elements>

        
           
            </Container>

        </>
    )
}



