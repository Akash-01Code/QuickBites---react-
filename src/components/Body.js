import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import resList from "../utils/mockdata";




const Body = () => {
  

   const[listOfRestaurants,setListOfRestaurants] = useState([]);
   const[fliteredRestautant,setFilteredRestaurant] = useState([]);

   const [searchText,setSearchText] = useState("");

   useEffect(() => {
      fetchData()
   }, []);

   const fetchData = async () => {
      const data2 = await fetch("https://corsproxy.io/https://namastedev.com/api/v1/listRestaurants")
      const json = await data2.json();

      console.log(json);
      const data = json.data.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setListOfRestaurants(json?.data.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilteredRestaurant(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      //data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      
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
      return info ? <Link key={item.info.id} to={"/restaurants/"+item.info.id}><RestaurantCard  resData={{ info }} /> </Link>: null;
    })}
           
         
        </div>
  
     </div>
    )
  };

  export default Body;