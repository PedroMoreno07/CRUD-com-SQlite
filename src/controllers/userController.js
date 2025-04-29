export const getAllusers = (req, res) => {
  res.status(200).json({
    mensagem: "Rota GET funcionando",
  });
};
export const createUsers = (req, res) => {
  const { nome, email } = req.body;
  res.status(201).json({
    nome: nome,
    email: email,
  });
};
