// get all product of cart from local storage

const getCartItem = () =>{
    const stringCart = localStorage.getItem('cart');
    if(stringCart){
        return JSON.parse(stringCart);
    }
    return [];
}

const addItemToCart = (item) =>{
    const cart = getCartItem();
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart))
}

const removeItemFromCart = (id) =>{
    const cart = getCartItem();
    const remainingCartItem = cart.filter(cartItem => cartItem.product_id !== id);
    localStorage.setItem('cart', JSON.stringify(remainingCartItem));

}

export {getCartItem, addItemToCart, removeItemFromCart}