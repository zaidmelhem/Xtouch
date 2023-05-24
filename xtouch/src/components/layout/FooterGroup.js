import { Container } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid';
import FooterFormSection from './FooterFormSection';
import { Link } from 'react-router-dom';
import { footMenu } from '../../data/Footer';
import Title from '../SharedComponents/Title';
import './style.css'
const FooterGroup = () => {
  return (
    <Container maxWidth="xl" sx={{mt:5,pm:5}}>
      <Grid container spacing={3}>
      <Grid item xs={6} md={4} lg={3}>
        <FooterFormSection/>
      </Grid>
      {
        footMenu.map(item => {
            const { id, title, menu } = item;
            return (
                <Grid item xs={6} md={4} lg={3} key={id}>
                 <Title title={title} size={"15px"} />
                    <ul>
                        {
                            menu.map(item => {
                                const { id, link, path } = item;
                                return (
                                    <li key={id} className='li'>
                                        <Link className='alink' to={path}>{link}</Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
        </Grid>
                
            );
        })
    }
        
      </Grid>
    </Container>
  )
}

export default FooterGroup