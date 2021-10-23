import  React, {useState} from "react";
import { Image, Container, Text, Box, Grid, Button, Skeleton } from "@chakra-ui/react";
import {useSpring, animated} from 'react-spring';
import { Link } from "react-router-dom";



function Hero(){

    const [loaded, setLoaded] = useState(false);
    const props = useSpring({opacity: 1, from: {opacity: 0}});

    return(
        <>
        
 
     
             <animated.div style={props}>
             <div style={{width: '100vw', height: '100vh', backgroundImage: 'linear-gradient(45deg, black, transparent)', position: 'absolute' }} ></div>

                {loaded ? null : 
                        <div style={{
                            height: '100vh',
                            width: '100vw',
                            backgroundColor: 'black'
                        }}></div>
                        
                    }

                <Image src="https://images.pexels.com/photos/51947/tuscany-grape-field-nature-51947.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1050&w=1260" alt="blue-sky-winery" onLoad={() => (setLoaded(true), console.log('Done'))} style={ loaded ? {width: '100vw', height: '100vh', objectFit: 'cover'} : { display: 'none' }} />
                
            </animated.div >
        </>
    )
}


function TextWithin(){
    return(
        <>
            <Text position="absolute" 
            w={["80%", "100%", "100%", "10em"]}
            px={{md: 145, base: 8}} 
            py={50} 
            mr={["40px", "40px", "40px", "0px"]}
            // bottom={{base: "3.3em", md: "2.5em"}}
            top={["51vh", "51vh", "51vh", "4.5em"]}
            zIndex="10" 
            color={"white"} 
            fontFamily={"EB Garamond"}
            fontWeight={900}
            fontSize={{base: 40, sm: 40, md: 72}}
            lineHeight={{base: "auto", sm: "auto", md: "98px"}}> 
                Wine under 
                
                a blue sky
            </Text>
            <Text position="absolute" 
            w={{md: "47em", base: "100%"}}
            zIndex="10" 
            color={"white"} 
            px={{md: 145, base: 8}} 
            py={50} 
            top={[ "69vh", "69vh", "69vh", "30em" ]}
            fontSize={[14, 14, 14, 18]}
            lineHeight={"32px"}
            >
                It is our belief that great wines start in the vineyard. A mixture of location, site, and great farming practices will yield a great bottle.
            </Text>
        </>
    )
}



