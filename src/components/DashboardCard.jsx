import PropTypes from 'prop-types'
import { MdOutlineCancel } from "react-icons/md";

const DashboardCard = ({ item, cardRemoveBtn, addtocartBtnRS }) => {

    const { product_title, product_image, price, description, product_id } = item;
    return (
        <div className='container mx-auto my-4 p-4 bg-white rounded-xl flex gap-12'>
            <div className='w-2/12 rounded-xl'>
                <img className='h-36 w-full rounded-xl' src={product_image} alt="" />
            </div>
            <div className='w-10/12'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-2xl font-semibold'>{product_title}</h2>
                    <button onClick={() => cardRemoveBtn(product_id)} className='text-red-400 cursor-pointer hover:scale-105'><MdOutlineCancel size={40} /></button>
                </div>
                <p className='text-xl font-semibold text-neutral-400 py-2'>{description}</p>
                <p className='text-lg font-semibold text-neutral-600'>Price: $ {price}</p>
                {(addtocartBtnRS == 'cartItm') ? '' : (<button className="btn bg-purple-400 text-white mt-4 rounded-full font-bold">Add To Cart</button>)}
            </div>
        </div>
    );
};

DashboardCard.propTypes = {
    item: PropTypes.object.isRequired,
    cardRemoveBtn: PropTypes.func.isRequired,
    addtocartBtnRS: PropTypes.string

}

export default DashboardCard;