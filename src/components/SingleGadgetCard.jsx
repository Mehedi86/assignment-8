import PropTypes from 'prop-types'

const SingleGadgetCard = ({ gadget }) => {

    const { product_title, product_image,
        price } = gadget;
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className="px-6 pt-6">
                <img src={product_image} alt="Shoes" className="rounded-xl w-full h-[250px] border-2 border-base-300"/>
            </figure>
            <div className="card-body ">
                <h2 className="text-xl font-bold">{product_title}</h2>
                <p className="text-lg font-semibold text-neutral-400">Price: {price}$</p>
                <div>
                    <button className="px-4 py-2 border border rounded-3xl text-[#9538E2] font-bold cursor-pointer hover:scale-105">View Details</button>
                </div>
            </div>
        </div>
    );
};

SingleGadgetCard.propTypes = {
    gadget: PropTypes.object.isRequired
}

export default SingleGadgetCard;