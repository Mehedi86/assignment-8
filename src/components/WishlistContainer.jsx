import DashboardCard from "./DashboardCard";
import PropTypes from 'prop-types'

const WishlistContainer = ({ wishlist, cardRemoveBtn }) => {
    return (
        <div>
            <div>
                {wishlist.map((item, id) => <DashboardCard key={id} item={item} cardRemoveBtn={cardRemoveBtn}/>)}
            </div>
        </div>
    );
};

WishlistContainer.propTypes = {
    wishlist: PropTypes.array.isRequired,
    cardRemoveBtn: PropTypes.func.isRequired
}

export default WishlistContainer;