import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {

    const {resData} = props;
       const{name,cuisines,avgRating,cloudinaryImageId} = resData?.info
       const placeholderImageUrl = "https://picsum.photos/200/150";
       return(
          <div className="res-card" >
             <img className="res-logo" alt="res-logo" src={CDN_URL+cloudinaryImageId }/>
             <h3>{name}</h3>
             <h4>{cuisines.join(" , ")}</h4>
             <h4>{avgRating}</h4>
             <h4>38 minutes</h4>
    
          </div>
       )
    };

    

    export default RestaurantCard;