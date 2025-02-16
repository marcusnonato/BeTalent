# BeTalent - Teste Prático Mobile
Bem-vindo(a) ao Teste Prático Mobile BeTalent!

Este aplicativo exibe uma tabela de colaboradores, consumindo dados de uma API simulada via json-server. A interface permite pesquisar por nome, cargo e telefone, e realiza a formatação de datas e telefones conforme solicitado.

Comandos
Instalação
bash
Copiar
Editar
yarn install
# ou
npm install
Iniciar o Servidor da API Simulada
O script está definido no package.json como:

json
Copiar
Editar
"server": "json-server --watch app/db/database.json"
Para iniciar:

bash
Copiar
Editar
yarn server
# ou
npm run server
Executar o Aplicativo no Android
bash
Copiar
Editar
npx react-native run-android
Detalhes Adicionais
API Simulada: Os dados são servidos a partir do arquivo app/db/database.json pelo json-server.
Interface: A tabela exibe a imagem (thumb), nome, cargo, data de admissão e telefone de cada colaborador, com um input que filtra os dados por esses campos.
Tecnologias: React Native CLI, json-server, Node.js, Yarn.
Aproveite o projeto!
