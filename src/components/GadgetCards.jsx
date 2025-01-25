import { useEffect, useState } from "react";
import SingleGadgetCard from "./SingleGadgetCard";
import PropTypes from 'prop-types'


const GadgetCards = ({ loadByCatgory }) => {
    const [gadgets, setGadgets] = useState([]);
    useEffect(() => {
        fetch('/gadgets.json')
            .then(res => res.json())
            .then(data => setGadgets(data));
    }, [])

    return (
        <div className="grid grid-cols-3 gap-4">
            {(loadByCatgory === 'initial') ? (gadgets.slice(0, 9)).map(gadget => <SingleGadgetCard
                key={gadget.product_title}
                gadget={gadget}
            ></SingleGadgetCard>) : (gadgets.filter(gadget => gadget.category === loadByCatgory)).map(gadget => <SingleGadgetCard
                key={gadget.product_title}
                gadget={gadget}
            ></SingleGadgetCard>)}

        </div>
    );
};

GadgetCards.propTypes = {
    loadByCatgory: PropTypes.string.isRequired
}

export default GadgetCards;