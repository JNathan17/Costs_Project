import { useNavigate} from 'react-router-dom'

import ProjectForm from '../Project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject(){

    const navigate = useNavigate()

    function createPost(project){

        //iniciaçao cost e services
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects',{
            method: "POST",
            headers:{
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project)//para enviar como string 
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            navigate('/projects', {message: 'projeto criado com sucesso!'})
        })
        .catch(err => console.log(err))

    }

    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para adicionar serviços</p>
            <ProjectForm  handleSubmit={createPost} btnText="Criar Projeto" />
        </div>
    )
}

export default NewProject