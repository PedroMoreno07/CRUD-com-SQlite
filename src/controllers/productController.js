import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createProduct = async (req, res) => {
  const { name, description, price, stock } = req.body;
  try {
    const newProduct = await prisma.product.create({
      data: {
        name,
        description,
        price,
        stock,
      },
    });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({
      mensagem: "Error ao criar o novo produto",
      erro: error.message,
    });
  }
};
export const getAllProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      mensagem: "Usuarios não encontrado",
      erro: error.message,
    });
  }
};
export const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await prisma.product.findUnique({
      where: { id: parseInt(id) },
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      mensagem: "Erro ao pegar o produto",
      erro: error.message,
    });
  }
};
