import React, { useEffect, useState } from "react";
import "../App.css";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom';
import Detailmodal from "./Detailmodal";
const Home = () => {
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);
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
          setUserdata(data)
          console.log("get data");

      }
  }

  useEffect(() => {
      getdata();
  }, [])
 const DeleteUser = async(id)=>{
  const res2 = await fetch(`http://localhost:8003/deleteuser/${id}`, {
          method: "DELETE",
          headers: {
              "Content-Type": "application/json"
          }
      });

      const data2 = await res2.json();
    

      if (res2.status === 422 || !data2) {
          console.log("error ");

      } else {
          getdata()
         
      }
 }
  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn">
          <a href="/register" className="btn btn-primary">Add data</a>
        </div>
        <table class="table mt-2">
          <thead>
            <tr className="bg-dark text-white">
              <th scope="col">Id</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Location</th>
              <th scope="col">Number</th>
              <th scope="col"></th>
              <th scope="col">Modal</th>
            </tr>
          </thead>
          <tbody>
            {
                                getuserdata.map((element, id) => {
                                    return (
                                        <>
                                            <tr>
                                                <th scope="row">{id + 1}</th>
                                                <td>{element.name}</td>
                                                <td>{element.email}</td>
                                                <td>{element.state},{element.country}</td>
                                                <td>{element.mobile}</td>
                                                <td className="d-flex justify-content-between">
                                                    <NavLink to={`detail/${element._id}`}> <button className="btn btn-success"><RemoveRedEyeIcon /></button></NavLink>
                                                    <NavLink to={`edit/${element._id}`}>  <button className="btn btn-primary"><CreateIcon /></button></NavLink>
                                                    <button className="btn btn-danger" onClick={()=>DeleteUser(element._id)}><DeleteOutlineIcon /></button>
                                                </td>
                                                <td>
                                                <Detailmodal element={element}/>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
         
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
