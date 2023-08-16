import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
export default function Home() {
  const router  = useRouter()
  return (
    <div>
       <h1 className='text-3xl font-bold color-red underline'>Hello world</h1>
       <div onClick={()=>router.push('/section-builder')}>
          builder
       </div>
       <div onClick={()=>router.push('/test')}>
          SSR Page
       </div>
    </div>
  )
}
