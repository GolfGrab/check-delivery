import React from 'react'

function HeaderAndForm({ handleChange, handleSubmit }) {
  return (
    <div className="  flex max-w-[20rem] items-center justify-center     px-[1.5rem] py-[3rem]">
      <main className="">
        {/* header section */}
        <h1 className="mb-[1.5rem]  text-center text-4xl font-bold">
          Check Delivery
        </h1>
        {/* form section */}
        <p className="mb-[0.75rem] text-center">
          กรุณากรอกเบอร์โทรศัพท์เพื่อเช็คออเดอร์ค่ะ
        </p>

        <form onSubmit={handleSubmit}>
          <div className="">
            <div className=" mx-10 w-[17rem]  items-center justify-center">
              <div class="  mb-[0.75rem] h-[3rem]">
                <input
                  onChange={handleChange}
                  class="mb-[0.75rem] block h-full w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                  type="tel"
                />
              </div>

              <div className="mb-[0.75rem] h-[3rem]">
                <button
                  class="my-[0.75rem] h-full w-full rounded-md bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40  "
                  type="submit"
                >
                  ตรวจสอบ
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="mx-10 flex items-center justify-end pt-[0.75rem]">
          <svg
            className="h-4 w-4"
            viewBox="0 0 256 209"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M256,25.4500259 C246.580841,29.6272672 236.458451,32.4504868 225.834156,33.7202333 C236.678503,27.2198053 245.00583,16.9269929 248.927437,4.66307685 C238.779765,10.6812633 227.539325,15.0523376 215.57599,17.408298 C205.994835,7.2006971 192.34506,0.822 177.239197,0.822 C148.232605,0.822 124.716076,24.3375931 124.716076,53.3423116 C124.716076,57.4586875 125.181462,61.4673784 126.076652,65.3112644 C82.4258385,63.1210453 43.7257252,42.211429 17.821398,10.4359288 C13.3005011,18.1929938 10.710443,27.2151234 10.710443,36.8402889 C10.710443,55.061526 19.9835254,71.1374907 34.0762135,80.5557137 C25.4660961,80.2832239 17.3681846,77.9207088 10.2862577,73.9869292 C10.2825122,74.2060448 10.2825122,74.4260967 10.2825122,74.647085 C10.2825122,100.094453 28.3867003,121.322443 52.413563,126.14673 C48.0059695,127.347184 43.3661509,127.988612 38.5755734,127.988612 C35.1914554,127.988612 31.9009766,127.659938 28.694773,127.046602 C35.3777973,147.913145 54.7742053,163.097665 77.7569918,163.52185 C59.7820257,177.607983 37.1354036,186.004604 12.5289147,186.004604 C8.28987161,186.004604 4.10888474,185.75646 0,185.271409 C23.2431033,200.173139 50.8507261,208.867532 80.5109185,208.867532 C177.116529,208.867532 229.943977,128.836982 229.943977,59.4326002 C229.943977,57.1552968 229.893412,54.8901664 229.792282,52.6381454 C240.053257,45.2331635 248.958338,35.9825545 256,25.4500259"
                fill="#55acee"
              ></path>
            </g>
          </svg>
          <div className=" text-xs">@jisungmommyy</div>
        </div>
      </main>
    </div>
  )
}

export default HeaderAndForm
