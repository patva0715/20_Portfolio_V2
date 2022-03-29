import { Box, Button, Link, Switch, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

const Header = ({ isLight, setTheme }) => {
  const [navOpen, setNavOpen] = useState(false)
  const [fadeClass, setFadeClass] = useState('intro-fade')

  useEffect(() => {
    setFadeClass('intro-fade-done')
    const header = document.querySelector('.header')
    let lastScroll = window.scrollY
    let handleScroll = () => {
      if (window.scrollY - 100 > lastScroll) {
        // console.log('down')
        header.style.opacity = '0'
        lastScroll = window.scrollY - 100
      } else if (lastScroll > window.scrollY) {
        lastScroll = window.scrollY
        // console.log('up')
        header.style.opacity = '1'
      }
      if (window.scrollY > 300) {
        header.style.boxShadow = '0px 5px 15px #555'
      } else {
        header.style.boxShadow = 'none'
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Box
      className='header'
      sx={{
        zIndex: '5',
        px: { xs: 1, sm: 2 },
        py: '.4rem',
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        transition: 'all 300ms ease-in-out',
        backgroundColor: 'background.paper',
      }}
    >
      <Typography
        variant='h5'
        sx={{ flexGrow: '1' }}
        className={fadeClass}
        style={{ transitionDelay: `0` }}
      >
        PV
        {/* <Typography component='span' variant='body1' color='error'>(...in development)</Typography> */}
      </Typography>

      {/* NAVIGATION HERE ====================== */}
      <Box
        component='nav'
        display='flex'
        // className={navOpen ? 'nav-open' : 'nav-close'}
        sx={{
          gap: 2,
          transition: 'all 300ms ease-in-out',
          flexDirection: { xs: 'column', md: 'row' },
          position: { xs: 'fixed', md: 'relative' },
          top: '0',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: 'background.paper',
          width: { xs: '70vw', md: 'unset' },
          height: { xs: '100vh', md: 'unset' },
          right: { xs: `${navOpen ? '0' : '-70vw'}`, md: 'unset' },
          bgcolor: { xs: 'primary.light', md: 'unset' },
          // borderColor: 'background.paper',
          // borderLeft: { xs: '1px solid', md: 'unset' },
          // borderColor: 'red'
        }}
      >
        {['ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'].map((section, index) => (
          <Link
            className={fadeClass}
            underline='none'
            key={index}
            href={`#${section.toLowerCase()}`}
            style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            sx={[
              { color: 'text.primary', fontWeight: '600' },
              (theme) => ({ '&:hover': { color: 'primary.main' } }),
            ]}
            onClick={() => setNavOpen(false)}
          >
            <Typography variant='body1'>{section}</Typography>
          </Link>
        ))}
        <Box className={fadeClass} style={{ transitionDelay: `500ms` }}>
          <Switch
            checked={isLight}
            onChange={() => setTheme((state) => !state)}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </Box>
      </Box>

      <Box
        className={fadeClass}
        style={{ transitionDelay: `200ms` }}
        sx={{ zIndex: '5', display: 'flex', alignItems: 'center' }}
      >
        <Button
          sx={{
            cursor: 'pointer',
            alignItems: 'center',
            minWidth: '0',
            display: { xs: 'flex', md: 'none' },
          }}
          onClick={() => setNavOpen((x) => !x)}
        >
          {navOpen ? (
            <AiOutlineClose size='1.4rem' />
          ) : (
            <FaBars size='1.4rem' />
          )}
        </Button>
      </Box>
    </Box>
  )
}

export default Header
