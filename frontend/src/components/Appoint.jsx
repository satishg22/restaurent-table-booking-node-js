import React from 'react'
import axios from 'axios'
import { useState , useEffect } from 'react'
export const Appoint = () => {

    const [data,setData] = useState([])
    // useEffect(()=>{
    //     axios.get('http://localhost:5000/api/v1/reservation/getting')
    //     .then(res=>setData(res.data))
    //     .catch(err=> console.log(err))
    // },[data])
     
    
  useEffect(() => {
    // Fetch appointments data when component mounts
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/reservation/getting"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };


  return (
    <>
    <div className=''>
        {
            data.length === 0?
            <p>No Appointments</p>:
            data.map((dat)=>{
                <div key={dat._id}>
                    <p>{dat.firstName}</p>
                </div>
            })
        }
    </div>
    </>
    
  )
}
