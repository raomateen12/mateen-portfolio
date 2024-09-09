// import { Col } from "react-bootstrap";

// export const ProjectCard = ({ title, description, imgUrl }) => {
//   return (
//     <Col size={12} sm={6} md={4}>
//       <div className="proj-imgbx">
//         <img src={imgUrl} />
//         <div className="proj-txtx">
//           <h4>{title}</h4>
//           <span>{description}</span>
//         </div>
//       </div>
//     </Col>
//   )
// }
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, liveLink, githubLink,features }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="project-links">
            <a href={liveLink} target="_blank" rel="noopener noreferrer">Live Site</a>
           <br></br>
  
            <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </Col>
  );
}
