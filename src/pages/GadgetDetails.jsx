import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Heading from "../components/Heading";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { addItemToCart, addItemToWishlist, getWishlistItem } from "../utils/loacalStorage";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';



const GadgetDetails = () => {
    const [gadgetDetails, setGadgetDetails] = useState({ specification: [] });
    const [wishlistBtn, setWishlistBtn] = useState(false);
    const { id } = useParams();
    const gadgets = useLoaderData();

    useEffect(() => {
        const gadgetThatShow = gadgets.find(gadget => gadget.product_id == id);
        setGadgetDetails(gadgetThatShow);
        const checkWishlist = ((getWishlistItem()).find(g => g.product_id == gadgetThatShow.product_id));
        if (checkWishlist) {
            setWishlistBtn(true);
        }
        else {
            setWishlistBtn(false)
        }
    }, [gadgets, id])

    const { product_title, product_image, price, availability, description, rating, specification } = gadgetDetails;

    const notifyAddToCart = () => toast.info("Product Successfully added to Cart!");
    const notifyAddToWishlist = () => toast("Product Successfully added to Wishlist!");

    const addToCartBtnHandler = (item) => {
        addItemToCart(item);
        notifyAddToCart();
    }
    const addToWishListBtnHandler = (item) => {
        addItemToWishlist(item);
        notifyAddToWishlist();
        setWishlistBtn(true);
    }
    const ratingNumber = () => {
        const ratingsNumber = [];
        for (let i = 1; i < rating; i++) {
            ratingsNumber.push(i);
        }
        return ratingsNumber;
    }

    return (
        <div>
            <div className="min-h-[360px] bg-[#9538E2] pt-8 ">
                <div className="md:w-1/3 mx-auto">
                    <Heading
                        title={'Product Details'}
                        subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
                        tc={'text-white'} stc={'text-white'} />
                </div>
            </div>
            <div className="container mx-auto rounded-xl p-4 bg-white border-2 border-white -mt-48 mb-12 flex gap-4">
                <div className="w-1/3 p-4">
                    <img className="w-full rounded-xl h-[400px] p-2" src={product_image} alt="" />
                </div>
                <div className="w-2/3 p-4">
                    <h1 className="text-2xl font-bold">{product_title}</h1>
                    <p className="text-xl font-semibold py-2">Price: $ {price}</p>
                    <div className="my-2">
                        {availability ? <span className="text-lg px-4 bg-lime-100 border border-lime-600 rounded-3xl font-semibold text-lime-600">In Stock</span> : <span className="text-lg px-4 bg-rose-100 border border-rose-400 rounded-3xl font-semibold text-rose-400">Stock Out</span>}
                    </div>
                    <p className="text-xl font-semibold py-2 text-neutral-400">{description}</p>
                    <div className="text-xl">
                        <h2 className="py-2 font-bold">Specification</h2>
                        {specification.map((s, idx) => <p key={idx} className="font-semibold py-1 text-neutral-400">{(idx + 1)}. {s}</p>)}
                    </div>
                    <div>
                        <h2 className="text-xl py-2 font-bold mb-2">Rating</h2>
                        <div className="flex items-center gap-4">
                            <div className="flex">
                                {(ratingNumber().map((r, i) => <FaStar key={i} className="text-amber-400" size={40} />))}
                                {(rating % 2 !== 0) ? <FaStarHalf className="text-amber-400" size={40} /> : ''}
                            </div>
                            <span className="px-4 py-1 rounded-3xl bg-neutral-200 font-semibold">{rating}</span>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button onClick={() => addToCartBtnHandler(gadgetDetails)} className="btn mt-6 rounded-3xl font-bold text-white bg-[#9538E2]">Add To Cart <IoCartOutline size={20} /></button>
                        <button disabled={wishlistBtn} onClick={() => addToWishListBtnHandler(gadgetDetails)} className="btn mt-6 rounded-full font-bold"><CiHeart size={20} /></button>
                    </div>
                </div>
            </div>
            {/* toast */}
            <ToastContainer />
        </div>
    );
};

export default GadgetDetails;