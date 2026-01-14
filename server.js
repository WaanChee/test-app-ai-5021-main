const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// File paths
const usersFile = path.join(__dirname, "data", "users.json");
const productsFile = path.join(__dirname, "data", "products.json");
const ordersFile = path.join(__dirname, "data", "orders.json");

// Helper functions to read/write JSON files
const readData = (file) => {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (err) {
    console.error(`Error reading ${file}:`, err);
    return [];
  }
};

const writeData = (file, data) => {
  try {
    fs.writeFileSync(file, JSON.stringify(data, null, 2), "utf8");
    return true;
  } catch (err) {
    console.error(`Error writing to ${file}:`, err);
    return false;
  }
};

// ==================== USERS ROUTES ====================

// GET all users
app.get("/api/users", (req, res) => {
  const users = readData(usersFile);
  res.json(users);
});

// GET user by ID
app.get("/api/users/:id", (req, res) => {
  const users = readData(usersFile);
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
});

// CREATE new user
app.post("/api/users", (req, res) => {
  const users = readData(usersFile);
  const { name, email, phone, address } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required" });
  }

  const newUser = {
    id: users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1,
    name,
    email,
    phone: phone || "",
    address: address || "",
  };

  users.push(newUser);
  if (writeData(usersFile, users)) {
    res.status(201).json(newUser);
  } else {
    res.status(500).json({ message: "Error saving user" });
  }
});

// UPDATE user
app.put("/api/users/:id", (req, res) => {
  const users = readData(usersFile);
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  const { name, email, phone, address } = req.body;
  users[userIndex] = {
    ...users[userIndex],
    name: name || users[userIndex].name,
    email: email || users[userIndex].email,
    phone: phone !== undefined ? phone : users[userIndex].phone,
    address: address !== undefined ? address : users[userIndex].address,
  };

  if (writeData(usersFile, users)) {
    res.json(users[userIndex]);
  } else {
    res.status(500).json({ message: "Error updating user" });
  }
});

// DELETE user
app.delete("/api/users/:id", (req, res) => {
  const users = readData(usersFile);
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  const deletedUser = users.splice(userIndex, 1);
  if (writeData(usersFile, users)) {
    res.json({ message: "User deleted", user: deletedUser[0] });
  } else {
    res.status(500).json({ message: "Error deleting user" });
  }
});

// ==================== PRODUCTS ROUTES ====================

// GET all products
app.get("/api/products", (req, res) => {
  const products = readData(productsFile);
  res.json(products);
});

// GET product by ID
app.get("/api/products/:id", (req, res) => {
  const products = readData(productsFile);
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
});

// CREATE new product
app.post("/api/products", (req, res) => {
  const products = readData(productsFile);
  const { name, description, price, stock } = req.body;

  if (!name || price === undefined) {
    return res.status(400).json({ message: "Name and price are required" });
  }

  const newProduct = {
    id: products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1,
    name,
    description: description || "",
    price,
    stock: stock || 0,
  };

  products.push(newProduct);
  if (writeData(productsFile, products)) {
    res.status(201).json(newProduct);
  } else {
    res.status(500).json({ message: "Error saving product" });
  }
});

