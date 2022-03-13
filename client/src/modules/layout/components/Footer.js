import React from 'react';
import { Box, Typography } from '@material-ui/core'

const Footer = () => {
    return (
        <Box component="div" sx={{ backgroundColor: '#9c27b0', height: '50px', position: 'fixed', width: '100%', bottom: 0, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }} >
            <Box component='span' sx={{ fontWeight: 500 }}>Powered by Adi N.</Box>
            <Box component='div' sx={{ display: 'flex', flexDirection: 'row' }}>
                <a className="footerLink" href="https://github.com/adrianbogdann" target="_blank" rel="noreferrer">Github</a>
                <a className="footerLink" href="https://www.linkedin.com/in/adrian-nistor-873802139/" target="_blank" rel="noreferrer">LinkedIn</a>
            </Box>
        </Box>
    );
}

export default Footer;