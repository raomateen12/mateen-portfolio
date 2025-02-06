


import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Restaurant website",
      description: "Build with React.JS & MUI",
      imgUrl: projImg1,
      liveLink: "https://resturant-website-reactjs-mui-sigma.vercel.app/",
      githubLink: "https://github.com/raomateen12/React_MUi_Website"
    },
    {
      title: "To Do List App",
      description: "Build with React.JS and Tailwind CSS",
      imgUrl: projImg2,
      liveLink: "https://to-do-list-zeta-sage.vercel.app/",
      githubLink: "https://github.com/raomateen12/To_do_List"
    },
    {
      title: "Validation Form",
      description: "Build with React.JS",
      imgUrl: projImg3,
      liveLink: "https://react-validation-form-psi.vercel.app/",
      githubLink: "https://github.com/raomateen12/react_validation_form"
    },
    {
      title: "Flex Box Website ",
      description: "For better understanding of concept of Flex box I designed this with HTML,CSS ",
      imgUrl: projImg4,
      liveLink: "https://flex-box-project-2.vercel.app/",
      githubLink: "https://github.com/raomateen12/Project--3"
    },
    {
      title: "Netflix Clone",
      description: "Build with HTML and CSS",
      imgUrl: projImg5,
      liveLink: "https://netflix-111.vercel.app/",
      githubLink: "https://github.com/raomateen12/netflix"
    },
    {
      title: "Food Website",
      description: "Build with react redux toolkit. You can  Add item, Remove item and generate bill slip in it",
      imgUrl: projImg6,
      liveLink: "https://react-reduxtoolkit-website.vercel.app/",
      githubLink: "https://github.com/raomateen12/React_Reduxtoolkit_website"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
      <br></br>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                   
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
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
