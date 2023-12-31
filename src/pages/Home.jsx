import Banner from "../components/header/Banner";
import Book from "./Book";
import ClientService from "./ClientService";
import Footer from "./Footer";
import Collection from "./otherCategory/Collection";
import DifferCate from "./otherCategory/DifferCate";
import DifferCate2 from "./otherCategory/DifferCate2";

const Home = () => {
   
    return (
        <div>
            <div className="bg-[url('https://i.ibb.co/jffJC3v/cool-background.png')] dark:bg-transparent bg-fixed bg-no-repeat bg-blend-overlay bg-cover">
                <Banner></Banner>
                <Book />
                <Collection></Collection>
                <DifferCate></DifferCate>
                <DifferCate2></DifferCate2>
            </div>
            <ClientService></ClientService>
            <Footer></Footer>
        </div>
    );
};

export default Home;