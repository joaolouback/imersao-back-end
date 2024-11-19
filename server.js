import express from 'express';

const posts = [
    {
      id: 1,  
      descricao: "Gato adorável fazendo pose",
      imagem: "https://placekitten.com/400/300"
    },
    {
      id: 2,  
      descricao: "Paisagem deslumbrante ao pôr do sol",
      imagem: "https://picsum.photos/seed/picsum/600/400"
    },
    {
      id: 3,  
      descricao: "Cachorro brincando no parque",
      imagem: "https://placepup.com/300/200"
    },
    {
      id: 4,  
      descricao: "Montanha coberta de neve",
      imagem: "https://source.unsplash.com/random/600x400/?mountain"
    },
    {
      id: 5,  
      descricao: "Comida deliciosa em um restaurante",
      imagem: "https://loremflickr.com/640/480/food"
    }
  ];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log('Servidor escutando...');
});

function buscarPostId(id){
    return posts.findIndex((post) => {
        return post.id === Number(id);

    });

};

app.get('/posts/:id', (req, res) =>{
    const index = buscarPostId(req.params.id);
    res.status(200).json(posts[index]);
});