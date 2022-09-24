import React from 'react';
import ReactDOM from 'react-dom';

import './styles/global.css'; /* Já com arquivo css é necessario declarar a extensao */

// É necessario envolver a função com {}, pois não estamos declarando o default na exportação no arquivo `index.jsx` e sim um export direto na função 
import { Home } from './pages/Home'; /* Arquivos JSX não é necessario declarar a extensao */

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
)
