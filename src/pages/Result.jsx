import React from 'react';
import { useLocation } from 'react-router-dom';

const styles = {
  main: {
    padding: '2rem',
    textAlign: 'center',
    fontFamily: "'Poppins', sans-serif"
  },
  title: {
    color: '#8a38f5',
    marginBottom: '2rem'
  },
  list: {
    listStyle: 'none',
    padding: 0,
    maxWidth: '500px',
    margin: '0 auto'
  },
  listItem: {
    background: '#f5e9fd',
    border: '1px solid #e0cffc',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
    textAlign: 'left',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
  },
  productName: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: '#581c87'
  },
  score: {
    color: '#7e22ce'
  },
  error: {
    color: 'red',
    marginTop: '2rem'
  }
};

export default function Result() {
  const location = useLocation();
  const recommendations = location.state?.recommendations;

  if (!recommendations || recommendations.length === 0) {
    return (
      <main style={styles.main}>
        <h2 style={styles.title}>Hasil Rekomendasi Skincare</h2>
        <p style={styles.error}>
          Maaf, tidak ada rekomendasi yang ditemukan untuk kriteria Anda. Silakan coba lagi.
        </p>
      </main>
    );
  }

  return (
    <main style={styles.main}>
      <h2 style={styles.title}>✨ Rekomendasi Terbaik Untukmu! ✨</h2>
      <ul style={styles.list}>
        {recommendations.map((product, index) => (
          <li key={product.nama_produk + index} style={styles.listItem}>
            {/* Menggunakan 'nama_produk' dari backend */}
            <p style={styles.productName}>{index + 1}. {product.nama_produk}</p>
            
            {/* Menggunakan 'skor_topsis' dari backend */}
            {product.skor_topsis !== undefined && (
              <p style={styles.score}>Skor Kecocokan: {product.skor_topsis.toFixed(4)}</p>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}