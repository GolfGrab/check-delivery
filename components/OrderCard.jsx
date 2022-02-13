import React from 'react'

function OrderCard() {
  return (
    <div className=" m-[1.5rem]   w-[20rem] border  p-[1rem]   px-[1.5rem]">
      {/* date and icon */}
      <div className="flex  w-full items-center justify-between">
        <div>11 FEB 2022</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-[3rem] w-[3rem]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
      <div className=" text-2xl font-semibold">Super Beautiful Dress</div>
      <div className="text-sm">รายละเอียดสินค้า : ชุดเดรส สีชมพู ไซส์ L</div>
      <div className="text-sm">จำนวน : 1</div>
      <div className="text-sm">ราคารวม : 350 บาท</div>
      <div className="text-sm">ชำระเงินแล้ว : 200 บาท</div>
      <div className="text-sm">สถานะสินค้า : พรีออเดอร์แล้ว</div>
      <div className="text-sm">สถานะการจัดส่ง : ยังไม่ได้จัดส่ง</div>
      <div className="text-sm">หมายเหตุเพิ่มเติม :</div>
    </div>
  )
}

export default OrderCard
