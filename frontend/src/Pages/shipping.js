
import  React, {useState} from "react";
import Steps from '../Components/steps';
import { Image, Box, Text, Grid, Input, Button, Container } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingInfo } from "../Actions/cartActions";
import { useHistory } from "react-router-dom";


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

export default function Shipping(){
    const history = useHistory();
    const userSignIn = useSelector(state => state.userSignIn);
    const { userInfo } = userSignIn;
    const cart = useSelector((state) => state.cart);
    const { shippingInfo } = cart;
    if(!userInfo){
        history.push('/signin');
    }
    const [fullName, setFullName] = useState(shippingInfo.fullName);
    const [address, setAddress] = useState(shippingInfo.address);
    const [city, setCity] = useState(shippingInfo.city);
    const email = userInfo.email;
    const [postalCode, setPostalCode] = useState(shippingInfo.postalCode);
    const [isLoading, setLoading] = useState(false);

    const dispatch = useDispatch();
   


    const submitHandler = (e) => {
        setLoading(true);
        e.preventDefault();
        dispatch(saveShippingInfo({fullName, email, address, city, postalCode}));
        history.push('/order');
        setLoading(false);
        
    };



    return(
        <>
            <NavArea/>
            <Steps step1 step2></Steps>
            <Container maxW={["92vw", "92vw", "50%"]} py={["0px", "1rem", "5rem"]} px={["0px", "1rem", "2rem"]}  >
            <Box w="100%" p={[4, 4, 4,14]} m="auto 0"  color="black"  order={[0, 0, 0, 1]} bg="#F2F0EC"> 
                    <Text 
                    fontSize="36px"
                    fontWeight={900}
                    textAlign="center"
                    fontFamily={"EB Garamond"}
                    pb={10}>
                        Shipping Information
                    </Text>

                
                    <form onSubmit={submitHandler}>
                        <Grid templateColumns="repeat(1, 1fr)"  templateRows="repeat(2, 1fr)" gap={"20px"} >
                            <Input variant="filled" borderRadius="0" onChange={ e => setFullName(e.target.value) } bg="#E5E5E5" type="text"  name="fullname" placeholder="Full Name" py={6} _focus={{ borderColor: "#ba2a29", backgroundColor: "transparent" }} py={6} required />
                            <Input variant="filled" borderRadius="0" onChange={ e => setAddress(e.target.value) } bg="#E5E5E5" type="text"  name="address" placeholder="Address" py={6} _focus={{ borderColor: "#ba2a29", backgroundColor: "transparent" }} py={6} required />
                            <Input variant="filled" borderRadius="0" onChange={ e => setCity(e.target.value) } bg="#E5E5E5" type="text"  name="city" placeholder="City" py={6} _focus={{ borderColor: "#ba2a29", backgroundColor: "transparent" }} py={6} required />
                            <Input variant="filled" borderRadius="0" onChange={ e => setPostalCode(e.target.value) } bg="#E5E5E5" type="text"  name="postalCode" placeholder="Postal Code" py={6} _focus={{ borderColor: "#ba2a29", backgroundColor: "transparent" }} py={6} required />
                    
                            <Button  
                            isLoading={isLoading}
                            borderRadius="0"   
            
                            type="submit"
                            bg="#313131"
                                _hover={{ bg: "#1d1d1d" }}
                                _focusWithin={{ bg: "black" }}
                                size="md" 
                                color="white"
                                py={7} 
                                w={"full"} >
                                Confirm
                            </Button>
                      
                        </Grid>
                    </form>  
                </Box>
                </Container>
        </>
    )
}