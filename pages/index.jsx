import Head from 'next/head'
import { useRef, useState } from 'react'
import HeaderAndForm from '../components/HeaderAndForm'
import OrderCard from '../components/OrderCard'
import { getCustomerOrders } from '../services'
import Swal from 'sweetalert2'

export default function Home() {
  const phoneInput = useRef(null)
  const [orders, setOrders] = useState([])
  const [customerName, setCustomerName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const phoneNumber = phoneInput.current.value
    console.log('submit', phoneNumber)
    if (
      phoneNumber.length !== 10 ||
      isNaN(phoneNumber) ||
      !/^[0-9]+$/.test(phoneNumber)
    ) {
      setOrders([])
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'กรุณากรอกหมายเลขโทรศัพท์ให้ถูกต้องค่ะ',
      })

      return
    }
    console.log('submit done', phoneNumber)
    try {
      getCustomerOrders(phoneNumber).then((res) => {
        console.log('getCustomerOrders', res)
        if (!res || res.length === 0) {
          setOrders([])
          Swal.fire({
            icon: 'question',
            title: 'ไม่พบรายการสั่งซื้อ',
            text: ' กรุณาตรวจสอบหมายเลขโทรศัพท์อีกครั้งค่ะ',
            footer: '<a href="#">ติดต่อสอบถามผู้ขาย?</a>',
          })

          return
        }
        Swal.fire('Done!', '<br/>ค้นหารายการสั่งซื้อเสร็จสิ้น<br/>', 'success')
        setOrders(res.order)
        setCustomerName(res.customerName)
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container mx-auto flex flex-col items-center  py-[3rem] ">
      <Head>
        <title>Check-Delivery</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* header and form */}
      <HeaderAndForm phoneInput={phoneInput} handleSubmit={handleSubmit} />
      {orders.length !== 0 ? (
        <div className="rounded-xl bg-[#d5fafd] p-2 text-lg underline decoration-2 underline-offset-4 ">
          ออเดอร์ของ : {customerName}
        </div>
      ) : null}
      {/* order list */}
      <div className="flex flex-wrap items-center justify-center  ">
        {orders
          ? orders.map((order, idx) => (
              <div key={idx}>
                <OrderCard order={order} />
              </div>
            ))
          : null}
      </div>
    </div>
  )
}
