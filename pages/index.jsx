import Head from 'next/head'
import { useState } from 'react'
import HeaderAndForm from '../components/HeaderAndForm'
import OrderCard from '../components/OrderCard'
import { getOrders } from '../services'
import Swal from 'sweetalert2'

export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [orders, setOrders] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit', phoneNumber)
    if (phoneNumber.length !== 10) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'กรุณากรอกหมายเลขโทรศัพท์ให้ถูกต้อง',
      })

      return
    }
    console.log('submit done', phoneNumber)
    try {
      getOrders(phoneNumber).then((res) => {
        console.log('getOrders', res)
        if (res.length === 0) {
          Swal.fire({
            icon: 'question',
            title: 'ไม่พบรายการสั่งซื้อ',
            text: ' กรุณาตรวจสอบหมายเลขโทรศัพท์ของคุณ',
            footer: '<a href="#">ติดต่อสอบถามผู้ขาย?</a>',
          })

          return
        }
        setOrders(res)
      })
    } catch (error) {
      console.log(error)
    }
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
        {orders
          ? orders.map((order) => <OrderCard order={order} key={order.id} />)
          : null}
      </div>
    </div>
  )
}
