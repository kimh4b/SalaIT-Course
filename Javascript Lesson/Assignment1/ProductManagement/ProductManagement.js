const products = [
    { id: 1, name: "MacBook Pro", price: 2500, category: "Laptop", stock: 5 },
    { id: 2, name: "iPhone 17", price: 1200, category: "Phone", stock: 10 },
    { id: 3, name: "Samsung S25", price: 900, category: "Phone", stock: 8 },
    { id: 4, name: "iPad Pro", price: 1100, category: "Tablet", stock: 3 },
    { id: 5, name: "Dell XPS", price: 1800, category: "Laptop", stock: 0 }
];

function displayAllProducts(list){
    return list
}

function findProductById(list, id){
    return list.find((product) => product.id === id);
    
}

function searchProductByName(list, name){
    return list.filter((product) => product.name.toLowerCase().includes(name.toLowerCase()));
}

function filterProductByCategory(list, category){
    return list.filter((product) => product.category === category );
}

function productOver1k(list){
    return list.filter((product) => product.price > 1000);
}

function productNoStock(list){
    return list.find((product) => product.stock === 0 )
}

function totalStockValue(list){
    let totalValue = 0
    for (const product of list) {
        totalValue += product.price * product.stock;
    }
    return totalValue;
}

function PriceByHighToLow(list){
    return list.sort((a, b) => b.price - a.price);
}

function PriceByLowToHigh(list){
    return list.sort((a, b) => a.price - b.price);
}

function findExpensiveProduct(list){
    return list.reduce((max, current) => {
        return current.price > max.price ? current : max;
    })
}

console.log(searchProductByName(products, "mac"));