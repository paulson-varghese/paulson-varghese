import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { Reveal } from './Reveal';
import { useInView } from '../hooks/useInView';

interface Project {
  type: string;
  title: string;
  desc: string;
  tech: string[];
  gradient: [string, string];
  iconChar: string;
  github?: string;
  demo?: string;
  confidential?: boolean;
}

const projects: Project[] = [
  {
    type: 'Master Thesis',
    title: 'Automated API Testing Framework with CI/CD Integration',
    desc: 'A scalable API testing framework integrated into CI/CD pipelines. Implements dynamic API discovery using OpenAPI/Swagger, with a frontend dashboard to visualize API responses and testing results.',
    tech: ['TypeScript', 'Node.js', 'React', 'OpenAPI', 'Swagger', 'CI/CD', 'Playwright'],
    gradient: ['#4c1d95', '#0c4a6e'],
    iconChar: '🧪',
    confidential: true,
  },
  {
    type: 'Game',
    title: 'Free Run — 3D Endless Runner',
    desc: 'A browser-based 3D endless runner rendered in real-time WebGL. Dodge obstacles and keep running through a neon-lit world, with post-processing bloom effects and smooth camera motion for an immersive arcade experience.',
    tech: ['React', 'TypeScript', 'Three.js', 'React Three Fiber', 'drei', 'Zustand', 'Vite'],
    gradient: ['#7c1d6f', '#0e7490'],
    iconChar: '🏃',
    github: 'https://github.com/paulson-varghese/free-run',
    demo: 'https://free-run-two.vercel.app/',
  },
  {
    type: 'Hobby Project',
    title: 'Personal Finance Simulator',
    desc: 'An interactive personal finance simulator built for fun — model income, expenses, savings, and investments to visualize long-term financial outcomes. Helps users experiment with budgeting strategies and compound growth scenarios.',
    tech: ['React', 'TypeScript', 'Vite', 'Recharts'],
    gradient: ['#064e3b', '#1e3a5f'],
    iconChar: '💰',
    github: 'https://github.com/paulsonvargehese/personal-finance-simulator',
    demo: 'https://personal-finance-simulator-six.vercel.app/',
  },
];

const ProjectImagePlaceholder = ({ gradient, icon, title }: {
  gradient: [string, string];
  icon: string;
  title: string;
}) => (
  <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%', height: '100%' }}>
    <defs>
      <linearGradient id={`g-${title.slice(0, 8)}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={gradient[0]} />
        <stop offset="100%" stopColor={gradient[1]} />
      </linearGradient>
    </defs>
    <rect width="400" height="180" fill={`url(#g-${title.slice(0, 8)})`} />
    {[0,1,2,3].map(i => (
      <line key={`h${i}`} x1="0" y1={i*45} x2="400" y2={i*45} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
    ))}
    {[0,1,2,3,4,5,6,7,8].map(i => (
      <line key={`v${i}`} x1={i*50} y1="0" x2={i*50} y2="180" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
    ))}
    <circle cx="200" cy="90" r="55" fill="rgba(255,255,255,0.04)" />
    <circle cx="200" cy="90" r="38" fill="rgba(255,255,255,0.04)" />
    <text x="200" y="105" textAnchor="middle" fontSize="36">{icon}</text>
  </svg>
);

export default function Projects() {
  const { ref, inView } = useInView(0.05);

  return (
    <section id="projects">
      <div className="container">
        <Reveal>
          <p className="section-label">What I've Built</p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of projects showcasing my full-stack capabilities — from thesis research
            to production SaaS features.
          </p>
        </Reveal>

        <div ref={ref} className={`projects-grid stagger${inView ? ' in-view' : ''}`}>
          {projects.map(p => (
            <div key={p.title} className="card project-card">
              <div className="project-image">
                <ProjectImagePlaceholder gradient={p.gradient} icon={p.iconChar} title={p.title} />
              </div>
              <div className="project-body">
                <p className="project-type">{p.type}</p>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tech">
                  {p.tech.map(t => <span key={t}>{t}</span>)}
                </div>
                <div className="project-links">
                  {p.confidential ? (
                    <span className="project-link project-link--confidential" title="Source code is part of a confidential application">
                      <FiGithub /> Confidential
                    </span>
                  ) : p.github ? (
                    <a href={p.github} className="project-link" target="_blank" rel="noopener noreferrer"><FiGithub /> Source</a>
                  ) : null}
                  {p.confidential ? (
                    <span className="project-link project-link--confidential" title="No public demo available">
                      <FiExternalLink /> NDA Protected
                    </span>
                  ) : p.demo ? (
                    <a href={p.demo} className="project-link" target="_blank" rel="noopener noreferrer"><FiExternalLink /> Live Demo</a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
