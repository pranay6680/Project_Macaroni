import React, { useState, useEffect, useRef } from "react";
import "./Style.css";
import MacImg from "./logo.png";
import RestoLogo from "./Resto.jpg";
import About from "./About.js";
import Contact from "./Contact";
import MenuContent from "./ContentVisible.js";
import Cart from "./starterImages/cart.png";
import InsideCart  from "./CartHandling";





function App() {
  
  const [Navstate, NavsetState] = useState(window.innerWidth <= 760);
  const SetNavState = () => {
    NavsetState(window.innerWidth <= 760);
  };
  useEffect(() => {
    window.addEventListener("resize", SetNavState);
    return () => window.removeEventListener("resize", SetNavState);
  });
  const imgAndBtn = (
    <div className="imgbtnCont">
      <img className="imgbtn" src={MacImg} alt="This is logo"></img>
      <button type="button" className="btn">
        OPEN
      </button>
    </div>
  );
  const aboutRef = useRef(null);
  const [aboutContVisibile, aboutContHidden] = useState(false);
  const toggAbout = () => {
    aboutContHidden(!aboutContVisibile);
    if(contactContVisibile){
      contactContHidden(false);
    }else if(OrderNowVisible){
      OrderNowHidden(false)
    }else if(itemCartVisibile){
      itemCartHidden(false)
    }
  };
  const toggClose = () => {
    aboutContHidden(false);
  };
// this is for contact popup
const contactRef = useRef(null)

const [contactContVisibile, contactContHidden] = useState(false)
const toggContact = ()=>{
  contactContHidden(!contactContVisibile)
  if(aboutContVisibile){
    aboutContHidden(false);
  }else if(OrderNowVisible){
    OrderNowHidden(false)
  }else if(itemCartVisibile){
    itemCartHidden(false)
  }
}
const toggContactClose = () => {
  contactContHidden(false)
}
// till this 
// this id for order now menu 
const OrderRef = useRef(null) 
const [OrderNowVisible, OrderNowHidden] = useState(false)
const toggOrderNow =() => {
  OrderNowHidden(!OrderNowVisible)
  if(aboutContVisibile){
    aboutContHidden(false)
  }else if(contactContVisibile){
    contactContHidden(false);
  }else if(itemCartVisibile){
    itemCartHidden(false)
  }
}
const toggOrderClose = () => {
  OrderNowHidden(false)
}
////////////////////////
// const CartRef = useRef(null)
const [PranitemCart , setItemCart] = useState([]);
  
const [itemCartVisibile, itemCartHidden] = useState(false)
const PranaddItemsToCart = (foodItemsInCart) => {
  setItemCart([...PranitemCart , foodItemsInCart])
}

const CartOpen = ()=> {
  itemCartHidden(!itemCartVisibile)
  if(aboutContVisibile){
    aboutContHidden(false);
  }else if(OrderNowVisible){
    OrderNowHidden(false)
  }else if(contactContVisibile){
    contactContHidden(false)
}
}

const [updater , setUpdater] = useState(0);

const increaseupdater = () =>{
  setUpdater(updater + 1);
}
const decreaseupdater = () =>{
  setUpdater(updater = updater - 1);
}



/////////////////////
  const listCont = (
    <>
      <div className="headings">
        <ul>
          <li>
            <h1 className="ho">HOME</h1>
          </li>
          <li>
            <h1 className="or" onClick={toggOrderNow}>ORDER NOW</h1>
              
          </li>
          <li>
            <h1 className="ab" onClick={toggAbout}>
              ABOUT
            </h1>
          </li>
          <li>
            <h1 className="ga">GALLERY</h1>
          </li>
          <li>
            <h1 className="co"  onClick={toggContact}>CONTACT US</h1>
          </li >
          <li><div className="counterCart">{updater}</div>
          <img className="CartPic" src={Cart} alt="restoPic" onClick={CartOpen}></img></li>
        </ul>
        <div
          className="overPop"
          ref={aboutRef}
          style={{ display: aboutContVisibile ? "block" : "none" }}
        >
          <About close={toggClose} />
        </div>
        <div
          className="overPopContact"
          ref={contactRef}
          style={{ display: contactContVisibile ? "block" : "none" }}
        >
          <Contact closeContact={toggContactClose} />
        </div>
        {/* upto here */}
        {/* this is for order menu  */}
        <div 
        className="overPopOrder"
        ref={OrderRef}
        style={{display : OrderNowVisible ? "block":"none"}}>
          <MenuContent closeOrderNow = {toggOrderClose} kinItems = {PranaddItemsToCart} increaseupdater = {increaseupdater} />
          
          {/* <InsideCart InsideCart ={InsideCart}/> */}
        </div>
        <div 
        className="overPopCart"
        //  ref = {CartRef}
        style={{display : itemCartVisibile ? "block":"none"}}>
        
        {itemCartVisibile && <InsideCart childItems = {PranitemCart}/>}
            
          {/* <InsideCart InsideCart ={InsideCart}/> */}
        </div>
        
        {/* upto here  */}
      </div>
    
    </>
   
    
  );
  const Restopic = (
    <img className="restopic" src={RestoLogo} alt="resto pic"></img>
  );
  return (
    <div className="Navbar">
      <div>
        {Navstate ? (
          imgAndBtn
        ) : (
          <>
            {listCont}
            {Restopic}
          </>
        )}
      </div>
    </div>
  );
}


export default App;

