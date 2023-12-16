import Marquee from "react-fast-marquee";

const ClientService = () => {
    return (
        <div className="my-12 container mx-auto dark:text-white">
            <h2 className="text-4xl my-8 text-center font-bold">Our <span className="text-violet-500">Clients</span></h2>
            <Marquee speed={100} pauseOnHover={true} className="w-[100%]">
                <div className="grid grid-cols-7 gap-3 ">
                    <div className=" flex flex-col items-center justify-center w-full h-full cursor-pointer border px-5 py-8 space-y-3 mr-8 ">
                        <div className="w-[200px] h-[200px] rounded-full border-2 border-white">
                            <img className="w-full h-full rounded-full" src="https://i.ibb.co/Y7RbMwr/22654-6-man-thumb.png" alt="" />
                        </div>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <h3 className="text-xl font-semibold">Mohammodullah Alim</h3>
                    </div>
                    <div className=" flex flex-col items-center justify-center w-full h-full cursor-pointer border px-5 py-8 space-y-3 mr-8 ">
                        <div className="w-[200px] h-[200px] rounded-full border-2 border-white">
                            <img className="w-full h-full rounded-full" src="https://i.ibb.co/vZkCMrN/images-1.jpg" alt="" />
                        </div>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <h3 className="text-xl font-semibold">Siddik Korim</h3>
                    </div>
                    <div className=" flex flex-col items-center justify-center w-full h-full cursor-pointer border px-5 py-8 space-y-3 mr-8 ">
                        <div className="w-[200px] h-[200px] rounded-full border-2 border-white">
                            <img className="w-full h-full rounded-full" src="https://i.ibb.co/Wp5kP4c/images-2.jpg" alt="" />
                        </div>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <h3 className="text-xl font-semibold">Taslima Akter</h3>
                    </div>
                    <div className=" flex flex-col items-center justify-center w-full h-full cursor-pointer border px-5 py-8 space-y-3 mr-8 ">
                        <div className="w-[200px] h-[200px] rounded-full border-2 border-white">
                            <img className="w-full h-full rounded-full" src="https://i.ibb.co/VtrWMsj/istockphoto-1309328823-170667a.jpg" alt="" />
                        </div>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <h3 className="text-xl font-semibold">Jhon Devid</h3>
                    </div>
                    <div className=" flex flex-col items-center justify-center w-full h-full cursor-pointer border px-5 py-8 space-y-3 mr-8 ">
                        <div className="w-[200px] h-[200px] rounded-full border-2 border-white">
                            <img className="w-full h-full rounded-full" src="https://i.ibb.co/JtbcgT9/istockphoto-1386479313-170667a.webp" alt="" />
                        </div>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <h3 className="text-xl font-semibold">Wannar Velly</h3>
                    </div>
                    <div className=" flex flex-col items-center justify-center w-full h-full cursor-pointer border px-5 py-8 space-y-3 mr-8 ">
                        <div className="w-[200px] h-[200px] rounded-full border-2 border-white">
                            <img className="w-full h-full rounded-full" src="https://i.ibb.co/PG4nb4s/images-3.jpg" alt="" />
                        </div>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <h3 className="text-xl font-semibold">Dalia Beith</h3>
                    </div>
                    <div className=" flex flex-col items-center justify-center w-full h-full cursor-pointer border px-5 py-8 space-y-3 mr-8 ">
                        <div className="w-[200px] h-[200px] rounded-full border-2 border-white">
                            <img className="w-full h-full rounded-full" src="https://i.ibb.co/Wp5kP4c/images-2.jpg" alt="" />
                        </div>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <h3 className="text-xl font-semibold">Sali Ahmmed</h3>
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default ClientService;