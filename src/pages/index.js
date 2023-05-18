import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import reducers, { increment } from '@/redux/reducers'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const mydb = useSelector((state) => state)

  const dispatch = useDispatch()

  useEffect(() => {
    console.log(JSON.stringify([1, 2, 3]))
    dispatch(increment())
  }, [])

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>

      <div>asdf</div>
    </main>
  )
}
