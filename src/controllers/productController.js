import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllProducts = async (req, res) => {
  try {
    const products = prisma.product.findMany();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      mensagem: "Usuarios não encontrado",
      erro: error.message,
    });
  }
};

export const createProduct = async (req, res) => {
  const { name, description, price, stock, createdAt } = req.body;
  try {
    const newProduct = prisma.product.create({
      name,
      description,
      price,
      stock,
      createdAt,
    });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({
      mensagem: "Error ao criar o novo produto",
      erro: error.message,
    });
  }
};
