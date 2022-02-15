import React from 'react'

function HeaderAndForm({
  formInput,
  handleSubmit,
  formType,
  handleFormTypeChange,
}) {
  return (
    <div className="  flex max-w-[20rem] items-center justify-center     px-[1.5rem] py-[3rem]">
      <main className="">
        {/* header section */}
        <a
          href="https://twitter.com/draculacode"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="mb-[1.5rem]  text-center text-4xl font-bold text-[#ff7979] underline decoration-[#f77aec] decoration-wavy decoration-2 ">
            Dracula Code <br /> Order Checker
          </h1>
        </a>
        {/* form section */}
        <p className=" mb-[0.75rem] text-center">
          กรุณากรอก
          <span className="mx-1 font-semibold text-blue-700 underline">
            {formType === 'email'
              ? 'อีเมล'
              : formType === 'tel'
              ? 'หมายเลขโทรศัพท์'
              : formType === 'username'
              ? 'ชื่อผู้ใช้งาน'
              : 'รหัสลูกค้า'}
          </span>
          เพื่อเช็คออเดอร์ครับ
        </p>

        <form onSubmit={handleSubmit}>
          <div className="">
            <div className=" mx-10 w-[17rem]  items-center justify-center">
              <div className="relative  mb-[0.75rem] flex  h-[3rem] w-full flex-wrap items-stretch">
                <span className="text-blueGray-300 absolute  z-10 h-full w-8 items-center justify-center rounded bg-transparent py-3 pl-3 text-center text-base font-normal leading-snug">
                  {formType === 'email' ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  ) : formType === 'tel' ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  ) : formType === 'username' ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                      />
                    </svg>
                  )}
                </span>
                <input
                  type="text"
                  ref={formInput}
                  placeholder={
                    formType === 'email'
                      ? 'myemail123@email.com'
                      : formType === 'tel'
                      ? '0812345678'
                      : formType === 'username'
                      ? 'myusername'
                      : 'customer123'
                  }
                  className="relative w-full rounded border-0 bg-white px-3 py-3  pl-10 text-sm text-neutral-800 placeholder-neutral-300 shadow outline-none ring-[#977fd7] focus:outline-none focus:ring"
                />
              </div>

              <div className="mb-[0.75rem] h-[3rem]">
                <button
                  className="my-[0.75rem] h-full w-full rounded-md bg-[#977fd7] py-2 px-4 font-bold text-white hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-40  "
                  type="submit"
                >
                  ตรวจสอบ
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="mx-10 flex items-center  justify-between pt-[0.75rem]">
          <div className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="h-6 w-6"
            >
              <path
                fill="#00c300"
                d="M12.5,42h23c3.59,0,6.5-2.91,6.5-6.5v-23C42,8.91,39.09,6,35.5,6h-23C8.91,6,6,8.91,6,12.5v23C6,39.09,8.91,42,12.5,42z"
              />
              <path
                fill="#fff"
                d="M37.113,22.417c0-5.865-5.88-10.637-13.107-10.637s-13.108,4.772-13.108,10.637c0,5.258,4.663,9.662,10.962,10.495c0.427,0.092,1.008,0.282,1.155,0.646c0.132,0.331,0.086,0.85,0.042,1.185c0,0-0.153,0.925-0.187,1.122c-0.057,0.331-0.263,1.296,1.135,0.707c1.399-0.589,7.548-4.445,10.298-7.611h-0.001C36.203,26.879,37.113,24.764,37.113,22.417z M18.875,25.907h-2.604c-0.379,0-0.687-0.308-0.687-0.688V20.01c0-0.379,0.308-0.687,0.687-0.687c0.379,0,0.687,0.308,0.687,0.687v4.521h1.917c0.379,0,0.687,0.308,0.687,0.687C19.562,25.598,19.254,25.907,18.875,25.907z M21.568,25.219c0,0.379-0.308,0.688-0.687,0.688s-0.687-0.308-0.687-0.688V20.01c0-0.379,0.308-0.687,0.687-0.687s0.687,0.308,0.687,0.687V25.219z M27.838,25.219c0,0.297-0.188,0.559-0.47,0.652c-0.071,0.024-0.145,0.036-0.218,0.036c-0.215,0-0.42-0.103-0.549-0.275l-2.669-3.635v3.222c0,0.379-0.308,0.688-0.688,0.688c-0.379,0-0.688-0.308-0.688-0.688V20.01c0-0.296,0.189-0.558,0.47-0.652c0.071-0.024,0.144-0.035,0.218-0.035c0.214,0,0.42,0.103,0.549,0.275l2.67,3.635V20.01c0-0.379,0.309-0.687,0.688-0.687c0.379,0,0.687,0.308,0.687,0.687V25.219z M32.052,21.927c0.379,0,0.688,0.308,0.688,0.688c0,0.379-0.308,0.687-0.688,0.687h-1.917v1.23h1.917c0.379,0,0.688,0.308,0.688,0.687c0,0.379-0.309,0.688-0.688,0.688h-2.604c-0.378,0-0.687-0.308-0.687-0.688v-2.603c0-0.001,0-0.001,0-0.001c0,0,0-0.001,0-0.001v-2.601c0-0.001,0-0.001,0-0.002c0-0.379,0.308-0.687,0.687-0.687h2.604c0.379,0,0.688,0.308,0.688,0.687s-0.308,0.687-0.688,0.687h-1.917v1.23H32.052z"
              />
            </svg>
            <a
              className="  font-semibold underline"
              href="https://page.line.me/510qwyfb"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dracula Code
            </a>
          </div>
          <div className="flex items-center space-x-1">
            <svg
              className="h-4 w-4"
              viewBox="0 0 256 209"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M256,25.4500259 C246.580841,29.6272672 236.458451,32.4504868 225.834156,33.7202333 C236.678503,27.2198053 245.00583,16.9269929 248.927437,4.66307685 C238.779765,10.6812633 227.539325,15.0523376 215.57599,17.408298 C205.994835,7.2006971 192.34506,0.822 177.239197,0.822 C148.232605,0.822 124.716076,24.3375931 124.716076,53.3423116 C124.716076,57.4586875 125.181462,61.4673784 126.076652,65.3112644 C82.4258385,63.1210453 43.7257252,42.211429 17.821398,10.4359288 C13.3005011,18.1929938 10.710443,27.2151234 10.710443,36.8402889 C10.710443,55.061526 19.9835254,71.1374907 34.0762135,80.5557137 C25.4660961,80.2832239 17.3681846,77.9207088 10.2862577,73.9869292 C10.2825122,74.2060448 10.2825122,74.4260967 10.2825122,74.647085 C10.2825122,100.094453 28.3867003,121.322443 52.413563,126.14673 C48.0059695,127.347184 43.3661509,127.988612 38.5755734,127.988612 C35.1914554,127.988612 31.9009766,127.659938 28.694773,127.046602 C35.3777973,147.913145 54.7742053,163.097665 77.7569918,163.52185 C59.7820257,177.607983 37.1354036,186.004604 12.5289147,186.004604 C8.28987161,186.004604 4.10888474,185.75646 0,185.271409 C23.2431033,200.173139 50.8507261,208.867532 80.5109185,208.867532 C177.116529,208.867532 229.943977,128.836982 229.943977,59.4326002 C229.943977,57.1552968 229.893412,54.8901664 229.792282,52.6381454 C240.053257,45.2331635 248.958338,35.9825545 256,25.4500259"
                  fill="#00acee"
                ></path>
              </g>
            </svg>
            <a
              className="  font-semibold underline"
              href="https://twitter.com/draculacode"
              target="_blank"
              rel="noopener noreferrer"
            >
              @draculacode
            </a>
          </div>
        </div>

        <details>
          <summary className="mt-[2rem] text-center font-semibold hover:cursor-pointer hover:text-blue-600">
            ลองเลือกประเภทของ input แบบต่างๆดูสิ
          </summary>
          <div className="ml-16 mt-[0.75rem] ">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                type="radio"
                name="inlineRadioOptions"
                id="emailRadio"
                value="email"
                checked={formType === 'email'}
                onChange={handleFormTypeChange}
              />
              <label
                className="form-check-label inline-block text-gray-800 "
                htmlFor="emailRadio"
              >
                อีเมล
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                type="radio"
                name="inlineRadioOptions"
                id="telRadio"
                value="tel"
                checked={formType === 'tel'}
                onChange={handleFormTypeChange}
              />
              <label
                className="form-check-label inline-block text-gray-800"
                htmlFor="telRadio"
              >
                หมายเลขโทรศัพท์
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                type="radio"
                name="inlineRadioOptions"
                id="usernameRadio"
                value="username"
                checked={formType === 'username'}
                onChange={handleFormTypeChange}
              />
              <label
                className="form-check-label inline-block text-gray-800"
                htmlFor="usernameRadio"
              >
                ชื่อผู้ใช้
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                type="radio"
                name="inlineRadioOptions"
                id="userCodeRadio"
                value="userCode"
                checked={formType === 'userCode'}
                onChange={handleFormTypeChange}
              />
              <label
                className="form-check-label inline-block text-gray-800"
                htmlFor="userCodeRadio"
              >
                โค้ดลูกค้าแบบกำหนดเอง
              </label>
            </div>
          </div>
        </details>
      </main>
    </div>
  )
}

export default HeaderAndForm
