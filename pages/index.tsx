import Image from 'next/image'
import { Inter } from 'next/font/google'
import css from './index.module.css'
import { Typography, Box } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`${css.main} flex min-h-screen flex-col items-center xjustify-between p-12 ${inter.className}`}
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
            borderRadius: '100px'
          }}
        />
      </Box>

      <Typography variant='h2' textAlign='center' fontWeight={700} margin={'1rem 0'}>
        ONE-SHOT MAYHEM
      </Typography>

      <Typography variant='h2'>
        Madrid
      </Typography>
    </main>
  )
}
