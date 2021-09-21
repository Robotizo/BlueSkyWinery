import  React, {useState} from "react";
import { Image, Container, Text, Box, Grid, Input, GridItem, Textarea, Button, useToast} from "@chakra-ui/react";
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



function FirstArea(){


    const toast = useToast();
    const initialValues = {
        fullName: '',
        phone: '',
        email: '',
        message: '', 
    }


    const [values, setValues] = useState(initialValues);
    const [isLoading, setLoading] = useState(false);

    const handleChange = e => {
        var { name, value } = e.target;
        setValues({
            ...values, 
            [name]: value,
        })

    }

    const sendEmail = async(e) => {
        e.preventDefault();
    
        setLoading(true)


        await emailjs.send('service_64844wj', 'template_6d9b60g', {from_email: values.email, from_name: values.fullName, from_phone: values.phone, from_message: values.message}, 'user_mEuPE9kyrhUNYGzDFWI0c')
        .then((result) => {
            console.log('Email Sent!');
        }, (error) => {
            console.log(error.text);
        });
        


        toast({
            title: "Signed Up.",
            description: "Thank you for your interest.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });

          
        setTimeout(() => {
            setLoading(false);

        }, 3000);

        


    
  
    
        setValues({...initialValues});
        e.target.reset();
    
      }



    return(
        
        <> 
            <Box bg="#F2F0EC" color="white" mt={[14, 14, 14, 24]} mb={[14, 14, 14, 24]}> 

            <Grid templateColumns={[ "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}  h={["auto", "auto", "auto", "680px"]} w="100%">
    

                <Box pos="relative" order={[1, 1, 1, 0]}> 
                    <div style={{width: '100%', height: '100%', backgroundImage: 'linear-gradient(21deg, black, transparent, transparent)', position: 'absolute' }} ></div>
                    <Text color="white" pos="absolute" bottom="95px" m="30px" fontSize="15px">OUR LOCATION & CONTACTS</Text>
                    <Text color="white" pos="absolute"  bottom="10px" m="30px" fontSize="15px">
                        11621 87th St.<br/>
                        Osoyoos BC, V0H 1V1<br/>
                        phone: 250-495-1777
                    </Text>
                    <Image w="100%" h="100%" objectFit="cover" float="left" src="https://d1q3ne4l9f3g5t.cloudfront.net/blue-sky-winery/image%205.JPG" />
                </Box>

                <Box w="100%" p={[4, 4, 4,14]} m="auto 0"  color="black" float="right" order={[0, 0, 0, 1]}>                     
                <Text 
                    fontSize="36px"
                    fontWeight={900}
                    textAlign="center"
                    fontFamily={"EB Garamond"}
                    pb={10}>
                        Contact Us
                    </Text>
                    <form  onSubmit={sendEmail} className="form">
                    <Grid templateColumns="repeat(2, 1fr)"  templateRows="repeat(4, 1fr)" gap={"0 20px"}>
                        <GridItem  >
                            <Input variant="filled" borderRadius="0" value={values.fullName} onChange={handleChange} bg="#E5E5E5" type="text"  name="fullName" placeholder="Full Name" py={6} _focus={{ borderColor: "#ba2a29", backgroundColor: "transparent" }} />
                        </GridItem>
                        <GridItem   >
                            <Input variant="filled" borderRadius="0" value={values.phone} onChange={handleChange} bg="#E5E5E5" type="tel"  name="phone" placeholder="Phone Number" py={6} _focus={{ borderColor: "#ba2a29", backgroundColor: "transparent" }} />
                        </GridItem>
                        <GridItem colSpan={2}    >
                            <Input variant="filled" borderRadius="0" value={values.email} onChange={handleChange} bg="#E5E5E5" type="email"  name="email" placeholder="Email" py={6} _focus={{ borderColor: "#ba2a29", backgroundColor: "transparent" }} />
                        </GridItem>
                        <GridItem colSpan={2}   >
                            <Textarea resize="none" variant="filled" borderRadius="0" value={values.message} onChange={handleChange}  bg="#E5E5E5" type="text"  name="message"  placeholder="Write message here..." py={6} _focus={{ borderColor: "#ba2a29", backgroundColor: "transparent" }} />
                        </GridItem>
                        <GridItem colSpan={2}  pt={4}  >
                            <Button  
                            isLoading={isLoading}
                            borderRadius="0"   
                            disabled={!values.email, !values.fullName, !values.phone, !values.company, !values.message}
                            type="submit"
                            bg="#313131"
                                _hover={{ bg: "#1d1d1d" }}
                                _focusWithin={{ bg: "black" }}
                                size="md" 
                                color="white"
                                py={7} 
                                w={"full"} >
                                Submit
                            </Button>
                        </GridItem>
                    </Grid>
                    </form>
                    
                </Box>
                </Grid>
            </Box>
        </>
    )
}




export default function Contact(){
    return(
        <>

            <NavArea/>
            <Container maxW={["92vw", "92vw", "80%"]} p={["0px", "1rem", "1rem"]} >
                <FirstArea/>
            </Container>
        </>
    )
}