import Navbar from "./Navbar"
import Button from "./Button"
import bannerImg from "/banner.jpg"

const Banner = () => {
    return (
        <div>
            <div className="p-1 rounded-xl my-4 max-w-[1540px] mx-auto rounded-xl border border-[#9538E2]">
                <div className="bg-[#9538E2] rounded-xl pb-48">
                    <Navbar />
                    <div className="text-white text-center w-2/3 mx-auto pt-12">
                        <h1 className="text-6xl py-4 font-semibold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        <p className="w-2/3 mx-auto py-4">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                        <Button name={'Shop Now'}></Button>
                    </div>
                </div>
            </div>
            <div className="hero mx-auto max-w-[1000px] rounded-xl p-4 bg-white/40 border-2 border-white -mt-48">
                <img className="w-full max-h-[460px] rounded-xl" src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;