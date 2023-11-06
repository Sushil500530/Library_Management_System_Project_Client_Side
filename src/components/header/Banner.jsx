
const Banner = () => {
    return (
        <div className="container mx-auto">
            <div className="carousel w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src='https://i.ibb.co/74gbJFw/77cc55a50508eb8c68f680f200640a83.jpg' className="w-full rounded-lg" />
                    <div className="absolute w-full h-full bottom-0 rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] flex items-center justify-start pl-32">
                        <div className='text-white space-y-7 w-1/2'>
                            <h2 className='text-6xl font-bold'>Library Management System</h2>
                            <p>There are many variations of Books of  available, but the majority have suffered in library</p>
                            <div className='text-white '>
                                <button className='btn bg-purple-500 border-purple-500 text-white hover:border-purple-500 hover:bg-transparent transition ease-in text-[18px] hover:text-purple-700 font-semibold capitalize mr-5'>Discover More</button>
                                <button className='btn border-purple-500 text-white bg-transparent hover:border-purple-500 hover:text-black hover:bg-purple-500 transition ease-in text-[18px] font-semibold capitalize'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src='https://i.ibb.co/m0W6m20/9f4b9b13548e042db4f0361978f088dc.jpg' className="w-full rounded-lg" />
                    <div className="absolute h-full bottom-0 rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] flex items-center justify-start pl-32">
                        <div className='text-white space-y-7 w-1/2'>
                            <h2 className='text-6xl font-bold'>Books Management System</h2>
                            <p>There are many variations of Books of  available, but the majority have suffered in library</p>
                            <div className='text-white '>
                                <button className='btn bg-purple-500 border-purple-500 text-white hover:border-purple-500 hover:bg-transparent transition ease-in text-[18px] hover:text-purple-700 font-semibold capitalize mr-5'>Discover More</button>
                                <button className='btn border-purple-500 text-white bg-transparent hover:border-purple-500 hover:text-black hover:bg-purple-500 transition ease-in text-[18px] font-semibold capitalize'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src='https://i.ibb.co/YL9BpbV/e6e4a36bd39c8042dcdc9db6cf9559cc.jpg' className="w-full rounded-lg" />
                    <div className="absolute h-full bottom-0 rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] flex items-center justify-start pl-32">
                        <div className='text-white space-y-7 w-1/2'>
                            <h2 className='text-6xl font-bold'>Library Management System</h2>
                            <p>There are many variations of Books of  available, but the majority have suffered in library</p>
                            <div className='text-white '>
                                <button className='btn bg-purple-500 border-purple-500 text-white hover:border-purple-500 hover:bg-transparent transition ease-in text-[18px] hover:text-purple-700 font-semibold capitalize mr-5'>Discover More</button>
                                <button className='btn border-purple-500 text-white bg-transparent hover:border-purple-500 hover:text-black hover:bg-purple-500 transition ease-in text-[18px] font-semibold capitalize'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src='https://i.ibb.co/r7VpSKR/1dbdd0d5d5c047e81bacd25378c579d3.jpg' className="w-full rounded-lg" />
                    <div className="absolute h-full bottom-0 rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] flex items-center justify-start pl-32">
                        <div className='text-white space-y-7 w-1/2'>
                            <h2 className='text-6xl font-bold'>Book Category Management System</h2>
                            <p>There are many variations of Books of  available, but the majority have suffered in library</p>
                            <div className='text-white '>
                                <button className='btn bg-purple-500 border-purple-500 text-white hover:border-purple-500 hover:bg-transparent transition ease-in text-[18px] hover:text-purple-700 font-semibold capitalize mr-5'>Discover More</button>
                                <button className='btn border-purple-500 text-white bg-transparent hover:border-purple-500 hover:text-black hover:bg-purple-500 transition ease-in text-[18px] font-semibold capitalize'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;