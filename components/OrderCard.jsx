import React, { useEffect, useState } from 'react'
import moment from 'moment'

function OrderCard({ order }) {
  const iconSrc = {
    Success: 'https://www.svgrepo.com/show/395713/accept-mark-check-tick.svg',
    Canceled:
      'https://www.svgrepo.com/show/395697/cancel-remove-delete-cross.svg',
    NowOfficeKorea:
      'https://www.svgrepo.com/show/395694/estate-building-home-house.svg',
    NowSentKorea:
      'https://www.svgrepo.com/show/395725/forecast-storage-weather-cloud.svg',
    NowThailand:
      'https://www.svgrepo.com/show/395739/navigation-gps-map-pin-location.svg',
    NowSentThailand:
      'https://www.svgrepo.com/show/395705/envelope-letter-email-mail-send.svg',
    PendingPay:
      'https://www.svgrepo.com/show/395737/sync-refresh-loading-load.svg',
    PendingPreOrder:
      'https://www.svgrepo.com/show/395704/store-shop-shopping-bag.svg',
    Problem: 'https://www.svgrepo.com/show/395724/focus-aim-goal-target.svg',
  }
  const [icon, setIcon] = useState(iconSrc.cancel)
  useEffect(() => {
    if (order.orderStatus === 'Success') {
      setIcon(iconSrc.Success)
    } else if (order.orderStatus === 'Canceled') {
      setIcon(iconSrc.Canceled)
    } else if (order.orderStatus === 'NowOfficeKorea') {
      setIcon(iconSrc.NowOfficeKorea)
    } else if (order.orderStatus === 'NowSentKorea') {
      setIcon(iconSrc.NowSentKorea)
    } else if (order.orderStatus === 'NowSentThailand') {
      setIcon(iconSrc.NowSentThailand)
    } else if (order.orderStatus === 'NowThailand') {
      setIcon(iconSrc.NowThailand)
    } else if (order.orderStatus === 'PendingPay') {
      setIcon(iconSrc.PendingPay)
    } else if (order.orderStatus === 'PendingPreOrder') {
      setIcon(iconSrc.PendingPreOrder)
    } else if (order.orderStatus === 'Problem') {
      setIcon(iconSrc.Problem)
    }
  }, [order])

  return (
    <div className=" m-[1.5rem]   w-[20rem] rounded-xl border-4  border-[#ffc9c2]   bg-[#ffffc2] p-[1rem] px-[1.5rem] transition ease-in hover:scale-105">
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
        สถานะสินค้า : {order.orderStatus}
      </div>

      {/* <div>{JSON.stringify(order)}</div> */}
    </div>
  )
}

export default OrderCard
