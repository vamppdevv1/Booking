import "./featuredProperties.css";
import { Button } from "../button/Button";
import useFetch from "../../hooks/useFetch";
 
export const FeaturedProperties = () => {
  const { data, loading } = useFetch(
    "http://localhost:8800/api/hotels?featured=true&limit=4",
  );
  const images = [
    "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1",
  ];
console.log(data)
  return (
    <div className="fp">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          {data.map((item) => {
         return   <div className="fpItem" key={item._id}>
              <img
                src={item.photos.length !==0 ? item.photos[0] : images[0]}
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">
                Starting from ${item.cheapestPrice}
              </span>
              {item.rating && (
                <div className="fpRating">
                  <Button text={item.rating} />
                  <span>Excellent</span>
                </div>
              )}
            </div>;
          })}
        </>
      )}
    </div>
  );
};
