//normal parameters
function printNum(a, b, c, d) {
    console.log(a, b, c, d);

}
printNum(1, 2, 3, 4);


//rest parameters
function printNumbers(...rest) {   //syntex restParameters
    console.log(rest);

}
printNumbers(3, 52, 4, 2.3, 3, 4, 3, 4, 25, 2, 52, 432, 5, 3, 4, 2, 42, 4,)

//real use case

let { password, isAdmin, ...rest } = {   //password and isAdmin will not be included
    id: 1,
    name: "Hamza",
    age: "23",
    password: "123424",
    isAdmin: false,
};
console.log(rest);
