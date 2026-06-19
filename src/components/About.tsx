import { Reveal } from './Reveal';
import { useInView } from '../hooks/useInView';
import { useCounter } from '../hooks/useCounter';

function AnimatedStat({ value, suffix = '', label, inView }: {
  value: number | null;
  suffix?: string;
  label: string;
  inView: boolean;
}) {
  const count = useCounter(value ?? 0, 1600, inView);
  return (
    <div className="card stat-card">
      <div className="stat-number">
        {value === null ? 'MSc' : `${count}${suffix}`}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

const stats = [
  { value: 4, suffix: '+', label: 'Years Experience' },
  { value: 3,  suffix: '',  label: 'Companies' },
  { value: 2,  suffix: '',  label: 'Countries' },
  { value: null, suffix: '', label: 'Computer Science' },
];

export default function About() {
  const { ref: statsRef, inView: statsInView } = useInView(0.1);

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <Reveal>
              <p className="section-label">About Me</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="section-title">
                Crafting software that{' '}
                <span className="gradient-text">makes a difference</span>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <div className="divider" />
            </Reveal>
            <Reveal delay={180}>
              <p>
                I'm a Full-Stack Software Engineer based in Speyer, Germany, with over 4 years
                of experience building scalable SaaS applications. My core stack is TypeScript,
                Node.js, and React — tools I use to deliver end-to-end product features that
                are fast, maintainable, and a joy to use.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p>
                Currently at <strong style={{ color: '#a78bfa' }}>H2 Digital GmbH</strong>,
                I design and build REST APIs, backend services, and reusable frontend components.
                I've improved system performance by 20% through targeted backend optimizations
                and automated testing pipelines with Playwright and Azure CI/CD.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p>
                I hold an MSc in Computer Science from RPTU University Kaiserslautern-Landau.
                My master's thesis focused on building an automated API testing framework with
                CI/CD integration — a topic I'm deeply passionate about.
              </p>
            </Reveal>
          </div>

          <div ref={statsRef} className="about-stats">
            {stats.map(s => (
              <AnimatedStat
                key={s.label}
                value={s.value}
                suffix={s.suffix}
                label={s.label}
                inView={statsInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
