import DashboardCard from "./DashboardCard";
import PropTypes from 'prop-types'

const WishlistContainer = ({ wishlist, cardRemoveBtn, addtocartBtnRS }) => {
    return (
        <div>
            <div>
                {wishlist.map((item, id) => <DashboardCard key={id} item={item} cardRemoveBtn={cardRemoveBtn} addtocartBtnRS={addtocartBtnRS}/>)}
            </div>
        </div>
    );
};

WishlistContainer.propTypes = {
    wishlist: PropTypes.array.isRequired,
    cardRemoveBtn: PropTypes.func.isRequired,
    addtocartBtnRS: PropTypes.string.isRequired
}

export default WishlistContainer;