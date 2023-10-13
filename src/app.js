
import express from "express";

import conectaNaDatabase from
"./config/dbConnect.js";

const conexao = await conectaNaDatabase();

 conexao.on("error", (erro) => {
 console.error("erro de conexão", erro);
 });

 conexao.once("open", () => {
 console.log("Conexão com o banco feita com sucesso");
 });


const app = express();
app.use(express.json())


const cadastro = [
  {
    id: 1, nome: "José da Silva", email: "josesilva@email.com",
    telefone: 81986482565, logradouro: "Rua do Rio", cidade: "Recife",
    numero: 345, senha: "jose123"
  },

  {
    id: 2, nome: "Rihanna", email: "badgirlriri@email.com",
    telefone: "+1 545 855 565", logradouro: "Rua de Barbados", cidade: "Bridgetown",
    numero: 9855, senha: "riri123"
  }

]
app.get('/', (req, res) => {
  res.status(200).send('Inicio Emprega Aí');
})
app.get('/cadastro', (req, res) => {
  res.status(200).json(cadastro)
})

app.post('/cadastro', (req, res) => {
  cadastro.push(req.body);
  res.status(201).send('Cadastro Realizado com Sucesso!')
})

app.put('/cadastro/:id', (req, res) => {
  let index = buscaCadastro(req.params.id);
  cadastro[index].titulo = req.body.titulo;
  res.json(cadastro);
})

app.get('/cadastro/:id', (req, res) => {
  const index = buscaCadastro(req.params.id);
  res.status(201).json(cadastro[index]);

})

app.delete('/cadastro/:id', (req, res) => {
  const index = buscaCadastro(req.params.id);
  cadastro.slice(index, 1)
  res.status(201).json(cadastro)

})

function buscaCadastro(id) {
  return cadastro.findIndex(cadastro => cadastro.id == id)
}
export default app