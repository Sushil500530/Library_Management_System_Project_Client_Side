/* eslint-disable react/prop-types */

import BannerRep from "../shared/BannerRep";

const Banner = () => {
    const image = 'https://i.ibb.co/bdFdw9k/1dbdd0d5d5c047e81bacd25378c579d3.jpg';
    const image2 = 'https://i.ibb.co/Cs9rzm4/9f4b9b13548e042db4f0361978f088dc.jpg';
    const image3 = 'https://i.ibb.co/zGZ74pz/77cc55a50508eb8c68f680f200640a83.jpg';
    const image4 = 'https://i.ibb.co/b5WL12K/5607dff0411c9bd188b8f42f3ca21bc7.jpg';
    const image5 = 'https://i.ibb.co/V2H23B5/e6e4a36bd39c8042dcdc9db6cf9559cc.jpg';
    return (
        <div className="container mx-auto pt-12">
            <div className="carousel h-[650px]">
              <BannerRep 
              bannerImage={image} 
              bannerImage2={image2} 
              bannerImage3={image3}
              bannerImage4={image4}
              bannerImage5={image5}
              />
            </div>
        </div>
    );
};

export default Banner;