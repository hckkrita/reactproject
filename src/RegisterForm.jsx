import React, { useState} from 'react'

const RegisterForm = () => {
    const [data, setData] = useState({
        name:'',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    
      const handleChange = (e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value
        });
      };

  return (
    <>
        <div className="flex justify-center items-center w-[800px] h-[600px] ml-[500px] bg-sky-300  rounded-md">
      <form className="bg-white shadow-md rounded p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <div className="mb-4 flex items-center">
          <label for="name" className="block text-gray-700 text-sm font-bold mb-2 w-1/3">Name</label>
          <input type="text" id="name" name="name" value={data.name} onChange={handleChange}
            className="border rounded w-2/3 py-2 px-3 text-gray-700"/>
        </div>

        <div className="mb-4 flex items-center">
          <label for="username" className="block text-gray-700 text-sm font-bold mb-2 w-1/3">Username</label>
          <input type="text" id="username" name="username" value={data.username} onChange={handleChange}
            className="border rounded w-2/3 py-2 px-3 text-gray-700" />
        </div>

        <div className="mb-4 flex items-center">
          <label for="email" className="block text-gray-700 text-sm font-bold mb-2 w-1/3">Email</label>
          <input type="email" id="email" name="email" value={data.email} onChange={handleChange}
            className="border rounded w-2/3 py-2 px-3 text-gray-700"/>
        </div>

        <div className="mb-4 flex items-center">
          <label for="password" className="block text-gray-700 text-sm font-bold mb-2 w-1/3">Password</label>
          <input type="password" id="password" name="password" value={data.password} onChange={handleChange}
            className="border rounded w-2/3 py-2 px-3 text-gray-700"/>
        </div>

        <div className="mb-4 flex items-center">
          <label for="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2 w-1/3">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" value={data.confirmPassword} onChange={handleChange}
            className="border rounded w-2/3 py-2 px-3 text-gray-700"/>
        </div>

        <div className="flex justify-center">
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
            Register
          </button>
        </div>
      </form>
    </div>
    </>
  )
}

export default RegisterForm