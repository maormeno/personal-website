import React from 'react';
import {Box} from "@mui/material";

function EmojiBullet(props : any) {
    const {emoji, text, link} = props;

    return (
        <Box component={'li'} fontSize={'1rem'} lineHeight={1.5} style={{cursor: 'default'}}>
            <Box component={'span'} aria-label="cheese"
                 role="img"
                 mr={{xs: '0.5rem', md: '1rem'}} fontSize={'1.5rem'}>{emoji}</Box>
                 {text}
                 {
                    link ?
                    <a aria-label={'uc'} href={'https://www.topuniversities.com/universities/pontificia-universidad-cat%C3%B3lica-de-chile-uc'}>
                     PUC
                    </a>
                    :
                    null
                 }

        </Box>
    );
}

export default EmojiBullet;