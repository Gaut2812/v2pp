import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollReveal from '@/components/common/ScrollReveal';
import { WHATSAPP_URL, INSTAGRAM_URL, EMAIL } from '@/utils/constants';
import styles from './Contact.module.css';
import logoImg from '@/assets/logo.png';

// ── EmailJS credentials ──────────────────────────────────────────────────────
const EJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const MAP_IMG = 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=80';

export default function Contact() {

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await emailjs.send(
        EJS_SERVICE_ID,
        EJS_TEMPLATE_ID,
        {
          name:    form.name,
          time:    new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
          message: `Email: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`,
        },
        { publicKey: EJS_PUBLIC_KEY }
      );
      setSent(true);
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      const msg = err?.text || err?.message || JSON.stringify(err);
      console.error('EmailJS error:', msg);
      setError(`Send failed: ${msg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className={styles.main}>

        {/* ── Hero Section ──────────────────────────────── */}
        <section className={styles.heroSection}>
          <ScrollReveal yOffset={30}>
            <div className={styles.heroGrid}>
              {/* Left: headline */}
              <div className={styles.heroText}>
                <span className={styles.eyebrow}>Inquiries</span>
                <h1 className={styles.heroTitle}>
                  Let's capture <br />
                  <em>the ephemeral.</em>
                </h1>
                <p className={styles.heroSub}>
                  Based in Chennai, available worldwide for editorial commissions,
                  limited edition prints, and archival collaborations.
                </p>
              </div>

              {/* Right: logo image */}
              <div className={styles.heroImgCol}>
                <div className={styles.heroImgWrap}>
                  <img src={logoImg} alt="V2 Photography Logo" className={styles.heroImg} loading="eager" />
                </div>
                <div className={styles.heroDeco} />
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ── Form + Sidebar ────────────────────────────── */}
        <section className={styles.formSection}>
          <ScrollReveal yOffset={30}>
            <div className={styles.formGrid}>
              {/* Sidebar */}
              <div className={styles.sidebar}>
                <div className={styles.directBlock}>
                  <h3 className={styles.sideLabel}>Direct</h3>
                  <a href={`mailto:${EMAIL}`} className={styles.emailLink}>{EMAIL}</a>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.phoneLink}>
                    +91 63790 07204
                  </a>
                </div>

                <div className={styles.socialBlock}>
                  <h3 className={styles.sideLabel}>Social</h3>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    Instagram ↗
                  </a>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    WhatsApp ↗
                  </a>
                </div>

                {/* Pull-quote */}
                <div className={styles.pullQuote}>
                  <p>
                    "To photograph is to hold one's breath, when all faculties converge
                    to capture fleeting reality."
                  </p>
                  <span className={styles.pullQuoteCite}>— H. Cartier-Bresson</span>
                </div>
              </div>

              {/* Form */}
              <div className={styles.formWrap}>
                {sent ? (
                  <div className={styles.success}>
                    <span className={styles.successIcon}>✦</span>
                    <h3>Thank You!</h3>
                    <p>We've received your inquiry and will be in touch within 24 hours.</p>
                  </div>
                ) : (
                  <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="c-name">Full Name</label>
                      <input id="c-name" name="name" type="text" required
                        className={styles.input} placeholder="Priya & Karthik"
                        value={form.name} onChange={handleChange} />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="c-email">Email Address</label>
                      <input id="c-email" name="email" type="email" required
                        className={styles.input} placeholder="hello@example.com"
                        value={form.email} onChange={handleChange} />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="c-phone">Phone Number</label>
                      <input id="c-phone" name="phone" type="tel"
                        className={styles.input} placeholder="+91 63790 07204"
                        value={form.phone} onChange={handleChange} />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="c-message">Message</label>
                      <textarea id="c-message" name="message" rows={5} required
                        className={styles.textarea} placeholder="Briefly describe your project..."
                        value={form.message} onChange={handleChange} />
                    </div>
                    {error && (
                      <p className={styles.errorMsg}>{error}</p>
                    )}
                    <div className={styles.submitWrap}>
                      <button type="submit" className={styles.submit} disabled={loading}>
                        {loading ? 'Sending...' : 'Send Inquiry'}
                        <span className={styles.arrow}>→</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ── Location Band ─────────────────────────────── */}
        <section className={styles.locationSection}>
          <ScrollReveal>
            <div className={styles.locationBgWrap}>
              <div className={styles.locationBg}>
                <img src={MAP_IMG} alt="Chennai city" className={styles.locationImg} loading="lazy" />
              </div>
              <div className={styles.locationContent}>
                <h4 className={styles.locationTitle}>Chennai</h4>
                <p className={styles.locationSub}>No:137, sps Building , anna salai, Chennai, Tamil Nadu</p>
              </div>
              {/* Pulsing marker */}
              <div className={styles.marker} />
            </div>
          </ScrollReveal>
        </section>

      </main>
      <Footer />
    </>
  );
}
