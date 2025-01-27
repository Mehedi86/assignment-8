import { useEffect, useState } from "react";
import DashboardCard from "./DashboardCard";
import PropTypes from 'prop-types'

const CartContainer = ({ cart, cardRemoveBtn, purchaseBtnHandler, addtocartBtnRS }) => {
    const [totalCost, setTotalCost] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [sortCart, setSortCart] = useState([]);

// console.log(typeof purchaseBtnHandler)
    useEffect(() => {
        let cost = 0;
        for (const c of cart) {
            cost = cost + c.price;
        }
        setTotalCost(cost);
    }, [cart])

    useEffect(() => {
        const sorted = [...cart].sort((a, b) => b.price - a.price);
        setSortCart(sorted);
    }, [cart, isActive])

    const sortBtnHandler = (status) => {
        setIsActive(status);
    }

    return (
        <div>
            <div className="container mx-auto my-4 flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-semibold">Cart</h2>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-44">
                        <p className="text-xl font-semibold mr-2">Total Cost: {totalCost}$</p>
                    </div>
                    <button onClick={() => sortBtnHandler(true)} className="px-12 py-2 rounded-3xl border border-purple-400 cursor-pointer hover:scale-105">Sort By Price</button>
                    <button onClick={purchaseBtnHandler} className="px-12 py-2 rounded-3xl border border-purple-400 cursor-pointer hover:scale-105">Purchase</button>

                </div>
            </div>
            <div>
                {(isActive ? sortCart : cart).map((item, id) => <DashboardCard key={id} item={item} cardRemoveBtn={cardRemoveBtn} addtocartBtnRS={addtocartBtnRS} />)}
            </div>
        </div>
    );
};

CartContainer.propTypes = {
    cart: PropTypes.array.isRequired,
    cardRemoveBtn: PropTypes.func.isRequired,
    addtocartBtnRS: PropTypes.string.isRequired
}

export default CartContainer;