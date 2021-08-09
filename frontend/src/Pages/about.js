import  React, {useState, useEffect} from "react";
import { Image, Container, Text, Box, Grid, Skeleton } from "@chakra-ui/react";
import {useSpring, animated} from 'react-spring';






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

                <Image src="https://images.pexels.com/photos/2336117/pexels-photo-2336117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1260" alt="blue-sky-winery" onLoad={() => (setLoaded(true), console.log('Done'))} style={ loaded ? {width: '100vw', height: '160px', objectFit: 'cover'} : { display: 'none' }} />
                

        </>
    )
}


function Family(){
    return(
        <> 
            <Box bg="#F2F0EC" w="100%" color="white" mt={24} mb={24}> 
            <Grid templateColumns={[ "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}  h={["auto", "auto", "auto", "550px"]} w="100%">

                <Box w="100%" h="100%" p={[8, 8, 8, 12]}  color="black" order={[1, 1, 1, 0]}>
        
                     
                    <Text  fontWeight={900} color={"#0096D8"} fontSize={["14px","14px","14px","16px"]}>
                        About Blue Sky 
                    </Text>
                    
                    <Text fontFamily={"EB Garamond"}  fontWeight={600} fontSize={[25,25,25,35]}>
                        The Toor Family
                    </Text>
                
                    <Text fontFamily={"EB Garamond"} lineHeight={"30px"} color="#4E4E4E" fontWeight={500} fontSize={["16px","16px","16px","18px"]} mt={4}  order={[0, 0, 0, 1]}>
                        The Toor family immigrated to North America in 1994 from Punjab, India. They have been calling the South Okanagan home for many years. Originally tending their orchards, the family has been farming here since 2002.<br/><br/>
                        Harpreet and Navpreet are the proprietors of this family owned and operated winery. Together with the help of their three children, Navi, Siraj and Imraj, they have opened and launched Blue Sky Estate winery.<br/><br/>
                        During harvest it is all hands on deck with Harpeet and Navpreet at the helm.  The entire extended family comes out to help.
                    </Text>
                    
                </Box>
                <Image w="100%" h={["230px", "230px", "230px", "100%"]} objectFit="cover"  src="https://compilelabs.s3.ca-central-1.amazonaws.com/blue-sky-winery/blue+sky+winery+with+sign.jpg" />
            </Grid>
            </Box>
        </>
    )
}

function Profiles(){
    return(
        <> 

            <Grid templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]} gap={10}>
                <Box bg="#F2F0EC" w="100%" h={["auto","auto","auto","728px"]} color="white" mb={[12, 12, 12, 24]}> 
                    <Image w="100%" h={"326px"} objectFit="cover" src="https://compilelabs.s3.ca-central-1.amazonaws.com/blue-sky-winery/blue+sky+harpreet+toor.jpg" />
                    <Box p={[8, 8, 8, 10]} >
                                             
                        <Text  fontWeight={900} color={"#0096D8"} fontSize={["14px","14px","14px","16px"]}>
                            Proprietor & Viticulturist
                        </Text>
                        
                        <Text fontFamily={"EB Garamond"} color="black" fontWeight={600} fontSize={[25,25,25,35]}>
                            Harpreet Toor
                        </Text>
                    
                        <Text fontFamily={"EB Garamond"} lineHeight={"30px"} color="#4E4E4E" fontWeight={500} fontSize={["16px","16px","16px","18px"]} mt={2}>
                            Harpreet is the man in charge of the vines. You will probably find him in the cab of his tractor, or walking the rows inspecting his grapes. When asked which grape varietals are his most and least favourite he tells us, "Cab Franc is my favourite because it is easy to handle, grows straight up and has strong shoots. Unlike Cab Franc, Syrah likes to grow in every direction and is more work".
                        </Text>
                    
                    </Box>
                </Box>
                
                <Box bg="#F2F0EC" w="100%" h={["auto","auto","auto","728px"]} color="white"  mb={24}> 
                    <Image w="100%" h={"326px"} objectFit="cover" src="https://compilelabs.s3.ca-central-1.amazonaws.com/blue-sky-winery/dsc03228.jpg" />
                    <Box p={[8, 8, 8, 10]} >
                                             
                        <Text  fontWeight={900} color={"#0096D8"} fontSize={["14px","14px","14px","16px"]}>
                            Proprietor & Winemaker
                        </Text>
                        
                        <Text fontFamily={"EB Garamond"} color="black" fontWeight={600} fontSize={[25,25,25,35]}>
                            Navpreet Toor
                        </Text>
                    
                        <Text fontFamily={"EB Garamond"} lineHeight={"30px"} color="#4E4E4E" fontWeight={500} fontSize={["16px","16px","16px","18px"]} mt={2}>
                            Navpreet takes over the grapes once they have picked. She is the in house winemaker (working with a wine making consultant) looks after everything from pressing to bottling. When she is not in the back monitoring the wines you will probably find her behind the tasting bar greeting guests. "White wines are my favourite to make, reds take so much more time. Of course they are all great to drink!"
                        </Text>
                    
                    </Box>
                </Box>
            </Grid>


        </>
    )
}




