import { Reveal } from './Reveal';
import { useInView } from '../hooks/useInView';

interface Job {
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  bullets: string[];
}

const jobs: Job[] = [
  {
    role: 'Full Stack Software Developer',
    company: 'H2 Digital GmbH',
    location: 'Germany',
    period: 'Nov 2024 – Present',
    current: true,
    bullets: [
      'Designed and developed full-stack features using TypeScript, Node.js, and React.',
      'Built and maintained REST APIs and backend services to handle complex business logic.',
      'Developed reusable frontend components with a focus on performance and usability.',
      'Improved system performance by 20% through optimization of backend services and APIs.',
      'Implemented CI/CD pipelines using Azure to automate testing and deployments.',
      'Developed end-to-end tests using Playwright to ensure product quality and stability.',
      'Collaborated closely with product managers and designers to define and refine features.',
    ],
  },
  {
    role: 'Working Student – Software Developer',
    company: 'CibusCell Technology GmbH',
    location: 'Germany',
    period: 'Nov 2022 – Oct 2024',
    current: false,
    bullets: [
      'Developed full-stack features using React, TypeScript, and NestJS in an agile environment.',
      'Designed and integrated REST APIs for data-driven applications.',
      'Built responsive user interfaces and improved overall user experience.',
      'Improved application performance by 20–30% through frontend and backend optimization.',
      'Collaborated in cross-functional teams to deliver product features iteratively.',
    ],
  },
  {
    role: 'Systems Engineer',
    company: 'Tata Consultancy Services',
    location: 'India',
    period: 'Jul 2019 – Oct 2021',
    current: false,
    bullets: [
      'Developed web applications using React and Node.js.',
      'Built REST APIs and improved backend performance.',
      'Automated workflows using Python to improve efficiency.',
      'Worked in agile teams and contributed to continuous improvement processes.',
    ],
  },
];

export default function Experience() {
  const { ref, inView } = useInView(0.05);

  return (
    <section className="experience" id="experience">
      <div className="container">
        <Reveal>
          <p className="section-label">Career Journey</p>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Over 4 years building production software across startups and large enterprises
            in India and Germany.
          </p>
        </Reveal>

        <div ref={ref} className={`timeline stagger-left${inView ? ' in-view' : ''}`}>
          {jobs.map(job => (
            <div key={job.company} className={`timeline-item${job.current ? ' current' : ''}`}>
              <div className="timeline-dot" />
              <div className="card timeline-card">
                <div className="timeline-header">
                  <span className="timeline-role">{job.role}</span>
                  <span className="timeline-period">{job.period}</span>
                </div>
                <div className="timeline-company">
                  {job.company} · {job.location}
                  {job.current && (
                    <span style={{
                      marginLeft: '8px',
                      fontSize: '0.72rem',
                      padding: '2px 8px',
                      borderRadius: '99px',
                      background: 'rgba(16,185,129,0.1)',
                      color: 'var(--green)',
                      border: '1px solid rgba(16,185,129,0.2)',
                    }}>
                      Current
                    </span>
                  )}
                </div>
                <ul className="timeline-bullets">
                  {job.bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
