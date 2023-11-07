import React from "react";
import { useState } from "react";
import "./FoodMenu.css";
import MenuImages from "./FoodMenu.js";
import ErrorBoundary from "./CartHandling";
import rio from "./App";









function MenuContent({closeOrderNow , kinItems, increaseupdater}){
   
    const [items,SetItems]=useState([
        {id :1 ,  name : "BruschettaClassica" , price :"20", description : 'Delicious', image: MenuImages.img1},
        {id :2 ,  name : "BruschettaClassica" , price :"20", description : 'Delicious', image :MenuImages.img2},
        {id :3 ,  name : "BruschettaClassica" , price :"20", description : 'Delicious', image :MenuImages.img1},
        {id :4 ,  name : "BruschettaClassica" , price :"20", description : 'Delicious', image :MenuImages.img3},
        {id :5 ,  name : "BruschettaClassica" , price :"20", description : 'Delicious', image :MenuImages.img4},     
        {id :6 ,  name : "BruschettaClassica" , price :"20", description : 'Delicious', image :MenuImages.img5},
        {id :7 ,  name : "BruschettaClassica" , price :"20", description : 'Delicious', image :MenuImages.img6},
        {id :8 ,  name : "BruschettaClassica" , price :"20", description : 'Delicious', image :MenuImages.img7},
        {id :9 ,  name : "BruschettaClassica" , price :"20", description : 'Delicious', image :MenuImages.img1},
        {id :10 , name : "BruschettaClassica" , price :"20", description : 'Delicious', image :MenuImages.img1},
        {id :11 , name : "BruschettaClassica" , price :"20", description : 'Delicious', image :MenuImages.img1},
        {id :12 , name : "BruschettaClassica" , price :"20", description : 'Delicious', image :MenuImages.img1},
        {id :13 , name : "BruschettaClassica" , price :"20", description : 'Delicious', image :MenuImages.img1},
        {id :14 , name : "BruschettaClassica" , price :"20", description : 'Delicious', image :MenuImages.img1},
        {id :15 , name : "BruschettaClassica" , price :"20", description : 'Delicious', image :MenuImages.img1},
        {id :16 , name : "BruschettaClassica" , price :"20", description : 'Delicious', image :MenuImages.img1},
        
       
    ]);
 
    const [pastaItems,SetPasta] = useState([
        {id: 17 , name : "Penne Arabiata" , price : "30", description : "Awesome" , image :MenuImages.img17 },
        {id: 18 , name : "Penne Arabiata" , price : "30", description : "Awesome" , image :MenuImages.img18 },
        {id: 19 , name : "Penne Arabiata" , price : "30", description : "Awesome" , image :MenuImages.img19 },
        {id: 20 , name : "Penne Arabiata" , price : "30", description : "Awesome" , image :MenuImages.img20 },
        {id: 21 , name : "Penne Arabiata" , price : "30", description : "Awesome" , image :MenuImages.img21 },
        {id: 22 , name : "Penne Arabiata" , price : "30", description : "Awesome" , image :MenuImages.img22 },
        {id: 23 , name : "Penne Arabiata" , price : "30", description : "Awesome" , image :MenuImages.img23 },
        {id: 24 , name : "Penne Arabiata" , price : "30", description : "Awesome" , image :MenuImages.img24 },
        {id: 25 , name : "Penne Arabiata" , price : "30", description : "Awesome" , image :MenuImages.img25 },
    ]);
    const [freshFilledPasta,SetFresh] = useState([
        {id:26  , name : "Sphagetti" , price : "25", description : "Delightfull" , image :MenuImages.img26 },
        {id:27  , name : "Sphagetti" , price : "25", description : "Delightfull" , image :MenuImages.img27 },
        {id:28  , name : "Sphagetti" , price : "25", description : "Delightfull" , image :MenuImages.img28 },
        {id:29  , name : "Sphagetti" , price : "25", description : "Delightfull" , image :MenuImages.img29 },

    ]);
    const [risottiItem,SetRisotti] = useState([
        {id:30  , name : "Pizza" , price : "15", description : "Delightfull" , image :MenuImages.img30 },
        {id:31  , name : "Pizza" , price : "15", description : "Delightfull" , image :MenuImages.img31 },
        {id:32  , name : "Pizza" , price : "15", description : "Delightfull" , image :MenuImages.img32 },
    ]);
    
    
    return (
        <div className="ParentCont">
            <>
            {/* ///////////////////////// */}
             <div className="FoodStarter">
                <h1><i>STARTERS</i></h1>
                
                <div className="buttonDIv">
                <button className="orderContButton"style={{ height: 40, width: 40 }} onClick={closeOrderNow}>X</button>
                </div>
             </div>
             <span className="devider1"></span>
            <div className="ItemsCont">
                <ul>
                    {items.map((food)=>(
                        <li key={food.id} className="childCont">
                              <img className="foodImages" src={food.image} alt={food.name}/>
                              <h1 className="foodHeading">{food.name}</h1>
                              <p className="foodDiscription">{food.description}</p>
                              <div className="Price_Button">
                              <h2 className="foodPrice">{food.price}</h2>
                              <div className="changer1">
                                   <button type="button" className="chang1"  onClick={() =>kinItems({id:food.id,name:food.name , price:food.price , updater : increaseupdater})}>Add Item</button>
                                  
                              </div>
                             
                              </div>
                        </li>
                    ))}
                </ul>     
            </div>
            {/* //////////////////////////////////////// */}
            <div className="PastaContHead">
                <h1><i>Fresh pasta</i></h1> 
                
            </div>
            <span className="devider2"></span>
            <div className="PastaItemsCont">
                    <ul>
                    {pastaItems.map((pasta)=>(
                        <li key={pasta.id} className="childCont">
                              <img className="foodImages" src={pasta.image} alt={pasta.name}/>
                              <h1 className="foodHeading">{pasta.name}</h1>
                              <p className="foodDiscription">{pasta.description}</p>
                              <h2 className="foodPrice">{pasta.price}</h2>
                        </li>
                    ))}
                    </ul>
            </div>
        {/* /////////////////////////////////// */}
            <div className="freshPastaContHead">
                <h1><i>Bronze ranze</i></h1>  
            </div>
            <span className="devider3"></span>
            <div className="freshPastaItemsCont">
                    <ul>
                    {freshFilledPasta.map((freshpasta)=>(
                        <li key={freshpasta.id} className="childCont">
                              <img className="foodImages" src={freshpasta.image} alt={freshpasta.name}/>
                              <h1 className="foodHeading">{freshpasta.name}</h1>
                              <p className="foodDiscription">{freshpasta.description}</p>
                              <h2 className="foodPrice">{freshpasta.price}</h2>
                        </li>
                    ))}
                    </ul>
            </div>
            {/* /////////////////////////// */}
            <div className="risottiItem1">
                <h1><i>Fresh Salad</i></h1>  
            </div>
            <span className="devider4"></span>
            <div className="risottiItem2">
                    <ul>
                    {risottiItem.map((riso)=>(
                        <li key={riso.id} className="childCont">
                              <img className="foodImages" src={riso.image} alt={riso.name}/>
                              <h1 className="foodHeading">{riso.name}</h1>
                              <p className="foodDiscription">{riso.description}</p>
                              <h2 className="foodPrice">{riso.price}</h2>
                        </li>
                    ))}
                    </ul>
            </div>
            </>
      
        </div>
    )

}
export default MenuContent;
