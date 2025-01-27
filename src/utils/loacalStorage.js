// get all product of cart from local storage

const getCartItem = () => {
    const stringCart = localStorage.getItem('cart');
    if (stringCart) {
        return JSON.parse(stringCart);
    }
    return [];
}

const addItemToCart = (item) => {
    const cart = getCartItem();
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart))
}

const removeItemFromCart = (id) => {
    const cart = getCartItem();
    const remainingCartItem = cart.filter(cartItem => cartItem.product_id !== id);
    localStorage.setItem('cart', JSON.stringify(remainingCartItem));

}


// ....................................................Now it for wishlist

const getWishlistItem = () => {
    const stringWishlist = localStorage.getItem('wishlist');
    if (stringWishlist) {
        return JSON.parse(stringWishlist);
    }
    return [];
}

const addItemToWishlist = (item) => {
    const wishlist = getWishlistItem();
    wishlist.push(item);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

const removeItemFromWishlist = (id) => {
    const wishlist = getWishlistItem();
    const remainingWishlistItem = wishlist.filter(wishlistItem => wishlistItem.product_id !== id);
    localStorage.setItem('wishlist', JSON.stringify(remainingWishlistItem));

}

export { getCartItem, addItemToCart, removeItemFromCart, getWishlistItem, addItemToWishlist, removeItemFromWishlist }