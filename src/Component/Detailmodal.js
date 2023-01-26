import React, {  Fragment, useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WcIcon from '@mui/icons-material/Wc';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
// ** Reactstrap Imports
import { Button, Modal, ModalHeader, ModalBody, Input, Label, ModalFooter} from 'reactstrap'

const ModalConfig = [
  
  {
    id: 4,
    btnTitle: 'Add payment type',
    modalTitle: 'New payment type',
    modalClass: 'Default Modal'
  }
]

const Detailmodal = ({element}) => {

//     const [userdata, setUserdata] = useState([]);
//     console.log(element, "ele");
   
//     const {id} =useParams("")
//   const getdata = async () => {
    

//       const res = await fetch(`http://localhost:8003/getuser/${id}`, {
//           method: "GET",
//           headers: {
//               "Content-Type": "application/json"
//           }
//       });

//       const data = await res.json();
//       console.log(data);

//       if (res.status === 422 || !data) {
//           console.log("error ");

//       } else {
//           console.log(data)
//           setUserdata(data)
//           console.log("get data");

//       }
//   }
  
//   useEffect(() => {
//       getdata();
//   }, [])
//  console.log(userdata, "userdata");
  const [modal, setModal] = useState(null)

  const toggleModal = id => {
    if (modal !== id) {
      setModal(id)
    } else {
      setModal(null)
    }
  }
  const renderModal = ModalConfig.map(item => {
    return (
      <Fragment key={item.id} className="mx-auto">
        <div>
       
        <Button color='dark' className='p-1'  onClick={() => {
                  toggleModal(item.id);
                 
                }} key={item.title} >
            {item.btnTitle}
          </Button>
        </div>
        <Modal
          key={item.id}
          isOpen={modal === item.id}
          toggle={() => toggleModal(item.id)}
          className={`modal-dialog-centered ${item.modalClass}`}
        >
          <ModalHeader className='pb-2 ' toggle={() => toggleModal(item.id)}>
            <h3 className='fw-bolder text-dark'>{item.modalTitle}</h3>
            {item.title}
          </ModalHeader>
         
          <ModalBody >
            
          <div className="row">
                        <div className="left_view col-lg-6 col-md-6 col-12">
                        
                            <h3 className="mt-3">Name: <span >{element.name}</span></h3>
                            <h3 className="mt-3">Age: <span >{element.age}</span></h3>
                            <p className="mt-3"><MailOutlineIcon />Email: <span>{element.email}</span></p>
                            <p className="mt-3"><WcIcon />Gender: <span>{element.gender}</span></p>
                        </div>
                        <div className="right_view  col-lg-6 col-md-6 col-12">

                            <p className="mt-5"><PhoneAndroidIcon />mobile: <span>+91 {element.mobile}</span></p>
                            <p className="mt-3"><LocationOnIcon />location: <span>{element.state},{element.country}</span></p>
                            <p className="mt-3"><LanguageIcon/>Language: <span>{element.lan}</span></p>
                        </div>
                    </div>
            
          </ModalBody>
          <ModalFooter>
          
         
          </ModalFooter>
        </Modal>
      </Fragment>
    )
  })

  return <div className='demo-inline-spacing'>{renderModal}</div>
}

export default Detailmodal