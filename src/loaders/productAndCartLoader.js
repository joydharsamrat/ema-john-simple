import { getStoredCart } from "../utilities/fakedb";

export const productAndCartLoader = async () => {

    // get product
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    // get cart
    const savedCart = getStoredCart();
    const initialCart = [];
    for (const id in savedCart) {
        const addedProducts = products.find(product => product.id === id);
        if (addedProducts) {
            const quantity = savedCart[id];
            addedProducts.quantity = quantity;
            initialCart.push(addedProducts);
        }
    }
    return { products, initialCart };
}