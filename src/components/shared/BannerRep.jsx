/* eslint-disable react/prop-types */

const BannerRep = ({bannerImage, bannerImage2,bannerImage3,bannerImage4,bannerImage5}) => {
    return (
        <>
            <div id="slide1" className="carousel-item relative w-full">
                <img src={bannerImage} className="w-full rounded-lg" />
                <div className="h-full w-auto absolute bottom-0 rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] flex items-center justify-start pl-32">
                    <div className='text-white space-y-7 lg:w-1/2'>
                        <h2 className='text-6xl font-bold'>Library Management System</h2>
                        <p>There are many variations of Books of  available, but the majority have suffered in library</p>
                        <div className='text-white '>
                            <button className='btn bg-purple-500 border-purple-500 text-white hover:border-purple-500 hover:bg-transparent transition ease-in text-[18px] hover:text-purple-700 font-semibold capitalize mr-5'>Read More</button>
                            <button className='btn border-purple-500 text-white bg-transparent hover:border-purple-500 hover:text-black hover:bg-purple-500 transition ease-in text-[18px] font-semibold capitalize'>Join Our Community</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                    <img src={bannerImage2} className="w-full rounded-lg" />
                    <div className="absolute h-full bottom-0 rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] flex items-center justify-start pl-32">
                        <div className='text-white space-y-7 w-1/2'>
                            <h2 className='text-6xl font-bold'>Books Management System</h2>
                            <p>There are many variations of Books of  available, but the majority have suffered in library</p>
                            <div className='text-white '>
                            <button className='btn bg-purple-500 border-purple-500 text-white hover:border-purple-500 hover:bg-transparent transition ease-in text-[18px] hover:text-purple-700 font-semibold capitalize mr-5'>Read More</button>
                                <button className='btn border-purple-500 text-white bg-transparent hover:border-purple-500 hover:text-black hover:bg-purple-500 transition ease-in text-[18px] font-semibold capitalize'>Join Our Community</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={bannerImage3} className="w-full rounded-lg" />
                    <div className="absolute h-full bottom-0 rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] flex items-center justify-start pl-32">
                        <div className='text-white space-y-7 w-1/2'>
                            <h2 className='text-6xl font-bold'>Library Management System</h2>
                            <p>There are many variations of Books of  available, but the majority have suffered in library</p>
                            <div className='text-white '>
                            <button className='btn bg-purple-500 border-purple-500 text-white hover:border-purple-500 hover:bg-transparent transition ease-in text-[18px] hover:text-purple-700 font-semibold capitalize mr-5'>Read More</button>
                                <button className='btn border-purple-500 text-white bg-transparent hover:border-purple-500 hover:text-black hover:bg-purple-500 transition ease-in text-[18px] font-semibold capitalize'>Join Our Community</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={bannerImage4} className="w-full rounded-lg" />
                    <div className="absolute h-full bottom-0 rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] flex items-center justify-start pl-32">
                        <div className='text-white space-y-7 w-1/2'>
                            <h2 className='text-6xl font-bold'>Book Category Management System</h2>
                            <p>There are many variations of Books of  available, but the majority have suffered in library</p>
                            <div className='text-white '>
                            <button className='btn bg-purple-500 border-purple-500 text-white hover:border-purple-500 hover:bg-transparent transition ease-in text-[18px] hover:text-purple-700 font-semibold capitalize mr-5'>Read More</button>
                                <button className='btn border-purple-500 text-white bg-transparent hover:border-purple-500 hover:text-black hover:bg-purple-500 transition ease-in text-[18px] font-semibold capitalize'>Join Our Community</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={bannerImage5} className="w-full rounded-lg" />
                    <div className="absolute h-full bottom-0 rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] flex items-center justify-start pl-32">
                        <div className='text-white space-y-7 w-1/2'>
                            <h2 className='text-6xl font-bold'>Book Category Management System</h2>
                            <p>There are many variations of Books of  available, but the majority have suffered in library</p>
                            <div className='text-white '>
                            <button className='btn bg-purple-500 border-purple-500 text-white hover:border-purple-500 hover:bg-transparent transition ease-in text-[18px] hover:text-purple-700 font-semibold capitalize mr-5'>Read More</button>
                                <button className='btn border-purple-500 text-white bg-transparent hover:border-purple-500 hover:text-black hover:bg-purple-500 transition ease-in text-[18px] font-semibold capitalize'>Join Our Community</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
        </>
    );
};

export default BannerRep;