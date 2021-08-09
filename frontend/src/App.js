import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import Landing from './Pages/landing';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import About from './Pages/about';
import Process from './Pages/process';
import Contact from './Pages/contact';
import { Switch, Route } from "react-router-dom";
import Shop from './Pages/shop';
import Wine from './Pages/wine';
import Cart from './Pages/cart';
import SignIn from './Pages/signin';
import { useSelector } from 'react-redux';
import Register from './Pages/register';
import Shipping from './Pages/shipping';
import Order from './Pages/order';
import OrderDetail from './Pages/orderDetails';
import OrderHistory from './Sub-Pages/OrderHistory';


function App() {

  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;

  return (
    
    <ChakraProvider>
      <NavBar/>
      <Switch>
        <Route path="/" exact>
          <Landing/>
        </Route>
        <Route path="/about" >
          <About/>
        </Route>
        <Route path="/process" >
          <Process/>
        </Route>
        <Route path="/contact" >
          <Contact/>
        </Route>
        <Route path="/shop" >
          <Shop/>
        </Route>
        <Route path="/signin" component={SignIn} />
        <Route path="/register" component={Register} />
        <Route path="/cart/:id?" component={Cart} />
        <Route path="/shipping" component={Shipping} />
        <Route path="/order" component={Order} />
        <Route path="/orderhistory" component={OrderHistory} />
        <Route path="/orderConfirmed/:id" component={OrderDetail} />
      </Switch>
      <Footer/>
    </ChakraProvider>
  
  );
}

export default App;
