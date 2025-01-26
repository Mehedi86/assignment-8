import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Heading from "../components/Heading";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

const GadgetDetails = () => {
    const [gadgetDetails, setGadgetDetails] = useState({ specification: [] });
    const { id } = useParams();
    const gadgets = useLoaderData();

    useEffect(() => {
        const gadgetThatShow = gadgets.find(gadget => gadget.product_id == id);
        setGadgetDetails(gadgetThatShow);
    }, [gadgets, id])

    const { product_title, product_image, price, availability, description, rating, specification } = gadgetDetails;
    console.log(specification)
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
                        <span className="px-4 py-1 rounded-3xl bg-neutral-200 font-semibold">{rating}</span>
                    </div>
                    <div className="flex gap-4">
                        <button className="btn mt-6 rounded-3xl font-bold text-white bg-[#9538E2]">Add To Cart <IoCartOutline size={20} /></button>
                        <button className="btn mt-6 rounded-full font-bold"><CiHeart size={20} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetDetails;