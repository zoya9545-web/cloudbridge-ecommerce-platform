const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>CloudBridge Store</title>
        <style>
          body {
            font-family: Arial;
            background-color: #f4f4f4;
            text-align: center;
            padding: 40px;
          }

          .container {
            background: white;
            padding: 30px;
            border-radius: 10px;
            width: 60%;
            margin: auto;
            box-shadow: 0 0 10px gray;
          }

          .product {
            border: 1px solid #ddd;
            padding: 20px;
            margin-top: 20px;
            border-radius: 10px;
          }

          button {
            background-color: green;
            color: white;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 5px;
          }

          button:hover {
            background-color: darkgreen;
          }
        </style>
      </head>

      <body>
        <div class="container">
          <h1>🛒 CloudBridge E-Commerce Store</h1>
          <h2>DevOps Project Running Successfully 🚀</h2>

          <div class="product">
            <h3>Samsung Fold 5</h3>
            <p>Price: ₹120000</p>
            <button>Buy Now</button>
          </div>

          <div class="product">
            <h3>Laptop</h3>
            <p>Price: ₹55000</p>
            <button>Buy Now</button>
          </div>

        </div>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('CloudBridge Store running on port 3000');
});
