import { Reveal } from './Reveal';
import { useInView } from '../hooks/useInView';

interface SkillCategory {
  icon: string;
  title: string;
  color: string;
  bg: string;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    icon: '🎨', title: 'Frontend', color: '#a78bfa', bg: 'rgba(124,58,237,0.12)',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    icon: '⚙️', title: 'Backend', color: '#67e8f9', bg: 'rgba(6,182,212,0.12)',
    skills: ['Node.js', 'NestJS', 'REST APIs', 'API Design', 'Business Logic'],
  },
  {
    icon: '🗄️', title: 'Database', color: '#6ee7b7', bg: 'rgba(16,185,129,0.12)',
    skills: ['PostgreSQL', 'SQL', 'Data Modeling'],
  },
  {
    icon: '🧪', title: 'Testing', color: '#fcd34d', bg: 'rgba(245,158,11,0.12)',
    skills: ['Playwright', 'E2E Testing', 'API Testing', 'Test Automation'],
  },
  {
    icon: '🚀', title: 'DevOps', color: '#f9a8d4', bg: 'rgba(236,72,153,0.12)',
    skills: ['Docker', 'CI/CD', 'Azure Pipelines', 'Git', 'GitLab'],
  },
  {
    icon: '🛠️', title: 'Tools & Workflow', color: '#fdba74', bg: 'rgba(249,115,22,0.12)',
    skills: ['GitHub', 'GitLab', 'Postman', 'VS Code', 'Agile / Scrum'],
  },
];

export default function Skills() {
  const { ref, inView } = useInView(0.05);

  return (
    <section id="skills">
      <div className="container">
        <Reveal>
          <p className="section-label">What I Work With</p>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            A toolkit built from years of real-world engineering — focused on the full stack,
            from performant UIs to robust backend services.
          </p>
        </Reveal>

        <div ref={ref} className={`skills-grid stagger${inView ? ' in-view' : ''}`}>
          {categories.map(cat => (
            <div key={cat.title} className="card skill-category">
              <div className="skill-category-header">
                <div className="skill-category-icon" style={{ background: cat.bg }}>
                  {cat.icon}
                </div>
                <span className="skill-category-title" style={{ color: cat.color }}>
                  {cat.title}
                </span>
              </div>
              <div className="skill-tags">
                {cat.skills.map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
