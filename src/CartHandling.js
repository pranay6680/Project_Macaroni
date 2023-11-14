import React ,{ useReducer} from "react";
import "./Style.css";

const itemreducer = (newCart, action) => {
  
  switch(action.type) {
    case "DELETE" :
      return {
        ...newCart,
        childItems : newCart.childItems.filter(item => item.id !== action.id)
        
      };
      
      default :
      return newCart;
  }
}

 function InsideCart ({childItems}){
 
  const [newCart , setNewCart] = useReducer(itemreducer , {childItems})
   
  const itemHandler = (p) => {
    setNewCart({type : "DELETE" , id : p})
  }


  return (
    <div className="InsideCartCont">
       <div className="childInside" >
          {newCart.childItems.map( (child , index) => (
            <li className="grandChild"  key = {index}>
            <div className = "parentgrandChild"  >Item : {child.name}</div>  
               <div className ='superGrandChild'> Price :{child.price}</div>
               <button className="buttonToRemove" onClick = {() => itemHandler(child.index)}>Remove</button>
            </li>
          ))}
       </div>
    </div>
  )
}
export default React.memo(InsideCart);
