import { useState, useRef, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiAlertCircle, FiCheckCircle, FiLoader } from 'react-icons/fi';
import { Reveal } from './Reveal';

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

type Status = 'idle' | 'sending' | 'success' | 'error';

const contactItems = [
  { icon: <FiMail />,    label: 'Email',    value: 'paulsonvargehese@gmail.com', href: 'mailto:paulsonvargehese@gmail.com' },
  { icon: <FiPhone />,   label: 'Phone',    value: '+49 178 282 3418',           href: 'tel:+491782823418' },
  { icon: <FiMapPin />,  label: 'Location', value: 'Speyer, Germany',            href: undefined },
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      setStatus('success');
      formRef.current.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <Reveal>
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="section-subtitle">
            Open to new opportunities, collaborations, and interesting projects.
            Fill in the form and I'll get back to you promptly — or reach me directly below.
          </p>
        </Reveal>

        <div className="contact-grid">
          {/* Left — info */}
          <Reveal direction="left">
            <p className="contact-info-title">Say Hello 👋</p>
            <p className="contact-info-desc">
              Whether you have a role in mind, a project to discuss, or just want to
              connect — my inbox is always open.
            </p>

            <div className="contact-items">
              {contactItems.map(item => (
                <div key={item.label} className="contact-item">
                  <div className="contact-item-icon">{item.icon}</div>
                  <div>
                    <div className="contact-item-label">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="contact-item-value"
                        style={{ textDecoration: 'none', color: 'var(--text)' }}>
                        {item.value}
                      </a>
                    ) : (
                      <div className="contact-item-value">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '36px' }}>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-3)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>
                Find me on
              </p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a
                  href="https://github.com/paulsonvargehese"
                  target="_blank" rel="noreferrer"
                  className="hero-social-link"
                  title="GitHub"
                >
                  <FiGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/paulson-varghese-158027184/"
                  target="_blank" rel="noreferrer"
                  className="contact-linkedin-btn"
                  title="Message on LinkedIn"
                >
                  <FiLinkedin />
                  <span>Message on LinkedIn</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal direction="right" delay={100}>
            <form
              ref={formRef}
              className="card contact-form"
              onSubmit={handleSubmit}
              style={{ padding: '36px' }}
            >
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="from_name">Name</label>
                  <input
                    id="from_name"
                    name="from_name"
                    type="text"
                    placeholder="Your name"
                    required
                    disabled={status === 'sending'}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="from_email">Email</label>
                  <input
                    id="from_email"
                    name="from_email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    disabled={status === 'sending'}
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  required
                  disabled={status === 'sending'}
                />
              </div>

              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  disabled={status === 'sending'}
                />
              </div>

              {/* Status feedback */}
              {status === 'success' && (
                <div className="form-alert form-alert-success">
                  <FiCheckCircle />
                  Message sent! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="form-alert form-alert-error">
                  <FiAlertCircle />
                  Something went wrong. Please email me directly at paulsonvargehese@gmail.com
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary"
                style={{ alignSelf: 'flex-start' }}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <><FiLoader className="spin-icon" /> Sending…</>
                ) : (
                  <><FiSend /> Send Message</>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
