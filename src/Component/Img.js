import React, { useEffect, useState } from 'react';

const Img = () => {
    const [imgdata, setimgdata] = useState([]);
  console.log(imgdata);
    const getdata = async () => {

        const res = await fetch("http://localhost:8003/getdata", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
  
        const data = await res.json();
        console.log(data);
  
        if (res.status === 422 || !data) {
            console.log("error ");
  
        } else {
            setimgdata(data)
            console.log("get data", data.img);
  
        }
    }
  
    useEffect(() => {
        getdata();
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default Img;