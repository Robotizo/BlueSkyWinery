import  React, {useState} from "react";
import { Box, Text, Flex, Button, Drawer, DrawerOverlay, useDisclosure, DrawerContent, DrawerCloseButton, IconButton, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { ReactComponent as Logo } from '../Assets/logo.svg';
import { ReactComponent as Cart } from '../Assets/cart.svg';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { signout } from "../Actions/userActions";





  

  const MenuItems = (props) => {
    const { children, isLast, to = "/", ...rest } = props
    return (
      <Text
        mb={{ base: isLast ? 0 : 8, sm: 0 }}
        mr={{ base: 0, sm: isLast ? 0 : 8 }}
        fontWeight={700}
        display="block"        
        {...rest}
    
      >
        <Link _hover={{textDecor: "none"}}  to={to}>{children}</Link>
      </Text>
    )
  }
   
  
   
const NavBar = (props) => {


    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;
    const dispatch = useDispatch();

    const signoutHandler = () => {
      dispatch(signout());
    }




    const cart = useSelector( state => state.cart );
    const { cartItems } = cart;


    const { isOpen, onOpen, onClose } = useDisclosure()
    const [show, setShow] = useState(false);
    const toggleMenu = () => setShow(!show);
    const btnRef = React.useRef();


    const MenuItemsMob = (props) => {
      const { children, to = "/", isLast } = props
      return (
        <Link to={to}>
        <Button w="300px" m={"10px"} h={12} onClick={onClose} bg={isLast ? "black" : "#EDF2F7"}  color={isLast ? "white" : "black"}  >
          {children}
        </Button>
        </Link>
    
      )
    }
   
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        position="absolute"
        zIndex="5"
        px={{md: 135, base: 8}}
        py={50}
        bg={["primary.500", "primary.500", "transparent", "transparent"]}
        color={["white", "white", "primary.700", "primary.700"]}
        {...props}
      >
        <Flex align="center">
          <Logo/>     
        </Flex>


        <IconButton aria-label="Search database" onClick={onOpen} display={["block", "block", "block", "none" ]} icon={<HamburgerIcon />}  variant="outline"  colorScheme="white" fontSize="17px" />

        <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        display={["block", "block", "block",  "none" ]}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton fontSize="20px" right="20px" top="20px" />
              
        <Box mt="60px"> 
            
          <Flex
            align={["center", "center", "center", "center"]}
            justify={["center", "center", "center", "center"]}
            direction={["column", "column", "column", "row"]}
            pt={[4, 4, 0, 0]}
          >




        
              <MenuItemsMob to="/" >Home</MenuItemsMob>
      
            <MenuItemsMob  to="/about">About</MenuItemsMob>
            <MenuItemsMob  to="/process">Process</MenuItemsMob>
            <MenuItemsMob  to="/contact">Contact Us</MenuItemsMob>

           
            <MenuItemsMob to="/shop" isLast >
              Shop
            </MenuItemsMob>
      

         
            

          </Flex>
        </Box>


          </DrawerContent>
        </DrawerOverlay>
      </Drawer>

   
        <Box
          display={{ base: show ? "block" : "none", md: "block" }}
          flexBasis={{ base: "100%", md: "auto" }}
        >
          <Flex
            align={["center", "center", "center", "center"]}
            justify={["center", "space-between", "flex-end", "flex-end"]}
            direction={["column", "row", "row", "row"]}
            pt={[4, 4, 0, 0]}
          >
            <MenuItems to="/">Home</MenuItems>
            <MenuItems to="/about">About</MenuItems>
            <MenuItems to="/process">Process </MenuItems>
            <MenuItems to="/contact">Contact </MenuItems>

            {
              userInfo ? (
                  <Menu>
                    <MenuButton
                      px={4}
                      py={2}
                      fontWeight={700}
                      transition="all 0.2s"
                      borderRadius="md"
                      borderWidth="0px"
                      _hover={{ bg: "#313131" }}
                      _expanded={{ bg: "#313131" }}
                      _focus={{ boxShadow: "outline" }}
                    >
                      {userInfo.name} <ChevronDownIcon />
                    </MenuButton>
                    <MenuList>
                      <Link to="/orderhistory"><MenuItem color="black" fontWeight={700} >My Orders</MenuItem></Link>
                      <MenuItem color="black" fontWeight={700} onClick={signoutHandler} >Sign Out</MenuItem>
                  
                    </MenuList>
                  </Menu>
              ) : (
                <MenuItems  to="/signin">Sign In </MenuItems>
              )
            }


            




            <MenuItems to="/cart">
              <IconButton size="lg" colorScheme="black" icon={<Cart/>}/>
              {cartItems.length > 0 &&
                (
                  <>
                    {cartItems.length}
                  </>
                )}
            </MenuItems>
            <MenuItems to="/shop" isLast >
              <Button
                size="sm"
                rounded="none"
                py={7}
                px={9}
                fontSize="18px"
                transition=".8s"
                color={["primary.500", "primary.500", "white", "white"]}
                bg={"#313131"}
                _hover={{ bg: "black" }}
              >
                Shop
              </Button>
            
        


            </MenuItems>
          </Flex>
        </Box>
      </Flex>
    )
  }


export default NavBar;