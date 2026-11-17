import { profile, skillGroups } from '../data.js';
import Reveal from './Reveal.jsx';

// To use your photo: put it in /public as "photo.jpg" and set PHOTO = '/photo.jpg'
const PHOTO = '';

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container about">
        <Reveal className="about-photo-col">
          <div className="eyebrow">02 — About</div>
          <div className="photo">
            <div className="photo-ring spin" aria-hidden="true" />
            {PHOTO ? (
              <img src={PHOTO} alt={profile.name} />
            ) : (
              <span className="photo-initials" aria-hidden="true">MP</span>
            )}
          </div>
        </Reveal>
        <Reveal className="about-copy" delay={120}>
          <p className="about-lead">
            I turn <span className="accent">complex flows</span> — logins, invoices, approvals — into simple, reliable
            interfaces.
          </p>
          <p className="about-body">{profile.about}</p>
          <div className="skills">
            {skillGroups.map((g) => (
              <div key={g.name} className="skill">
                <h3>{g.name}</h3>
                <p>{g.items}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
