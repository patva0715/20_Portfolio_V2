import { Button, Link, Typography } from '@mui/material'
import React from 'react'
import { Box } from '@mui/material'
import HeroAnimation from '../HeroAnimation'
import { BiRightArrowAlt } from 'react-icons/bi'
const Introduction = () => {
  return (
    <Box display='flex' sx={{
      gap: 4,
      flexWrap: {xs:'wrap',sm:'nowrap'},
      height: '100vh',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
    }}>
      {/* SUMMARY ABOUT ME HERE========== */}
      <Box className='fade' sx={{
        pl: { xs: 1, md: 4 },
        flex: '350px 1 1'
      }}>
        <Typography variant='body1' fontSize='.7rem' color='primary.light' fontWeight='600'> Hello, my name is</Typography>
        <Typography variant='h1' color='primary.main' fontWeight='600'sx={{fontSize:{xs:'2.4rem',sm:'3.1rem',md:'4.5rem',lg:'6rem'}}}> Patrick Valera.</Typography>
        <Typography variant='body1' fontSize='.75rem'sx={{ width:'100%',maxWidth: '550px' }} gutterBottom>
          {`I am a Computer Science student and a web developer. I aim to deepen my understanding of various technologies and build exceptional products.`}
        </Typography>
        <Button variant='outlined' endIcon={<BiRightArrowAlt />}sx={{p:'.3rem .5rem'}}>
          <Link href='/ResumePatrickValera.pdf' underline='none'>Resume</Link>
        </Button>
      </Box>
      {/* HERO ANIMATION HERE========== */}
      {/* <Box sx={{ flex: '300px 1 1',
      // display:{xs:'none',sm:'block'} 
      }}>
        <HeroAnimation />
      </Box> */}
    </Box>
  )
}

export default Introduction