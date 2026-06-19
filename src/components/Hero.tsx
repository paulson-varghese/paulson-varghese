import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi';
import { useTypewriter } from '../hooks/useTypewriter';

const roles = [
  'Full-Stack Software Engineer',
  'TypeScript & React Developer',
  'Node.js Backend Expert',
  'API & SaaS Builder',
];

export default function Hero() {
  const role = useTypewriter(roles);

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="hero-grid" />
      </div>

      <div className="container">
        <div className="hero-inner">
          {/* Left: Content — children animate in via CSS stagger */}
          <div className="hero-content">
            <div className="hero-status">
              <span className="hero-status-dot" />
              Available for new opportunities
            </div>

            <h1 className="hero-name">
              Hi, I'm{' '}
              <span className="gradient-text">Paulson Varghese</span>
            </h1>

            <p className="hero-role">
              {role}
              <span className="tw-cursor" />
            </p>

            <p className="hero-desc">
              Building scalable SaaS applications with TypeScript, Node.js &amp; React.
              Passionate about clean APIs, great user experiences, and real-world impact.
            </p>

            <div className="hero-avatar-mobile-wrap">
              <div className="hero-avatar-ring" />
              <div className="hero-avatar-inner">
                <img src="/profile.jpg" alt="Paulson Varghese" className="hero-avatar-photo" />
              </div>
              <div className="hero-float-badge hero-float-badge-1">
                <span style={{ fontSize: '0.9rem' }}>⚡</span>
                TypeScript · React
              </div>
              <div className="hero-float-badge hero-float-badge-2">
                <span style={{ fontSize: '0.9rem' }}>🚀</span>
                4+ Years Exp.
              </div>
              <div className="hero-float-badge hero-float-badge-3">
                <span style={{ fontSize: '0.9rem' }}>🌍</span>
                Germany
              </div>
            </div>

            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Get in Touch <FiArrowRight />
              </a>
              <a href="/paulson_cv.pdf" download className="btn btn-outline">
                <FiDownload /> Download CV
              </a>
            </div>

            <div className="hero-socials">
              <a href="https://github.com/paulsonvargehese" target="_blank" rel="noreferrer" className="hero-social-link" title="GitHub">
                <FiGithub />
              </a>
              <a href="https://www.linkedin.com/in/paulson-varghese-158027184/" target="_blank" rel="noreferrer" className="hero-social-link" title="LinkedIn">
                <FiLinkedin />
              </a>
              <a href="mailto:paulsonvargehese@gmail.com" className="hero-social-link" title="Email">
                <FiMail />
              </a>
            </div>
          </div>

          {/* Right: Avatar */}
          <div className="hero-avatar-wrap">
            <div className="hero-avatar-ring" />
            <div className="hero-avatar-inner">
              <img
                src="/profile.jpg"
                alt="Paulson Varghese"
                className="hero-avatar-photo"
              />
            </div>
            <div className="hero-float-badge hero-float-badge-1">
              <span style={{ fontSize: '1rem' }}>⚡</span>
              TypeScript · React
            </div>
            <div className="hero-float-badge hero-float-badge-2">
              <span style={{ fontSize: '1rem' }}>🚀</span>
              4+ Years Exp.
            </div>
            <div className="hero-float-badge hero-float-badge-3">
              <span style={{ fontSize: '1rem' }}>🌍</span>
              Germany
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
