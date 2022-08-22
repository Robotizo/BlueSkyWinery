import React, { useState } from "react";
import { Box, Container, Grid, Flex, Text, GridItem } from "@chakra-ui/react";
import { ReactComponent as Logo } from '../Assets/logo.svg';
import { Link } from "react-router-dom";



export default function Footer() {
    return (
        <>

            <Box w={"100vw"} bg={"#0B0D17"}>
                <Container maxW={["92vw", "84vw", "84vw"]} pt={"95px"} >
                    <Grid templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(6, 1fr)"]} gap={6} pb={["80px", "160px", "160px"]}>
                        <Logo />

                        <Box />
                        <Box />
                        <GridItem colSpan={[2, 2, 2, 1]}>
                            <Box mt={8}>
                                <Text fontSize="xl" color="white">
                                    Site Map
                                </Text>
                                <Text fontSize="sm" color="white" mt={6}>
                                    <Link to="/">
                                        Home
                                    </Link>
                                </Text>
                                <Text fontSize="sm" color="white" mt={3}>
                                    <Link to="/about">
                                        About
                                    </Link>
                                </Text>
                                <Text fontSize="sm" color="white" mt={3}>
                                    <Link to="/process">
                                        Process
                                    </Link>
                                </Text>
                                <Text fontSize="sm" color="white" mt={3}>
                                    <Link to="/contact">
                                        Contact Us
                                    </Link>
                                </Text>

                            </Box>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <Box mt={8}>
                                <Text fontSize="xl" color="white">
                                    Information
                                </Text>

                                <Text fontSize="sm" color="white" mt={6}>


                                    Business hours<br />
                                    are Monday to Sunday from<br />
                                    10am-6pm<br />
                                    250-495-1777
                                </Text>

                            </Box>

                        </GridItem>


                    </Grid>

                </Container>
                <Box bg={"#000102"} py={7}>
                    <Container maxW="80%" >
                        <Grid templateColumns="repeat(4, 1fr)" gap={"0 1.5rem"} >
                            <Text color="white" fontSize="sm">
                                © 2020 Blue Sky. All rights reserved
                            </Text>
                            <Box />
                            <Box />
                            <Box>
                                <Grid templateColumns="repeat(3, 1fr)" color="white" float="right" gap={6}>

                                </Grid>
                            </Box>


                        </Grid>
                    </Container>

                </Box>
            </Box>

        </>
    )
}