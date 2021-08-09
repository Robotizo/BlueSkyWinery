import  React, {useState, useEffect} from "react";
import { Input, Image, Text, Container, Box, Grid, Button } from "@chakra-ui/react";
import {useSpring, animated} from 'react-spring';
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../Actions/userActions";


function NavArea(){
    const [loaded, setLoaded] = useState(false);
    const props = useSpring({opacity: 1, from: {opacity: 0}});

    return(
        <>
             
     
             <div style={{width: '100vw', height: '160px', backgroundColor: 'rgba(0,0,0,0.4)', position: 'absolute' }} ></div>

                {loaded ? null : 
                        <div style={{
                            height: '160px',
                            width: '100vw',
                            backgroundColor: 'black'
                        }}></div>
                        
                    }

                <Image src="https://d1q3ne4l9f3g5t.cloudfront.net/blue-sky-winery/image 3.JPG" alt="blue-sky-winery-sign-in" onLoad={() => (setLoaded(true), console.log('Done'))} style={ loaded ? {width: '100vw', height: '160px', objectFit: 'cover'} : { display: 'none' }} />
                

        </>
    )
}




export default function Register(){


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const history = useHistory();

    const dispatch = useDispatch();
    const userRegister = useSelector((state) => state.userRegister);
    const { userInfo, loading, error } = userRegister;

    const redirect = history.location.search ? history.location.search.split('=')[1] : '/';




    const [isLoading, setLoading] = useState(false);

    

    const submitHandler = (e) => {
        setLoading(true);
        e.preventDefault();
        if(password !== confirmPassword){
            alert("Passwords don't match.")
        }
        else{
            dispatch(register(name, email, password));
        }
        
        setLoading(false);
    }


    useEffect(() => {
        if(userInfo){
    
            history.push(redirect);
        }
    }, [userInfo, redirect])

    return(
        <>
            <NavArea/>
            <Container maxW={["92vw", "92vw", "50%"]} py={["0px", "1rem", "5rem"]} px={["0px", "1rem", "2rem"]}  >
                <Box w="100%" p={[4, 4, 4,14]} m="auto 0"  color="black"  order={[0, 0, 0, 1]} bg="#F2F0EC"> 
                    <Text 
                    fontSize="36px"
                    fontWeight={900}
                    textAlign="center"
                    fontFamily={"EB Garamond"}
                    pb={10}>
                        Register
                    </Text>

                    { error && <Box bg="#f06c6c" w="100%" p={4} mb={4} borderRadius="10px"  color="#fff" fontWeight={700}>An error has occurred, please check fields. </Box>}
                    <form onSubmit={submitHandler}>
                        <Grid templateColumns="repeat(1, 1fr)"  templateRows="repeat(2, 1fr)" gap={"20px"} >
                            <Input variant="filled" borderRadius="0" onChange={ e => setName(e.target.value) } bg="#E5E5E5" type="text"  name="name" placeholder="Name" py={6} _focus={{ borderColor: "#ba2a29", backgroundColor: "transparent" }} py={6}/>
                            <Input variant="filled" borderRadius="0" onChange={ e => setEmail(e.target.value) } bg="#E5E5E5" type="email"  name="email" placeholder="Email" py={6} _focus={{ borderColor: "#ba2a29", backgroundColor: "transparent" }} py={6}/>
                            <Input variant="filled" borderRadius="0" onChange={ e => setPassword(e.target.value) } bg="#E5E5E5" type="password"  name="password" placeholder="Password" py={6} _focus={{ borderColor: "#ba2a29", backgroundColor: "transparent" }} py={6} />
                            <Input variant="filled" borderRadius="0" onChange={ e => setConfirmPassword(e.target.value) } bg="#E5E5E5" type="password"  name="confirm" placeholder="Confirm Password" py={6} _focus={{ borderColor: "#ba2a29", backgroundColor: "transparent" }} py={6} />
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
                                Register
                            </Button>
                            <Text>
                                Already have an account? <Link to={`/signin?redirect=${redirect}`}>Sign In</Link>
                            </Text>
                        </Grid>
                    </form>  
                </Box>
            </Container>
        </>
    )
}