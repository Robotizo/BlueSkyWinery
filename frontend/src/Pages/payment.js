import  React from "react";
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

export default function Payment() {
    return(
        <> 
            <NavArea/>
            <Steps step1 step2 step3/>
        </>
    )
    
}