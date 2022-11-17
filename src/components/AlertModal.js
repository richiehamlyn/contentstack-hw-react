import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

export default function AlertModal({props}) {
  console.log(props)
  console.log(props.modal_bar_content)
  const [staticModal, setStaticModal] = useState(false);

  const toggleShow = () => setStaticModal(!staticModal);

  return (
    <>
      <div className="alert alert-info">
                <strong>{ props.modal_bar_content }</strong> 
                &nbsp;
                &nbsp;
                <MDBBtn onClick={toggleShow}>{ props.modal_bar_cta }</MDBBtn>
      </div>

      <MDBModal staticBackdrop tabIndex='-1' show={staticModal} setShow={setStaticModal}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle><i class="fa-solid fa-bullhorn fa-2x"></i></MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
            <h2>We are a leader</h2>
            <p>{ props.modal_content }</p>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn>Book a demo</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}