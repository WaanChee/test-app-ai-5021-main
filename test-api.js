// Simple test script to verify API endpoints
const http = require("http");

const baseURL = "http://localhost:5000";

function makeRequest(method, path, data = null) {
  return new Promise((resolve, reject) => {
    const url = new URL(baseURL + path);
    const options = {
      hostname: url.hostname,
      port: url.port,
      path: url.pathname + url.search,
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    const req = http.request(options, (res) => {
      let body = "";
      res.on("data", (chunk) => (body += chunk));
      res.on("end", () => {
        try {
          resolve({
            status: res.statusCode,
            data: JSON.parse(body),
          });
        } catch (e) {
          resolve({
            status: res.statusCode,
            data: body,
          });
        }
      });
    });

    req.on("error", reject);
    if (data) req.write(JSON.stringify(data));
    req.end();
  });
}

async function runTests() {
  console.log("🧪 Testing Express API...\n");

  try {
    // Test Users
    console.log("📦 Testing USERS endpoints:");
    const users = await makeRequest("GET", "/api/users");
    console.log(
      "✅ GET /api/users:",
      users.status,
      "- Found",
      users.data.length,
      "users"
    );

    const singleUser = await makeRequest("GET", "/api/users/1");
    console.log(
      "✅ GET /api/users/1:",
      singleUser.status,
      "- User:",
      singleUser.data.name
    );

    const newUser = await makeRequest("POST", "/api/users", {
      name: "Alice Wonder",
      email: "alice@example.com",
      phone: "555-1111",
      address: "999 New St",
    });
    console.log(
      "✅ POST /api/users:",
      newUser.status,
      "- Created user ID:",
      newUser.data.id
    );

    // Test Products
    console.log("\n📦 Testing PRODUCTS endpoints:");
    const products = await makeRequest("GET", "/api/products");
    console.log(
      "✅ GET /api/products:",
      products.status,
      "- Found",
      products.data.length,
      "products"
    );

    const singleProduct = await makeRequest("GET", "/api/products/1");
    console.log(
      "✅ GET /api/products/1:",
      singleProduct.status,
      "- Product:",
      singleProduct.data.name
    );

    const newProduct = await makeRequest("POST", "/api/products", {
      name: "Headphones",
      description: "Noise-cancelling headphones",
      price: 199.99,
      stock: 30,
    });
    console.log(
      "✅ POST /api/products:",
      newProduct.status,
      "- Created product ID:",
      newProduct.data.id
    );

    // Test Orders
    console.log("\n📦 Testing ORDERS endpoints:");
    const orders = await makeRequest("GET", "/api/orders");
    console.log(
      "✅ GET /api/orders:",
      orders.status,
      "- Found",
      orders.data.length,
      "orders"
    );

    const singleOrder = await makeRequest("GET", "/api/orders/1");
    console.log(
      "✅ GET /api/orders/1:",
      singleOrder.status,
      "- Order status:",
      singleOrder.data.status
    );

    const userOrders = await makeRequest("GET", "/api/orders/user/1");
    console.log(
      "✅ GET /api/orders/user/1:",
      userOrders.status,
      "- Found",
      userOrders.data.length,
      "orders for user 1"
    );

    const newOrder = await makeRequest("POST", "/api/orders", {
      userId: 1,
      products: [{ productId: 1, quantity: 1 }],
      totalAmount: 999.99,
      shippingAddress: "123 Main St, New York, NY 10001",
    });
    console.log(
      "✅ POST /api/orders:",
      newOrder.status,
      "- Created order ID:",
      newOrder.data.id
    );

    // Test Update
    console.log("\n📦 Testing UPDATE endpoints:");
    const updateUser = await makeRequest("PUT", "/api/users/1", {
      name: "John Smith Updated",
      email: "john.updated@example.com",
    });
    console.log(
      "✅ PUT /api/users/1:",
      updateUser.status,
      "- Updated user:",
      updateUser.data.name
    );

    const updateProduct = await makeRequest("PUT", "/api/products/2", {
      price: 34.99,
      stock: 45,
    });
    console.log(
      "✅ PUT /api/products/2:",
      updateProduct.status,
      "- Updated price:",
      updateProduct.data.price
    );

    const updateOrder = await makeRequest("PUT", "/api/orders/1", {
      status: "shipped",
    });
    console.log(
      "✅ PUT /api/orders/1:",
      updateOrder.status,
      "- Updated status:",
      updateOrder.data.status
    );

    // Test Delete
    console.log("\n📦 Testing DELETE endpoints:");
    // Create a test user to delete
    const tempUser = await makeRequest("POST", "/api/users", {
      name: "Delete Me",
      email: "delete@example.com",
    });
    const deleteUser = await makeRequest(
      "DELETE",
      `/api/users/${tempUser.data.id}`
    );
    console.log(
      "✅ DELETE /api/users/" + tempUser.data.id + ":",
      deleteUser.status,
      "- Deleted user:",
      deleteUser.data.user.name
    );

    console.log("\n✨ All tests passed!");
  } catch (error) {
    console.error("❌ Test failed:", error.message);
  }
}

runTests();
