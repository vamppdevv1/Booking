import { Navbar } from "../../Components/navbar/Navbar";
import { Header } from "../../Components/header/Header";
import { Featured } from "../../Components/featured/Featured";
import { PropertyList } from "../../Components/propertyList/PropertyList";
import { FeaturedProperies } from "../../Components/featuredProperties/FeaturedProperies";
import "./home.css";
export const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Guests love</h1>
<FeaturedProperies/>
      </div>
    </div>
  );
};
