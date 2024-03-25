# Petshop Consultas

Este é um sistema de gestão de consultas para um Petshop, desenvolvido como parte de um desafio de programação. O projeto foi construído usando Node.js no lado do servidor e React no lado do cliente.

## Funcionalidades

- **Listar Consultas:** Exibe todas as consultas agendadas, incluindo informações sobre o pet, o cliente, o horário e o status.
- **Agendar Consulta:** Permite o agendamento de novas consultas com informações sobre o pet, cliente, data e horário.
- **Atualizar Status da Consulta:** Permite a atualização do status da consulta (por exemplo, de "Agendada" para "Concluída").
- **Filtrar Consultas:** Implementa filtros para visualizar consultas por status, data, cliente, etc.

## Requisitos Técnicos

- **Backend (Node.js):**
  - Utiliza Node.js para criar o servidor.
  - Utiliza o framework Express.js para lidar com rotas e requisições HTTP.
  - Armazena os dados das consultas em um banco de dados SQL (SQLite).

- **Frontend (React):**
  - Utiliza React para criar a interface do usuário.
  - Utiliza componentes funcionais e hooks para gerenciar o estado.

- **Comunicação Frontend e Backend:**
  - Estabelece uma comunicação eficiente entre o frontend e o backend por meio de requisições HTTP (RESTful).

- **Estilo:**
  - Utiliza o framework Bootstrap para estilização.

- **Testes:**
  - Inclui testes automatizados para validar funcionalidades principais da aplicação, usando Jest.

## Configuração e Execução

1. **Instalação de Dependências:**
   - Execute `npm install` tanto no diretório raiz quanto no diretório `frontend` para instalar todas as dependências do projeto.

2. **Configuração do Banco de Dados:**
   - Certifique-se de que o banco de dados SQLite esteja configurado corretamente.

3. **Execução do Servidor:**
   - No diretório raiz, execute `npm start` para iniciar o servidor backend.

4. **Execução do Cliente:**
   - No diretório `frontend`, execute `npm start` para iniciar o servidor de desenvolvimento do React.

5. **Acesso à Aplicação:**
   - Acesse a aplicação em `http://localhost:3000` no seu navegador.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues caso encontre algum problema ou para propor melhorias.

## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).

---
