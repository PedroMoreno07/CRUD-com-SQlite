import app from "./app.js";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor executando em http://localhost:${PORT}`);
});
