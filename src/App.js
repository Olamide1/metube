import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol,MDBNavbar, MDBCard,MDBCardBody,MDBCardImage,MDBCardTitle,MDBCardText, MDBNavbarBrand, MDBJumbotron } from "mdbreact";

export default () => (
  <BrowserRouter>

<MDBContainer fluid>
<br/>
      <MDBRow >
        <MDBCol>
            <MDBNavbar color="blue" className="text-white darken-3">
            <MDBCol md="8">
        <MDBNavbarBrand>Metube</MDBNavbarBrand>
        </MDBCol>
        <MDBCol md="4">
        <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
        </MDBCol>
            </MDBNavbar>
        </MDBCol>
      </MDBRow>
<br/>

<MDBRow fluid>
        <MDBCol md="8">
          <MDBCard>
            <MDBCardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Slides/img%20(137).jpg"/>
            <MDBCardBody>
            <MDBCardTitle>
              Current Video
            </MDBCardTitle>
            <MDBCardText>This is the video of the video. Bye!</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol md="4">
          <MDBCard>
  
            <MDBCardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/men.jpg" />
            <MDBCardBody>
              <MDBCardTitle>Push Video</MDBCardTitle>
              <MDBCardText>Video Of Jackue Chan's and Bruce Lee's fight, before Bruce Lee's death.</MDBCardText>
          
            </MDBCardBody>
         
          </MDBCard>
        </MDBCol>
      </MDBRow>
</MDBContainer>

  </BrowserRouter>
);