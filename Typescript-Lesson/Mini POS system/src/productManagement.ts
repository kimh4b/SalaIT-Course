interface IPayment {
    processPayment(amount: number): void;
}

class Product {
    static totalProducts: number = 0;

    static getTotalProducts(): number {
        return Product.totalProducts;
    }
    constructor(
        public id: number,
        public name: string,
        private price: number,
        private stock: number,
        public category: string,
    ) {
        Product.totalProducts++;
    }

    get getPrice() {
        return this.price;
    }

    set setPrice(newPrice: number) {
        if (newPrice > 0) {
            this.price = newPrice;
        }
    }

    get getStock() {
        return this.stock;
    }

    getProductInfo() {
        console.log(
            `ID: ${this.id}\nName: ${this.name}\nPrice: ${this.price}\nStock: ${this.stock}\nCategory: ${this.category}\n`,
        );
    }

    getProductById(id: number) {
        if (id === this.id) {
            this.getProductInfo();
        }
    }

    increaseStock(quantity: number): number {
        return (this.stock += quantity);
    }

    decreaseStock(quantity: number): number | string {
        if (quantity <= 0  || quantity > this.stock) {
            return "Invalid stock deduction";
        }

        this.stock -= quantity;
        return this.stock;
     
    }

    isAvailable(quantity: number) {
        if (quantity <= this.stock) {
            return true;
        } else {
            return false;
        }
    }
}

const Iphone = new Product(1, "Iphone 18 Promax", 2000, 1, "Phone");
const Samsumg = new Product(2, "Samsung Galaxy", 1000, 1, "Phone");
const Items = [Iphone, Samsumg];
console.log("========== PRODUCT INFO ==========");
for (const Item of Items) {
    Item.getProductById(1);
}
console.log(`Total Product: ${Product.getTotalProducts()}`);

class Customer {
    constructor(
        public id: number,
        public name: string,
        public phone: string,
    ) {}

    getCustomerInfo() {
        console.log(
            `ID: ${this.id}\nName: ${this.name}\nPhone: ${this.phone}\n`,
        );
    }

    getCustomerById(id: number) {
        if (id === this.id) {
            this.getCustomerInfo();
        }
    }

    updatePhone(newPhone: string): string {
        return (this.phone = newPhone);
    }
}

const Sopheak = new Customer(1, "Sopheak", "0123123123");
console.log("========== Customer INFO ==========");
Sopheak.getCustomerInfo();

class CartItem {
    constructor(
        public product: Product,
        public quantity: number,
    ) {}

    getSubTotal(): number {
        return this.product.getPrice * this.quantity;
    }

    updateQuantity(quantity: number): number {
        return (this.quantity = quantity);
    }
}

const myItems = [new CartItem(Iphone, 1)];

class ShoppingCart {
    constructor(public items: CartItem[]) {}

    displayCart() {
        console.log("===== MINI POS SYSTEM =====");
        if (this.items.length === 0) {
            return console.log("The cart is empty");
        }
        for (const item of this.items) {
            console.log(`Product: ${item.product.name}`);
            console.log(`Price: ${item.product.getPrice}`);
            console.log(`Quantity: ${item.quantity}`);
            console.log(`Subtotal: ${item.getSubTotal()}\n`);
        }
        console.log("___________________________\n");
        console.log(`Total: ${this.getTotal()}`);
        console.log("Thank you for shopping with us");
    }

    checkOut() {
        // Step 1: Validate stock for ALL products
        for (const item of this.items) {
            if (item.quantity > item.product.getStock) {
                return `Not enough stock for ${item.product.name}`;
            }
        }

        // Step 2: Deduct stock after all products pass validation
        for (const item of this.items) {
            item.product.decreaseStock(item.quantity);
        }

        // Step 3: Empty the cart
        this.clearCart();

        return "Checkout successful!";
    }

    addItem(product: Product, quantity: number) {
        if (quantity <= 0) {
            return "Invalid quantity";
        }

        if (quantity > product.getStock) {
            return "Not enough stock";
        }

        const existingItem = this.items.find(
            (item) => item.product.id === product.id,
        );

        if (existingItem) {
            if (existingItem.quantity + quantity <= product.getStock) {
                existingItem.quantity += quantity;
                return existingItem.quantity;
            }
        } else {
            return this.items.push(new CartItem(product, quantity));
        }

        return "Not enough stock";
    }

    removeItem(productId: number) {
        const index = this.items.findIndex(
            (item) => item.product.id === productId,
        );
        if (index === -1) {
            return "Product not found";
        }
        return this.items.splice(index, 1);
    }

    updateItemQuantity(productId: number, quantity: number) {
        const product = this.items.find(
            (item) => item.product.id === productId,
        );

        if (!product) {
            return "Product not found with the id";
        }

        // 1. Reject zero or negative quantity
        if (quantity <= 0) {
            return "Invalid quantity";
        }

        // 2. Check available stock
        if (!product.product.isAvailable(quantity)) {
            return "Not enough stock";
        }

        // 3. Update quantity
        product.quantity = quantity;

        return product.quantity;
    }

    getTotal() {
        let total: number = 0;
        for (const item of this.items) {
            total += item.getSubTotal();
        }
        return total;
    }

    clearCart() {
        return this.items.splice(0, this.items.length);
    }
}

const myCart = new ShoppingCart(myItems);

console.log(myCart.addItem(Samsumg, 1));
myCart.displayCart();

class Employee {
    constructor(
        public name: string,
        private salary: number,
        protected department: string,
    ) {}

    getSalary() {
        return this.salary;
    }
}

abstract class Payment {
    abstract processPayment(amount: number): void;
}

class CashPayment extends Payment {
    processPayment(amount: number) {
        console.log(`Cash Payment: $${amount}`);
    }
}

class KHQRPayment extends Payment {
    processPayment(amount: number): void {
        console.log(`KHQR Payment: $${amount}`);
    }
}

class CardPayment extends Payment {
    processPayment(amount: number): void {
        console.log(`Card payment: $${amount}`);
    }
}

const payments: IPayment[] = [
    new CashPayment(),
    new KHQRPayment(),
    new CardPayment(),
];

payments.forEach((payment) => {
    payment.processPayment(200);
});
