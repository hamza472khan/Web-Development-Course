//OPTIONAL CHAINING

// const studerDetails = {
//     // id: 101,
//     // name: "John Doe",
//     // age: 22,
//     college: {
// //         name: "ABC University",
// //         country: "pakistan",
// },
// };
// console.log(studerDetails?.college?.name); // undefined
// console.log(studerDetails?.id); // undefined
// console.log(studerDetails?.age); // undefined
// console.log(studerDetails?.name); // undefined

// const userCard = {
//     id: "7741",
//     cardholder: "Alex Rivera",
//     details: {
//       type: "Visa",
//       lastFour: "4242",
//       expiry: {
//         month: 12,
//         year: 2028
//       }
//     },
//     // Optional: This might be null or undefined in some API responses
//     preferences: {
//       notifications: true,
//       limitAlerts: {
//         enabled: true,
//         threshold: 500
//       }
//     }
//   };


//   console.log(userCard?.preferences?.limitAlerts?.threshold); // 500

//   // Safely accessing a deeply nested value
//   const alertThreshold = userCard.preferences?.limitAlerts?.threshold;

//   // Safely accessing a property that doesn't exist (e.g., billingAddress)
//   const zipCode = userCard.billingAddress?.zip; 

//   console.log(alertThreshold); // 500
//   console.log(zipCode);        // undefined (instead of an error)

//   const outputElement = document.getElementById('card-output');

// // Displaying the raw data formatted with 2-space indentation
// outputElement.innerHTML = `
//   <h3>Raw Card Data</h3>
//   <pre>${JSON.stringify(userCard, null, 2)}</pre>
//   <p><strong>Safe Zip Access:</strong> ${userCard.billingAddress?.zip ?? "No Zip Provided"}</p>
// `;

// const user = {
//     name: "uzair",
//     socials: {
//         facebook: "uzair.fb",
//         // twitter: "uzair.tw",
//     },
// };

//   console.log(user.socials.facebook);
//   console.log(user.socials?.twitter);
//   console.log(user.contacts?.github);


//   const helper = {
//     formatName: (name) => name.toUpperCase(),
//   };

//   // Use optional chaining to call these
//   console.log(helper.formatName?.("gemini"));
//   console.log(helper.sendEmail?.("hello@test.com"));

//   const data = {
//     users: [
//       { name: "Alice" },
//       { name: "Bob" }
//     ]
//   };

//   // How do we get the name of the 5th user safely?
// user2 = data.users?.[1]?.name; 
// console.log(user2);

//   const user5 = data.users?.[4]?.name; // the question is about 5th user checks that if exists or not
//   console.log(user5);

//NULLISH COALESCING OPERATOR (??)
// nullish coalescing with optional chaining is only work in null and undefined values

const input = null;
const defaultValue = "Default String";
const result = input ?? defaultValue;
console.log(result); // Output: "Default String"


const username = null;
const displayname = username ?? "Guest User";
console.log(displayname); // Guest User

const username2 = undefined;
const displayname2 = username2 ?? "Guest User";
console.log(displayname2); // Guest User
const username3 = false;
const displayname3 = username3 ?? "Guest User";
console.log(displayname3); // true

const username4 = true;
const displayname4 = username4 ?? "Guest User";
console.log(displayname4); // true  


//Optional Chaining
const studentDetails = {
   id: 1,
   stu_name: "test",
   age: 24,
   //  addresss: {
   //    city: "Peshawar",
   //    country: "Pakistan",
   //  },
};

console.log(studentDetails?.addresss?.city);


const users = [
   {
      id: 1,
      name: "Alice",
      age: 28,
      address: {
         city: "New York",
         country: "USA",
         zip: "10001",
      },
      preferences: {
         theme: "dark",
         notifications: true,
      },
   },
   {
      id: 2,
      name: "Bob",
      address: {
         city: "London",
         // country is missing
         // zip is missing
      },
      preferences: {
         // theme is missing
         notifications: false,
      },
   },
   {
      id: 3,
      name: "Charlie",
      age: 35,
      // address is completely missing
      preferences: {
         theme: "light",
         // notifications is missing
      },
   },
   {
      id: 4,
      name: "Diana",
      age: 22,
      address: {
         country: "Canada",
         // city and zip are missing
      },
      // preferences is missing
   },
];


users?.forEach((item) => {
   if (item?.address?.city) {
      console.log(item?.address?.city);


   } else {
      console.log("does not exist");

   }
});



//Promises

let flag = true;

let myPromise = new Promise((resolve, reject) => {
   if (flag) {
      resolve("Data Fethced Successfully");
   } else {
      reject("error");
   }

});

myPromise
   .then((data) => {
      console.log(data);

   })
   .catch((error) => {
      console.log(error);
   })
   .finally(() => {
      console.log("Promise Completed");


   });