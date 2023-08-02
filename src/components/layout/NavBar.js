import {Link} from 'react-router-dom'

import Container from './Container'

import styles from './NavBar.module.css'
import logo from '../../img/costs_logo.png'

function NavBar(){
    return(
        <div>
            <nav class={styles.navbar}>
                <Container>
                    <Link to="/">
                        <img src={logo} alt="Costs"></img>
                    </Link>
                    <ul class = {styles.list}>
                        <li className = {styles.item}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className = {styles.item}>
                            <Link to="/projects">Projetos</Link>
                        </li>
                        <li className = {styles.item}>
                            <Link to="/company">Company</Link>
                        </li >
                        <li className = {styles.item}>
                            <Link to="/contact">Contact</Link>
                        </li >
                    </ul>
                </Container>
            </nav>
        </div>
    )
}

export default NavBar