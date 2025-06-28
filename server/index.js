import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 8000;
app.use(cors());

app.get('/', (req, res) => {
  res.send('Portfolio API running.');
});

app.get('/getOverview', (req, res) => {
  res.json({
    name: "Sanehdeep Kaur",
    title: " Focused on Web and Java development  ",
    bio: "Motivated and detail-oriented IT student with a strong foundation in software development, networking, and system administration. Seeking an internship or entry-level role to apply academic knowledge, contribute to real-world projects, and continue developing as a professional in the tech industry.."
  });
});

app.get('/getSkills', (req, res) => {
  res.json([
    {
      category: "Languages",
      items: ["Java", "Python", "JavaScript"]
    },
    {
      category: "Web Development",
      items: ["HTML", "CSS", "Node.js", "React.js", "JSON"]
    },
    {
      category: "Tools",
      items: ["Git/GitHub", "Visual Studio Code"]
    },
    {
      category: "Libraries",
      items: ["NumPy"]
    },
    {
      category: "Others",
      items: ["Data Analysis", "MySQL", "Basic Machine Learning", "Networking Fundamentals"]
    }
  ]);
});

app.get('/getEducation', (req, res) => {
  res.json([
    {
      institution: "Humber College, Toronto, ON",
      degree: "Diploma in Computer Programming (2024-2026)",
      coursework: [
        "Object Oriented Programming",
        "Modern Web Technologies",
        "Advanced Front-End Programming",
        "Cross-Platform Mobile Development",
        "Database Programming"
      ]
    }
  ]);
});

app.get('/getProjects', (req, res) => {
  res.json([
    {
      title: "E-commerce Website",
      description: "Developed a full stack ecommerce website with React, Node,Redux and MongoDB.",
      link: "https://github.com/n01680631/lab03"
    },
    {
      title: "Payment Inventory System",
      description: "Java-based desktop app for order/payment management.",
      link: "https://github.com/n01680631/Projects"
    }
  ]);
});

app.get('/getCertifications', (req, res) => {
  res.json([
    {
      name: "Dean's Honour at Humber College",
      issue: "Humber College",
      year: "2025"
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
