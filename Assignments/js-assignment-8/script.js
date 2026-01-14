//Task-1:
//Access Employees Information

const company = {
    name: "techsolutions",
    employees: {
        emp1: { name: "ali", role: "developer", salary: 8000 },
        emp2: { name: "sara", role: "designer", salary: 7000 }
    }
};
//log ali's role
console.log(company.employees.emp1.role);

//log sara's salary
console.log(company.employees.emp2.salary);

//Task-2
//Update object property

const product = {
    id: 101,
    name: "headphones",
    price: 3500
};

//change the price to 4000
product.price = 4000;

console.log(product.price);// it will console 4000 becose updated

// log the updated product object

console.log(product);// it will console updated product object with price 4000 not 3500

//task-3

//object with array

const student = {
    name: "Hamza",
    age: 21,
    subjects: ["maths", "Physics", "cs"]
};

// log all subjects
console.log(student.subjects);// ['maths' , 'physics', 'cs']


// log second subject
console.log(student.subjects[1]); //physics



//task-4

//Array of objects

const students = [
    { name: "Ayesha", marks: 85 },
    { name: "Bilal", marks: 78 },
    { name: "Hina", marks: 92 }
];

//log the name of first student
console.log(students[0].name); // ayesha


//log the marks of last student

console.log(students[2].marks); // 92  
//the [] index define the object of the index like [0] is the first object and [1] is second and soo on



//task-5


// Nested Objects (Real world Examples)

const user = {
    username: "user123",
    profile: {
        email: "user@mail.com",
        address: {
            city: "Karachi",
            zip: "75000"
        }
    }
};

//log user's email

console.log(user.profile.email); // user@mail.com

// log city name

//in this scanario we have two objects so we cannot jump directly to user.profile.city instead we write

console.log(user.profile.address.city); // karachi


//task- 6

// Modify Nested object values

const order = {
    orderId: 555,
    delivery: {
        status: "Pending",
        days: 5
    }
};

// currently the status of order is pending
//task
//change status to deliver
order.delivery.status = "deliverd";
console.log(order.delivery.status); // deliverd
//hence updated from pending to delivered

//task
//log updated order object
console.log(order); // this will console the updated value deliverd not pending


//task- 7
//Object with array of objects
const cart = {
    items: [
        { name: "Shirt", price: 2000 },
        { name: "Shoes", price: 5000 }
    ]
};

//task
// log price of shoes
console.log(cart.items[1].name); // shoes


//task
//change shirt price to 2200
cart.items[0].price = 2200; // updated value of shirt from 2000 to 2200
console.log(cart.items[0].price); // 2200


//log updated items array

console.log(cart.items); //console array of items but the shirt price will be updated

//task-8

// Add new property
const mobile = {
    brand: "Samsung",
    model: "S21"
};

// Add new property price

mobile.price = 780000; // added price = 780000 to the object 
// log the complete object

console.log(mobile); // brand: samsung , model:s21, price:780000


//task- 9
// Loop through object properties

const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022
};

// Use a loop to log all keys and values

for (const key in car) {
    console.log(key + ":", car[key]); // in this loop the key stores brand model and year and the tar key store toyota corolla and 2022

}

//Task - 10

// mini real world examples
// Resturent menu items

const menuItem = {
    name: "Burger",
    price: 450,
    available: true
};

// Log item name and price

console.log(`item name: `, menuItem.name); // burger
console.log(`item price: `, menuItem.price); // 450


//Change availability to false

menuItem.available = false;

//Log updated object

console.log(menuItem);



// sir bohot lengthy thaaa.......

// The End