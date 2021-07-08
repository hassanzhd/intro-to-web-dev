const express = require("express");

const app = express(); // server instance

// GET REQUEST BEING IMPLEMENTED ON THE API

/* instance.HTTP_METHOD('/', (request, response) => {}) */

// LOGGING
// DATABASE: ip, location, counter

const logger = (request, response, next) => {
  console.log("SERVER GOT HIT!");
  next();
};

app.use(logger);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// SERVER SIDE RENDERING APPS: response.render(path_of_template_file)
// JSON API: response.json(object);

class User {
  constructor(__id, __name) {
    this.id = __id;
    this.name = __name;
  }
}

let users = [
  new User(1, "Hassan"),
  new User(2, "Tashik"),
  new User(3, "Anfaal"),
];

// '/user' => ALL USERS
// '/user/:id' => USER OF SPECIFIC ID

app.get("/user", (request, response) => {
  console.log(request.query);
  response.json(users);
});

// URL PARAMETER: '/:name'
// QUERY PARAMTERS: /users?q=10&index=1000

app.get("/user/:id", (request, response) => {
  const { id } = request.params;

  const userToFind = users.filter((data) => {
    if (data.id === parseInt(id)) {
      return data;
    }
  });

  if (userToFind.length === 0) {
    return response.status(400).json({ msg: "User not found!" });
  }

  response.json(userToFind);
});

app.post("/user", (request, response) => {
  const { id, name } = request.body;
  const newUser = new User(id, name);

  users.push(newUser);

  response.json(newUser);
});

app.use((request, response, next, error) => {
  console.log(error);
});

/* instance.listen(PORT_NUMBER, () => {}) */

app.listen(3000, () => {
  console.log("SERVER IS LISTENING");
});
