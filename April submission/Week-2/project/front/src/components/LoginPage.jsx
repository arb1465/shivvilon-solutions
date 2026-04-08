import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../ui/Button'
import Input from '../ui/Input'

const cmp_name = 'ARB'

const LoginDataPage = () => {
  const navi = useNavigate()
  const [loginData, setLoginData] = useState({
    id: "",
    password: ""
  })

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value)

    setLoginData(prev => ({
    ...prev,
    [e.target.name]: e.target.value
  }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    console.log('Login data:', loginData)

    navi("dashboard")
  }

  return (
    <div className='min-h-screen grid place-items-center bg-blue-200'>
      <div className='min-h-[50%] flex flex-col justify-center
                      w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%]
                     bg-white p-4 rounded-2xl'>
        
        <h1 className='text-2xl md:text-3xl font-bold text-center p-2'>Welcome to Company {cmp_name}</h1>

        <form className='p-4' onSubmit={handleSubmit}>  
          <div className='flex flex-col justify-between'>
            {/* <input
              className="w-full border my-3 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              type="text"
              name='id'
              value={loginData.id}
              placeholder="Enter ID or Email"
              onChange={handleChange}
              required
            /> */}

            <Input 
              inpType={"text"}
              inpName={"id"}
              inpValue={loginData.id}
              inpPlaceholder={"Enter email"}
              isReq={true}
              rColor={"blue"}
              onChange={handleChange}
            />

            <input
              className="w-full border my-3 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              type="text"
              name='password'
              value={loginData.password}
              placeholder="Enter your password"
              onChange={handleChange}
              required
            />
          </div>

          <Button btnName={"Login"} btnColor={"blue"}/>

        </form>
      </div>
    </div>
  )
}

export default LoginDataPage
