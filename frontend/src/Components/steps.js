import React from 'react';
import { Box } from "@chakra-ui/react";

export default function Steps(props){
    return(

        
        <Box className="checkout-steps" display="flex">
            <Box className={props.step1 ? 'active' : ''} fontWeight={700}>Sign In</Box>
            <Box className={props.step2 ? 'active' : ''} fontWeight={700}>Shipping</Box>
            <Box className={props.step3 ? 'active' : ''} fontWeight={700}>Place Order</Box>
        </Box>

    
    )
}