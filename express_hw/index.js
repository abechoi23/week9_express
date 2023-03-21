const express = require("express");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./templates/views");

const currentUser = {
  loggedIn: false,
};

const protectedRoutes = ["/about", "/contact"];

app.use((req, res, next) => {
  console.log(`Request made to ${req.path} at ${Date.now()}`);

  if (!currentUser.loggedIn) {
    if (protectedRoutes.includes(req.path)) {
      return res.redirect("/");
    }
  }
  next();
});


app.get('/', (req, res) => {
    console.log('IN HOME ROUTE')
    res.render('home')
})


app.get('/user', (req, res) => {
    console.log('IN USER ROUTE')
    res.render('user')
})

app.get('/profile', (req, res) => {
    console.log('IN PROFILE ROUTE')
    res.render('profile')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/register', (req, res) => {
    res.render('register')
})



app.listen(port, () => {
    console.log(`Express is running on port ${port}...`);
  });
  