import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const GadgetDetails = () => {
    const [gadgetDetails, setGadgetDetails] = useState({});
    const {id} = useParams();
    const gadgets = useLoaderData();

    useEffect(()=>{
        const gadgetThatShow = gadgets.find(gadget => gadget.product_id == id);
        setGadgetDetails(gadgetThatShow);
    }, [gadgets, id])

    console.log(gadgetDetails)
    return (
        <div className="text-6xl">
            <h1>This is gadget details page</h1>
        </div>
    );
};

export default GadgetDetails;