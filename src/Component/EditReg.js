import React,{useEffect, useState} from 'react'
import { NavLink, useParams,  Navigate, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const EditReg = () => {
   const [inpval,setINP] = useState({
    name:"",
    email:"",
    age:"",
    mobile:"",
    work:"",
    add:"",
    description:""
   })
    const setData = (e) => {
    console.log(e.target.value);
    const{name,value} = e.target;
     setINP((preval) =>{
        return{
            ...preval,
            [name]: value
        }
     })
   }
   const navigate = useNavigate()
   const {id} =useParams("")
  const getdata = async () => {
    

      const res = await fetch(`http://localhost:8003/getuser/${id}`, {
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
        setINP(data)
          console.log("get data");

      }
  }
  
  useEffect(() => {
      getdata();
  }, [])
  const updateuser = async(e)=>{
    e.preventDefault()
    const {name,email,age,mobile,work,add,description} = inpval;
    const res2 = await fetch(`http://localhost:8003/updatedata/${id}`,{
      method:"PATCH",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,email,age,mobile,work,add,description
      })

    })
    const data2 = await res2.json()
    console.log(data2);
    if(res2.status === 404 || !data2){
      alert("Plz fill the from")
      console.log("error");
    }
    else{
      alert("Edit success")
      console.log(data2);
      navigate('/')
    }
    

  }
  return (
    <div className='container'>
         <form >
          <div className='row'>
          
           <div className='mb-3 col-lg-6 col-md-6 col-12'>
            <label for="exampleInputname">Name</label>
             <input type="text" onChange={setData} value={inpval.name} name="name"  class="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter Name" />
   
            </div>
            <div className='mb-3 col-lg-6 col-md-6 col-12'>
            <label for="exampleInputEmail1">Email</label>
            <input type="email" onChange={setData} name="email"value={inpval.email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
   
            </div>
            <div className='mb-3 col-lg-6 col-md-6 col-12'>
            <label for="exampleInputname">Age</label>
            <input type="text"onChange={setData} name="age" value={inpval.age}class="form-control" id="exampleInputAge1" aria-describedby="agelHelp" placeholder="Enter age" />
   
            </div>
            
            <div className='mb-3 col-lg-6 col-md-6 col-12'>
            <label for="exampleInputname">Country</label>
            <select  name='country' onChange={setData}class="form-select" aria-label="Default select example">
  <option >select country name</option>
  <option >India</option>
  <option >Pakistan</option>
  <option >Bangladesh</option>
</select>
            </div>
            <div className='mb-3 col-lg-6 col-md-6 col-12'>
            <label for="exampleInputname">Mobile</label>
            <input type="number" onChange={setData}  name="mobile" value={inpval.mobile} class="form-control" id="exampleInputMobile1" aria-describedby="mobileHelp" placeholder="Enter Mobile" />
   
            </div>
            <div className='mb-3 col-lg-6 col-md-6 col-12'>
            <label for="exampleInputname">State</label>
            <select name='state'  onChange={setData}  class="form-select" aria-label="Default select example">
  <option >Select the State</option>
  <option  >Maharashtra</option>
  <option   >Tamil Nadu</option>
  <option   >Rajasthan</option>
</select>
            </div>
            <div className='mb-3 col-lg-6 col-md-6 col-12'>
            <div class="form-check">
  <input class="form-check-input" value="male" onChange={setData} type="radio" name="gender" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    male
  </label>
</div>
            <div class="form-check">
  <input class="form-check-input" value="female" onChange={setData} type="radio" name="gender" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
   female
  </label>
</div>
            
            </div>
            <div className='mb-3 col-lg-6 col-md-6 col-12'>
            <div class="form-check">
  <input class="form-check-input" type="checkbox" name="lan"  value="Hindi" onChange={setData} id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Hindi
  </label>
</div>
            <div class="form-check">
  <input class="form-check-input" type="checkbox" name="lan"  value="English" onChange={setData} id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
   English
  </label>
</div>
            </div>
            
                 <Button  type='submit'  onClick={updateuser}  variant="primary">submit</Button>
          </div>
          </form>
        </div>
   
  )
}

export default EditReg