import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
// import projImg2 from "../../assets/img/project-img2.png";
import projImg2 from "../../assets/img/pokemon.png";
import projImg3 from "../../assets/img/prestamos.png";
import projImg1 from "../../assets/img/rickandmorty.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Proyecto Universitario",
      description: "Desarrollo & Diseño",
      imgUrl: projImg1,
    },
    {
      title: "Proyecto Universitario",
      description: "Desarrollo & Diseño",
      imgUrl: projImg2,
    },
    {
      title: "Inicio de Negocio",
      description: "Desarrollo & Diseño",
      link: 'https://www.pretamos.online/',
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Proyectos</h2>
                <p>En esta sección, encontrarás una selección de proyectos en los que he trabajado. Cada proyecto representa una combinación de diseño y desarrollo, y he puesto mi pasión y habilidades en ellos. Explora los diferentes proyectos en las pestañas a continuación y descubre más sobre mi trabajo.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Pestaña 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Pestaña 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Pestaña 3</Nav.Link>
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

                    <Tab.Pane eventKey="second">
                      <p>¡Pronto seguiré sumando proyectos aquí!</p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                      <p>¡Pronto seguiré sumando proyectos aquí!</p>
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