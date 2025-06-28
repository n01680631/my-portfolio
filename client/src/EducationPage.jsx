import React from 'react';

const styles = {
  outerWrapper: {
    backgroundColor: '#f0f4f8',
    minHeight: '100vh',
    width: '100vw',
  },
  container: {
    padding: '60px 30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '20px',
    borderBottom: '4px solid #3498db',
    paddingBottom: '10px',
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: '30px',
    maxWidth: '800px',
    width: '100%',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  subtitle: {
    fontSize: '2.0rem',
    fontWeight: 'bold',
    color: '#34495e',
    marginBottom: '10px',
  },
  text: {
    fontSize: '1.5rem',
    marginBottom: '20px',
    lineHeight: 1.6,
  },
  courseList: {
    paddingLeft: '20px',
    fontSize: '1.3rem',
  },
  courseItem: {
    marginBottom: '10px',
  },
};

export default function EducationPage() {
  return (
    <div style={styles.outerWrapper}>
      <div style={styles.container}>
        <h1 style={styles.title}>🎓 My Education</h1>
        <div style={styles.card}>
          <p style={styles.subtitle}>🏫 Humber College – North Campus, Toronto</p>
          <p style={styles.text}><strong>Program:</strong> Computer Programming</p>
          <p style={styles.text}><strong>Year:</strong> 2024 – 2025</p>

          <p style={styles.subtitle}>📚 Courses:</p>
          <ul style={styles.courseList}>
            <li style={styles.courseItem}>
              <strong>Web Development:</strong> Learn to build responsive websites using HTML, CSS, JavaScript, and frameworks like React.
            </li>
            <li style={styles.courseItem}>
              <strong>Java Programming:</strong> Object-oriented programming, data structures, and software development in Java.
            </li>
            <li style={styles.courseItem}>
              <strong>Database Systems:</strong> Understand relational databases, SQL queries, and database design principles.
            </li>
         <li style={styles.courseItem}>
              <strong>Full Stack Development:</strong> Combine frontend and backend development to build complete web applications with React, Express, MongoDB, and Node.js.
            </li>
            <li style={styles.courseItem}>
              <strong>Systems Analysis:</strong> Techniques for gathering requirements and modeling software systems.
            </li>
            <li style={styles.courseItem}>
              <strong>Mobile App Development:</strong> Design and build mobile apps using React Native or JSON-based APIs.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
