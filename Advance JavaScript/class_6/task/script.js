//task-1

const user = { 
    name: "Alex", 
    address: { 
    city: "Berlin" 
    } 
    };

    console.log(user.name);
    console.log(user?.address?.city);


    // user?.forEach((item) => {
    //     if (item?.address?.city?.phone) {
    //       console.log(item?.address?.city?.phone);
    //     } else {
    //       console.log("Does not Exit!");
    //     }
    //   });

      const phone = user.contact?.phone ?? "Not provided";

console.log(`Phone: ${phone}`);




    console.log("task-2");

    const isLoggedin = true ;


   let message = isLoggedin ? "Welcome back" : "please Login in" ;
   console.log(message);

   const IsAdmin = true;
   let IsAmdinTrue = IsAdmin ? "Welcome Admin!" : "Welcome USer!"
   console.log(IsAmdinTrue);
   
   