const Atendimento = require("../models/atendimentos");

module.exports = (app) => {
  app.get("/atendimentos", (req, res) => {
    Atendimento.lista()
      .then((atendimentos) => res.json(atendimentos))
      .catch((errors) => res.status(400).json(errors));
  });

  app.get("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id);

    Atendimento.buscaPorId(id)
      .then((atendimento) => res.json(atendimento))
      .catch((errors) => res.status(400).json(errors));
  });

  app.post("/atendimentos", (req, res) => {
    const atendimento = req.body;
    Atendimento.adiciona(atendimento)
      .then((atendimentoCadastrado) =>
        res.status(201).json(atendimentoCadastrado)
      )
      .catch((errors) => res.status(400).json(errors));
  });

  app.patch("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const valores = req.body;
    Atendimento.altera(id, valores)
      .then((atendimentoAlterado) => res.json(atendimentoAlterado))
      .catch((errors) => res.status(400).json(errors));
  });

  app.delete("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    Atendimento.deleta(id)
      .then((id) => res.json(id))
      .catch((errors) => res.status(400).json(errors));
  });
};
