import Head from 'next/head'
import { useState } from 'react'
import HeaderAndForm from '../components/HeaderAndForm'
import OrderCard from '../components/OrderCard'

export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [order, setOrder] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit', phoneNumber)
    if (phoneNumber.length !== 10) {
      alert('กรุณากรอกหมายเลขโทรศัพท์ให้ถูกต้อง')
      return
    }
    console.log('submit done', phoneNumber)
  }

  const handleChange = (e) => setPhoneNumber(e.target.value)
  return (
    <div className="container mx-auto flex flex-col items-center py-[3rem]">
      <Head>
        <title>Check-Delivery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header and form */}
      <HeaderAndForm handleChange={handleChange} handleSubmit={handleSubmit} />
      {/* order list */}
      <div className="flex flex-wrap items-center justify-center  ">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </div>
  )
}
