import React,{useState} from 'react'
import { Button } from 'react-bootstrap'


const Register = () => {
   const [inpval,setINP] = useState({
    name:"",
    email:"",
    age:"",
    mobile:"",
    state:"",
    country:"",
    lan:{},
    gender:""

   })

    const setData = (e) => {
    console.log(e?.target?.value);
    const{name,value} = e?.target;
    setINP((preval) =>{
        return{
            ...preval,
            [name]: value
        }
     })
   }
   const addinput = async (e) =>{
    e.preventDefault()
    const {name,email,age,country,mobile,lan,state,gender} = inpval;
    const res = await fetch("http://localhost:8003/register",{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,email,age,country,mobile,lan,state,gender
      })

    })
    const data = await res.json()
    console.log(data);
    if(res.status === 404 || !data){
      alert("error")
      console.log("error");
    }
    else{
      alert("Add success")
      console.log(data);
    }
    e.target.reset();
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
  <input class="form-check-input" type="checkbox" name="lan"  value="hindi" onChange={setData} id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    hindi
  </label>
</div>
            <div class="form-check">
  <input class="form-check-input" type="checkbox" name="lan"  value="english" onChange={setData} id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
   engl
  </label>
</div>
            </div>
            
                 <Button  type='submit'  onClick={addinput}  variant="primary">submit</Button>
          </div>
          </form>
        </div>
   
  )
}

export default Register