import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import Home from '@/components/screens/home/Home'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <Home/>
  )
}
