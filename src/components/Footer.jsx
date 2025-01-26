import Heading from "./Heading";

const Footer = () => {
    return (
        <div className="bg-white">
            <div className="flex justify-center mt-12 pb-4">
                <Heading
                    title={'Gadget Heaven'}
                    subtitle={'Leading the way in cutting-edge technology and innovation.'}
                    tc={'text-black'} stc={'text-neutral-400'}>
                </Heading>
            </div>
            <div className="border-t border-neutral-200 max-w-6xl mx-auto"></div>
            <footer className="max-w-[800px] mx-auto grid grid-cols-3 text-base-content p-10">
                <nav className="text-center flex flex-col">
                    <h6 className="text-xl font-bold pb-2">Services</h6>
                    <a className=" font-semibold text-neutral-400 text-center">Product Support</a>
                    <a className="font-semibold text-neutral-400">Order Tracking</a>
                    <a className="font-semibold text-neutral-400">Shipping and Delivery</a>
                    <a className="font-semibold text-neutral-400">Return</a>
                </nav>
                <nav className="text-center flex flex-col">
                    <h6 className="text-xl font-bold pb-2">Company</h6>
                    <a className="font-semibold text-neutral-400">About us</a>
                    <a className="font-semibold text-neutral-400">Carreers</a>
                    <a className="font-semibold text-neutral-400">Contact</a>
                </nav>
                <nav className="text-center flex flex-col">
                    <h6 className="text-xl font-bold pb-2">Legal</h6>
                    <a className="font-semibold text-neutral-400">Terms and Services</a>
                    <a className="font-semibold text-neutral-400">Privacy Policy</a>
                    <a className="font-semibold text-neutral-400">Cookie Policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;