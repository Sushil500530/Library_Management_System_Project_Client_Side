import Marquee from "react-fast-marquee";

const ClientService = () => {
    return (
        <div className="my-12 container mx-auto dark:text-white">
            <h2 className="text-4xl my-8 text-center font-bold">Our <span className="text-violet-500">Clients</span></h2>
            <Marquee speed={100} pauseOnHover={true} className="w-[100%]">
                <div className="w-[450px] flex flex-col items-center cursor-pointer border px-5 py-8 justify-center space-y-3 mr-8 ">
                    <div className="w-[200px] h-[200px] rounded-full border-2 border-white">
                        <img className="w-full h-full rounded-full" src="https://i.ibb.co/SmtCpYS/images.jpg" alt="" />
                    </div>
                    <div className="rating rating-sm">
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <h3 className="text-xl font-semibold">Mohammodullah Alim</h3>
                    <p className=" text-center">The legal grounds for processing of the personal data for the Client Purposes are determined by the Client and for the Piano Purposes by Piano and are subject to change mainly due to a possibly different regulatory approach by different EU supervisory authorities.</p>
                </div>
                <div className="w-[450px] flex flex-col items-center cursor-pointer border px-5 py-8 justify-center space-y-3 mr-8 ">
                    <div className="w-[200px] h-[200px] rounded-full border-2 border-white">
                        <img className="w-full h-full rounded-full" src="https://i.ibb.co/0GYQyYM/images.jpg" alt="" />
                    </div>
                    <div className="rating rating-sm">
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <h3 className="text-xl font-semibold">Siddik Korim</h3>
                    <p className=" text-center">The legal grounds for processing of the personal data for the Client Purposes are determined by the Client and for the Piano Purposes by Piano and are subject to change mainly due to a possibly different regulatory approach by different EU supervisory authorities.</p>
                </div>
                <div className="w-[450px] flex flex-col items-center cursor-pointer border px-5 py-8 justify-center space-y-3 mr-8 ">
                    <div className="w-[200px] h-[200px] rounded-full border-2 border-white">
                        <img className="w-full h-full rounded-full" src="https://i.ibb.co/X5Btdpf/images.jpg" alt="" />
                    </div>
                    <div className="rating rating-sm">
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <h3 className="text-xl font-semibold">Foyshal Ahmmed</h3>
                    <p className=" text-center">The legal grounds for processing of the personal data for the Client Purposes are determined by the Client and for the Piano Purposes by Piano and are subject to change mainly due to a possibly different regulatory approach by different EU supervisory authorities.</p>
                </div>
                <div className="w-[450px] flex flex-col items-center cursor-pointer border px-5 py-8 justify-center space-y-3 mr-8 ">
                    <div className="w-[200px] h-[200px] rounded-full border-2 border-white">
                        <img className="w-full h-full rounded-full" src="https://i.ibb.co/jy2KV91/images.jpg" alt="" />
                    </div>
                    <div className="rating rating-sm">
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <h3 className="text-xl font-semibold">Sohidullah Taskim</h3>
                    <p className=" text-center">The legal grounds for processing of the personal data for the Client Purposes are determined by the Client and for the Piano Purposes by Piano and are subject to change mainly due to a possibly different regulatory approach by different EU supervisory authorities.</p>
                </div>
            </Marquee>
        </div>
    );
};

export default ClientService;