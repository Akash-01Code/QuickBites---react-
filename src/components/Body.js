import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockdata";




const Body = () => {
   //State Variable -- Super powerful variable

   const[listOfRestaurants,setListOfRestaurants] = useState(resList);




//    let listOfRestaurants = [
//       {
         
//             info: {
//               id: "1",
//               name: "KFC",
//               cuisines: ["Burgers", "Fast Food"],
//               cloudinaryImageId:
//                 "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/5bfe1062-dbda-4cea-962f-ecd60a1d1764_17301.JPG",
//               avgRating: 4.1,
//             },
          

//    },
//    {
         
//       info: {
//         id: "2",
//         name: "CFK",
//         cuisines: ["Burgers", "Fast Food"],
//         cloudinaryImageId:
//           "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/5bfe1062-dbda-4cea-962f-ecd60a1d1764_17301.JPG",
//         avgRating: 1.1,
//       },
    

// }];
    return(
     <div className="body">
        <div className="filter">
         <button className="filter-btn" onClick={() => {
           let upd = listOfRestaurants.filter((res) => res.info.avgRating > 4.2);
            console.log(listOfRestaurants);
            setListOfRestaurants(upd);
         } 
         
         
         }>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
           {listOfRestaurants.map((item, index) => {
      const info = item?.info;
      return info ? <RestaurantCard key={item.info.id} resData={{ info }} /> : null;
    })}
           
         
        </div>
  
     </div>
    )
  };

  export default Body;