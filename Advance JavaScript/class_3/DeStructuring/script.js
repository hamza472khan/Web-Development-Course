// DeStructuring Example
const {
    id: userID,
    name,
    gender,
    nationality,
} = {
    id: 1,
    name: "John Doe",
    gender: "Male",
    nationality: "American",
};

const { id: productId } = {
    id: 2,
};

console.log(userID, productId, name, gender, nationality);


//default parameters

function add(a=20 , b=30){
    console.log(a+b);
}
add(20,50);


// 