# Portfolio Website Review Bundle — Jacob Irish

> **How to use this file:**
> Upload or copy-paste this document into another AI (such as ChatGPT, Claude, or Google Gemini) along with a screenshot of the site, using the review prompt below.

---

## 📋 Suggested Prompt to Send to the AI

```text
Please review my personal portfolio website code and content. 

Context:
- I am an undergraduate student in the Junior Information Systems (IS) Core at Brigham Young University (Marriott School of Business).
- My goal is to land a Data Analytics or Business Intelligence Internship for Summer or Fall.
- I do not have years of corporate experience yet, so I want my website to be authentic, grounded, and clean—highlighting my real personal project (EternalPlan) and core coursework (SQL, database modeling, systems analysis) without inflated or fabricated statistics.

Please evaluate:
1. First impression & recruiter appeal: Does this clearly convey who I am and what I can do within 10 seconds?
2. Tone & Content: Is the phrasing strong, humble, and professional without fluff?
3. Technical layout & structure: Are there any improvements you would suggest for design hierarchy, readability, or functionality?
4. Suggestions for what projects or artifacts I should add next as I finish more coursework.
```

---

## 💻 Full Webpage Source Code (`index.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jacob Irish | Information Systems &amp; Data Analytics | BYU</title>
  <meta name="description" content="Portfolio of Jacob Irish, Information Systems student at BYU Marriott School of Business seeking Data Analytics internships.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="bg-grid" aria-hidden="true"></div>

  <!-- TOP NAVIGATION -->
  <header class="nav-header" id="navHeader">
    <div class="container nav-container">
      <a href="#hero" class="brand-logo" aria-label="Jacob Irish - Home">
        <img src="assets/jacob-irish.jpg" alt="Jacob Irish" class="brand-avatar-mini">
        <span class="brand-text-name">Jacob Irish</span>
      </a>

      <nav aria-label="Main Navigation">
        <ul class="nav-links" id="navLinks">
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="#projects" class="nav-link">Projects</a></li>
          <li><a href="#skills" class="nav-link">Skills</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
      </nav>

      <div class="nav-actions">
        <button type="button" class="btn btn-outline-emerald" id="btnOpenResumeNav" aria-haspopup="dialog">
          <span>Resume</span>
        </button>
        <a href="#contact" class="btn btn-primary">Contact</a>
      </div>
    </div>
  </header>

  <main id="mainContent">

    <!-- HERO SECTION -->
    <section class="hero-section" id="hero">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-content">
            <div class="status-pill">
              <span class="status-dot"></span>
              <span>Available for Summer &amp; Fall Internships</span>
            </div>

            <h1 class="hero-title" id="heroTitle">
              <span class="gradient-text">Jacob Irish</span>
            </h1>

            <div class="hero-role">
              <span>Information Systems Student at BYU Marriott</span>
            </div>

            <p class="hero-description">
              Focused on data analytics, relational database systems, and practical software development. Welcome to my portfolio.
            </p>

            <div class="hero-cta-group">
              <a href="#projects" class="btn btn-primary">View Projects</a>
              <button type="button" class="btn btn-secondary" id="btnOpenResumeHero">View Resume</button>
            </div>

            <div class="hero-social-row">
              <span class="social-link-label">Connect:</span>
              <div class="social-links">
                <a href="https://www.linkedin.com/in/jacobirish4556" target="_blank" rel="noopener noreferrer" class="social-icon-btn">LinkedIn</a>
                <a href="https://github.com/ThirstyCarrot" target="_blank" rel="noopener noreferrer" class="social-icon-btn">GitHub</a>
                <a href="mailto:jirish05@gmail.com" class="social-icon-btn">Email</a>
                <span class="tech-pill emerald">📍 Provo, UT</span>
              </div>
            </div>
          </div>

          <div class="hero-visual">
            <div class="photo-wrapper">
              <div class="photo-card">
                <img src="assets/jacob-irish.jpg" alt="Jacob Irish" class="photo-img">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT & EDUCATION -->
    <section class="section" id="about">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">About Me</span>
          <h2 class="section-title">Background &amp; Education</h2>
        </div>

        <div class="about-grid">
          <div class="about-card">
            <p class="about-text">
              I am an Information Systems student in the Junior Core at Brigham Young University’s Marriott School of Business.
            </p>
            <p class="about-text">
              My primary interest is in <strong>Data Analytics</strong>. I enjoy taking real-world business problems and using SQL, relational modeling, and code to find clear, actionable answers.
            </p>
            <p class="about-text">
              I take a hands-on approach to learning—building personal projects, studying how systems operate, and incorporating modern AI development tools into my everyday workflow.
            </p>
            <div style="display: flex; gap: 12px; margin-top: 16px;">
              <a href="#projects" class="btn btn-primary">See My Work</a>
              <a href="#contact" class="btn btn-secondary">Get in Touch</a>
            </div>
          </div>

          <div class="about-credentials-card" id="education">
            <div class="credential-item">
              <div class="credential-title">Brigham Young University</div>
              <div class="credential-subtitle">Marriott School of Business</div>
              <div class="credential-meta">B.S. in Information Systems • Junior IS Core</div>
              <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 8px; font-weight: 600;">Relevant Coursework:</p>
              <div class="course-tags">
                <span class="course-tag">Relational Database Systems (SQL)</span>
                <span class="course-tag">Systems Analysis &amp; Design</span>
                <span class="course-tag">Data Analytics Concepts</span>
                <span class="course-tag">Enterprise Application Development</span>
                <span class="course-tag">Spreadsheet Modeling</span>
              </div>
            </div>

            <div class="credential-item">
              <div class="credential-title">Internship Goals</div>
              <div class="credential-subtitle">Data Analytics / Business Intelligence</div>
              <div class="credential-meta">Available for Summer / Fall Opportunities</div>
              <p style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.6;">
                Seeking a role where I can write clean SQL queries, help teams understand their data, and learn from experienced engineers and analysts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURED PROJECT: ETERNALPLAN -->
    <section class="section" id="projects">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Featured Work</span>
          <h2 class="section-title">Project Spotlight</h2>
        </div>

        <div class="projects-grid">
          <article class="project-card flagship">
            <span class="flagship-badge">Personal Project</span>
            <div class="project-inner">
              <div class="project-category">Web Application • Personal Finance • AI-Aided Development</div>
              <h3 class="project-title">EternalPlan — Wedding Budget &amp; Due-Date Savings Planner</h3>
              <p class="project-summary">
                A web application built to solve a key challenge in event budgeting: expenses aren't paid in a lump sum, but rather across dozens of specific milestone deadlines (deposits, interim installments, and final balances). EternalPlan models costs chronologically against upcoming paychecks so users know whether they will have sufficient funds on the exact dates payments come due.
              </p>

              <ul class="project-features">
                <li>▸ <strong>Due-Date &amp; Paycheck Timeline:</strong> Calculates required savings velocity across bi-weekly paychecks to keep milestones on track.</li>
                <li>▸ <strong>AI Budget Scanner (Gemini API):</strong> Evaluates planned line items to suggest commonly overlooked expenses like service fees, alterations, and setup charges.</li>
                <li>▸ <strong>Cloud Persistence:</strong> Uses Supabase (PostgreSQL) for user data storage and session synchronization.</li>
                <li>▸ <strong>AI-Assisted Workflow:</strong> Built using modern AI tools to accelerate coding, debugging, and feature iteration.</li>
              </ul>

              <div class="project-tech-stack">
                <span class="tech-pill emerald">JavaScript (ES6+)</span>
                <span class="tech-pill">Supabase (PostgreSQL)</span>
                <span class="tech-pill">Gemini API</span>
                <span class="tech-pill">HTML5 / CSS3</span>
              </div>

              <div class="project-card-footer">
                <a href="https://github.com/ThirstyCarrot" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">GitHub Profile</a>
                <button type="button" class="btn btn-outline-emerald" onclick="openProjectModal('eternalplan')">Project Notes</button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section class="section" id="skills">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Toolkit</span>
          <h2 class="section-title">Skills &amp; Technologies</h2>
        </div>

        <div class="skills-grid">
          <div class="skill-category-card">
            <h3 class="skill-cat-title">Data &amp; Databases</h3>
            <div class="skill-tags-group">
              <span class="skill-tag featured">SQL (Queries, Joins, Aggregations)</span>
              <span class="skill-tag featured">Relational Database Design (3NF)</span>
              <span class="skill-tag">PostgreSQL &amp; Supabase</span>
              <span class="skill-tag">Entity Relationship Diagrams (ERDs)</span>
              <span class="skill-tag">Excel Data Analysis</span>
              <span class="skill-tag">Data Cleaning</span>
            </div>
          </div>

          <div class="skill-category-card">
            <h3 class="skill-cat-title">Development</h3>
            <div class="skill-tags-group">
              <span class="skill-tag featured">JavaScript (ES6+)</span>
              <span class="skill-tag featured">HTML5 &amp; CSS3</span>
              <span class="skill-tag">Python Basics</span>
              <span class="skill-tag">Git &amp; GitHub</span>
              <span class="skill-tag">REST APIs &amp; Gemini API</span>
              <span class="skill-tag">AI-Assisted Workflows</span>
            </div>
          </div>

          <div class="skill-category-card">
            <h3 class="skill-cat-title">Methodologies</h3>
            <div class="skill-tags-group">
              <span class="skill-tag featured">Systems Analysis &amp; Design</span>
              <span class="skill-tag featured">Agile / Scrum Principles</span>
              <span class="skill-tag">Analytical Problem Solving</span>
              <span class="skill-tag">Clear Documentation</span>
              <span class="skill-tag">Team Collaboration</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section class="section" id="contact">
      <div class="container">
        <div class="contact-box">
          <div class="contact-info-col">
            <span class="contact-tag">Get in Touch</span>
            <h2 class="contact-h2">Contact Me</h2>
            <p class="contact-desc">
              Whether you'd like to talk about an internship opportunity, discuss database systems, or check out my code, feel free to reach out.
            </p>
            <div class="contact-quick-links">
              <div>Email: jirish05@gmail.com</div>
              <div>LinkedIn: linkedin.com/in/jacobirish4556</div>
              <div>GitHub: github.com/ThirstyCarrot</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</body>
</html>
```
