//promises
// let loading = true;
// let agePromise = new Promise((resolve, reject) => {
//     const age = 16;
//     if (age >= 18) {
//         setTimeout(() => {
//             loading = false;
//             resolve("You Are eligible to vote!")
//         }, 2000);

//     } else {
//         setTimeout(() =>{
//             reject("Your are not elibible to vote!")
//         }, 2000);
        
//     }});

const jsonFetch = fetch("https://jsonplaceholder.typicode.com/posts");

// jsonFetch
// .then((response)=>{
//     return response.json();
//     // console.log(response.json);
    
// })
// .then((data)=>{
//     console.log(data);
    
// });

let allData = document.getElementById("container");
// allData.innerHTML = fetch("https://jsonplaceholder.typicode.com/posts");
// jsonFetch
// .then((response) => {
//     // 2. Convert the response to JSON
//     return response.json();
//   })
//   .then((data) => {
//     // 3. Map the data into HTML strings and join them
//     allData.innerHTML = data.map(post => 
//       `<div class="post">
//         <h3>${post.title}</h3>
//         <p>${post.body}</p>
//       </div>`
//     ).join('');
//   })
//   .catch((error) => {
//     console.error("Oops, something went wrong:", error);
//   });

fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())            
            .then(json=>console.log(json))

           allData.innerHTML = DataTransfer.map(post=>
           `{
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing",
            "rating": {
              "rate": 3.9,
              "count": 120
            }
          }`
        ).join("");

   
