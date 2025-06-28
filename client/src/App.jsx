
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import SkillsPage from "./SkillsPage.jsx";
import EducationPage from "./EducationPage.jsx";
import ProjectsPage from "./ProjectsPage.jsx";
import CertificationsPage from "./CertificationsPage.jsx";

function HomePage() {
  const [overview, setOverview] = useState({});
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);
  const [projects, setProjects] = useState([]);
const [certifications, setCertifications] = useState([]); 

  const navigate = useNavigate();
  

  useEffect(() => {
    axios.get("http://localhost:8000/getOverview").then((res) => setOverview(res.data));
    axios.get("http://localhost:8000/getSkills").then((res) => setSkills(res.data));
    axios.get("http://localhost:8000/getEducation").then((res) => setEducation(res.data));
    axios.get("http://localhost:8000/getProjects").then((res) => setProjects(res.data));
    axios.get("http://localhost:8000/getCertifications").then((res) => setCertifications(res.data));
  }, []);

  return (
    <div className="container">

      <header>
        <h1>{overview.name}</h1>
        <h2>{overview.title}</h2>
        <p>{overview.bio}</p>
      </header>

      <div className="grid-container">
        <div className="box" onClick={() => navigate("/skills")} style={{ cursor: "pointer" }}>
          <h3>Skills</h3>
          {skills.map((group, i) => (
            <div key={i}>
            <div className="category">{group.category}</div>

              <ul>
                {group.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="box" onClick={() => navigate("/education")} style={{ cursor: "pointer" }}>
          <h3>Education</h3>
          <ul>
{education.map((edu, i) => (
  <li key={i}>
    <div className="education-degree">{edu.degree}</div>
    <div className="education-institution">{edu.institution}</div>
<div className="education-coursework">
  <strong>Coursework:</strong>
  <div className="coursework-grid">
    {edu.coursework.map((course, idx) => (
      <div key={idx} className="course-card">{course}</div>
    ))}
  </div>
</div>
  </li>
            ))}
          </ul>
        </div>

        <div className="box" onClick={() => navigate("/projects")} style={{ cursor: "pointer" }}>
          <h3>Projects</h3>
<ul>
  {projects.map((proj, i) => (
    <li key={i} style={{ marginBottom: "20px" }}>
      <div className="project-title">{proj.title}</div>
      <div>{proj.description}</div>     
         <a
  href="https://github.com/n01680631/Projects."
  target="_blank"
  rel="noopener noreferrer"
  className="github-link"
  style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "10px", color: "#6a1b9a", textDecoration: "none", fontWeight: "bold" }}
>
  <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" width="20" height="20" />
  View on GitHub
</a>

</li>
  ))}
  </ul>
  </div>
<div
  className="box"
  onClick={() => navigate("/certifications")}
  style={{ cursor: "pointer" }}
>
  <h3>Achievement</h3>
<ul>
  {certifications.map((cert, i) => (
    <li key={i}>
      <div className="cert-name">{cert.name}</div>
      <div className="cert-issuer">{cert.issue}</div>
      <div className="cert-year">{cert.year}</div>
    </li>
  ))}
</ul>

</div>
</div>
            <div className="contact-info">
        <h3>Contact Me</h3>
        <p><strong>Email:</strong> sanehkaur22@gmail.com</p>
        <p><strong>Phone:</strong>+1 416 270 3486</p>
        <p><strong>Location:</strong> Toronto, Canada</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
