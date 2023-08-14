# IP Address Tracker

O IP Address Tracker é uma aplicação web construída com React que permite aos usuários buscar endereços IP ou domínios e obter informações sobre sua localização e ISP. A aplicação também exibe a localização em um mapa interativo.

## Funcionalidades

- **Busca de IP/Domain**: Insira um endereço IP ou nome de domínio para obter os detalhes.
- **Informações de Localização**: Veja a cidade, região, fuso horário e ISP relacionado ao endereço IP/domínio.
- **Mapa Interativo**: A aplicação exibe a localização em um mapa usando a biblioteca Leaflet.

## Como Começar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (>=14.0.0)

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/your-username/ip-address-tracker.git
   cd ip-address-tracker

2. Instale as dependências:

   ```bash
   npm install

3. Execute a aplicação:

   ```bash
   npm start
Isso iniciará o servidor de desenvolvimento. Abra o navegador e acesse http://localhost:3000 para usar a aplicação.

# Dependências

- **React**: Uma biblioteca JavaScript para construir interfaces de usuário.
- **Leaflet**: Uma biblioteca JavaScript open-source para mapas interativos.
- **axios**: Um cliente HTTP baseado em promessas para fazer requisições à API.

# API Utilizada

A aplicação usa a API [http://ipwho.is](http://ipwho.is) para obter os detalhes do endereço IP/domínio.

# Estrutura do Projeto

O projeto consiste em dois componentes principais:

1. **MapComponent**: Um componente React que exibe a localização no mapa usando a biblioteca Leaflet.

2. **App**: O componente principal da aplicação. Ele lida com a entrada do usuário, busca os detalhes do endereço IP/domínio e exibe as informações.


 
