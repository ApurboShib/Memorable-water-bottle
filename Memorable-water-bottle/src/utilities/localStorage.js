
// Step-1 :  Create a function to retrieve data from localStorage.
// Step-2 :  Create a function to save data into localStorage.
// Step-3 :  Create a function to add a new item to the cart



// Step 1: Retrieve the cart from localStorage and parse it, or return an empty array if not found
const getStoredCart = () => {
    const getStoredCartString = localStorage.getItem('cart');
    if (getStoredCartString) {
        return JSON.parse(getStoredCartString);
    }
    return [];
}

// Step 2: Save the updated cart array to localStorage
const saveCartToLs = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

// Step 3: Add an item to the cart and save it to localStorage
const addToLocalStorage = id => {
    const cart = getStoredCart(); // Get existing cart
    cart.push(id);                // Add new item to the cart
    saveCartToLs(cart);           // Save the updated cart back to localStorage
}


export { addToLocalStorage, getStoredCart, saveCartToLs }