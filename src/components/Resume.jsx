import './Resume.css'

function Resume() {
  return (
    <div className="resume">
      <header className="resume-header">
        <h1>Adam Bacchus</h1>
        <div className="contact-info">
          <span>Houston, TX</span>
          <span>18328447118</span>
          <a href="mailto:bacchus.adam@gmail.com">bacchus.adam@gmail.com</a>
          <a href="https://www.linkedin.com/in/adam-bacchus-950a9b210" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/adamPlusPlus" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </header>

      <section className="resume-section">
        <h2>Professional Summary</h2>
        <p>
          Technical Project Manager & Co-Founder with 8+ years of experience building and leading software development teams. 
          Proven track record of delivering 12 prototypes and 16 applications, improving team efficiency by 50%, and managing 
          budgets with 20% surplus. Combines hands-on technical skills (Python, C#, computer vision, modern backend development) 
          with business acumen (fundraising, company acquisition, strategic planning). Experienced in remote team management, 
          offshore coordination, and full product lifecycle from ideation to launch.
        </p>
      </section>

      <section className="resume-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div>
            <strong>Programming Languages:</strong> Python, C#, C++, Embedded C/C++
          </div>
          <div>
            <strong>Backend Development:</strong> FastAPI, Django, REST API Design, PostgreSQL, SQLAlchemy
          </div>
          <div>
            <strong>DevOps & Cloud:</strong> Docker, Kubernetes, CI/CD (GitHub Actions), AWS, Infrastructure as Code (Terraform)
          </div>
          <div>
            <strong>Machine Learning:</strong> PyTorch, Computer Vision, Model Training & Deployment, OpenCV
          </div>
          <div>
            <strong>Project Management:</strong> Agile, Scrum, Budgeting, Resource Allocation, Risk Management, KPI Alignment, 
            Stakeholder Communication, NPD Process
          </div>
          <div>
            <strong>Image Processing & Computer Vision:</strong> SIFT algorithm, Image Segmentation, Autoencoders, Edge Detection, 
            OpenCV, PyTorch, YOLO
          </div>
          <div>
            <strong>Tools & Technologies:</strong> Git, Unity, Unreal Engine, Trello, Slack, Linux CLI (RHEL certified), Docker, 
            Kubernetes, PostgreSQL, REST APIs, pytest, Arduino, Raspberry Pi
          </div>
          <div>
            <strong>Other:</strong> Game Design, User Experience (UX), SQL, Data Analytics, Strategic Planning, Remote Team Management
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h2>Professional Experience</h2>
        
        <div className="experience-item">
          <div className="experience-header">
            <h3>Software Development Project Manager & Co-Founder</h3>
            <div className="experience-meta">
              <span>Avabyte</span>
              <span>April 2018 - April 2022</span>
              <span>Houston, TX · On-site</span>
            </div>
          </div>
          <ul>
            <li>Co-founded and built company from ground up, managing development and deployment of 7 applications simultaneously</li>
            <li>Improved programming delivery time and bug fix rates by 50% through process optimization and refined team guidelines</li>
            <li>Refined team guidelines and workflows, resulting in additional 20% improvement in development efficiency</li>
            <li>Hired and managed cross-functional teams of up to 10 people, including offshore developers across multiple time zones</li>
            <li>Established effective remote collaboration processes using Slack, Trello, and custom team management software</li>
            <li>Developed and tracked Key Performance Indicators (KPIs) to monitor project progress and alignment with organizational goals</li>
            <li>Consolidated development stack to C# and Unity, reducing complexity and improving team productivity</li>
            <li>Managed project budgets and resource allocation, ensuring 100% on-time delivery within budget constraints</li>
            <li>Led code reviews and quality assurance processes, ensuring deliverables met technical specifications</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <h3>Project Lead & Co-Founder</h3>
            <div className="experience-meta">
              <span>Shuffleware</span>
              <span>November 2017 - December 2018</span>
              <span>Houston, TX · On-site</span>
            </div>
          </div>
          <ul>
            <li>Co-founded company and led entire product lifecycle for 5 applications from ideation to launch</li>
            <li>Managed team of 10 across multiple disciplines (developers, artists, designers)</li>
            <li>Improved programming delivery time and bug fix rates by approximately 50%</li>
            <li>Refined team guidelines, resulting in a further 20% improvement in efficiency</li>
            <li>Managed investor relations and secured funding from individual investors</li>
            <li>Led company to successful acquisition by Avabyte, resulting in expanded responsibilities</li>
            <li>Developed detailed project plans, defined scope and timelines, ensuring on-time delivery</li>
            <li>Collaborated with stakeholders including Ubisoft and marketing teams to align project goals</li>
            <li>Pitched projects to publishers at E3, securing publisher interest and investor funding</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <h3>Independent Software Development Consultant</h3>
            <div className="experience-meta">
              <span>Ser (Client)</span>
              <span>April 2022 - Present</span>
              <span>Houston, TX · Remote/Hybrid</span>
            </div>
          </div>
          <ul>
            <li>Delivered 12 prototypes and 16 applications, managing full development lifecycle</li>
            <li>Developed image processing applications using SIFT algorithm and autoencoder techniques in Python</li>
            <li>Automated defect detection in manufacturing using edge detection methods</li>
            <li>Managed project budgets and resource allocation, ensuring projects stayed within budget</li>
            <li>Collaborated with stakeholders to understand and document project requirements related to image processing applications</li>
            <li>Identified potential risks impacting project success and developed mitigation strategies</li>
            <li>Ensured project deliverables met quality standards and technical specifications</li>
            <li>Completed RHEL certification courses, becoming proficient in Linux CLI</li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2>Education</h2>
        <div className="education-item">
          <h3>Bachelor of Science in Computer Science</h3>
          <div className="education-meta">
            <span>University of Houston</span>
            <span>Houston, TX</span>
            <span>Minor: Mathematics</span>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h2>Key Achievements & Metrics</h2>
        <ul className="achievements-list">
          <li><strong>50% improvement</strong> in programming delivery time and bug fix rates</li>
          <li><strong>20% improvement</strong> in team efficiency through process optimization</li>
          <li><strong>20% budget surplus</strong> managed across multiple projects, allocated to increased production value</li>
          <li><strong>7 applications</strong> managed simultaneously at Avabyte</li>
          <li><strong>12 prototypes and 16 applications</strong> delivered at Ser</li>
          <li><strong>5 applications</strong> led from ideation to launch at Shuffleware</li>
          <li><strong>Team of 10</strong> managed across multiple disciplines</li>
          <li><strong>Company acquisition</strong> - Led Shuffleware to successful acquisition by Avabyte</li>
          <li><strong>Remote team management</strong> - Managed offshore development teams across multiple time zones</li>
        </ul>
      </section>

      <section className="resume-section">
        <h2>Projects</h2>
        
        <div className="project-item">
          <h3>FeatSpec</h3>
          <p>
            Web-based tool for creating structured feature specifications through prompt-driven workflows. Supports project management, 
            automated spec generation via Cursor CLI, multi-agent automation, and interactive chat assistance.
          </p>
          <div className="project-tech">
            <strong>Technologies:</strong> JavaScript, React, Vercel Blob Storage
          </div>
          <div className="project-links">
            <a href="https://github.com/adamPlusPlus/FeatSpec" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://feat-spec-obch0mupa-adamplusplus-projects.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>

        <div className="project-item">
          <h3>twodo</h3>
          <p>
            Modular, feature-rich daily todo tracker with drag-and-drop organization, multiple element types (tasks, timers, audio, images), 
            calendar views, undo/redo, and plugin architecture.
          </p>
          <div className="project-tech">
            <strong>Technologies:</strong> JavaScript, React, Vercel Blob Storage
          </div>
          <div className="project-links">
            <a href="https://github.com/adamPlusPlus/twodo" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://twodo-5c0qdr10j-adamplusplus-projects.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>

        <div className="project-item">
          <h3>Automated Defect Detection System (Legacy)</h3>
          <p>
            Designed and implemented system for automated defect detection on manufactured parts using Raspberry Pi and Python. 
            Utilized OpenCV for image processing, including edge detection and feature extraction, to identify anomalies.
          </p>
          <div className="project-tech">
            <strong>Technologies:</strong> Python, OpenCV, Raspberry Pi, Edge Detection
          </div>
        </div>

        <div className="project-item">
          <h3>Custom Team Management Software</h3>
          <p>
            Developed custom software for resource allocation and task assignment, identifying key strengths of each employee and routing 
            them to suitable tasks. Implemented Kanban workflow management and streamlined reporting processes.
          </p>
          <div className="project-tech">
            <strong>Technologies:</strong> C#, Custom Development, Kanban Workflow
          </div>
        </div>

        <div className="project-item">
          <h3>Technical Prototypes & Product Demos</h3>
          <p>
            Managed development of 20+ technical prototypes demonstrating rapid iteration, performance optimization, and cross-platform deployment. 
            Projects showcase full-stack capability across Unity, Unreal Engine, and Python, with deployments spanning mobile, PC, and web platforms. 
            Focus areas include real-time systems, performance optimization, cross-platform development, and agile prototyping methodologies.
          </p>
          <div className="project-tech">
            <strong>Technologies:</strong> Unity, Unreal Engine, C#, Python, Mobile Development, Cross-Platform Deployment
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resume

