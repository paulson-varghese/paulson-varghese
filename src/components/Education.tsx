import { Reveal } from './Reveal';
import { useInView } from '../hooks/useInView';

interface EduEntry {
  icon: string;
  degree: string;
  school: string;
  location: string;
  period: string;
  highlight?: string;
}

const entries: EduEntry[] = [
  {
    icon: '🎓',
    degree: 'MSc Computer Science',
    school: 'RPTU University Kaiserslautern-Landau',
    location: 'Germany',
    period: '2021 – 2024',
    highlight: 'Thesis: Automated API Testing Framework with CI/CD Integration',
  },
  {
    icon: '🏛️',
    degree: 'Bachelor of Technology',
    school: 'APJ Abdul Kalam Technological University',
    location: 'India',
    period: '2015 – 2019',
  },
];

const languages = [
  { lang: 'English', level: 'C1 — Professional', pct: 85 },
  { lang: 'German',  level: 'A1 — Beginner',     pct: 15 },
  { lang: 'Malayalam', level: 'Native',           pct: 100 },
];

export default function Education() {
  const { ref, inView } = useInView(0.08);

  return (
    <section id="education">
      <div className="container">
        <Reveal>
          <p className="section-label">Academic Background</p>
          <h2 className="section-title">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            A strong academic foundation in computer science, spanning two countries and
            specialising in software engineering and systems.
          </p>
        </Reveal>

        <div ref={ref} className={`education-grid stagger${inView ? ' in-view' : ''}`}>
          {entries.map(e => (
            <div key={e.degree} className="card education-card">
              <div className="education-icon">{e.icon}</div>
              <div className="education-body">
                <div className="education-degree">{e.degree}</div>
                <div className="education-school">{e.school} · {e.location}</div>
                <div className="education-period">{e.period}</div>
                {e.highlight && (
                  <p style={{
                    marginTop: '12px',
                    fontSize: '0.82rem',
                    color: 'var(--text-2)',
                    fontStyle: 'italic',
                    lineHeight: '1.5',
                    padding: '10px 14px',
                    background: 'rgba(124,58,237,0.08)',
                    borderRadius: '8px',
                    borderLeft: '3px solid var(--purple)',
                  }}>
                    {e.highlight}
                  </p>
                )}
              </div>
            </div>
          ))}

          {/* Languages card */}
          <div className="card education-card">
            <div className="education-icon">🌐</div>
            <div className="education-body">
              <div className="education-degree">Languages</div>
              <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {languages.map(l => (
                  <div key={l.lang}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)' }}>{l.lang}</span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-3)' }}>{l.level}</span>
                    </div>
                    <div style={{
                      height: '4px',
                      background: 'rgba(255,255,255,0.08)',
                      borderRadius: '2px',
                      overflow: 'hidden',
                    }}>
                      <div style={{
                        height: '100%',
                        width: inView ? `${l.pct}%` : '0%',
                        background: 'linear-gradient(90deg, var(--purple), var(--cyan))',
                        borderRadius: '2px',
                        transition: 'width 1s cubic-bezier(0.16,1,0.3,1)',
                        transitionDelay: '0.4s',
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
