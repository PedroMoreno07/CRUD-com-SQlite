import { PrismaClient } from "@prisma/client";
import { generateToken, hashPassword } from "../utils/auth.js";
const prisma = new PrismaClient();

export const getAllusers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      mensagem: "Usuarios não encontrado",
      erro: error.message,
    });
  }
};
export const createUsers = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: { name, email, password },
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({
      mensagem: "Error ao criar o novo  usuario",
      erro: error.message,
    });
  }
};
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await prisma.user.delete({
      where: { id: Number(id) },
    });
    res.status(200).json(deleteUser);
  } catch (error) {
    res.status(400).json({
      mensagem: "Error ao deletar o usuario",
      erro: error.message,
    });
  }
};
export const updateUsers = async (req, res) => {
  const id = req.params.id;
  const { name, email, password } = req.body;
  try {
    const updateUser = await prisma.user.update({
      where: { id: parseInt(id) },
      data: { name, email, password },
    });
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(400).json({
      mensagem: "Error ao atualizar, usuario não encontrado!",
      erro: error.message,
    });
  }
};
export const getUserId = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      mensagem: "Error ao procurar o usuario, usuario não encontrado!",
      erro: error.message,
    });
  }
};

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    //criar a senha do usuario hasheada
    const hashedPassword = await hashPassword(password);

    //Cria usuario no banco de dados
    const newRegistedUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
      },
    });
    // gerar token JWT
    const token = generateToken(newRegistedUser);
    res.status(201).json({
      name: newRegistedUser.name,
      email: newRegistedUser.email,
      token: token,
    });
  } catch (error) {
    res.status(400).json({
      error: "erro ao criar o usuário",
      detalhes: error.message,
    });
  }
};
