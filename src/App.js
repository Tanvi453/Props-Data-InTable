import { useState } from 'react';
import './App.css';
import { TableData } from './Table';
import { Flex, Input } from 'antd'

function App() {

  const [user, setUser] = useState({ uname: '', email: '', password: '' })

  const [data, setData] = useState(JSON.parse(localStorage.getItem("users")) || []);

  const handleChange = (e) => {
    console.log(e.target.name)
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const handleSubmit = () => {
    setData([...data, user]);
    localStorage.setItem("users", JSON.stringify([...data, user]))
  }
  console.log(data);
  console.log(user);

  const deletedata = (idx) => {
    const updated = data.filter((item, index) => { return index !== idx })
    setData(updated);
    localStorage.setItem('users', JSON.stringify(updated));
  }


  return (
    <>

      <div>

        <div style={{ backgroundImage: "url(https://images.rawpixel.com/image_600/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjg5Ny13YW4tMDFfMS5qcGc.jpg)", height: "950px", width: "100%", backgroundSize: "cover", display: "flex", justifyContent: 'center', alignItems: "center" }}>

          <div className='flex flex-col items-center gap-[60px]'>

            <div className='flex flex-col gap-3'>
              <label htmlFor='uname' className='text-2xl font-bold text-[#716a4c]'>User Name:-</label>
              <input type='text' id='uname' name='uname' value={user.uname} onChange={(e) => handleChange(e)} className='bg-transparent h-[25px] w-[500px] rounded-md border-[#c4906b]' />
            </div>

            <div className='flex flex-col gap-3'>
              <label htmlFor='email' className='text-2xl font-bold text-[#716a4c]'>E-mail:-</label>
              <input type='email' id='email' name='email' value={user.email} onChange={(e) => handleChange(e)} className='bg-transparent h-[25px] w-[500px] rounded-md border-[#c4906b]' />
            </div>

            <div className='flex flex-col gap-3'>
              <label htmlFor='password' className='text-2xl font-bold text-[#716a4c]'>Password:-</label>
              <input type='password' id='password' name='password' value={user.password} onChange={(e) => handleChange(e)} className='bg-transparent h-[25px] w-[500px] rounded-md border-[#c4906b]' />
            </div>

            <div>
              <button type='submit' onClick={() => handleSubmit()} className='bg-transparent h-[50px] w-[200px] rounded-md border-[#c4906b] text-[#716a4c] text-2xl font-bold mt-[20px]'>Submit</button>
            </div>

            {/* <Flex vertical gap={12}>
              <Input placeholder="Outlined" />
              <Input placeholder="Filled" variant="filled" />
              <Input placeholder="Borderless" variant="borderless" />
            </Flex> */}

          </div>

        </div>

        <TableData recordsData={data} deletedata={(e) => deletedata(e)} />

      </div>



    </>
  );
}

export default App;
