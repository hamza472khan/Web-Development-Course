// async and await

// const products = async()=>{
//     const response = await fetch("https://fakestoreapi.com/products");
//     const data = await response.json();
//     console.log(data);

// };
// products();










const getProduct = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/product");// we generated an error to check the try catch so we remove one s from the url products
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};
getProduct()
console.log("After try catch block");


setTimeout(() => {
    console.log("set time out block");

}, 2000);