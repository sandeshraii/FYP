import React from "react";

/* REACT-BOOTSTRAP */
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  // return (
  //   <footer>
  //     <Container>
  //       <Row>
  //         <Col className="text-center py-3">Copyright &copy;{new Date().getFullYear()} We Care Medical Team | All Right Reserved | Sandesh Rai</Col>
  //       </Row>
  //     </Container>
  //   </footer>
  // );
  
  // const mainFooter = {
  //   color : "white",
  //   backgroundColor : "#1a1a1a",
  //   paddingTop : "3em",
  //   position : "relative",
  //   bottom : "0",
  //   width : "100%"
  // };
  return (
    <div className="main-footer" style = {{color : "white", backgroundColor : "#1a1a1a", paddingTop : "3em", position : "relative",bottom : "0",width : "100%"}}>
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4 style = {{color : "white"}}>We Care Team</h4>
            <ui className="list-unstyled">
              <li>01-522012</li>
              <li>kathmandu, Nepal</li>
              <li>wecare@gmail.com</li>
            </ui>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4 style = {{color : "white"}}>Our Services</h4>
            <ui className="list-unstyled">
              <li>Browse all Medicine</li>
              <li>Oder Medicine</li>
              <li>Health Care Products</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4 style = {{color : "white"}}>Find Us On</h4>
            <ui className="list-unstyled">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Youtube</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            <Col className="text-center py-3">Copyright &copy;{new Date().getFullYear()} We Care Medical Team | All Right Reserved | Sandesh Rai</Col>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
