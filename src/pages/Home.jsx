import { useLoaderData } from "react-router-dom";
import Categories from "../components/Categories";
import GadgetCards from "../components/GadgetCards";



const Home = () => {
    const categories = useLoaderData();
    return (
        <div className="my-12">
            <div className="text-center">
                <h1 className="text-4xl font-bold py-8">Explore Cutting-Edge Gadgets</h1>
            </div>
            <div className="container mx-auto flex gap-6">
                <Categories categories={categories}/>
                <div className="w-10/12 p-6">
                <GadgetCards/>
                </div>
            </div>
        </div >
    );
};

export default Home;