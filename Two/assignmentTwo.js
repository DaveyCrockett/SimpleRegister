
const products = []
const EnterShop = () => {
    products.productName = prompt("Enter Product Name: ");
    products.price = parseInt(prompt(`Enter ${products.productName} price as an integer: `));
    products.quantity = parseInt(prompt(`Enter ${products.productName} quantity as an integer: `));
    saveSub = products.quantity*products.price;
    const caSalesTax = .0725;
    let finalTotalRounded = Math.round(100*(saveSub*caSalesTax+saveSub))/100;
    let caSalesTaxPercent = Math.round((caSalesTax*100)*100)/100;
    let totalSalesTax = Math.round(100*(saveSub*caSalesTax))/100;

    console.log("Product Name: " + products.productName + " price: $" + products.price + " quantity: " + products.quantity);
    console.log("The subtotal: $" + saveSub);
    console.log("The sales tax in Califorinia: $" + caSalesTaxPercent);
    console.log("The total tax: $" + totalSalesTax);
    console.log("The final total: $" + finalTotalRounded);
}
