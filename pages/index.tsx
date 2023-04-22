/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { Inter, Montserrat } from 'next/font/google'
import css from './index.module.css'
import { Typography, Box, Link } from '@mui/material'
import { Masonry } from '@mui/lab'
import { useEffect, useState } from 'react'

const bodyFont = Inter({ subsets: ['latin'] })
const headingFont = Montserrat({ subsets: ['latin'] })

export default function Home() {
  const [photos, setPhotos] = useState<any[]>([])

  useEffect(() => {
    fetch('/api/unsplash')
      .then((res) => res.json())
      .then((photos) => {
        setPhotos(photos)
      })
  }, [])

  return (
    <main
      className={`${css.main} ${bodyFont.className}`}
    >
      <Box
        width={'15rem'}
        height={'15rem'}
      >
        <Image
          src="/ONE-SHOT_MAYHEM.png"
          alt="ONE-SHOT MAYHEM Logo"
          width={500}
          height={500}
          priority
          style={{
            borderRadius: '6rem'
          }}
        />
      </Box>

      <Box
        className={headingFont.className}
        textAlign='center'
        fontWeight={700}
        lineHeight={0.75}
        margin={'1rem 0'}
      >
        <Typography
          component='h1'
          lineHeight={'inherit'}
          fontWeight={'inherit'}
          fontFamily={'inherit'}
          fontSize={'5rem'}
        >
          {'ONE-SHOT'}
        </Typography>

        <Typography
          component='h1'
          lineHeight={'inherit'}
          fontWeight={'inherit'}
          fontFamily={'inherit'}
          fontSize={'6rem'}
        >
          {'MAYHEM'}
        </Typography>

        <Typography
          component='h1'
          lineHeight={'inherit'}
          fontWeight={'inherit'}
          fontFamily={'inherit'}
          fontSize={'2.52rem'}
        >
          {'Dungeons & Dragons'}
        </Typography>
      </Box>

      <Box
        margin='1rem'
      >
        <Typography variant='h3'>
          {'Next event: 6th of May 2023'}
        </Typography>

        <Typography variant='h4' marginBottom={'1rem'}>
          <Link
            target='_blank'
            href='https://www.google.com/maps/place/Iv%C3%A1n+de+Vargas+Library/@40.4139907,-3.7123245,17z/data=!3m2!4b1!5s0xd422878ed2e16e3:0xbc11080281334bfc!4m6!3m5!1s0xd422878ea6288b3:0x9d817fa502c6a5b5!8m2!3d40.4139907!4d-3.7097496!16s%2Fg%2F11vjp9wkb'
          >Biblioteca Pública Municipal Iván de Vargas</Link>
        </Typography>

        <Typography marginBottom={'1rem'} fontSize={'1.25rem'} lineHeight={1.1}>
          {'Do you like dragons, wizards and swords? Do you want to live an epic story with your friends? Then don\'t miss the “One-Shot Mayhem” event, where you can play "Double and Dragon" in a short and epic game (between 3 and 4 hours). It doesn\'t matter if you are an expert or a novice, you just need to want to have fun and let your imagination run wild. The event will be held in English, so you can also practice the language while you play.'}

          {'There will be individual tables of 4 or 5 players, each with their own narrator (Dungeon Master) who will guide you through the adventure. If you want to be the narrator, you are also welcome, you just have to tell us.'}
        </Typography>

        <Typography marginBottom={'1rem'} fontSize={'1.25rem'} lineHeight={1.1}>
          {'To register for the next event in Madrid, head to '}
          <Link
            target="_blank"
            href='https://bibliotecas.madrid.es/portales/bibliotecas/es/En-portada/One-Shot-Mayhem-partida-corta-de-rol-de-Dragones-y-Mazmorras/?vgnextfmt=default&vgnextoid=a985f5d623f77810VgnVCM1000001d4a900aRCRD&vgnextchannel=dd0a0b6eb5cb3510VgnVCM1000008a4a900aRCRD'
          >
            {'this link'}
          </Link>
          {'.'}
        </Typography>
        
        <Typography fontSize={'1.25rem'} lineHeight={1.1}>
          {'To request a library card, head to '}
          <Link
            target="_blank"
            href='https://sede.madrid.es/portal/site/tramites/menuitem.62876cb64654a55e2dbd7003a8a409a0/?vgnextoid=0692da34feaed010VgnVCM2000000c205a0aRCRD&vgnextchannel=23a99c5ffb020310VgnVCM100000171f5a0aRCRD&vgnextfmt=default'
          >
            {'this link'}
          </Link>
          {'.'}
        </Typography>
      </Box>

      <Box
        position='fixed'
        top={0}
        left={0}
        width={'100vw'}
        height={'100vh'}
        zIndex={-1}
        sx={{
          ':after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            background: 'rgba(var(--background), 0.85)'
          }
        }}
      >
        <Masonry
          columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
          // spacing={{ xs: 0, sm: 0, md: 0 }}
          spacing={2}
          sx={{
            margin: 0
          }}
        >
          {[...photos, ...photos]?.map((photo, i) => {
            return <img key={`${i}-${photo.id}`} alt={photo.alt_description} src={photo.urls.small} />
          })}
        </Masonry>
      </Box>
      
    </main>
  )
}