function Welcome(){
    return(
        <> 
            <Box bg="#F2F0EC" w="100%" color="white" mt={24} mb={24}> 
            <Grid templateColumns={[ "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]} w="100%">
                <Image w="100%" h={["230px", "230px", "230px", "100%"]} objectFit="cover" src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" />
                <Box w="100%" h="100%" p={[8, 8, 8, 28]}  color="black" >
                    <Text fontFamily={"EB Garamond"}  fontWeight={600} fontSize={[25, 25, 25,35]}>
                        Welcome
                    </Text>
                
                    <Text fontFamily={"EB Garamond"} lineHeight={"30px"} color="#4E4E4E" fontWeight={500} fontSize={[16, 16, 16, 18]} mt={4}>
                        It is easy to see why we named our winery Blue Sky. We are situated on an ideal bench overlooking Osoyoos Lake. Beautiful lake and mountain views sit just beyond our vines. Look up and see our namesake, the stunning South Okanagan Sky, which blesses us with the needed sunlight for our grape vines to grow.
                    </Text>
                    
                </Box>
            </Grid>
            </Box>
        </>
    )
}


function ImageCollection(){
    const [videoloaded, setVideoloaded] = useState(false);
    return(
        <>
        {/* <Grid templateColumns={[ "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]} gap={10}>
            <Box bg="black" w="100%" h="422px" >
            {videoloaded ? null : 


                <Skeleton style={{
                    height: '430px',
                    width: '100%',
                    backgroundColor: 'black',
                    float: "left"
                }}>
                    <div>contents wrapped</div>
                </Skeleton>
                }

                <video width="52%" style={videoloaded ? {height: "422px", width: "100%",  opacity: "0.5", objectFit: "cover"} : { display: 'none' }} ptonLoadedDataCaure={() => (setVideoloaded(true), console.log('Video Done!'))} autoPlay loop muted >
                    <source src="https://compilelabs.s3.ca-central-1.amazonaws.com/blue-sky-winery/wine-membership.mp4"  type="video/mp4" />
                </video>
                <Image src="https://images.pexels.com/photos/3756623/pexels-photo-3756623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=800" w="100%" h="422px" opacity="0.5" objectFit="cover"  style={videoloaded ? {height: "422px", width: "100%",  opacity: "0.5", objectFit: "cover"} : { display: 'none' }} onLoad={() => (setVideoloaded(true), console.log('Video Done!'))} />
                <Text
                position="relative" 
                bottom="170px" 
                mx={[4, 4, 12]} 
                fontSize="35px"
                color="white"
                fontFamily={"EB Garamond"} 
                fontWeight={600}
                >
                    Memberships
                </Text>
                <Button  
                position="relative" 
                bottom="160px" 
                mx={[4, 4, 12]} 
                rounded="none"   

                py={7}
                px={9}
                fontSize="18px"
                transition=".8s"
                color={["white"]}
                bg={"#313131"}
                _hover={{ bg: "black" }}>View Now</Button>
            </Box>
            <Box bg="black" w="100%" h="422px" >
                <Image src="https://d1q3ne4l9f3g5t.cloudfront.net/blue-sky-winery/image%201.JPG" w="100%" h="422px" opacity="0.5" objectFit="cover" />
                <Text
                position="relative" 
                bottom="170px" 
                mx={[4, 4, 12]} 
                fontSize="35px"
                color="white"
                fontFamily={"EB Garamond"} 
                fontWeight={600}
                >
                    Wine Tasting
                </Text>
                <Button 
                position="relative" 
                bottom="160px" 
                mx={[4, 4, 12]} 
                rounded="none"                 
                py={7}
                px={9}
                fontSize="18px"
                transition=".8s"
                color={["white"]}
                bg={"#313131"}
                _hover={{ bg: "black" }}>View Now</Button>
            </Box>
        </Grid> */}

        <Grid templateColumns="repeat(1, 1fr)" mt={10}>
            <Link to='/shop'>
            <Box bg="black" w="100%" h={["422px", "422px","422px", "272px"]} >
                <Image src="https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1200&q=80" w="100%" h={["422px", "422px","422px", "272px"]} opacity="0.5" objectFit="cover" />
                <Text
                position="relative" 
                bottom="170px" 
                mx={[4, 4, 12]} 
                fontSize="35px"
                color="white"
                fontFamily={"EB Garamond"} 
                fontWeight={600}
                >
                    Shop our Wines
                </Text>
                <Button 
                position="relative" 
                bottom="160px" 
                mx={[4, 4, 12]} 
                rounded="none"                 
                py={7}
                px={9}
                fontSize="18px"
                transition=".8s"
                color={["white"]}
                bg={"#313131"}
                _hover={{ bg: "black" }}>View Now</Button>
            </Box>
            </Link>
        </Grid>
        </>
    )
}

function Awards(){
    return(
        <> 
            <Box bg="#F2F0EC" w="100%" color="white" mt={24} mb={24} > 
            <Grid templateColumns={[ "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]} w="100%" >
                <Image w="100%" h={"580px"} objectFit="cover" float="left" src="https://d1q3ne4l9f3g5t.cloudfront.net/blue-sky-winery/wines/2014%20BLUE%20LIGHTNING%20FRONT.jpg" />
                <Box w="100%" h="100%" p={[8, 8, 8, 28]} color="black" float="right">
        
                    <Text fontFamily={"EB Garamond"}  fontWeight={600} fontSize={[25, 25, 25,35]}>
                        Celebrate our awards with us
                    </Text>
                
                    <Text fontFamily={"EB Garamond"} lineHeight={"30px"} color="#4E4E4E" fontWeight={500} fontSize={[16, 16, 16, 18]} mt={4}>
                        Double Gold from All Canadian Wine Championships, Silver from the All Canadian Wine Championships, Gold Medal At all Canadian win championship 2018 and also Silver Medal at Wine Align 2018 National awards of Canada and Bronze from the 2018 Lieutenant Governors award.
                    </Text>
                    
                </Box>
            </Grid>
            </Box>
        </>
    )
}



function More(){
    return(
        <>
            <div style={{width: '100vw', height: '531px', backgroundColor: 'rgba(0,0,0,0.2)', position: 'absolute' }} ></div>
            <Image src="https://images.pexels.com/photos/2339180/pexels-photo-2339180.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=550&w=1260" alt="blue-sky-more" style={{width: '100vw', height: '531px', objectFit: 'cover'}} />
            <Box  pos="absolute" bottom="65px" px={{md: 145, base: 8}}>
                <Box  w={["auto", "auto", "auto", "492px"]} h={["auto", "auto", "auto", "auto"]} bg="#F2F0EC"  p={[8, 8, 8, 12]}>
                    <Text fontFamily={"EB Garamond"}  fontWeight={600} fontSize={[25, 25, 25, 35]} w={"80%"}>
                        Learn more about Blue Sky 
                    </Text>
                    <Text fontFamily={"EB Garamond"} lineHeight={"30px"} color="#4E4E4E" fontWeight={500} fontSize={[16, 16, 16, 18]} mt={4}>
                    We are a new boutique winery with a long history of and passion for farming. Our family is proud to call Canada home. We immigrated to north America in 1994 and have practiced farming in the South Okanagan since 2002. Originally tending to fruit orchards, it was a natural progression (and passion) to switch to viticulture.
                    </Text>
                </Box>
            </Box>
        </>
    )
}


export default function Landing(){

    
    return(
        <>
            <Hero/>
            <TextWithin/>
            <Container maxW={["92vw", "92vw", "80%"]} p={["0px", "1rem", "1rem"]} >
                <Welcome/>
                <ImageCollection/>
                <Awards/>
            </Container>
            <div style={{position: "relative"}}>
                <More/>
            </div>
        </>
    )
}


