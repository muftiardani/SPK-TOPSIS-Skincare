import React from 'react'
import "../styles/Input.css"
import { FaRegEdit } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export default function Input() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/result')
  }

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
        <select id="skinType" required>
          <option value="">Kategori Kulit</option>
          <option>Normal</option>
          <option>Kering</option>
          <option>Berminyak</option>
          <option>Sensitif</option>
        </select>

        <label htmlFor="skincareType">Pilih Kategori Skincare</label>
        <select id="skincareType" required>
          <option value="">Kategori Skincare</option>
          <option>Sabun Cuci Muka</option>
          <option>Toner</option>
          <option>Moisturizer</option>
          <option>Serum</option>
          <option>Sunscreen</option>
        </select>

        <button type="submit" className="next-button">Next</button>
      </form>
    </main>
  )
}