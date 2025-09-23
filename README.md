
## Integrantes : 
- Nome: João Victor Aguiar  | RA:
- Nome:  Jhonattan de Carvalho Romão Venturini | RA - 03.23.158791-3
- Nome:  | RA:  
- Nome:  | RA:
- Nome:  | RA: 
---
# Choconessa - E-commerce de Chocolates 🍫

Bem-vindo ao repositório oficial do Choconessa, um projeto de e-commerce completo para uma loja de chocolates artesanais. Este projeto é construído com um backend robusto em Python e um frontend moderno e reativo em React.

## 🎯 Objetivo do Projeto

O objetivo principal do Choconessa é criar uma plataforma de vendas online completa e funcional. Isso inclui:

- **Para o Cliente:** Uma interface amigável e intuitiva para navegar pelos produtos, adicionar itens ao carrinho e finalizar compras de forma segura.
- **Para o Administrador:** Um sistema de gerenciamento que permita adicionar, editar e remover produtos, controlar o estoque e visualizar os pedidos realizados.

---

## 🛠️ Tecnologias Utilizadas

Este projeto é dividido em duas partes principais:

- **Backend (`choconessa-backend`):**
  - **Linguagem:** Python 3.8+
  - **Framework:** (Flask / FastAPI)
  - **Gerenciador de Pacotes:** Pip

- **Frontend (`choconessa-frontend`):**
  - **Framework:** React 18+
  - **Build Tool:** Vite
  - **Linguagem:** JavaScript (JSX)
  - **Gerenciador de Pacotes:** npm
  - **Estilização:** CSS puro / CSS Modules

---

## ✅ Pré-requisitos

Antes de começar, certifique-se de que você tem as seguintes ferramentas instaladas em sua máquina:

- [**Git**](https://git-scm.com/)
- [**Python 3.8**](https://www.python.org/downloads/) ou superior
- [**Node.js v18**](https://nodejs.org/en/) ou superior (que inclui o npm)
- Um editor de código de sua preferência, como o [**VS Code**](https://code.visualstudio.com/)

---

## 🚀 Como Executar Localmente

Siga os passos abaixo para clonar e executar o projeto em seu ambiente de desenvolvimento.

### 1. Clonar o Repositório

Primeiro, clone este repositório para a sua máquina local:

```bash
git clone [https://github.com/seu-usuario/choconessa-site-essencial.git](https://github.com/seu-usuario/choconessa-site-essencial.git)
cd choconessa-site-essencial
```

## 2. Configurar e Rodar o Backend
O backend é responsável por toda a lógica de negócio, API e comunicação com o banco de dados.
```
# 1. Navegue até a pasta do backend
cd choconessa-backend
```
## 2. Crie e ative um ambiente virtual (virtual environment)
Em Windows:
```
python -m venv venv
.\venv\Scripts\activate
```
Em macOS/Linux:
```
python3 -m venv venv
source venv/bin/activate
```
3. Instale as dependências do Python:
```
pip install -r requirements.txt
```
4. Inicie o servidor backend
```
python src/main.py
```
OBS:O servidor backend estará rodando, geralmente em http://127.0.0.1:5000.

## 3. Configurar e Rodar o Frontend
O frontend é a interface com a qual o usuário interage, construída em React.

Abra um NOVO terminal e navegue até a pasta do frontend
```
cd choconessa-frontend
```
2. Instale as dependências do Node.js
```
npm install --force ou npm install 
```
3. Inicie o servidor de desenvolvimento
```
npm run dev
```
A aplicação React estará disponível em seu navegador, geralmente em http://localhost:5173.

## 🔮 Roadmap e Futuras Melhorias

Este projeto está em constante evolução! Abaixo estão as próximas funcionalidades e melhorias planejadas para tornar a plataforma Choconessa ainda mais completa.

#### ⚙️ Backend
- [ ] 🔐 **Autenticação de Usuário:** Implementar um sistema robusto de login e registro com JWT (JSON Web Tokens).
- [ ] 💳 **Gateway de Pagamento:** Integrar com uma solução de pagamento online (Stripe, PagSeguro, etc.) para permitir transações reais.
- [ ] 📊 **Painel de Administrador:** Criar endpoints específicos para um dashboard de admin, com insights sobre vendas e produtos.
- [ ] 🧪 **Cobertura de Testes:** Escrever testes unitários e de integração para garantir a estabilidade e confiabilidade da API.

#### 🎨 Frontend & UI/UX
- [ ] 👤 **Página de Perfil do Usuário:** Desenvolver uma área onde o cliente possa ver seu histórico de pedidos e gerenciar seus dados.
- [ ] 🔄 **Gerenciamento de Estado Global:** Adotar uma biblioteca como Redux Toolkit ou Zustand para um controle mais eficiente do carrinho e da sessão do usuário.
- [ ] 📱 **Design Responsivo:** Refinar a interface para garantir uma experiência de compra perfeita em desktops, tablets e celulares.
- [ ] 🛒 **Fluxo de Checkout Otimizado:** Construir uma página de finalização de compra intuitiva e de múltiplos passos.

#### 🚀 DevOps & Infraestrutura
- [ ] 🐳 **Containerização com Docker:** Criar os arquivos `Dockerfile` e `docker-compose.yml` para simplificar o ambiente de desenvolvimento e preparar para produção.
- [ ] 🤖 **Automação de CI/CD:** Configurar um pipeline no GitHub Actions para automatizar os testes e o deploy do projeto a cada atualização.
