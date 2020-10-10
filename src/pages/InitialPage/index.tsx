import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi'
import { Title, Form, Repositories, Profile,Error } from './styles';
import api from '../../services/api';

interface DataUser {
  
  name:string;
  location:string;
  avatar_url:string;
  bio:string;
}

interface Repository{
  full_name:string;
  description:string;
  owner:{
    login:string;
    avatar_url:string;
  };
  html_url:string;
  
}
const InitialPage: React.FC = () => {
  const [repositories,setRepositories] = useState<Repository[]>([]);
  const [user, setUser] = useState('');
  const [inputError, setInputError] = useState('');
  const [dataUserReceived , setDataUserReceived] = useState<DataUser>();
  const handleAddRepository = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    if (!user) {
      setInputError("Digite seu nome de usuário")
      return;
    }
    try {
      const response = await api.get(`users/${user}`)
      const responseRepository = await api.get(`users/${user}/repos`)
      const userReceived = response.data;
      const repositoriesReceived = responseRepository.data;
      setDataUserReceived(userReceived);
      setRepositories( repositoriesReceived);   
      setInputError('');

      
    } catch (error) {
      console.log(error);
      setInputError("Erro na busca do usuário")

    }
  


    
  }
  return (
    <>
      <Title>
        Desafio Mestres da Web
      </Title>
      <Form  hasError={ !!inputError } onSubmit={handleAddRepository}>
        <input placeholder="Digite o nome do seu usuário GitHub" onChange={(e): void => setUser(e.target.value)} type="text" />
        <button>Pesquisar</button>
      </Form>

        {inputError && <Error>{inputError}</Error>}

      {dataUserReceived && 
    
      <Profile>
        <header>
          <img src={dataUserReceived?.avatar_url} alt="" />
          <div>
            <strong>{dataUserReceived?.name}</strong>
            <p> {dataUserReceived?.bio} </p>
          </div>
        </header>

      </Profile>
      }
      <Repositories>


      {repositories.map((repository,key)=>(
         <a href={repository.html_url} key={key}>
         <img src={repository.owner.avatar_url} alt="" />

         <div>
           <strong>{repository.full_name}</strong>
           <p>{repository.description}</p>
         </div>

         <FiChevronRight size={20} />
       </a>
      ))}
      

      </Repositories>
    
    </>
  )

}







export default InitialPage;