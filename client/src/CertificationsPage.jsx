import React from 'react';

const Certification = () => {
  return (
    <div style={{
      justifyContent: 'center',
      backgroundColor: 'lavender',
      minHeight: '100vh',
      alignItems: 'center',
background: 'linear-gradient(to right,rgb(20, 165, 233),rgb(228, 236, 221))',
boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',


    }}>

      <h2 style={{ textAlign: 'center', fontSize: '5rem', color: '#2c3e50',textDecoration: 'underline',
            textUnderlineOffset: '6px',
 }}>Academic Achievement</h2>
      <p style={{
          fontSize: '2rem',
          color: '#1c1c1c',
          lineHeight: '1.6',
          marginBottom: '1rem',
        }}>
        Achieved <strong>Dean’s Honour List </strong> recognition for outstanding academic
        performance in Winter 2025 semester at Humber College in the Faculty of
        Applied Sciences & Technology.
        The Dean's List Honour is for full-time students with a term grade point
        average of 80 percent or higher.
      </p>
      <img
        src="/public/Sanehdeep Kaur_badge.jpg"  
        alt="Dean's Honour"
        style={{ display: 'block',
            margin: '30px auto 0',
            maxWidth: '1000px',
            width: '100%',
            height: '50%',
            border: '4px solid black',
 }} 
      />
    </div>
  );
};

export default Certification;
