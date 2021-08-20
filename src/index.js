const customExpress = require("./config/customExpress");
const conexao = require("./infra/database/conexao");
const Tabelas = require("./infra/tabelas");

conexao.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("conectado com sucesso");
    Tabelas.init(conexao);

    const app = customExpress();

    app.listen(3000, () => {
      console.log("servidor rodando na porta 3000");
    });
  }
});
