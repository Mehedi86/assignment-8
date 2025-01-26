import { useLoaderData } from "react-router-dom";
import GadgetCards from "../components/GadgetCards";
import { useState } from "react";

const Home = () => {
    const [loadByCatgory, setLoadByCategory] = useState('initial');
    const categories = useLoaderData();

    const handleCategory = (category) => {
        setLoadByCategory(category);
    }

    return (
        <div className="my-12">
            <div className="text-center">
                <h1 className="text-4xl font-bold py-8">Explore Cutting-Edge Gadgets</h1>
            </div>
            {/* categories section */}
            <div className="container mx-auto flex gap-6">
                <div className="flex flex-col w-2/12 p-6 mt-6 bg-white rounded-xl shadow h-[450px]">
                    <button onClick={() => handleCategory('initial')} className={`${(loadByCatgory === 'initial') ? 'bg-purple-400 text-white' : ''} rounded-3xl bg-base-200 border-none px-8 py-2 text-neutral-600 hover:scale-105 cursor-pointer font-bold my-2`}>
                        All Product
                    </button>
                    {categories.map(category => <button onClick={() => handleCategory(category.category)} key={category.id} className={`${(loadByCatgory === category.category) ? 'bg-purple-400 text-white' : ''} rounded-3xl bg-base-200 border-none px-8 py-2 text-neutral-600 hover:scale-105 cursor-pointer font-bold my-2`}>{category.category}</button>)}
                </div>
                <div className="w-10/12 p-6">
                    <GadgetCards loadByCatgory={loadByCatgory} />
                </div>
            </div>
        </div >
    );
};

export default Home;