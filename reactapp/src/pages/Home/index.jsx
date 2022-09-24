// ===================================================== Hooks ===========================================================
// Importação de Hooks
import React, { useState, useEffect } from 'react'; 
/* Hooks do react iniciam com `use`
  useState - Armazena um determinado conteudo dentro de um estado e conectar esse conteudo com a nossa interface, para que 
a interface inicie um novo ciclo toda vez que o conteudo mudar
*/ 

import './styles.css';

// ============================================= Importando arquivos CSS ================================================= 
import { Card } from '../../components/Card';

export function Home() { /* Uma expressão JSX deve ter um unico elemento filho */

  // =================================================== Estado ========================================================== 

  // Estado que armazena o nome dos estudantes
  const [
    studentName,      // Local onde será armazenado o conteudo do estado
    setStudentName    // Função que atualiza o estado
  ] = useState('');

  // Estado que armazena os estudantes
  const [students,setStudents] = useState([]);
  const [user, setUser] = useState({ name: '', avatar: '' })

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };

    // Pega o Estudante anterior e adiciona junto com o novo em um novo array
    setStudents(prevState => [...prevState, newStudent]);
  }

  /* useEffect é executado automaticamente assim que a interface for renderizada
    {} - Corpo contendo as Ações
    [] - Dependencias, caso esteja vazia será executada uma unica vez
  */
  useEffect(() => {            
    // =========================================== Consumindo API ==========================================================                                  
    /*
    fetch('https://api.github.com/users/Renanfls')
    .then(response => response.json())
    .then(data => {
      setUser({
        name: data.name,
        avatar: data.avatar_url
      });
    })
    */
    // ========================================== useEffect Async ======================================================
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/Renanfls');
      const data = await response.json();
      setUser({
        name: data.name,
        avatar: data.avatar_url
      });
    }

    fetchData();
  }, []);

  return (
    // ============================================== Fragment ==========================================================
    /* 
    Embrulha todos os elementos, retonando um pacote sendo um unico elemento
    <> 
      <h1>Lista de Presença</h1>
      <input type="text" placeholder="Digite o nome..." />
      <button type="button">Adicionar</button>
    </>
    */

    /* Podemos embrulhar os elementos com uma <div> tambem */
    /* Atribuimos class no react com 'className'*/
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil" />
        </div>
      </header>

      <input 
      type="text" 
      placeholder="Digite o nome..." 
      /* Toda vez que o conteudo do input mudar ele entrega um evento(`e`) e acessa(`=>`) qual o valor atual 
      que esta dentro do input e passa para a função*/
      onChange={e => setStudentName(e.target.value)}
      />

      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>

      { // ======================================== Componentes/Propriedades ===========================================
        /* 
        Propriedades podem ser definidas como: 
        'Rodrigo' e "Rodrigo" - String
        {8} - Valor numerico
        */
        /* <Card /> - Component Card */
        // Em cada iteração o estudante é armazenado em `student` e em seguida renderizando um Card
        students.map(student => (
          <Card 
            key={student.time}    // Deve ser uma chave unica
            name={student.name} 
            time={student.time} 
          />
        ))
      }
    </div>
  )
}
