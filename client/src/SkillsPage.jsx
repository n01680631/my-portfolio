import React from "react";

export default function SkillsPage() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          flex: 1,
          background: "linear-gradient(to bottom right, #cce5ff, #99ccff)",
          padding: "3rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            color: "#003366",
            marginBottom: "1.5rem",
          }}
        >
          💻 Technical Skills
        </h2>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            fontSize: "1.2rem",
            fontWeight: 500,
            width: "70%",
          }}
        >
          {[
            "Java",
            "CSS",
            "JavaScript",
            "React.js",
            "Node.js",
            "MongoDB",
            "NoSQL",
            "Git & GitHub",
            "JSON",
            "Python",
          ].map((skill, index) => (
            <li
              key={index}
              style={{
                backgroundColor: "white",
                marginBottom: "10px",
                padding: "10px",
                borderLeft: "5px solid #007bff",
                borderRadius: "5px",
              }}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <div
        style={{
          flex: 1,
          background: "linear-gradient(to bottom left, #fcdff6, #e0b3ff)",
          padding: "3rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ flex: 1 }}>
          <h2
            style={{
              fontSize: "2.5rem",
              color: "#7209b7",
              marginBottom: "1.5rem",
            }}
          >
            🤝 Soft Skills
          </h2>
          <ul
            style={{
              listStyleType: "none",
              padding: 0,
              fontSize: "1.2rem",
              color: "#3a0ca3",
              fontWeight: 500,
              lineHeight: "2rem",
            }}
          >
            <li>Teamwork</li>
            <li>Communication</li>
            <li>Problem-Solving</li>
            <li>Time Management</li>
            <li>Adaptability</li>
            <li>Attention to Detail</li>
            <li>Work ethic</li>
            <li>Leadership</li>
            <li>Growth mindset</li>
          </ul>
        </div>

        <div
          style={{
            flex: 1,
            backgroundColor: "#fff0fc",
            padding: "1.5rem",
            borderRadius: "12px",
            boxShadow: "0 0 10px rgba(196, 8, 8, 0.1)",
            marginLeft: "2rem",
            fontSize: "1rem",
            color: "#4a148c",
            lineHeight: "1.6rem",
            maxWidth: "90%",
            border: "solid black",
          }}
        >
          <p>
Skilled in Java programming with strong problem-solving abilities; able to debug efficiently and find logical solutions under tight deadlines.”
          </p>
          
          <p>
Proficient in HTML, CSS, JavaScript, and React with a collaborative approach to front-end development; worked closely with team members to deliver responsive websites that meet user needs.”
          </p>
          <p>
Hands-on experience with version control tools like Git and GitHub; quick to adapt to new frameworks and development environments, supporting team agility in fast-paced projects.”
          </p>
        </div>
      </div>
    </div>
  );
}
