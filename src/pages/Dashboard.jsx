import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import CartContainer from "../components/CartContainer";
import WishlistContainer from "../components/WishlistContainer";
import { getCartItem, getWishlistItem, removeItemFromCart, removeItemFromWishlist } from "../utils/loacalStorage";

const Dashboard = () => {
    const [isActive, setIsActive] = useState('cartItm');
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const cartItem = getCartItem();
        setCart(cartItem);
        const wishlistItem = getWishlistItem();
        setWishlist(wishlistItem);
    }, [])

    const cartItemRemoveBtnHandler = (id) => {
        removeItemFromCart(id);
        const cartItem = getCartItem();
        setCart(cartItem);
    }
    const wishlistItemRemoveBtnHandler = (id) => {
        removeItemFromWishlist(id);
        const wishlistItem = getWishlistItem();
        setWishlist(wishlistItem);
    }

    const dashboardOptionBtn = (status) => {
        setIsActive(status);
    }
    return (
        <div>
            <div className="min-h-[250px] bg-[#9538E2] pt-8 ">
                <div className="md:w-1/3 mx-auto">
                    <Heading
                        title={'Dashboard'}
                        subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
                        tc={'text-white'} stc={'text-white'} />
                </div>
                <div className="flex justify-center gap-2 text-white font-bold mt-6">
                    <button onClick={() => dashboardOptionBtn('cartItm')} className={`${isActive === 'cartItm' ? 'bg-white text-purple-400' : ''} px-12 py-2 rounded-3xl border border-white cursor-pointer hover:scale-105`}>Cart</button>
                    <button onClick={() => dashboardOptionBtn('wishlist')} className={`${isActive === 'wishlist' ? 'bg-white text-purple-400' : ''} px-12 py-2 rounded-3xl border border-white cursor-pointer hover:scale-105`}>Wishlist</button>
                </div>
            </div>
            <div className="min-h-[400px]">
                {isActive === 'cartItm' ? <CartContainer cart={cart} cardRemoveBtn={cartItemRemoveBtnHandler} addtocartBtnRS={isActive} /> : <WishlistContainer wishlist={wishlist} cardRemoveBtn={wishlistItemRemoveBtnHandler} addtocartBtnRS={isActive} />}
            </div>
        </div>
    );
};

export default Dashboard;