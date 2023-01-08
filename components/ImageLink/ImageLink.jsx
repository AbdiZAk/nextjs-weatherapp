import Image from 'next/image';
import Link from 'next/link';
import styles from './ImageLink.module.scss';

import React from 'react';

const ImageLink = ({link, slug}) => {
  return (
    <Link href={link}>
        <Image 
            className={styles.icons}
            src={slug}
            alt="github"
            width={30}
            height={30}
        />
    </Link>
  )
}

export default ImageLink
