import React from 'react';

const projects = [
  {
    name: 'ShopSwift',
    github: 'https://github.com/n01680631/Projects..git',
    summary: 'A full stack ecommerce website built with React.js, Redux Toolkit and styled components, providing a seamless shopping experience.ShopSwift is a responsive e-commerce web application designed to navigating and managing users shopping needs. By utilizing Redux Toolkit for efficient state management, we will implement features such as product listings, add-to-cart functionality, and dynamic price calculations. This project not only enhances user experience but also serves as a practical application of key concepts learned in the course, including component-based architecture, routing, and API integration.',
    description: [
      'Display a grid of products fetched from a mock API or local JSON file, demonstrating component-based architecture.',
      'Users can add products to their cart, with real-time updates to the cart count and total price, showcasing effective state management using Redux Toolkit.',
      'Implement user login and registration features to manage user sessions, integrating with Firebase for authentication.',
      'Ensued data validation, form security, and error handling',
    ],
  },
  {
    name: 'Payment Inventory System',
    github: 'https://github.com/n01680631/Projects.git',
    summary: 'The Java-based Payment and Inventory System for a cake shop is designed using core object-oriented programming (OOP) principles such as encapsulation, inheritance, polymorphism, abstraction, error handling and interface implementation. The system manages the shop’s cake inventory, processes customer payments, and maintains sales records.',
    description: [
      'Allows users to select cakes, specify quantities, and place orders through interface.',
      'Cake data like name, price, and quantity is securely managed through encapsulated classes.',
      'An inventory system to track customer response while using website.',
      'Created a java application where user can input orders and get payment details.',
    ],
  },
];

const styles = {
  outerWrapper: {
    backgroundColor: '#4a4a4a',
    minHeight: '100vh',
    width: '100vw', 
    padding: '40px 20px',
    boxSizing: 'border-box',
  },
  innerContent: {
    maxWidth: 900,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  pageTitle: {
    color: 'white',
    fontSize: '3.9rem',
    fontWeight: 'bold',
    marginBottom: 60,
    textAlign: 'center',
    width: '100%',
  },
  projectCard: {
    width: '100%',
    border: '3px solid black',
    borderRadius: 15,
    backgroundColor: 'white',
    boxShadow: '0 8px 16px rgba(255, 0, 0, 0.3)',
    padding: 30,
    marginBottom: 50,
    boxSizing: 'border-box',
  },
  projectName: {
    fontSize: '2.7rem',
    color: '#b30000',
    fontWeight: '700',
    marginBottom: 10,
  },
  projectSummary: {
    fontSize: '1.2rem',
    fontStyle: 'italic',
    color: '#660000',
    marginBottom: 20,
  },
  projectDescription: {
    listStyle: 'none',
    paddingLeft: 0,
    marginBottom: 30,
    fontSize: '1.1rem',
    lineHeight: 1.6,
  },
  projectDescriptionItem: {
    position: 'relative',
    paddingLeft: 20,
    marginBottom: 10,
  },
  githubLink: {
    fontSize: '1.7rem',
    textDecoration: 'underline',
    cursor: 'pointer',
    display: 'inline-block',
  },
};

export default function ProjectsPage() {
  return (
    <div style={styles.outerWrapper}>
      <div style={styles.innerContent}>
        <h1 style={styles.pageTitle}>My Projects</h1>

        {projects.map((project, idx) => (
          <div key={idx} style={styles.projectCard}>
            <h2 style={styles.projectName}>{project.name}</h2>
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" width="30" height="30" />
                        <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.githubLink}

            >
           View on GitHub
            </a>
            
            <p style={styles.projectSummary}>{project.summary}</p>

            <ul style={styles.projectDescription}>
              {project.description.map((point, i) => (
                <li key={i} style={styles.projectDescriptionItem}>
                  {point}
                </li>
              ))}
            </ul>


          </div>
        ))}
      </div>
    </div>
  );
}
