import { useEffect, useState } from "react";
import DashboardCard from "./DashboardCard";
import PropTypes from 'prop-types'
import modalImage from '../assets/Group.png'
import { useNavigate } from "react-router-dom";

const CartContainer = ({ cart, cardRemoveBtn, purchaseBtnHandler, addtocartBtnRS }) => {
    const [totalCost, setTotalCost] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [sortCart, setSortCart] = useState([]);

    const navigate = useNavigate();
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
                    <button onClick={() => sortBtnHandler(true)} className="btn px-12 py-2 rounded-3xl border border-purple-400 text-purple-400 font-bold cursor-pointer hover:scale-105">Sort By Price</button>
                    <button disabled={(cart.length === 0) ? true : false} onClick={purchaseBtnHandler} className="btn px-12 py-2 rounded-3xl border border-purple-400 text-purple-400 font-bold cursor-pointer hover:scale-105">Purchase</button>
                    

                </div>
            </div>
            <div>
                {(isActive ? sortCart : cart).map((item, id) => <DashboardCard key={id} item={item} cardRemoveBtn={cardRemoveBtn} addtocartBtnRS={addtocartBtnRS} />)}
            </div>


            {/* modals */}

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <img className="mx-auto" src={modalImage} alt="" />
                    <h3 className="font-bold text-xl text-center pt-2">Payment Successfully</h3>
                    <div className="border-t border-neutral-200 my-2 w-2/3 mx-auto"></div>
                    <p className="pt-2 text-neutral-400 text-center">Thanks for purchasing.</p>
                    <div className="flex justify-center my-2">
                    <form method="dialog">
                        <button onClick={()=> navigate('/')}  className="btn">Close</button>
                    </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

CartContainer.propTypes = {
    cart: PropTypes.array.isRequired,
    cardRemoveBtn: PropTypes.func.isRequired,
    addtocartBtnRS: PropTypes.string.isRequired,
    purchaseBtnHandler: PropTypes.func.isRequired
}

export default CartContainer;