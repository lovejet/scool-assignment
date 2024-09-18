import React from 'react';

// Fetching data from the Google Drive link
export async function getStaticProps() {
  const res = await fetch(
    'https://drive.google.com/uc?export=download&id=15RnweYQyuXf9UOSm_KWmlScoUEhfGBdB'
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 60, // Revalidate every 60 seconds (optional)
  };
}

export default function Home({ data }) {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Data Parsing App</h1>
      <div style={styles.cardContainer}>
        {data.map((item, index) => (
          <div key={index} style={styles.card}>
            <h2 style={styles.question}>{item.Q}</h2>
            <p style={styles.answer}>{item.A}</p>
            <p style={styles.type}>
              <strong>Type:</strong> {item.T}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Inline styling for the cards and container
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '40px',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    transition: 'transform 0.2s ease-in-out',
  },
  cardHover: {
    transform: 'scale(1.05)',
  },
  question: {
    fontSize: '1.2rem',
    color: '#333',
    marginBottom: '10px',
  },
  answer: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '20px',
  },
  type: {
    fontSize: '0.9rem',
    color: '#888',
  },
};
