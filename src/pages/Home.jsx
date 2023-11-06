import Banner from "../components/header/Banner";
import Book from "./Book";
import Footer from "./Footer";

const Home = () => {
    return (
        <div>
            <div className="bg-[url('https://i.ibb.co/t2NVRzQ/cool-background.png')] bg-no-repeat bg-blend-overlay bg-cover w-full h-[1100px] md:h-[760px] lg:h-auto bg-fixed">
                <Banner></Banner>
               <Book />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;