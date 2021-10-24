import  React, {useEffect, useState} from "react";
import { Image, Box, Container, Grid, Text, Button, Spinner } from "@chakra-ui/react";
import { Link,  Route, useRouteMatch, Switch } from "react-router-dom";
import Wine from "./wine";
import { wineslist } from "../Lists/winelist";

import { useDispatch, useSelector } from 'react-redux';
import { listWines } from "../Actions/productActions";






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




function WineItem(props){
    let { url } = useRouteMatch();

    return(
        <>

            <Box pb={5}  >
                        <Link to={`${url}/${props.wine._id}`}>
                       
                            <Image src={props.wine.image} w="full" objectFit="cover" />
                        
                            <Text 
                            textAlign="center" 
                            pt={3} 
                            pb={1}
                            fontFamily="EB Garamond" 
                            fontSize="25px"
                            fontWeight="900" >
                                {props.wine.name}
                            </Text>
                            <Text 
                            textAlign="center" 
                    
                            color="#838383"
                            fontFamily="EB Garamond" 
                            fontSize="22px"
                            fontWeight="600" >
                                {props.wine.price}
                            </Text>
                            <Button 
                            w="full" 
                            my={3} 
                            color="white" 
                            rounded="0"
                            transition=".8s"
                            color={["primary.500", "primary.500", "white", "white"]}
                            bg={"#313131"}
                            _hover={{ bg: "black" }}
                            > 
                                View
                            </Button>

                        

                        
                        </Link>
                    </Box>
        </>
    )
}






function Wines(){




    // const [wines, setWines] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);
    const dispatch = useDispatch();
    const wineList = useSelector( (state) => state.wineList );
    const { loading, error, wines } = wineList;
   

    // const getWines = async () => {
    //     try{
    //         setLoading(true);
    //         await axios.get('api/wines')
    //         .then(response => setWines(response.data));
    //         setLoading(false);
    //     }catch(err){
    //         setError(true);
    //         setLoading(false);
    //     }
    // }


    useEffect(() => {
        dispatch(listWines());
        window.scrollTo(0, 0);
    }, [dispatch]);






    return(
        <>
        <Container maxW={["92vw", "92vw", "80%"]} p={["0px", "1rem", "1rem"]} >
       
         <Box pt={"75px"}>
            <Text pb={"70px"} textAlign="center" fontSize="50px" fontWeight="600" fontFamily="EB Garamond" >
                Portfolio/Shop
            </Text>

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
                    <Grid templateColumns={[ "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]} gap={6}>
                        {wines.map((wine) => (
                            <WineItem wine={wine}  key={wine._id} />
                        ))}
                    </Grid>
                 )
            }

         </Box>


        </Container>


        </>
    )
}






export default function Shop(){
    let { path } = useRouteMatch();


    return(
        <>
            <NavArea/>

        <Switch>
            <Route exact path={path}>
                <Wines/>
            </Route>
            <Route path={`${path}/:wineId`} component={Wine} />
        </Switch>
            
        </>
    )
}