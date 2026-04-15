const http = require("http");

const users = [
  {
    id: 1,
    name: "ali",
    age: 20,
    city: "tehran",
  },
  {
    id: 2,
    name: "reza",
    age: 30,
    city: "mashhad",
  },
  {
    id: 3,
    name: "sara",
    age: 25,
    city: "isfahan",
  },
  {    id: 4,
    name: "neda",
    age: 28,
    city: "tabriz",
  },
  {    id: 5,
    name: "mohammad",
    age: 35,
    city: "shiraz",
  },
];

const app = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  console.log("methods: ", req.method, "url: ", req.url);


  if (req.method === "GET" && req.url === "/users") {
    res.end(JSON.stringify(users));
  } else {
    res.end("Page not found");

  }
});

app.listen(4000, () => {
  console.log(`http://localhost:4000`);
});
