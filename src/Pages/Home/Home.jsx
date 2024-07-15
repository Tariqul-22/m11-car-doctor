import AboutUs from "../../Components/About Us/AboutUs";
import Banner from "../../Components/Banner/Banner";
import ContactInfo from "../../Components/ContactInfo/ContactInfo";
import Services from "../../Components/Services/Services";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
            <ContactInfo></ContactInfo>
        </div>
    );
};

export default Home;