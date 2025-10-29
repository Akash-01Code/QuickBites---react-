import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

import { useParams } from "react-router-dom";




const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const {restaurantId} = useParams();

    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const response = await fetch(`https://corsproxy.io/https://namastedev.com/api/v1/listRestaurantMenu/${restaurantId}`)

       
        const json = await response.json();
        setResInfo(json.data);
    };
    //   console.log(resInfo);
      
      if (resInfo === null )return(
        <Shimmer />
    );
     

      const { name, cuisines, costForTwoMessage } =
      resInfo?.cards?.[2]?.card?.card?.info || {};

      const {itemCards} = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card || {};
        console.log(itemCards);
        
console.log(resInfo);
    
return (
    <div className="menu">
        <h1>{name}</h1>
        <p>{Array.isArray(cuisines) ? cuisines.join(", ") : ""} - {costForTwoMessage || ""}</p>
       
        <h2>Menu</h2>
      <div className="list">
            {itemCards?.map((item) => <div key={item.card.info.id}>
                <div  >
                    <li >id:{item.card.info.id}</li>
                <li>{item.card.info.name}</li>
                <li>{item.card.info.defaultPrice/100 || item.card.info.price/100} Rupees</li>
                <li>{}</li>
                <br></br>
                </div>
               
            </div>
        )}
         </div>
            
    </div>
);
};

export default RestaurantMenu;