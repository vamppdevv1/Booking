import { Header } from "../../Components/header/Header";
import { Featured } from "../../Components/featured/Featured";
import { PropertyList } from "../../Components/propertyList/PropertyList";
import { FeaturedProperties } from "../../Components/featuredProperties/FeaturedProperies";
import { MailList } from "../../Components/mailList/MailList";
import { Footer } from "../../Components/footer/Footer";
import "./home.css";
export const Home = () => {
  return (
    <div>

      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer/>
      </div>
    </div>
  );
};
