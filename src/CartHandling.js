import React ,{ useReducer } from "react";

// creating rducer funtion 
const itemReducer = (state , action) => {
  switch(action.type){
    case "DELETE" : 
          return state.filter( (item)=> item.id !== action.id );
    default :
          return state;
        }
}

 function InsideCart ({childItems}){
      console.log(childItems)
  const [pran , setPran] = useReducer(itemReducer , childItems)

  const itemHandler = (p) => {
    setPran({type : "DELETE" , id : p})
  }
 
  console.log(pran)
  return (
    <div className="InsideCartCont">
       <div className="childInside" >
          {childItems.map( (child) => (
            <li className="grandChild" key = {child.id}>  
            <div className = "parentgrandChild"  >Item : {child.name}</div>  
               <div className ='superGrandChild'> Price :{child.price}</div>
               <button className="buttonToRemove" onClick={ () => itemHandler(child.id)}>Remove</button>
            </li>
          ))}
       </div>
    </div>
  )
}
export default InsideCart;
