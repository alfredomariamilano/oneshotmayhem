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
    <>
      <Box
        component={'main'}
        className={`${css.main} ${bodyFont.className}`}
      >
        <Box
          component={'section'}
          className={css.innerContainer}
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
              fontSize={'4rem'}
            >
              {'ONE-SHOT'}
            </Typography>

            <Typography
              component='h1'
              lineHeight={'inherit'}
              fontWeight={'inherit'}
              fontFamily={'inherit'}
              fontSize={'4.8rem'}
            >
              {'MAYHEM'}
            </Typography>

            <Typography
              component='h1'
              lineHeight={'inherit'}
              fontWeight={'inherit'}
              fontFamily={'inherit'}
              fontSize={'2.016rem'}
            >
              {'Dungeons & Dragons'}
            </Typography>
          </Box>

          <Box>
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
              {'Do you want to learn how to play Dungeons and Dragons or just have a day of fun with other English-speaking people? On May 6th in Iván de Vargas Library, we are organizing a one-shot mayhem (an event filled with short D&D adventures) that you can join, play, or learn while playing.'}
              <br/>
              <br/>
              {'Each table will have a Dungeon Master that will guide 4 to 5 players per game. The space is small so please register as soon as possible not to miss this opportunity.'}
              <br/>
              <br/>
              {'This event is reserved for people 15 or older. And all are welcome if they just want to watch.'}
              <br/>
              <br/>
              {'- Date: May 6th'}
              <br/>
              {'- Time: 9:00 a.m. to 3:00 p.m.'}
              <br/>
              {'- Venue: Iván de Vargas Library'}
            </Typography>

            <Typography marginBottom={'1rem'} fontSize={'1.25rem'} lineHeight={1.1}>
              {'Please register '}
              <Link
                target="_blank"
                href='https://bibliotecas.madrid.es/portales/bibliotecas/es/En-portada/One-Shot-Mayhem-partida-corta-de-rol-de-Dragones-y-Mazmorras/?vgnextfmt=default&vgnextoid=a985f5d623f77810VgnVCM1000001d4a900aRCRD&vgnextchannel=dd0a0b6eb5cb3510VgnVCM1000008a4a900aRCRD'
              >
                {'here'}
              </Link>
              {'.'}
            </Typography>
        
            <Typography fontSize={'1.25rem'} lineHeight={1.1}>
              {'You will need a library card, but you can request one for free '}
              <Link
                target="_blank"
                href='https://sede.madrid.es/portal/site/tramites/menuitem.62876cb64654a55e2dbd7003a8a409a0/?vgnextoid=0692da34feaed010VgnVCM2000000c205a0aRCRD&vgnextchannel=23a99c5ffb020310VgnVCM100000171f5a0aRCRD&vgnextfmt=default'
              >
                {'here'}
              </Link>
              {'.'}
            </Typography>
          </Box>  
        </Box>    
      </Box>

      <Box
        className={css.masonry}
      >
        <Masonry
          columns={{ xs: 2, sm: 2, md: 3, lg: 4, xl: 5 }}
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
    </>
  )
}
