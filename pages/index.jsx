import Head from 'next/head'
import { useRef, useState } from 'react'
import HeaderAndForm from '../components/HeaderAndForm'
import OrderCard from '../components/OrderCard'
import {
  getCustomerOrdersFromEmail,
  getCustomerOrdersFromId,
  getCustomerOrdersFromName,
  getCustomerOrdersFromPhoneNumber,
} from '../services'
import Swal from 'sweetalert2'

export default function Home() {
  const formInput = useRef(null)
  const [orders, setOrders] = useState([])
  const [customerName, setCustomerName] = useState('')
  const [formType, setFormType] = useState('email')

  const queryFunc = {
    email: getCustomerOrdersFromEmail,
    tel: getCustomerOrdersFromPhoneNumber,
    username: getCustomerOrdersFromName,
    userCode: getCustomerOrdersFromId,
  }

  const handleFormTypeChange = (e) => {
    formInput.current.value = ''
    setFormType(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formValue = formInput.current.value.trim() || ''
    console.log('submit', formValue)
    if (formValue === '' || formValue === null) {
      setOrders([])
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        html: `<p class="p-2">กรุณากรอกข้อมูลให้ถูกต้องครับ</p><p class="p-2">หรือลอง ${
          formType === 'email'
            ? 'myemail123@email.com'
            : formType === 'tel'
            ? '0812345678'
            : formType === 'username'
            ? 'myusername'
            : 'customer123'
        }</p>`,
      })

      return
    }
    console.log('submit done', formValue)
    try {
      console.log(formType)
      queryFunc[formType](formValue).then((res) => {
        if (!res || res.length === 0) {
          setOrders([])
          Swal.fire({
            icon: 'question',
            title: 'ไม่พบรายการสั่งซื้อ',
            html: `<p class="p-2">กรุณาตรวจสอบข้อมูลอีกครัังครับ</p><p class="p-2">หรือลอง ${
              formType === 'email'
                ? 'myemail123@email.com'
                : formType === 'tel'
                ? '0812345678'
                : formType === 'username'
                ? 'myusername'
                : 'customer123'
            }</p>`,
            footer:
              '<a href="https://twitter.com/draculacode" target="_blank" rel="noopener noreferrer" >ติดต่อสอบถาม?</a>',
          })

          return
        }
        Swal.fire('Done!', '<br/>ค้นหารายการสั่งซื้อเสร็จสิ้น<br/>', 'success')
        setOrders(res.orders)
        setCustomerName(res.customerName)
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container mx-auto flex flex-col items-center  py-[3rem] ">
      <Head>
        <title>Dracula Code </title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* header and form */}
      <HeaderAndForm
        formInput={formInput}
        handleFormTypeChange={handleFormTypeChange}
        formType={formType}
        handleSubmit={handleSubmit}
      />
      {orders.length !== 0 ? (
        <div className="rounded-xl bg-[#fff6f0] p-2 text-lg underline decoration-2 underline-offset-4 ">
          ออเดอร์ของ : {customerName}
        </div>
      ) : null}
      {/* order list */}
      <div className="flex flex-wrap items-center justify-center  ">
        {orders
          ? orders.map((order, idx) => (
              <div key={`${customerName}${idx}`}>
                <OrderCard order={order} />
              </div>
            ))
          : null}
      </div>
    </div>
  )
}