// UPDATE product
app.put("/api/products/:id", (req, res) => {
  const products = readData(productsFile);
  const productIndex = products.findIndex(
    (p) => p.id === parseInt(req.params.id)
  );

  if (productIndex === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  const { name, description, price, stock } = req.body;
  products[productIndex] = {
    ...products[productIndex],
    name: name || products[productIndex].name,
    description:
      description !== undefined
        ? description
        : products[productIndex].description,
    price: price !== undefined ? price : products[productIndex].price,
    stock: stock !== undefined ? stock : products[productIndex].stock,
  };

  if (writeData(productsFile, products)) {
    res.json(products[productIndex]);
  } else {
    res.status(500).json({ message: "Error updating product" });
  }
});

// DELETE product
app.delete("/api/products/:id", (req, res) => {
  const products = readData(productsFile);
  const productIndex = products.findIndex(
    (p) => p.id === parseInt(req.params.id)
  );

  if (productIndex === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  const deletedProduct = products.splice(productIndex, 1);
  if (writeData(productsFile, products)) {
    res.json({ message: "Product deleted", product: deletedProduct[0] });
  } else {
    res.status(500).json({ message: "Error deleting product" });
  }
});

// ==================== ORDERS ROUTES ====================

// GET all orders
app.get("/api/orders", (req, res) => {
  const orders = readData(ordersFile);
  res.json(orders);
});

// GET order by ID
app.get("/api/orders/:id", (req, res) => {
  const orders = readData(ordersFile);
  const order = orders.find((o) => o.id === parseInt(req.params.id));
  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }
  res.json(order);
});

// GET orders by user ID
app.get("/api/orders/user/:userId", (req, res) => {
  const orders = readData(ordersFile);
  const userOrders = orders.filter(
    (o) => o.userId === parseInt(req.params.userId)
  );
  res.json(userOrders);
});

// CREATE new order
app.post("/api/orders", (req, res) => {
  const orders = readData(ordersFile);
  const { userId, products, totalAmount, shippingAddress } = req.body;

  if (!userId || !products || !totalAmount) {
    return res
      .status(400)
      .json({ message: "UserId, products, and totalAmount are required" });
  }

  const newOrder = {
    id: orders.length > 0 ? Math.max(...orders.map((o) => o.id)) + 1 : 1,
    userId,
    products,
    totalAmount,
    status: "pending",
    orderDate: new Date().toISOString().split("T")[0],
    shippingAddress: shippingAddress || "",
  };

  orders.push(newOrder);
  if (writeData(ordersFile, orders)) {
    res.status(201).json(newOrder);
  } else {
    res.status(500).json({ message: "Error saving order" });
  }
});

// UPDATE order
app.put("/api/orders/:id", (req, res) => {
  const orders = readData(ordersFile);
  const orderIndex = orders.findIndex((o) => o.id === parseInt(req.params.id));

  if (orderIndex === -1) {
    return res.status(404).json({ message: "Order not found" });
  }

  const { userId, products, totalAmount, status, shippingAddress } = req.body;
  orders[orderIndex] = {
    ...orders[orderIndex],
    userId: userId || orders[orderIndex].userId,
    products: products || orders[orderIndex].products,
    totalAmount: totalAmount || orders[orderIndex].totalAmount,
    status: status || orders[orderIndex].status,
    shippingAddress:
      shippingAddress !== undefined
        ? shippingAddress
        : orders[orderIndex].shippingAddress,
  };

  if (writeData(ordersFile, orders)) {
    res.json(orders[orderIndex]);
  } else {
    res.status(500).json({ message: "Error updating order" });
  }
});

// DELETE order
app.delete("/api/orders/:id", (req, res) => {
  const orders = readData(ordersFile);
  const orderIndex = orders.findIndex((o) => o.id === parseInt(req.params.id));

  if (orderIndex === -1) {
    return res.status(404).json({ message: "Order not found" });
  }

  const deletedOrder = orders.splice(orderIndex, 1);
  if (writeData(ordersFile, orders)) {
    res.json({ message: "Order deleted", order: deletedOrder[0] });
  } else {
    res.status(500).json({ message: "Error deleting order" });
  }
});

// ==================== SERVER ====================

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "API is running!" });
});

app.listen(PORT, () => {
  console.log(`Express API running on http://localhost:${PORT}`);
  console.log("Available endpoints:");
  console.log("  Users: GET/POST /api/users, GET/PUT/DELETE /api/users/:id");
  console.log(
    "  Products: GET/POST /api/products, GET/PUT/DELETE /api/products/:id"
  );
  console.log(
    "  Orders: GET/POST /api/orders, GET/PUT/DELETE /api/orders/:id, GET /api/orders/user/:userId"
  );
});
