import React, { useState } from 'react';
import '../styles/Input.css';
import { FaRegEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Input() {
  const navigate = useNavigate();
  const [skinType, setSkinType] = useState('');
  const [skincareType, setSkincareType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const API_URL = 'https://365f739ba0ea.ngrok-free.app/recommend';

    const requestData = {
      skin_type: skinType,
      skincare_category: skincareType,
      weights: [0.4, 0.3, 0.2, 0.1],
      impacts: ['-', '+', '+', '+'],
    };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      navigate('/result', { state: { recommendations: result.recommendations } });

    } catch (error) {
      console.error("Gagal mendapatkan rekomendasi:", error);
    }
  };

  return (
    <main className="input-container">
      <h1>
        Find the Best <span className="highlight-purple">Skincare</span> Recommendations<br />
        Based on Your Needs!
      </h1>

      <div className="form-header">
        <FaRegEdit className="form-icon" />
        <h2>
          <span className="highlight-purple">Skincare</span> Matching Form
        </h2>
      </div>

      <form className="form-box" onSubmit={handleSubmit}>
        <label htmlFor="skinType">Pilih Kategori Kulit Kamu</label>
        <select
          id="skinType"
          value={skinType}
          onChange={(e) => setSkinType(e.target.value)}
          required
        >
          <option value="Normal">Normal</option>
          <option value="Berminyak">Berminyak</option>
          <option value="Kering">Kering</option>
          <option value="Sensitif">Sensitif</option>
        </select>

        <label htmlFor="skincareType">Pilih Kategori Skincare</label>
        <select
          id="skincareType"
          value={skincareType}
          onChange={(e) => setSkincareType(e.target.value)}
          required
        >
          <option value="Essence">Essence</option>
          <option value="Exfoliator">Exfoliator</option>
          <option value="Eye Cream">Eye Cream</option>
          <option value="Moisturizer">Moisturizer</option>
          <option value="Serum">Serum</option>
          <option value="Sunscreen">Sunscreen</option>
          <option value="Toner">Toner</option>
        </select>

        <button type="submit" className="next-button">Next</button>
      </form>
    </main>
  );
}