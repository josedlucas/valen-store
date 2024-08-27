import { defineStore } from 'pinia';

// Cargar estado desde localStorage al inicializar
function loadStateFromLocalStorage() {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
}

export const useCartStore = defineStore('cart', {
    state: () => ({
        products: loadStateFromLocalStorage(),
    }),
    getters: {
        cartCount: (state) => state.products.length,
        // Ejemplo de un getter para calcular el total del carrito
        cartTotal: (state) => {
            return state.products.reduce((total, product) => total + product.price, 0);
        }
    },
    actions: {
        addProduct(product) {
            this.products = product;
            this.saveCartToLocalStorage();
        },
        removeProduct(productId) {
            console.log(productId, this.products);
            this.products = this.products.filter(product => product.value.product_id !== productId);
            this.saveCartToLocalStorage();
        },
        saveCartToLocalStorage() {
            localStorage.setItem('cart', JSON.stringify(this.products));
        },
        clearCart() {
            this.products = [];
            localStorage.removeItem('cart');
        }
    }
});
