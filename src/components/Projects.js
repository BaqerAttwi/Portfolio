import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" style={{marginBottom:'5rem'}}>
                    <Nav.Item>
                      <Nav.Link eventKey="first">Project-1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Project-2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Project-3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        <Col md={6} ><img src= {projImg1} alt="image p 1"  style={{marginBottom:'8vh'}}></img></Col>
                        <Col md={6} >
                        <ul><li><h1>Project-name: Food-Store Menu</h1></li>
                        <li style={{listStyle:'none'}}><h3>    Languages: PHP,HTML5,CSS,Bootstrap</h3></li>
                        <li style={{listStyle:'none'}}><h5>   Admin Pannel: ADD and Delete Items, Check review for Store </h5></li>
                        <li style={{listStyle:'none'}}><h5>   Animation for offers and resposnive design  </h5></li>
                        <li style={{listStyle:'none'}}><h5>   user view items and add feedback   </h5></li>
                        <li style={{listStyle:'none'}}><h5> GIthub-link :</h5> <a href="https://github.com/BaqerAttwi/Food-store" target="_blank" rel="noopener noreferrer">
  https://github.com/BaqerAttwi/Food-store
</a>
  </li></ul>
                        </Col> </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second"><Row>
                    <Col md={6} ><img src= {projImg2} alt="image p 1" style={{marginBottom:'8vh'}}></img></Col>
                      <Col  md={6}>
                    <ul><li><h1>Project-name: Social Media</h1></li>
                        <li style={{listStyle:'none'}}><h3>    Languages:React,Node,Express,Bootstrap,MySQL</h3></li>
                        <li  ><h5> API to check <li style={{listStyle:'none'}}>Nationality</li><li style={{listStyle:'none'}}>check text and image  before posting </li></h5></li>
                        <li ><h5>   Animation resposnive design  </h5></li>
                        <li ><h5>   users view posts and they can interact by comment and like   </h5></li>
                        <li><h5>  Users can add friend also  (accept,deny)   </h5></li>
                        <li ><h5>  Can see comments and likes on his post </h5></li>
                        <li ><h5>  Users can search for each other   </h5></li>
                        <li style={{listStyle:'none'}}><h5> GIthub-link :</h5> <a href="https://github.com/BaqerAttwi/SocialMedia" target="_blank" rel="noopener noreferrer">
                        https://github.com/BaqerAttwi/SocialMedia
</a>
  </li></ul></Col></Row>
  
  </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                       
                        <ul><li><h1>Project-name:Chat APP (IN Progress)</h1></li>
                        <li style={{listStyle:'none'}}><h3>    Languages: React,Node,express,Mangodb,websocket.io</h3></li>
                        <li style={{listStyle:'none'}}><h5> Developed a ChatApp with React for a responsive design.
</h5></li>
                        <li style={{listStyle:'none'}}><h5>  Implemented an API to validate and check text before sending.
 </h5></li>
                        <li style={{listStyle:'none'}}><h5>Enabled real-time messaging, allowing users to interact seamlessly within the app.
                         </h5></li>
                         <li style={{listStyle:'none'}}><h5>Ensured secure communication with encrypted messaging.  </h5></li>
                        <li style={{listStyle:'none'}}><h5> GIthub-link :</h5> <a href="https://github.com/BaqerAttwi/chatapp" target="_blank" rel="noopener noreferrer">
                        https://github.com/BaqerAttwi/chatapp
</a>
  </li></ul>
                         </Row>
             </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