// curl -X GET "https://graph.facebook.com/oauth/access_token?client_id={4265998306747885}&client_secret={a8ecb44c9155483db207137f3762a62c}&grant_type=client_credentials"

// {"access_token":"4265998306747885|1xnfpQkXJGExX-RvMtCbsljp8wU","token_type":"bearer"

function Images(){

    const [value , setValue] = useState({
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        image6: '',
        loaded: false
    });


    useEffect(() => {
        console.log("None");
        Promise.all([
            fetch("https://graph.facebook.com/v9.0/instagram_oembed?url=https://www.instagram.com/p/CGYiME2hr5W/&access_token=4265998306747885|1xnfpQkXJGExX-RvMtCbsljp8wU"),
            fetch("https://graph.facebook.com/v9.0/instagram_oembed?url=https://www.instagram.com/p/B6RLoHrhwlK/&access_token=4265998306747885|1xnfpQkXJGExX-RvMtCbsljp8wU"),
            fetch("https://graph.facebook.com/v9.0/instagram_oembed?url=https://www.instagram.com/p/Binbsa4F_-e/&access_token=4265998306747885|1xnfpQkXJGExX-RvMtCbsljp8wU"),
            fetch("https://graph.facebook.com/v9.0/instagram_oembed?url=https://www.instagram.com/p/BXEcvVrg2BJ/&access_token=4265998306747885|1xnfpQkXJGExX-RvMtCbsljp8wU"),
            fetch("https://graph.facebook.com/v9.0/instagram_oembed?url=https://www.instagram.com/p/BUvLpcjAW0w/&access_token=4265998306747885|1xnfpQkXJGExX-RvMtCbsljp8wU"),
            fetch("https://graph.facebook.com/v9.0/instagram_oembed?url=https://www.instagram.com/p/CIrPy89BUFQ/&access_token=4265998306747885|1xnfpQkXJGExX-RvMtCbsljp8wU")
        ]).then(([res1, res2, res3, res4, res5, res6]) => Promise.all([ res1.json(), res2.json(), res3.json(), res4.json(), res5.json(), res6.json() ]))
            .then(([data1, data2, data3, data4, data5, data6]) => {
                setValue({image1: data1.thumbnail_url, image2: data2.thumbnail_url, image3: data3.thumbnail_url, image4: data4.thumbnail_url, image5: data5.thumbnail_url, image6: data6.thumbnail_url, loaded: true});
            })

    }, []);



    return(
        <> 
            <Grid templateColumns="repeat(1, 1fr)" mb={6}>

                <Text  fontWeight={900} color={"#0096D8"} fontSize={["14px", "14px", "14px", "16px"]}>
                    Photos from Instagram
                </Text>
                            
                <Text fontFamily={"EB Garamond"} color="black" fontWeight={600} fontSize={[25, 25, 25, 35]}>
                    Winery Photos
                </Text>
            </Grid>
            
            <Grid templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]} gap={10} mb={24}>
                
                { value.loaded ? <Image w="100%" h={"373px"} objectFit="cover" src={value.image1} /> : <Skeleton w="100%" h={"373px"} objectFit="cover"/>}
                { value.loaded ? <Image w="100%" h={"373px"} objectFit="cover" src={value.image2} /> : <Skeleton w="100%" h={"373px"} objectFit="cover"/>}
                { value.loaded ? <Image w="100%" h={"373px"} objectFit="cover" src={value.image3} /> : <Skeleton w="100%" h={"373px"} objectFit="cover"/>}
                { value.loaded ? <Image w="100%" h={"373px"} objectFit="cover" src={value.image4} /> : <Skeleton w="100%" h={"373px"} objectFit="cover"/>}
                { value.loaded ? <Image w="100%" h={"373px"} objectFit="cover" src={value.image5} /> : <Skeleton w="100%" h={"373px"} objectFit="cover"/>}
                { value.loaded ? <Image w="100%" h={"373px"} objectFit="cover" src={value.image6} /> : <Skeleton w="100%" h={"373px"} objectFit="cover"/>}

            </Grid>


        </>
    )
}


export default function About(){
    return(
        <>
            <NavArea/>
            <Container maxW={["92vw", "92vw", "80%"]} p={["0px", "1rem", "1rem"]} >
                <Family/>

                <Profiles/>
                <Images/>
            </Container>
            
            
        </>
    )
}