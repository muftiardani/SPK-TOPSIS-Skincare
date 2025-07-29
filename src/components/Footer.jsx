import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ background: "#f2f2f2", padding: "2rem 6rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
        {/* Kolom Brand */}
        <div>
          <h3 style={{ marginBottom: "1rem" }}>Kulitku</h3>
          <p>Temukan skincare terbaik untuk kulitmu.</p>
        </div>

        {/* Kolom Menu */}
        <div>
          <h4 style={{ marginBottom: "0.5rem" }}>Menu</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Rekomendasi</a></li>
            <li><a href="#">Tentang</a></li>
          </ul>
        </div>

        {/* Kolom Info */}
        <div>
          <h4 style={{ marginBottom: "0.5rem" }}>Info</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><a href="#">Kontak</a></li>
            <li><a href="#">Privasi</a></li>
            <li><a href="#">Bantuan</a></li>
          </ul>
        </div>
      </div>

      {/* Garis */}
      <hr style={{ margin: "2rem 0", borderColor: "#ccc" }} />

      {/* Copyright & Sosial */}
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", alignItems: "center" }}>
        <p style={{ margin: 0 }}>© 2025 Kulitku. All rights reserved.</p>
        <div style={{ display: "flex", gap: "1rem" }}>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
