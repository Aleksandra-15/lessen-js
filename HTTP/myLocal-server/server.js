import express from "express";

const app = express();

app.use(express.json());

app.get("/api/customers", (req, res) => {
  res.json([
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Brad", lastName: "Traversy" },
    { id: 3, firstName: "Mary", lastName: "Swanson" },
  ]);
});

//?Отримання користувача за id
//? Get =Створити новий ресурс
app.get("/api/customers/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const customers = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Brad", lastName: "Traversy" },
    { id: 3, firstName: "Mary", lastName: "Swanson" },
  ];
  const customer = customers.find((c) => c.id === id);
  if (customer) {
    res.json(customer);
  } else {
    res.status(404).json({ message: "Такого імені не знайдено" });
  }
});

//?Post -Отримати набір ресурсів або один ресурс
app.post("/api/customers", (req, res) => {
  const { firstName, lastName } = req.body;
  const newCustomer = {
    id: Date.now(),
    firstName,
    lastName,
  };
  res.json(newCustomer).status(201);
});

//?Put-запит Оновити існуючий або створити новий ресурс

let users = [
  {
    id: 1,
    username: "kate",
    email: "kata@gmail.com",
  },
  {
    id: 2,
    username: "sasha",
    email: "sasha@gmail.com",
  },
  {
    id: 3,
    username: "andriy",
    email: "andriy@gmail.com",
  },
];
app.put("/api/users/:id", (req, res) => {
  /* const { id } = req.params; -  */
  const userId = parseInt(req.params.id);

  const { username, email } = req.body;

  const user = users.find((user) => user.id === userId);

  if (user) {
    user.username = username || user.username;
    user.email = email || user.email;

    res.json({ message: "user update successfully", user });
  } else {
    res.status(404).json({ message: "user not found" });
  }
});

//? PATCH - Оновити існуючий ресурс

app.patch("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  const { username, email } = req.body;

  const user = users.find((user) => user.id === userId);

  if (user) {
    if (username) {
      user.username = username;
    }
    if (email) {
      user.email = email;
    }

    res.json({ message: "user update successfully", user });
  } else {
    res.status(404).json({ message: "user not found" });
  }
});

//?delete -видалення ресурсу

app.delete("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id)
  res.json({ message: "user with id ${userId} delete succesfully", user })
})

app.listen(3000, () => {
  console.log("listening on port 3000");
});
