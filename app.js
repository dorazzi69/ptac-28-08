import express from 'express';

const app = express();

const PORT = 3000;

const usuarios = [
  {id: 1, nome: 'Pedro'},
  {id: 2, nome: 'Sarah'},
];

const produtos = [
  {id: 1, nome: 'Notebook', categoria: 'Eletrônicos'},
  {id: 2, nome: 'Celular', categoria: 'Eletrônicos'},
  {id: 3, nome: 'Camisa', categoria: 'Roupas'},
  {id: 4, nome: 'Calça', categoria: 'Roupas'},
];

app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

app.post('/usuario', (req, res) => {
  const novoUsuario = {
    id: usuarios.length + 1,
    nome: 'João'
  };

  usuarios.push(novoUsuario);

  res.status(201).json(novoUsuario);
});

app.get('/produtos/:id', (req, res) => {
  const id = req.params.id;

  const produto = produtos.find(produto => produto.id == id);

  if (!produto) {
    res.status(404).json({ mensagem: 'Produto não encontrado' });
  } else {
    res.json(produto);
  }
});

app.get('/produtos', (req, res) => {
  const categoria = req.query.categoria;

  const produtosFiltrados = produtos.filter(
    produto => produto.categoria == categoria
  );

  res.json(produtosFiltrados);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});