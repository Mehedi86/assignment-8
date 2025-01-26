import DashboardCard from "./DashboardCard";

const CartContainer = ({cart, cartItemRemoveBtnHandler}) => {
    return (
        <div>
            {cart.map(item=> <DashboardCard key={item.product_id} item={item} cartItemRemoveBtnHandler={cartItemRemoveBtnHandler}/>)}
        </div>
    );
};

export default CartContainer;