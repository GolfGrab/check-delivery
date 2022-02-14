import React from 'react'
import moment from 'moment'

function OrderCard({ order }) {
  return (
    <div className=" m-[1.5rem]   w-[20rem] border  p-[1rem]   px-[1.5rem]">
      {/* date and icon */}
      <div className="flex  w-full items-center justify-between">
        <div>{moment(order.createdAt).format(' DD MMM YY , HH:mm')}</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[3rem] w-[3rem]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
      <div className=" text-2xl font-semibold">{order.product.productName}</div>
      <div className=" text-sm font-semibold">
        {order.product.productDescription}
      </div>
      <br />
      <div className="text-sm">รายละเอียดสินค้า : {order.orderDetails}</div>
      <br />
      <div className="text-sm">จำนวนสินค้ารวม : {order.totalAmount}</div>
      <div className="text-sm">ราคารวม : {order.totalPrice} บาท</div>
      <div className="text-sm">ค้างชำระ : {order.debt} บาท</div>
      <div className="text-sm">สถานะสินค้า : {order.orderStatus}</div>

      {/* <div>{JSON.stringify(order)}</div> */}
    </div>
  )
}

export default OrderCard
