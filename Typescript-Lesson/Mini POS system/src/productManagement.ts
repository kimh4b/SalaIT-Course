class Product {
    constructor(
        public id: number, 
        public name: string, 
        public price: number, 
        public stock: number, 
        public category: string, 
    ){}

    getProductInfo(){
        console.log(`ID: ${this.id}\nName: ${this.name}\nPrice: ${this.price}\nStock: ${this.stock}\nCategory: ${this.category}\n`);
    }

    getProductById(id: number){
        if(id === this.id){
            this.getProductInfo();
        }
    }

    updatePrice(newPrice: number): number{
        return this.price = newPrice;
    }

    increaseStock(quantity: number): number{
        return this.stock += quantity;
    }

    decreaseStock(quantity: number): number{
        return this.stock -= quantity;
    }

    isAvailable(quantity: number){
        if(quantity <= this.stock){
            return true;
        }else{
            return false;
        }
    }
}

const Iphone = new Product(1, "Iphone 18 Promax", 2000, 1, "Phone");
const Samsumg = new Product(2, "Samsung Galaxy", 1000, 1, "Phone")
const Items = [
    Iphone,
    Samsumg,
]
console.log("========== PRODUCT INFO ==========");
for (const Item of Items) {
    Item.getProductById(1);
}

class Customer {
    constructor(public id: number, public name: string, public phone: string){}

    getCustomerInfo(){
        console.log(`ID: ${this.id}\nName: ${this.name}\nPhone: ${this.phone}\n`);
    }

    getCustomerById(id: number){
        if(id === this.id){
            this.getCustomerInfo();
        }
    }

    updatePhone(newPhone: string): string{
        return this.phone = newPhone;
    }

}

const Sopheak = new Customer(1, "Sopheak", "0123123123");
console.log("========== Customer INFO ==========");
Sopheak.getCustomerInfo();

class CartItem{
    constructor(public product: Product, public quantity: number){}

    getSubTotal(): number{
        return this.product.price * this.quantity;
    }

    updateQuantity(quantity: number): number{
        return this.quantity = quantity;
    }

}

const myItems = [new CartItem(Iphone, 1)];

class ShoppingCart{
    constructor(public items: CartItem[]){}

   
    displayCart(){
        console.log('===== MINI POS SYSTEM =====');
        if(this.items.length === 0){
            return console.log('The cart is empty');
        }
        for (const item of this.items) {
            console.log(`Product: ${item.product.name}`);
            console.log(`Price: ${item.product.price}`);
            console.log(`Quantity: ${item.quantity}`);
            console.log(`Subtotal: ${item.getSubTotal()}\n`);
        }
        console.log('___________________________\n');
        console.log(`Total: ${this.getTotal()}`);
        console.log('Thank you for shopping with us');
    }

    addItem(product: Product, quantity: number){
        if(quantity > product.stock){
            return "Not enough stock";
        }
        return this.items.push(new CartItem(product, quantity));

    }

    removeItem(productId: number){
        const index = this.items.findIndex(item => item.product.id === productId);
        if(index === -1 ){
            return "Product not found";
        }
        return this.items.splice(index, 1);
    }

    updateItemQuantity(productId: number, quantity: number){
        const product = this.items.find(item => item.product.id === productId);
        if(!product){
            return "Product not found with the id";
        }
        if(!product.product.isAvailable(quantity)){
            return "Not enough stock";
        }
        return product.quantity = quantity;
    }

    getTotal(){
        let total: number = 0;
        for (const item of this.items) {
            total += item.getSubTotal();
        }
        return total;
    }

    clearCart(){
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
    ){}

    getSalary(){
        return this.salary;
    }


}

class Payment{
    processPayment(amount: number){
        console.log("Processing payment...");
    }
}

class CashPayment extends Payment{
    processPayment(amount: number){
        console.log(`Cash Payment: $${amount}`);
    }
}

class KHQRPayment extends Payment{
    processPayment(amount: number): void {
        console.log(`KHQR Payment: $${amount}`);
    }
}

class CardPayment extends Payment{
    processPayment(amount: number): void {
        console.log(`Card payment: $${amount}`);
    }
}

const payments: Payment[] = [
    new CashPayment(),
    new KHQRPayment(),
    new CardPayment(),
];

payments.forEach(payment => {
    payment.processPayment(200);
});