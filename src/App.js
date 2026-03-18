import React, {useState} from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App(){

 const [cart,setCart] = useState([]);
 const [page,setPage] = useState("products");

 const addToCart = (product)=>{
   setCart([...cart,product]);
 }

 const removeFromCart = (index)=>{
   const newCart = [...cart];
   newCart.splice(index,1);
   setCart(newCart);
 }

 return(
  <>
   <Header cartCount={cart.length} setPage={setPage}/>

   <div className="container mt-4">

   {page === "products" && 
    <Products addToCart={addToCart}/>
   }

   {page === "cart" &&
    <Cart cart={cart} removeFromCart={removeFromCart}/>
   }

   </div>

   <Footer/>
  </>
 )

}

export default App;