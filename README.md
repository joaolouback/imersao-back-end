
# Imersão Back-End Alura 🚀

Este é o projeto desenvolvido durante a **Imersão Back-End** da Alura.  
A aplicação consiste em uma API funcional que permite gerenciar publicações (posts) e está hospedada na **Google Cloud**.  
O banco de dados utilizado é o **MongoDB**, integrado ao projeto.

## 🌐 Acesse a API

A API está disponível publicamente no link:  
[Imersão Back-End API](https://imersao-back-end-181004254226.southamerica-east1.run.app/posts)

## 🛠 Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **MongoDB**
- **Google Cloud Run**
- **Gemini do Google** (para geração automática de descrições)

---

## 🚀 Como Utilizar a API

### Estrutura de um Post

Um **post** é composto por:  
```json
{
  "descricao": "Título do Post",
  "imgUrl": "Url da imagem",
  "alt": "alt da imagem"
}
```

A descrição é gerada automaticamente pelo **Gemini do Google**, e você só precisa fornecer os outros campos.

### Endpoints Disponíveis

1. **GET** `/posts`  
   Retorna todos os posts do banco de dados.
    ```bash
    http://localhost:3000/posts
   ```

3. **POST** `/posts`  
   Cria um novo post no banco de dados.  
   Exemplo de body:
   ```json
   {
     "imgUrl": "https://exemplo.com/imagem.jpg",
     "alt": "Descrição alternativa da imagem"
   }
   ```

4. **PUT** `/posts/:id`  
   Atualiza o campo `alt` de um post existente.  
   Exemplo de body:
   ```json
   {
     "alt": "Nova descrição alternativa da imagem"
   }
   ```
 5. **DELETE** `/posts/:id`  
  Será implementado brevemente.

---

## 💻 Repositório do Front-End

O projeto possui uma interface front-end que consome esta API.  
Confira o repositório do front-end aqui:  
[Repositório Front-End](https://github.com/joaolouback/imersao-back-end-front)

---

## 🏗 Estrutura do Projeto

- **`server.js`**: Arquivo principal para configuração do servidor.
- **`src/`**: Contém os módulos principais da aplicação, como rotas e controladores.
- **`uploads/`**: Diretório para armazenamento de arquivos enviados.
- **`package.json`**: Configuração de dependências do Node.js.
- **`services.sh`**: Script de automação para o projeto.

---

## 🚀 Como Rodar Localmente

### Pré-requisitos:

- **Node.js** instalado.
- Uma conta no **MongoDB Atlas** (ou outro banco MongoDB configurado).

### Passo a Passo:

1. Clone este repositório:
   ```bash
   git clone https://github.com/joaolouback/imersao-back-end
   cd imersao-back-end-main
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:  
   Crie um arquivo `.env` na raiz do projeto e adicione:  
   ```env
   MONGO_URI=seu_link_de_conexao_mongodb
   PORT=3000
   ```

4. Inicie o servidor:
   ```bash
   npm start
   ```

5. Acesse a API em:  
   [http://localhost:3000/posts](http://localhost:3000/posts)

---

## 🌟 Demonstração

https://github.com/user-attachments/assets/43600fbf-72a2-4e1a-8d83-3ea472786617

---

## 🛡️ Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

---

Feito com ❤️ durante a Imersão Back-End da Alura.
