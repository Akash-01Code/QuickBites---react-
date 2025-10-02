import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import resList from "../utils/mockdata";




const Body = () => {
   //State Variable -- Super powerful variable

   const[listOfRestaurants,setListOfRestaurants] = useState([]);
   const[fliteredRestautant,setFilteredRestaurant] = useState([]);

   const [searchText,setSearchText] = useState("");

   useEffect(() => {
      fetchData()
   }, []);

   const fetchData = async () => {
      const data2 = await fetch("https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9966135&lng=77.5920581&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const json = await data2.json();

      console.log(json);
      const {data} = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
      setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      
      
   };
   if(listOfRestaurants.length === 0){
      return <Shimmer />
   }


    return(
     <div className="body">
        <div className="filter">
         <div className="search">
            <input type="text" className="search-box" value={searchText} onChange = {(e) => {
               setSearchText(e.target.value);
               
            }}/>
            <button
            onClick={() => {
               console.log(searchText);

               const filtered = listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );

               // setListOfRestaurants(filtered);
               setFilteredRestaurant(filtered);
            }}>Search</button>
         </div>


         <button className="filter-btn" onClick={() => {
           let upd = listOfRestaurants.filter((res) => res.info.avgRating > 4.6);
            console.log(listOfRestaurants);
            setFilteredRestaurant(upd);
         } 
         
         
         }>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
           {fliteredRestautant.map((item, index) => {
      const info = item?.info;
      return info ? <RestaurantCard key={item.info.id} resData={{ info }} /> : null;
    })}
           
         
        </div>
  
     </div>
    )
  };

  export default Body;