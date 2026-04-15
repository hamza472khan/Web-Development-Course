//fs module

const { log } = require("console");
const fs = require("fs");

//create pr write file

// fs.writeFile("Test.txt", "Hellow world", (err) => {
//   if (err) console.log(err);
//   else console.log("File created");
// });

// fs.writeFileSync("test1.txt", "welcome to node js");

//read file
// fs.readFile("test1.txt", "utf-8", (err, data) => {
//   if (err) console.log(err);
//   else console.log(data);
// });

//read file sync
// const data = fs.readFileSync("test1.txt", "utf-8");
// console.log(data);

//update file

// fs.appendFile("test1.txt", "\nThis is a new line", (err) => {
//   if (err) console.log(err);
//   else console.log("File updated");
// });

//delete file

// fs.unlink("Test.txt", (err) => {
//     if (err) console.log(err);
//     else console.log("File Deleted");
// });

//Rename file

// fs.rename("test1.txt", "FileRenamed.txt", (err) => {
//     if (err) console.log(err);
//     else console.log("File Renamed");
// });

//Create a directory (folder)
// fs.mkdir("Folder2", (err) => {
//     if (err) console.log(err);
//     else console.log("Folder Created");
// });

//log user details
// fs.writeFile("log.txt", "User loggs", (err) => {
//   if (err) console.log(err);
//   else console.log("Log file created");
// });

// const username = "ali";
// const action = "login";
// // adds user logs

// fs.appendFile(
//     "log.txt",
//     `\n date: ${new Date()}, username: ${username}, action: ${action}`,
//     (err)=>{
//         if (err) console.log(err);
//         else console.log("Log Successfully");
//     }
// );

// fs.writeFile("uzair.jsx", "Uzair koni de", (err)=>{
//     if (err) log(err);
//     else log("File created");
    
// })

// fs.unlink("uzair.txt", (err)=>{
//     if (err) log(err);
//     else log("File Deleted");
// })

const path = require("path");

const folderpath = path.join(__dirname, "Folder2");

// fs.readdir(folderpath, (err, files) => {
//   if (err) console.log(err);
//   else console.log(files);
// });
log(__dirname);