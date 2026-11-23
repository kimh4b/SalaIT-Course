"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    id;
    name;
    price;
    stock;
    category;
    static totalProducts = 0;
    static getTotalProducts() {
        return Product.totalProducts;
    }
    constructor(id, name, price, stock, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.category = category;
        Product.totalProducts++;
    }
    get getPrice() {
        return this.price;
    }
    set setPrice(newPrice) {
        if (newPrice > 0) {
            this.price = newPrice;
        }
    }
    get getStock() {
        return this.stock;
    }
    getProductInfo() {
        console.log(`ID: ${this.id}\nName: ${this.name}\nPrice: ${this.price}\nStock: ${this.stock}\nCategory: ${this.category}\n`);
    }
    getProductById(id) {
        if (id === this.id) {
            this.getProductInfo();
        }
    }
    increaseStock(quantity) {
        return this.stock += quantity;
    }
    decreaseStock(quantity) {
        let newStock = 0;
        if (quantity > 0 && quantity <= this.stock) {
            newStock = this.stock -= quantity;
        }
        return newStock;
    }
    isAvailable(quantity) {
        if (quantity <= this.stock) {
            return true;
        }
        else {
            return false;
        }
    }
}
const Iphone = new Product(1, "Iphone 18 Promax", 2000, 1, "Phone");
const Samsumg = new Product(2, "Samsung Galaxy", 1000, 1, "Phone");
const Items = [
    Iphone,
    Samsumg,
];
console.log("========== PRODUCT INFO ==========");
for (const Item of Items) {
    Item.getProductById(1);
}
console.log(`Total Product: ${Product.getTotalProducts()}`);
class Customer {
    id;
    name;
    phone;
    constructor(id, name, phone) {
        this.id = id;
        this.name = name;
        this.phone = phone;
    }
    getCustomerInfo() {
        console.log(`ID: ${this.id}\nName: ${this.name}\nPhone: ${this.phone}\n`);
    }
    getCustomerById(id) {
        if (id === this.id) {
            this.getCustomerInfo();
        }
    }
    updatePhone(newPhone) {
        return this.phone = newPhone;
    }
}
const Sopheak = new Customer(1, "Sopheak", "0123123123");
console.log("========== Customer INFO ==========");
Sopheak.getCustomerInfo();
class CartItem {
    product;
    quantity;
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    getSubTotal() {
        return this.product.getPrice * this.quantity;
    }
    updateQuantity(quantity) {
        return this.quantity = quantity;
    }
}
const myItems = [new CartItem(Iphone, 1)];
class ShoppingCart {
    items;
    constructor(items) {
        this.items = items;
    }
    displayCart() {
        console.log('===== MINI POS SYSTEM =====');
        if (this.items.length === 0) {
            return console.log('The cart is empty');
        }
        for (const item of this.items) {
            console.log(`Product: ${item.product.name}`);
            console.log(`Price: ${item.product.getPrice}`);
            console.log(`Quantity: ${item.quantity}`);
            console.log(`Subtotal: ${item.getSubTotal()}\n`);
        }
        console.log('___________________________\n');
        console.log(`Total: ${this.getTotal()}`);
        console.log('Thank you for shopping with us');
    }
    addItem(product, quantity) {
        if (quantity > product.getStock) {
            return "Not enough stock";
        }
        return this.items.push(new CartItem(product, quantity));
    }
    removeItem(productId) {
        const index = this.items.findIndex(item => item.product.id === productId);
        if (index === -1) {
            return "Product not found";
        }
        return this.items.splice(index, 1);
    }
    updateItemQuantity(productId, quantity) {
        const product = this.items.find(item => item.product.id === productId);
        if (!product) {
            return "Product not found with the id";
        }
        if (!product.product.isAvailable(quantity)) {
            return "Not enough stock";
        }
        return product.quantity = quantity;
    }
    getTotal() {
        let total = 0;
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
    name;
    salary;
    department;
    constructor(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    getSalary() {
        return this.salary;
    }
}
class Payment {
}
class CashPayment extends Payment {
    processPayment(amount) {
        console.log(`Cash Payment: $${amount}`);
    }
}
class KHQRPayment extends Payment {
    processPayment(amount) {
        console.log(`KHQR Payment: $${amount}`);
    }
}
class CardPayment extends Payment {
    processPayment(amount) {
        console.log(`Card payment: $${amount}`);
    }
}
const payments = [
    new CashPayment(),
    new KHQRPayment(),
    new CardPayment(),
];
payments.forEach(payment => {
    payment.processPayment(200);
});
//# sourceMappingURL=productManagement.js.map