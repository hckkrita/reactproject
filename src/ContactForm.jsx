import React, { useState} from 'react'

const ContactForm = () => {
    const [data, setData] = useState({
        fullname: '',
        email: '',
        phoneno:'',
        message: ''
      });

      const handleChange = (e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value
        });
      };

  return (
    <>
        <div className="flex justify-center items-center w-[800px] h-[600px] ml-[500px] bg-sky-300 mb-6 rounded-md">
         <form className="bg-white shadow-md rounded p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>

            <div className="mb-4 flex items-center">
                <label for="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>

                <input type="text" id="name" name="name" value={data.name} onChange={handleChange} 
                className="border rounded w-72 py-2 px-3 ml-14 text-gray-700"/>
            </div>

            <div className="mb-4 flex items-center">
                <label for="email" className="block text-gray-700 text-sm font-bold mb-2"> Email</label>

                <input type="email" id="email" name="email" value={data.email} onChange={handleChange} 
                className="border rounded w-72 py-2 px-3 ml-14 text-gray-700" />
            </div>

            <div className="mb-4 flex items-center">
                <label for="phoneno" className="block text-gray-700 text-sm font-bold mb-2"> Phone No</label>

                <input type="phoneno" id="phoneno" name="phoneno" value={data.phoneno} onChange={handleChange} 
                className="border rounded w-72 py-2 px-3 ml-7 text-gray-700" />
            </div>

            <div className="mb-4 flex items-center">
                <label for="message" className="block text-gray-700 text-sm font-bold mb-2"> Message</label>
                <textarea id="message" name="message" value={data.message} onChange={handleChange} 
                className="border rounded w-72 py-2 px-3 ml-9 text-gray-700 h-32"/>
            </div>

            <div className="flex justify-center">
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Send Message</button>
            </div>
      </form>
    </div>
    </>
  )
};

export default ContactForm;