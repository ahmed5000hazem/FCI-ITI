var express = require("express");
var app = express();
var mongoose = require("mongoose");
var ObjectID = require("mongodb").ObjectId;
var bodyParser = require("body-parser");

var Products = require("./ProductController");
const { async } = require("rxjs");

mongoose
  .connect(
    "mongodb+srv://mohamed991:e4NDaKPX9hIDT6t7@cluster-online-shopping.smygccd.mongodb.net/Online-Shopping?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());

app.get("/all-products", function (reg, res) {
  Products.find().then((data) => {
    res.send(data);
  });
});

app.get("/electronics", function (reg, res) {
  const query = { category: "electronics" };
  Products.find(query).then((data) => {
    res.send(data);
  });
});

app.get("/men", function (reg, res) {
  const query = { category: "men's clothing" };
  Products.find(query).then((data) => {
    res.send(data);
  });
});
app.get("/women", function (reg, res) {
  const query = { category: "women's clothing" };
  Products.find(query).then((data) => {
    res.send(data);
  });
});

app.get("/product/:id", function (req, res) {
  
  var product = { _id: req.params.id };
  Products.findOne(product).then( (data) => {
    this.product = data
    var relative = { $and: [ { category: this.product.category }, { _id : { $ne: this.product._id } } ] };
    Products.find(relative).then( (data) => this.relative = data );
  } );
  

  product = this.product
  relative = this.relative
  let data = {
    product,
    relative
  }

  res.send(data);
});

// insert
app.post("/insert", function (req, res) {
  console.log("data comming");
  console.log(req.body);

  if (!req.body) {
    console.log("Empty");
    return;
  }
  let productToInserted = new Products({
    title: req.body.title,
    price: req.body.price,
    category: req.body.category,
    image: req.body.image,
    description: req.body.description,
  });

  productToInserted.save().then((data) => {
    res.send(data);
    console.log("Inserted");
  });
});

// update
app.post("/update", function (req, res) {
  console.log("data coming");
  console.log(req.body);

  if (!req.body) {
    console.log("Empty");
    return;
  }

  let updatedProduct = {
    title: req.body.title,
    price: req.body.price,
    category: req.body.category,
    image: req.body.image,
    description: req.body.description,
  };

  const id = req.body.id;

  query = { _id: ObjectID(id) };

  Products.findOneAndUpdate(query, updatedProduct, {
    new: true,
  }).then((data) => {
    console.log("Updated");
    return res.send(data);
  });
});

// delete
app.post("/delete", async function (req, res) {
  console.log("data coming");
  console.log(req.body);

  if (!req.body) {
    console.log("Empty");
    return;
  }
  const id = req.body.id;

  query = { _id: ObjectID(id) };

  Products.fin;
  Products.findOneAndDelete(query).then((data) => {
    return res.send(data);
  });
});

// delete All
app.get("/delete-all", async function (req, res) {
  console.log("Delete All ");
  Products.deleteMany({}).then((data) => {
    return res.send(data);
  });
});

app.listen(4000, function () {
  console.log("App listening...");
});