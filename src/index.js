const express = require("express");
const dotenv = require("dotenv");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();

dotenv.config();

app.get("/api", (req, res) => {
  res.send("Selamat datang di API");
});

app.get("/products", async (req, res) => {
  const products = await prisma.product.findMany();

  res.send(products);
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Express API running in port: " + PORT);
});
