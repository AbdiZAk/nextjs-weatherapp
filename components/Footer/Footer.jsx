import React from 'react';
import styles from './Footer.module.scss'
import Container from '../Container/Container'
import Link from 'next/link';
import ImageLink from '../ImageLink/ImageLink';

const Footer = () => {
    return (

        <footer className={styles.footer}>
            <Container>
                <div className={styles.footer_items}>
                    <p>Copyright  &copy; 2023, Abdirezak Yusuf.</p>
                        <div>
                            <ImageLink 
                                link={'https://linkedin.com/in/abdirezak-yusuf-a86944233/'}
                                slug={'/icons/linkedin.svg'}    
                            />
                            <ImageLink 
                                link={'https://github.com/AbdiZAk/'}
                                slug={'/icons/github.svg'}    
                            />

                        </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
