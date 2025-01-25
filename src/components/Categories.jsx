import { useEffect, useState } from "react";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div className="flex flex-col w-2/12 p-6 bg-white rounded-xl shadow">
            <button className="rounded-3xl bg-base-300 border-none px-8 py-2 text-neutral-600 hover:scale-105 cursor-pointer font-bold my-2">
                All Product
            </button>
            {categories.map(category => <button key={category.id} className="rounded-3xl bg-base-300 border-none px-8 py-2 text-neutral-600 hover:scale-105 cursor-pointer font-bold my-2">{category.category}</button>)}
        </div>
    );
};

export default Categories;