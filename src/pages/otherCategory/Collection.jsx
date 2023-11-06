import logo from '../../assets/logo/wired-flat-45-clock-time.gif'
import logo2 from '../../assets/logo/wired-flat-1505-radio-walkie-talkie.gif'
import logo3 from '../../assets/logo/wired-flat-18-location-pin.gif'
const Collection = () => {
    return (
        <div className='container mx-auto lg:mt-12 lg:mb-16 my-5'>
            <h1 className="text-2xl lg:text-4xl font-bold text-center mb-8">Our Services and Location State</h1>
            <div className='bg-transparen w-full h-[150px] flex items-center justify-between px-12 border border-purple-500'>
                <div className='flex item-center justify-center text-white'>
                    <div className='w-16 h-16'>
                        <img src={logo} alt='logo' className='w-full h-full' />
                    </div>
                    <div>
                        <p>We are open sunday-thirstday</p>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">8:00 am - 6:00 pm</h3>
                    </div>
                </div>
                <div className='flex text-white'>
                    <div className='w-16 h-16'>
                        <img src={logo2} alt='logo' className='w-full h-full' />
                    </div>
                    <div>
                        <p>Have a question?</p>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">+8673 5286 4752</h3>
                    </div>
                </div>
                <div className='flex text-white'>
                    <div className='w-16 h-16'>
                        <img src={logo3} alt='logo' className='w-full h-full' />
                    </div>
                    <div>
                        <p>Need a repair? our address</p>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">Pluza Street, Mirpur</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collection;