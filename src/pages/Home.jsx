import Banner from "../components/header/Banner";
import Book from "./Book";
import ClientService from "./ClientService";
import Footer from "./Footer";
import Collection from "./otherCategory/Collection";
import DifferCate from "./otherCategory/DifferCate";

const Home = () => {
    return (
        <div>
            <div className="bg-[url('https://i.ibb.co/t2NVRzQ/cool-background.png')] bg-no-repeat bg-blend-overlay bg-cover w-full h-auto bg-fixed">
                <Banner></Banner>
                <Book />
                <Collection></Collection>
                <DifferCate></DifferCate>
            </div>
            <ClientService></ClientService>
            <Footer></Footer>
        </div>
    );
};

export default Home;