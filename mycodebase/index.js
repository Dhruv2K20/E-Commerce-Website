// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
    "sk_test_51NMZH7SCmYCmpx4nGppmszLbqEQCG9eCJdv0ZyZxBR9HKfEaIPcxtmlbNmKeWswWUeTYhOYBNksuw1ojVPXKUKe400tEeV742H"
);

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));


// app.post("/payments/create", async (request, response) => {
//     const total = request.query.total;
  
   
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: total, // subunits of the currency
//       currency: "inr",
//     });
  
//     // OK - Created
//     response.status(201).send({
//       clientSecret: paymentIntent.client_secret,
//     });
//   });

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
    // metadata: { integration_check: "accept_a_payment" },
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});


// - Listen command
exports.api = functions.https.onRequest(app);


// Example endpoint
//http://127.0.0.1:5001/mystore-site/us-central1/api