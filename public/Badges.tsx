import React from 'react';
import Image from 'next/image';
import { relative } from 'path';

const Badges = () => {
  return (
    <div style={{ width: '50%', height: '100%', zIndex: 0, top: 0, right: 0, opacity: 0.9, display: 'flex', justifyContent: 'flex-end', position: 'relative' }}>
        <Image
            src="/badges.png"
            alt='Badges'
            width={"410"}
            height={"50"}            
        >
        </Image>

    </div>
  )
}

export default Badges
