import React, { useEffect, useState } from 'react'
import moment from 'moment'

function OrderCard({ order }) {
  const iconSrc = {
    Success: 'https://www.svgrepo.com/show/395713/accept-mark-check-tick.svg',
    Canceled:
      'https://www.svgrepo.com/show/395697/cancel-remove-delete-cross.svg',
    Delivered:
      'https://www.svgrepo.com/show/395714/email-message-mail-envelope.svg',
    PendingPay:
      'https://www.svgrepo.com/show/395737/sync-refresh-loading-load.svg',
    PendingPreOrder:
      'https://www.svgrepo.com/show/395704/store-shop-shopping-bag.svg',
    PendingPreparation:
      'https://www.svgrepo.com/show/395740/like-award-favorite-star.svg',
    Problem: 'https://www.svgrepo.com/show/395724/focus-aim-goal-target.svg',
  }
  const [icon, setIcon] = useState(iconSrc.cancel)
  const [status, setStatus] = useState(order.orderStatus)
  useEffect(() => {
    if (order.orderStatus === 'Success') {
      setIcon(iconSrc.Success)
      setStatus('สำเร็จ')
    } else if (order.orderStatus === 'Canceled') {
      setIcon(iconSrc.Canceled)
      setStatus('ยกเลิก')
    } else if (order.orderStatus === 'Delivered') {
      setIcon(iconSrc.Delivered)
      setStatus('จัดส่งแล้ว')
    } else if (order.orderStatus === 'PendingPay') {
      setIcon(iconSrc.PendingPay)
      setStatus('รอการชำระเงิน')
    } else if (order.orderStatus === 'PendingPreOrder') {
      setIcon(iconSrc.PendingPreOrder)
      setStatus('รอการสั่งซื้อ')
    } else if (order.orderStatus === 'PendingPreparation') {
      setIcon(iconSrc.PendingPreparation)
      setStatus('รอการจัดเตรียมสินค้า')
    } else if (order.orderStatus === 'Problem') {
      setIcon(iconSrc.Problem)
      setStatus('มีปัญหาบางอย่างเกิดขึ้น โปรดติดต่อร้าน')
    } else {
      setIcon(iconSrc.Problem)
      setStatus('มีปัญหาบางอย่างเกิดขึ้น โปรดติดต่อร้าน')
    }
  }, [])

  return (
    <div className=" m-[1.5rem]   w-[20rem] rounded-xl border-4  border-[#ffbcb7]   bg-[#fcfce2] p-[1rem] px-[1.5rem] shadow-lg shadow-[#ffbcb7]/80 transition ease-in hover:scale-105">
      {/* date and icon */}
      <div className="flex  w-full items-center justify-between">
        <div className="opacity-70">
          {moment(order.createdAt).format(' DD MMM YY , HH:mm')}
        </div>
        <div>
          <img src={icon} className="h-[2rem] w-[2rem]" />
        </div>
      </div>
      <div className=" text-2xl font-semibold">{order.product.productName}</div>
      <div className=" text-sm font-semibold">
        {order.product.productDescription}
      </div>
      <br />
      {order.orderDetails === '' || order.orderDetails === null ? null : (
        <div>
          <div className="text-sm">รายละเอียดสินค้า : {order.orderDetails}</div>
          <br />
        </div>
      )}

      <div className="text-sm">จำนวนสินค้ารวม : {order.totalAmount}</div>
      <div className="text-sm">ราคารวม : {order.totalPrice} บาท</div>
      <div
        className="text-sm"
        style={{
          color: order.debt == 0 ? '#000000' : '#ff4545',
        }}
      >
        ค้างชำระ : {order.debt} บาท
      </div>
      <div
        className="text-sm"
        style={{
          color: order.orderStatus === 'Success' ? '#01a66f' : '#f29339',
        }}
      >
        สถานะสินค้า : {status}
      </div>

      {/* <div>{JSON.stringify(order)}</div> */}
    </div>
  )
}

export default OrderCard
