# Express API Documentation

## Overview

This is a simple Express.js REST API for managing Users, Products, and Orders. The API uses JSON files for data storage instead of a database.

## Getting Started

### Start the API Server

```bash
npm run start:api
```

The API will be available at `http://localhost:5000`

### Test the API

```bash
npm run test:api
```

## API Endpoints

### Health Check

- **GET** `/health` - Check if the API is running

### Users

#### Get all users

```
GET /api/users
```

**Response:** Array of all users

#### Get a specific user

```
GET /api/users/:id
```

**Response:** User object

#### Create a new user

```
POST /api/users
```

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "555-1234",
  "address": "123 Main St, New York, NY 10001"
}
```

**Response:** Created user object with generated ID

#### Update a user

```
PUT /api/users/:id
```

**Request Body:** (all fields optional)

```json
{
  "name": "Updated Name",
  "email": "newemail@example.com",
  "phone": "555-5678",
  "address": "456 Oak Ave"
}
```

**Response:** Updated user object

#### Delete a user

```
DELETE /api/users/:id
```

**Response:** Confirmation with deleted user details

---

### Products

#### Get all products

```
GET /api/products
```

**Response:** Array of all products

#### Get a specific product

```
GET /api/products/:id
```

**Response:** Product object

#### Create a new product

```
POST /api/products
```

**Request Body:**

```json
{
  "name": "Laptop",
  "description": "High-performance laptop",
  "price": 999.99,
  "stock": 15
}
```

**Response:** Created product object with generated ID

#### Update a product

```
PUT /api/products/:id
```

**Request Body:** (all fields optional)

```json
{
  "name": "Updated Product Name",
  "description": "Updated description",
  "price": 899.99,
  "stock": 20
}
```

**Response:** Updated product object

#### Delete a product

```
DELETE /api/products/:id
```

**Response:** Confirmation with deleted product details

---

### Orders

#### Get all orders

```
GET /api/orders
```

**Response:** Array of all orders

#### Get a specific order

```
GET /api/orders/:id
```

**Response:** Order object

#### Get all orders for a specific user

```
GET /api/orders/user/:userId
```

**Response:** Array of orders for the user

#### Create a new order

```
POST /api/orders
```

**Request Body:**

```json
{
  "userId": 1,
  "products": [
    { "productId": 1, "quantity": 2 },
    { "productId": 3, "quantity": 5 }
  ],
  "totalAmount": 1059.97,
  "shippingAddress": "123 Main St, New York, NY 10001"
}
```

**Response:** Created order object with status "pending" and current date

#### Update an order

```
PUT /api/orders/:id
```

**Request Body:** (all fields optional)

```json
{
  "status": "shipped",
  "shippingAddress": "789 Pine Rd, Chicago, IL 60601"
}
```

**Response:** Updated order object

#### Delete an order

```
DELETE /api/orders/:id
```

**Response:** Confirmation with deleted order details

---

## Data Files

All data is stored in JSON files in the `/data` directory:

- `data/users.json` - User records
- `data/products.json` - Product catalog
- `data/orders.json` - Order records

Each file is automatically read and written by the API.

## Example Usage

### Using curl

**Create a new product:**

```bash
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Headphones",
    "description": "Wireless noise-cancelling headphones",
    "price": 199.99,
    "stock": 30
  }'
```

**Get all products:**

```bash
curl http://localhost:5000/api/products
```

**Update a product:**

```bash
curl -X PUT http://localhost:5000/api/products/1 \
  -H "Content-Type: application/json" \
  -d '{
    "price": 179.99,
    "stock": 25
  }'
```

**Delete a product:**

```bash
curl -X DELETE http://localhost:5000/api/products/1
```

### Using Postman

1. Open Postman
2. Create a new request
3. Select HTTP method (GET, POST, PUT, DELETE)
4. Enter URL: `http://localhost:5000/api/{resource}/{id}`
5. Add JSON body for POST/PUT requests
6. Send

## CORS Support

The API has CORS enabled, so you can make requests from any origin.

## Error Handling

- **404**: Resource not found
- **400**: Bad request (missing required fields)
- **500**: Server error (file write issues)

## Sample Data

The API comes pre-populated with sample data:

**Users:**

- John Doe
- Jane Smith
- Bob Johnson

**Products:**

- Laptop ($999.99)
- Wireless Mouse ($29.99)
- USB-C Cable ($12.99)
- Monitor ($399.99)
- Keyboard ($149.99)

**Orders:**

- 3 sample orders with various statuses

## Development Notes

- The API automatically generates IDs for new resources
- Dates are stored in YYYY-MM-DD format
- All prices are in USD
- No authentication/authorization is implemented (for demo purposes)
- Data persists in JSON files across API restarts
