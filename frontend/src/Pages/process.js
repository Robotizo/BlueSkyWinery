import  React, {useState} from "react";
import { Image, Container, Text, Box, Grid, Skeleton, GridItem } from "@chakra-ui/react";
import {useSpring, animated} from 'react-spring';
import { ReactComponent as Red } from '../Assets/red.svg';
import { ReactComponent as White } from '../Assets/white.svg';


function NavArea(){
    const [loaded, setLoaded] = useState(false);
    const props = useSpring({opacity: 1, from: {opacity: 0}});

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

                <Image src="https://compilelabs.s3.ca-central-1.amazonaws.com/blue-sky-winery/blue+sky+tractor.jpg" alt="blue-sky-winery" onLoad={() => (setLoaded(true), console.log('Done'))} style={ loaded ? {width: '100vw', height: '160px', objectFit: 'cover'} : { display: 'none' }} />
                
       
        </>
    )
}


function FirstArea(){

    const [videoloaded, setVideoloaded] = useState(false);
    return(
        <> 
            <Box bg="#F2F0EC" w="100%" color="white" mt={24} mb={24}> 
            <Grid templateColumns={[ "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}  h={["auto", "auto", "auto", "430px"]} w="100%">

                    {videoloaded ? null : 


                        <Skeleton 
                        h={["230px", "230px", "230px", "430px"]} 
                        w="100%"
                        bg="black">
                            <div>contents wrapped</div>
                          </Skeleton>
                    }

                    <Box h={["230px", "230px", "230px", "430px"]} w="100%" >
                    <video width="100%" style={videoloaded ? {height: "100%",  objectFit: "cover"} : { display: 'none' }} onLoadedDataCapture={() => (setVideoloaded(true), console.log('Video Done!'))}  autoPlay muted playsInline loop  >
                        <source src="https://d1q3ne4l9f3g5t.cloudfront.net/blue-sky-winery/farmingclip%20(1).mp4"  type="video/mp4" />
                    </video>
                    </Box>
             

                <Box w="100%" h="100%" p={[8, 8, 8, 12]}  color="black" >                     
                    <Text  fontWeight={900} color={"#0096D8"} fontSize={["14px","14px","14px","16px"]}>
                        The Process
                    </Text>
                    
                    <Text fontFamily={"EB Garamond"}  fontWeight={600} fontSize={[25,25,25,35]}>
                        Grapes to Wine
                    </Text>
                
                    <Text fontFamily={"EB Garamond"} lineHeight={"30px"} color="#4E4E4E" fontWeight={500} fontSize={["16px","16px","16px","18px"]} mt={4}>
                        The Toor family has been farming since 2002 when they had a fruit orchard operation. They made the transition to viticulture in 2008, selling their grapes to the surrounding wineries. The first vintage they made was 2011.<br/><br/>
                        "It all starts on the farm", says proprietor and viticulturist Harpreet Toor, "If the vines are well looked after and healthy, they will make high quality grapes."
                    </Text>
                    
                </Box>
            </Grid>

            </Box>
        </>
    )
}


function SecondArea(){
    return(
        <> 
            <Box bg="#F2F0EC" w="100%" color="white" mt={24} mb={24}> 
            <Grid templateColumns={[ "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}  h={["auto", "auto", "auto", "450px"]} w="100%">
  
                <Box w="100%" p={[8, 8, 8, 12]}  m={"auto 0"} color="black" order={[1, 1, 1, 0]}>                     
                    <Text  fontWeight={900} color={"#0096D8"} fontSize={["14px","14px","14px","16px"]}>
                        The Site
                    </Text>
                    
                    <Text fontFamily={"EB Garamond"}  fontWeight={600} fontSize={[25,25,25,35]}>
                        The winery & vineyard
                    </Text>
                
                    <Text fontFamily={"EB Garamond"} lineHeight={"30px"} color="#4E4E4E" fontWeight={500} fontSize={["16px","16px","16px","18px"]} mt={4}>
                        The site of the vineyard is very special. The property has a gentle slope from West to East towards Osoyoos Lake. The combination of the slope and the cooler lake temperatures maintains constant air flow throughout the vineyard. This helps protect the vineyard from early spring and late fall frost damage. Being located in Osoyoos means the grapes see a lot of sun. Just like South Okanagan tourists, the grapes enjoy the hot weather.
                    </Text>
                    
                </Box>

                <Image w="100%" h={["230px", "230px", "230px", "100%"]} objectFit="cover" order={[0, 0, 0, 1]} src="https://compilelabs.s3.ca-central-1.amazonaws.com/blue-sky-winery/blue+sky+vineyard+row.jpg" />

            </Grid>
            </Box>
        </>
    )
}


function ThreeArea(){
    return(
        <> 
            <Box bg="#F2F0EC" w="100%" color="white" mt={24} mb={24}> 
            <Grid templateColumns={[ "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}  h={["auto", "auto", "auto", "450px"]} w="100%">
                <Image w="100%" h={["230px", "230px", "230px", "100%"]} objectFit="cover" float="left" src="https://compilelabs.s3.ca-central-1.amazonaws.com/blue-sky-winery/blue+sky+tanks.jpg" />

                <Box w="100%" p={[8, 8, 8, 12]}   color="black" float="right">                     
                    <Text  fontWeight={900} color={"#0096D8"} fontSize={["14px","14px","14px","16px"]}>
                        The Site
                    </Text>
                    
                    <Text fontFamily={"EB Garamond"}  fontWeight={600} fontSize={[25,25,25,35]}>
                        Grape Varietals
                    </Text>

                    <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} templateRows="repeat(2, 1fr)"  gap={3} mt={9}>
                        <Box h={"100%"} w="100%"> 
                            <Grid templateColumns="repeat(5, 1fr)" gap={2} p={["1rem 0", "1rem 0", "1rem 0", 4]}  h={"100%"} >
                                <GridItem colSpan={2}>
                                    <White width="100%" height="100%"/>
                                </GridItem>
                                <GridItem colSpan={3} mt={2}> 
                                    <Text color="#0096D8" fontSize={"14px"} fontWeight={900}>
                                        One Acre
                                    </Text>
                                    <Text color="black" fontSize={"20px"} fontFamily={"EB Garamond"}  fontWeight={600}>
                                        Viognier
                                    </Text>
                                </GridItem>

                            </Grid>
                        </Box>
                        <Box h={"100%"} w="100%"> 
                            <Grid templateColumns="repeat(5, 1fr)" gap={2}  p={["1rem 0", "1rem 0", "1rem 0", 4]}  h={"100%"} >
                                <GridItem colSpan={2}>
                                    <Red width="100%" height="100%"/>
                                </GridItem>
                                <GridItem colSpan={3} mt={2}> 
                                    <Text color="#0096D8" fontSize={"14px"} fontWeight={900}>
                                        Two Acres
                                    </Text>
                                    <Text color="black" fontSize={"20px"} fontFamily={"EB Garamond"}  fontWeight={600}>
                                        Syrah
                                    </Text>
                                </GridItem>

                            </Grid>
                        </Box>
                        <Box h={"100%"} w="100%"> 
                            <Grid templateColumns="repeat(5, 1fr)" gap={2} p={["1rem 0", "1rem 0", "1rem 0", 4]} h={"100%"} >
                                <GridItem colSpan={2}>
                                    <Red width="100%" height="100%"/>
                                </GridItem>
                                <GridItem colSpan={3} mt={2}> 
                                    <Text color="#0096D8" fontSize={"14px"} fontWeight={900}>
                                        Four Acres
                                    </Text>
                                    <Text color="black" fontSize={"20px"} fontFamily={"EB Garamond"}  fontWeight={600}>
                                        Cabernet Franc
                                    </Text>
                                </GridItem>

                            </Grid>
                        </Box>
                        <Box h={"100%"} w="100%"> 
                            <Grid templateColumns="repeat(5, 1fr)" gap={2}  p={["1rem 0", "1rem 0", "1rem 0", 4]}  h={"100%"} >
                                <GridItem colSpan={2}>
                                    <Red width="100%" height="100%"/>
                                </GridItem>
                                <GridItem colSpan={3} mt={2}> 
                                    <Text color="#0096D8" fontSize={"14px"} fontWeight={900}>
                                        Two Acres
                                    </Text>
                                    <Text color="black" fontSize={"20px"} fontFamily={"EB Garamond"}  fontWeight={600}>
                                        Cabernet Sauvignon
                                    </Text>
                                </GridItem>

                            </Grid>
                        </Box>
            
                    </Grid>
                
                    
                </Box>
            </Grid>

            </Box>
        </>
    )
}

function FourArea(){
    return(
        <> 
            <Box bg="#F2F0EC" w="100%" color="white" mt={24} mb={24}> 
            <Grid templateColumns={[ "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}  h={["auto"]} w="100%">
  
                <Box w="100%" p={[8, 8, 8, 12]} color="black">                     
                    <Text  fontWeight={900} color={"#0096D8"} fontSize={["14px","14px","14px","16px"]}>
                        The Process
                    </Text>
                    
                    <Text fontFamily={"EB Garamond"}  fontWeight={600} fontSize={[25,25,25,35]}>
                        Wine Making
                    </Text>
                
                    <Text fontFamily={"EB Garamond"} lineHeight={"30px"} color="#4E4E4E" fontWeight={500} fontSize={["16px","16px","16px","18px"]} mt={4}>
                    The wine making comes easier with high quality grapes, "We let the grapes shape the wine and tell their own story." says proprietor and winemaker, Navpreet Toor. "We do not force the grapes to become the wine we want".<br/><br/>
                    "Opening a winery is a many year investment," Harpreet tells, "You must have wine ready to sell before you open your doors. Depending on the wine it may take up to two years before you can sell that bottle to the consumer. That is why our first vintage is 2011 but we are just opening now in 2016."
                    </Text>
                    
                </Box>

                <Image w="100%" h={["230px", "230px", "230px", "500px"]} objectFit="cover"  src="https://compilelabs.s3.ca-central-1.amazonaws.com/blue-sky-winery/blue+sky+tank.jpg" />
            </Grid>
            </Box>
        </>
    )
}




export default function Process(){
    return(
        <>
            <NavArea/>
            <Container maxW={["92vw", "92vw", "80%"]} p={["0px", "1rem", "1rem"]} >
                <FirstArea/>
                <SecondArea/>
                <ThreeArea/>
                <FourArea/>
            </Container>
            
        </>
    )
}