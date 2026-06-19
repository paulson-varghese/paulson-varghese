export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          © {year}{' '}
          <a href="#home">Paulson Varghese</a>
          {' '}· Built with React &amp; TypeScript · Speyer, Germany
        </p>
      </div>
    </footer>
  );
}
