import { useState } from 'react';
import ScrollReveal from '@/components/common/ScrollReveal';
import { WHATSAPP_URL } from '@/utils/constants';
import styles from './ContactCTA.module.css';

export default function ContactCTA() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setSent(true);
    } catch {
      setSent(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={`section ${styles.section}`}>
      <ScrollReveal className={`container ${styles.inner}`} yOffset={24}>
        <div className={styles.heading}>
          <h2 className={styles.title}>Collaborate</h2>
          <p className={styles.sub}>Inquiries &amp; Commissions</p>
        </div>

        {sent ? (
          <div className={styles.success}>
            <span className={styles.successIcon}>✦</span>
            <h3>Thank You!</h3>
            <p>We've received your request and will be in touch shortly.</p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="collab-name">Your Name</label>
                <input
                  id="collab-name"
                  name="name"
                  type="text"
                  className={styles.input}
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="collab-email">Email Address</label>
                <input
                  id="collab-email"
                  name="email"
                  type="email"
                  className={styles.input}
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="collab-message">Message</label>
              <textarea
                id="collab-message"
                name="message"
                rows={4}
                className={styles.textarea}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.submitWrap}>
              <button type="submit" className={styles.submit} disabled={loading}>
                {loading ? 'Sending...' : 'Send Request'}
                <span className={styles.arrow}>→</span>
              </button>
            </div>
          </form>
        )}
      </ScrollReveal>
    </section>
  );
}
