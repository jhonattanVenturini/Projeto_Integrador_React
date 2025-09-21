# Choconessa - Site de Doces Artesanais

## Instruções de Instalação e Uso

### Pré-requisitos
- Node.js (versão 18 ou superior)
- Python 3.11 ou superior
- npm ou pnpm

### Instalação do Backend (Flask)

1. Navegue até a pasta do backend:
```bash
cd choconessa-backend
```

2. Crie um ambiente virtual:
```bash
python -m venv venv
```

3. Ative o ambiente virtual:
- Windows: `venv\Scripts\activate`
- Linux/Mac: `source venv/bin/activate`

4. Instale as dependências:
```bash
pip install -r requirements.txt
```

5. Execute o servidor Flask:
```bash
python src/main.py
```

O backend estará rodando em `http://localhost:5000`

### Instalação do Frontend (React)

1. Navegue até a pasta do frontend:
```bash
cd choconessa-frontend
```

2. Instale as dependências:
```bash
npm install
# ou
pnpm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
pnpm run dev
```

O frontend estará rodando em `http://localhost:5173`

### Funcionalidades Implementadas

✅ **Sistema de Autenticação**
- Registro de novos usuários
- Login/logout
- Sessões persistentes

✅ **Catálogo de Produtos**
- Visualização de produtos por categoria
- Detalhes dos produtos
- Preços e descrições

✅ **Carrinho de Compras**
- Adicionar produtos ao carrinho (apenas usuários logados)
- Remover produtos do carrinho
- Visualizar total da compra
- Contador de itens no header

✅ **Páginas Institucionais**
- Home com apresentação da marca
- Sobre Nós com história da empresa
- Contatos com formulário e informações

✅ **Design Responsivo**
- Layout adaptável para desktop e mobile
- Cores e tipografia baseadas no design fornecido
- Componentes reutilizáveis

### Estrutura do Projeto

```
choconessa-frontend/
├── src/
│   ├── components/     # Componentes reutilizáveis
│   ├── pages/         # Páginas da aplicação
│   ├── lib/           # Utilitários
│   └── App.jsx        # Componente principal
└── public/            # Arquivos estáticos

choconessa-backend/
├── src/
│   ├── models/        # Modelos do banco de dados
│   ├── routes/        # Rotas da API
│   └── main.py        # Arquivo principal
└── requirements.txt   # Dependências Python
```

### Banco de Dados

O projeto utiliza SQLite com as seguintes tabelas:
- **users**: Usuários do sistema
- **products**: Catálogo de produtos
- **cart_items**: Itens do carrinho de compras

### API Endpoints

- `GET /api/products` - Lista todos os produtos
- `POST /api/register` - Registro de usuário
- `POST /api/login` - Login de usuário
- `POST /api/logout` - Logout de usuário
- `GET /api/me` - Dados do usuário logado
- `GET /api/cart` - Itens do carrinho
- `POST /api/cart/add` - Adicionar item ao carrinho
- `DELETE /api/cart/remove/<id>` - Remover item do carrinho

### Observações Importantes

1. **Autenticação Obrigatória**: Usuários devem estar logados para adicionar itens ao carrinho
2. **Dados de Teste**: O sistema já vem com produtos pré-cadastrados
3. **Desenvolvimento**: Os servidores devem rodar simultaneamente (backend na porta 5000, frontend na porta 5173)
4. **Proxy**: O frontend está configurado para fazer proxy das requisições `/api` para o backend

### Próximos Passos para Produção

Para colocar o site em produção, você pode:
1. Fazer deploy do backend em serviços como Heroku, Railway ou DigitalOcean
2. Fazer deploy do frontend em serviços como Vercel, Netlify ou GitHub Pages
3. Configurar um banco de dados PostgreSQL para produção
4. Configurar variáveis de ambiente para URLs de produção

O projeto está 100% funcional e pronto para uso!

