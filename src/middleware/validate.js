// Requisição -> Middleware -> Rota(Controllers) -> Resposta

// function middleware(req, res, next){
/*
    1. fazer algo com a requisição
    -> Validar Informações
    -> Verificar se o usr tem conta
    2. Modificar a resposta
    -> dar uma resposta ao cliente
    3. Chamar o next() para passar para 
    o próximo middleware(agente)
    ou encerra com res.send()v
*/ //}

export function validate(schema) {
  return (req, res, next) => {
    try {
      /* Validar o corpo da requisição contra o schema fornecido*/
      const validatedData = schema.parse(req.body);

      /* Substituir o body pelos dados validados */
      req.body = validatedData;

      /* Chamo o próximo agente(middleware) */
      next();
    } catch (error) {
      return res.status(400).json({
        message: "Erro de validação",
        erros: error.errors.map((e) => ({
          path: e.path,
          message: e.message,
        })),
      });
    }
  };
}
