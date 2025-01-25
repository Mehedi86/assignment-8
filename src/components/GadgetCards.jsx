import { useEffect, useState } from "react";


const GadgetCards = () => {
    const [gadgets, setGadgets] = useState([]);

    useEffect(() => {
        fetch('/gadgets.json')
        .then(res=> res.json())
        .then(data=> setGadgets(data));
    }, [])

    return (
        <div className="grid grid-cols-4">
            {(gadgets.slice(0,9)).map(gadget=> <p key={gadget.product_title}>{gadget.product_title}</p>)}
        </div>
    );
};

export default GadgetCards;