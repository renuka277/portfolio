import { useState, useEffect } from 'react'
import './App.css'
import aiHero from './assets/ai-hero.png'
import HeartDisease from './HeartDisease'
import SkinDisease from './SkinDisease'
function App() {
  const [showHeartDisease, setShowHeartDisease] = useState(false)
  const [showSkinDisease, setShowSkinDisease] = useState(false)
  useEffect(() => {
  if (showHeartDisease || showSkinDisease) {
    window.scrollTo(0, 0)
  }
}, [showHeartDisease, showSkinDisease])
  if (showHeartDisease) {
    return (
      <HeartDisease onBack={() => setShowHeartDisease(false)} />
    )
  }

  if (showSkinDisease) {
    return (
      <SkinDisease onBack={() => setShowSkinDisease(false)} />
    )
  }

  return (
    <div className="portfolio">

      <nav className="navbar">
        <a href="#home" className="logo">Renuka</a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main id="home" className="hero">

        <div className="hero-content">

          <p className="hero-label">
            AI &amp; ML ENGINEERING STUDENT
          </p>

          <h1>
            Hi, I'm <span>Renuka</span>
          </h1>

          <h2>
            Building with Artificial Intelligence &amp; Machine Learning
          </h2>

          <p className="hero-description">
            B.Tech student specializing in Artificial Intelligence and
            Machine Learning, passionate about building practical solutions
            with technology and solving real-world problems.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Projects
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
                <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
                >
                  Download Resume ↓
                </a>
          </div>

          <div className="social-links">
  <a
    href="https://github.com/renuka277"
    target="_blank"
    rel="noopener noreferrer"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/thiragati-renuka-lakshmi-53b3502b9/"
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn
  </a>

  <a
    href="https://leetcode.com/u/Renuka2740/"
    target="_blank"
    rel="noopener noreferrer"
  >
    LeetCode
  </a>

  <a
    href="https://www.hackerrank.com/profile/23A31A42F6"
    target="_blank"
    rel="noopener noreferrer"
  >
    HackerRank
  </a>
</div>
        </div>

        <div className="hero-visual">
  <img
    src={aiHero}
    alt="Artificial Intelligence and Machine Learning illustration"
    className="hero-image"
  />
</div>

      </main>

      <section id="about" className="about-section">

  <div className="section-heading">
    <p className="section-label">ABOUT ME</p>
    <h2>Get to know me</h2>
  </div>

  <div className="about-content">

   <div className="about-text">
  <h3>AI &amp; ML Engineering Student</h3>

  <p>
    I am a B.Tech student specializing in Artificial Intelligence
    and Machine Learning, passionate about building practical
    applications that combine intelligent technologies with
    real-world problem solving.
  </p>

  <p>
    I work with Python, Java, machine learning, web development,
    and modern AI technologies. I enjoy learning new technologies,
    developing innovative projects, and continuously strengthening
    my technical skills.
  </p>
</div>

    <div className="education">

      <h3>Education</h3>

      <div className="education-card">
        <div className="education-year">2023 – 2027</div>

        <h4>B.Tech in CSE with AI &amp; ML</h4>

        <p>Pragati Engineering College, Surampalem</p>

        <span>CGPA: 9.05</span>
      </div>

      <div className="education-card">
        <div className="education-year">2021 – 2023</div>

        <h4>Intermediate Education</h4>

        <p>Sahasra Junior College, Kakinada</p>

        <span>97%</span>
      </div>

      <div className="education-card">
        <div className="education-year">2021</div>

        <h4>Secondary Education</h4>

        <p>Sri Chaitanya Techno School, Kakinada</p>

        <span>98%</span>
      </div>

    </div>

  </div>

  <div className="skills">

    <div className="section-heading skills-heading">
      <p className="section-label">TECHNICAL SKILLS</p>
      <h2>Technologies I work with</h2>
    </div>

    <div className="skills-grid">

      <div className="skill-card">
        <h3>Programming</h3>

        <div className="skill-list">
          <span>Python</span>
          <span>Java</span>
          <span>C</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
        </div>
      </div>

      <div className="skill-card">
        <h3>AI / ML</h3>

        <div className="skill-list">
          <span>TensorFlow</span>
          <span>Scikit-learn</span>
        </div>
      </div>

      <div className="skill-card">
        <h3>Frameworks</h3>

        <div className="skill-list">
          <span>MERN Stack</span>
          <span>Flask</span>
        </div>
      </div>

      <div className="skill-card">
        <h3>Database</h3>

        <div className="skill-list">
          <span>MongoDB</span>
        </div>
      </div>

      <div className="skill-card">
        <h3>Tools</h3>

        <div className="skill-list">
          <span>GitHub</span>
          <span>VS Code</span>
          <span>Jupyter Notebook</span>
          <span>Anaconda</span>
          <span>Tableau</span>
        </div>
      </div>

    </div>

  </div>

</section>
      <section id="projects" className="projects-section">

  <div className="section-heading">
    <p className="section-label">MY PROJECTS</p>
    <h2>Things I've built</h2>
  </div>

  <div className="projects-grid">

    <article
  className="project-card"
  onClick={() => setShowSkinDisease(true)}
  style={{ cursor: 'pointer' }}
>
      <div className="project-view">
  View Project →
</div>
      <div className="project-icon">
        🩺
      </div>

      <div className="project-content">

        <p className="project-category">
          ARTIFICIAL INTELLIGENCE / MACHINE LEARNING
        </p>

        <h3>Skin Disease Detection</h3>

        <p className="project-description">
          An AI-based skin lesion classification application built
          using transfer learning with EfficientNetB0 and the
          HAM10000 dataset to classify seven types of skin lesions.
        </p>

        <div className="project-tech">
          <span>Python</span>
          <span>TensorFlow</span>
          <span>Flask</span>
          <span>EfficientNetB0</span>
          <span>HAM10000</span>
        </div>

        <div className="project-links">

          <a
            href="https://github.com/renuka277/SkinDiseaseDetectionAI"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
            onClick={(event) => event.stopPropagation()}
          >
            GitHub ↗
          </a>
          <a
              href="https://skin-disease-detection-ai-renuka.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-button live-button"
              onClick={(event) => event.stopPropagation()}
            >
              Live Demo ↗
            </a>

        </div>

      </div>

    </article>


    <article
  className="project-card"
  onClick={() => setShowHeartDisease(true)}
  style={{ cursor: 'pointer' }}
>
      <div className="project-view">
  View Project →
</div>
      <div className="project-icon">
        ❤️
      </div>

      <div className="project-content">

        <p className="project-category">
          MACHINE LEARNING / WEB APPLICATION
        </p>

        <h3>Heart Disease Prediction</h3>

        <p className="project-description">
          An end-to-end machine learning web application for
          heart disease prediction using Logistic Regression,
          Python, Flask, and Scikit-learn.
        </p>

        <div className="project-tech">
          <span>Python</span>
          <span>Scikit-learn</span>
          <span>Flask</span>
          <span>Logistic Regression</span>
        </div>

        <div className="project-links">

          <a
            href="https://github.com/renuka277/heart-disease-prediction-system-renuka"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
            onClick={(event) => event.stopPropagation()}
          >
            GitHub ↗
          </a>

          <a
            href="https://heart-disease-prediction-system-ren-theta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button live-button"
            onClick={(event) => event.stopPropagation()}
          >
            Live Demo ↗
          </a>

        </div>

      </div>

    </article>

  </div>

</section>
      <section id="achievements" className="achievements-section">

  <div className="section-heading">
    <p className="section-label">ACHIEVEMENTS</p>
    <h2>Milestones &amp; Certifications</h2>
  </div>

  <div className="achievements-grid">

    <article className="achievement-card featured-achievement">

      <div className="achievement-icon">
        🏆
      </div>

      <div className="achievement-content">

        <p className="achievement-label">
          SERVICENOW UNIVERSITY HACKNOW INDIA 2026
        </p>

        <h3>Top 50 Nationally</h3>

        <p>
          Selected among the Top 50 nationally for GrandOps,
          an AI-powered hotel operations management application
          built on ServiceNow.
        </p>

      </div>

    </article>


    <article className="achievement-card">

      <div className="achievement-icon">
        🥇
      </div>

      <div className="achievement-content">

        <p className="achievement-label">
          ACADEMIC ACHIEVEMENT
        </p>

        <h3>1st Rank</h3>

        <p>
          Secured 1st Rank in 1st Year 2nd Semester
          examinations during the 2023–24 academic year.
        </p>

        <span className="achievement-badge">
          9.72 CGPA
        </span>

      </div>
      

    </article>
    <div className="achievement-card">
  <div className="achievement-icon">🎓</div>

  <div className="achievement-content">
    <span className="achievement-label">ACADEMIC PERFORMANCE</span>

    <h3>9.05 CGPA</h3>

    <p>
      Maintained a strong academic performance throughout the program.
    </p>
  </div>
</div>

  </div>


  <div className="certifications">

    <div className="section-heading certifications-heading">
      <p className="section-label">CERTIFICATIONS</p>
      <h2>Credentials I've earned</h2>
    </div>


    <div className="certification-groups">

      <div className="certification-card">

        <div className="certification-header">
          <div className="certification-icon">
            N
          </div>

          <h3>NPTEL Certifications</h3>
        </div>

        <ul>
  <li>
    <a
      href="https://drive.google.com/file/d/1dICx37Z930RSx87DZb80PqJPiNqQjNED/view?usp=drivesdk"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>Programming in Java — Elite + Silver</span>
      <small>View Certificate →</small>
    </a>
  </li>

  <li>
    <a
      href="https://drive.google.com/file/d/1NAhj_eoMbGwKsVasUe5jVyQtqF_t8yEf/view?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>Python for Data Science — Elite</span>
      <small>View Certificate →</small>
    </a>
  </li>

  <li>
    <a
      href="https://drive.google.com/file/d/1mqixIk6y3hw4Tf5Vzc-yEdZL9ms4-cvc/view?usp=drivesdk"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>Privacy and Security in Online Social Media — Elite</span>
      <small>View Certificate →</small>
    </a>
  </li>

  <li>
    <a
      href="https://drive.google.com/file/d/1iXZ73ujSgmLxCUt21mW6EusnOuZosk3y/view?usp=drivesdk"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span> Joy of Computing Using Python — Elite + Silver</span>
      <small>View Certificate →</small>
    </a>
  </li>
</ul>

      </div>


      <div className="certification-card">

        <div className="certification-header">
          <div className="certification-icon">
            S
          </div>

          <h3>ServiceNow Certifications</h3>
        </div>

        <ul>
  <li>
    <a
      href="https://drive.google.com/file/d/1-w25RH1EzEYwEvUu-DNxRg88VM8niSyz/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>ServiceNow Certified System Administrator (CSA)</span>
      <small>View Certificate →</small>
    </a>
  </li>

  <li>
    <a
      href="https://drive.google.com/file/d/1rX6iIGxM5m6_NZFU-Er29EZfHxRg1fV3/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>ServiceNow Certified Application Developer (CAD)</span>
      <small>View Certificate →</small>
    </a>
  </li>
</ul>

      </div>


      <div className="certification-card">

        <div className="certification-header">
          <div className="certification-icon">
            C
          </div>

          <h3>Other Certifications</h3>
        </div>

       <ul>
  <li>
    <a
      href="https://drive.google.com/file/d/1dJZNvNsdJvSJ_e6xGfOZzwBQNf8ic4AT/view?usp=drivesdk"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>C Language — Grade A, IIET</span>
      <small>View Certificate →</small>
    </a>
  </li>

  <li>
    <a
      href="https://drive.google.com/file/d/1dMv_t2cjvqXXic98mxvw6yZaQVLSSFGx/view?usp=drivesdk"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>Programming in Core Java — Grade A, IIET</span>
      <small>View Certificate →</small>
    </a>
  </li>

  <li>
    <a
      href="https://drive.google.com/file/d/1P9GkbkVOocgGXtU1Er4zX0WnEXTM69Li/view?usp=drivesdk"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>Web Designing — Grade A, IIET</span>
      <small>View Certificate →</small>
    </a>
  </li>

  <li>
    <a
      href="https://drive.google.com/file/d/1ZO5Zb0ycGniDiDnHjwlC3fDHDTZYLfzm/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>SAP Certified — Back-End Developer – ABAP Cloud</span>
      <small>View Certificate →</small>
    </a>
  </li>

  <li>
    <a
      href="https://drive.google.com/file/d/1cKzEwtQj5blQBla9G1RXsQX6XFu7LnBW/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>Salesforce Certified Agentforce Specialist</span>
      <small>View Certificate →</small>
    </a>
  </li>
</ul>

      </div>

    </div>

  </div>

</section>
      <section id="contact" className="contact-section">

  <div className="section-heading">
    <p className="section-label">CONTACT</p>
    <h2>Let's connect</h2>

    <p className="contact-intro">
      I'm always open to connecting, discussing technology,
      and exploring new opportunities.
    </p>
  </div>


  <div className="contact-content">

    <a
      href="mailto:rnklxm2005@gmail.com"
      className="contact-card"
    >
      <div className="contact-icon">
        ✉
      </div>

      <div>
        <p>Email</p>
        <h3>rnklxm2005@gmail.com</h3>
      </div>
    </a>


    <a
      href="tel:+917013775729"
      className="contact-card"
    >
      <div className="contact-icon">
        ☎
      </div>

      <div>
        <p>Phone</p>
        <h3>+91 7013775729</h3>
      </div>
    </a>

  </div>
    <div className="contact-action">
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=rnklxm2005@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    Send me an email →
  </a>
</div>

  <div className="contact-socials">

    <a
      href="https://github.com/renuka277"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub ↗
    </a>

    <a
      href="https://www.linkedin.com/in/thiragati-renuka-lakshmi-53b3502b9/"
      target="_blank"
      rel="noopener noreferrer"
    >
      LinkedIn ↗
    </a>

    <a
      href="https://leetcode.com/u/Renuka2740/"
      target="_blank"
      rel="noopener noreferrer"
    >
      LeetCode ↗
    </a>

    <a
      href="https://www.hackerrank.com/profile/23A31A42F6"
      target="_blank"
      rel="noopener noreferrer"
    >
      HackerRank ↗
    </a>

  </div>

</section>


<footer className="footer">
  <p>© 2026 Renuka. Built with React.</p>
</footer>

    </div>
  )
}

export default App