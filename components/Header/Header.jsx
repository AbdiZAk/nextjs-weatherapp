import Image from 'next/image';
import React from 'react';
import Container from '../Container/Container';
import styles from './Header.module.scss';

const Header = () => {
   
    return (
        <header className={styles.header}>
            <Container>
                <div>
                    <Image
                        src={'/images/logo.svg'} 
                        alt={'logo'}
                        width={400}
                        height={240}
                        className={styles.logo}
                    />
                </div>
            </Container>
        </header>
    );
}

export default Header;

