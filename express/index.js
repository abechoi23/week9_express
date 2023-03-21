// Import our express package
const express = require("express");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./templates/views");

const currentUser = {
  loggedIn: false,
};

const protectedRoutes = ["/about", "/contact"];

// Defining a middleware to print out dateetime, every time a request is made
app.use((req, res, next) => {
  console.log(`Request made to ${req.path} at ${Date.now()}`);

  if (!currentUser.loggedIn) {
    if (protectedRoutes.includes(req.path)) {
      return res.redirect("/");
    }
  }
  next();
});

app.get("/", (req, res) => {
  console.log("IN HOME ROUTE");
  const user = 
    {
      id: 1,
      username: "Dsmith",
      email: "dsmith@codingtemple.com",
      favoriteColor: "blue",
      posts: [
        {
          id: 1,
          body: "This is a post",
        },
        {
          id: 2,
          body: "This is another post",
        },
      ],
      cart: [
        { id: 1, name: "T-shirt", description: "this is a really fancy shirt" },
      ],
    }
  const data = {
    user: user,
  };
  res.render("home", data);
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.get("/blog", (req, res) => {
  res.send("Blog Page");
});

const users = [
  {
    id: 1,
    username: "Dsmith",
    email: "dsmith@codingtemple.com",
    favoriteColor: "blue",
    posts: [
      {
        id: 1,
        body: "This is a post",
      },
      {
        id: 2,
        body: "This is another post",
      },
    ],
    cart: [
      { id: 1, name: "T-shirt", description: "this is a really fancy shirt" },
    ],
  },
  {
    id: 2,
    username: "LLucas",
    email: "LLucas@codingtemple.com",
    favoriteColor: "red",
    posts: [
      {
        id: 3,
        body: "This is not a post",
      },
      {
        id: 4,
        body: "This is not another post",
      },
    ],
    cart: [{ id: 2, name: "New computer", description: "Mine is too slow" }],
  },
  {
    id: 3,
    username: "ValH",
    email: "Val@codingtemple.com",
    favoriteColor: "green",
    posts: [
      {
        id: 5,
        body: "Where is noodle",
      },
      {
        id: 6,
        body: "Who is noodle",
      },
    ],
    cart: [{ id: 3, name: "hat", description: "Get pumped!!" }],
  },
];

app.get("/users", (req, res) => {
  res.send(users);
});

function searchUser(id) {
  for (const user of users) {
    if (user.id == id) {
      return user;
    }
  }
}

/* Make a route that allows me to pass in a user id, and return ONLY that user's information */

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  const user = searchUser(id);

  if (user) {
    return res.send(user);
  }

  res.status(404).send("404 Not Found");
});

/* Make a route that accepts two parameters!!! */

app.get("/user/:id/:key", (req, res) => {
  const id = req.params.id;
  const key = req.params.key;
  const user = searchUser(id);

  if (user) {
    const value = user[key];
    if (value) {
      return res.send(value);
    } else {
      return res
        .status(404)
        .send(`Key ${key} not found for user ${user.username}`);
    }
  }
  res.status(404).send("404 User Not Found");
});

/* app.get("/calculator/:num1/:num2", (req, res) => {
    Example Output:
    {
        addition: 32,
        subtraction: 8,
        multiplication: 240,
        division: 1.6666666666666667,
        exponential: 4096000000000000
    } 
  let num1 = req.params.num1;
  let num2 = req.params.num2;

  let addition = parseInt(num1) + parseInt(num2);
  let subtraction = parseInt(num1) - parseInt(num2);
  let multiplication = parseInt(num1) * parseInt(num2);
  let division = parseInt(num1) / parseInt(num2);
  let exponential = parseInt(num1) ** parseInt(num2);

  let response = {
    addition: addition,
    subtraction: subtraction,
    multiplication: multiplication,
    division: division,
    exponential: exponential,
  };

  res.send(response);
}); */

app.get("/calculator/:num1/:num2", (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);

  res.send({
    addition: num1 + num2,
    subtraction: num1 - num2,
    multiplication: num1 * num2,
    division: num1 / num2,
    exponential: num1 ** num2,
  });
});

/*
 * Create a route to check if a product is in a user's cart
 * send back either true or false
 */

/* app.get("/user/:uid/in-cart/:productName", (req, res) => {
  const id = req.params.uid;
  const productName = req.params.productName;
  const user = searchUser(id);

  if (user) {
    user.cart.forEach((item) => {
      if (item.name.toLowerCase() === productName.toLowerCase()) {
        return res.send(true);
      } else {
        return res.send(false);
      }
    });
}
    res.status(404).send(`Item ${productName} Not Found`);
}); */

app.get("/user/:uid/in-cart/:productName", (req, res) => {
  const id = req.params.uid;
  const productName = req.params.productName;
  const user = searchUser(id);

  if (user) {
    const cart = user.cart;
    for (const item of cart) {
      if (item.name.toLowerCase() === productName.toLowerCase()) {
        return res.send(true);
      }
    }
    return res.send(false);
  }
  res.status(404).send(`Item ${productName} Not Found`);
});

app.listen(port, () => {
  console.log(`Express is running on port ${port}...`);
});
