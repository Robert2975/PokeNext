import Image from 'next/image'
import styles from '../styles/Sobre.module.css'


export default function Sobre(){
    return(
        <div className={styles.sobre}>
            <h1>Sobre o projeto</h1>
            <p>Projeto desenvolvido pelo programador Robert Barbosa, 
            usando o framework Next.JS e API pokeApi.</p>
            <Image src="/images/charizard.png" 
                width="300" 
                height="300" 
                alt="Chari"
            />
        </div>
    )
}