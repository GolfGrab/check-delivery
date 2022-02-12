import Head from 'next/head'
import { useState } from 'react'
import HeaderAndForm from '../components/HeaderAndForm'

export default function Home() {
  const [account, setAccount] = useState('')
  const [order, setOrder] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit', account)
    if (account[0] != '@') {
      alert('กรุณากรอก @ ด้วยนะคะ')
      return
    }
    console.log('submit done', account)
  }

  const handleChange = (e) => setAccount(e.target.value)
  return (
    <div className="flex h-screen overflow-scroll scrollbar-none">
      <Head>
        <title>Check-Delivery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header and form */}
      <HeaderAndForm handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  )
}
