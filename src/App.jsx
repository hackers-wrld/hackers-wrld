import React, { useState } from 'react';
import './App.scss';
import './scss/_hi.scss';
import MailLogo from './img/mail.svg?react';
import me from './img/me.png';

import './scss/_head.scss';
import './scss/_body.scss';
import './scss/_me.scss';
import './scss/_page.scss';
import './scss/_comments.scss';

function App() {
  const [showMore, setShowMore] = useState(false);
  const [showNotion, setShowNotion] = useState(false);

  const toggleReadMore = () => {
    setShowMore(true);
  };

  const toggleNotionModal = () => {
    setShowNotion(!showNotion);
  };

  const notionUrl = "https://www.notion.so/Skoff-Application-11cef31ccf6b8081b49ecd247ede6d4a";

  return (
    <div className="app-container">
      <header id="head" className="head">
        <div className="hi">
          <h2>Hi, I'm Kamogelo, aka <span className="wrld" style={{ display: 'inline-block' }}><a href='https://github.com/hackers-wrld'>hackerswrld</a><span className="cursor"></span></span></h2> 
        </div>
        
        <div className="hero-row">
          <div className="mini">
            Software Engineer based in Mafikeng. I build enterprise software and management systems at <a href="https://mafihub.co.za" target="_blank" rel="noopener noreferrer" className="mdihub-link">MDIHUB</a> by day, and work on my startup, <a href="https://proxstudios.co.za" target="_blank" rel="noopener noreferrer" className="mypapers-link"><span className="mypapers">MyPapers</span></a>—aimed at helping high school learners prepare for tests and exams early. Occasionally, I dabble in IoT, building smart home interfaces.
          </div>
          <div className="hero-image">
            <img src={me} className="me_2" alt='Kamogelo' />
          </div>
        </div>

        <div className="_mail">
          <MailLogo className="mailto" />
          <a href='mailto:36458953@student.g.nwu.ac.za'>Say Hi!</a>
        </div>
      </header>

      <main>
        <section id="about" className="about">
          <div className="comment">
            <h3>// about me</h3> 
          </div>

          <p className="me">
            I’m currently a computer science and mathematics undergrad student at <span className="nwu">NWU</span> (North West University). 
            Currently, I'm working as a <strong>Software Intern (Backend Developer)</strong>, applying my passion for data and systems in a professional environment.
          </p>

          <div>
            <p>
              Here are some technologies I have been working with:
            </p>
            <ul>
              <li>Full Stack Development (Next.js, React)</li>
              <li>Mobile Development (Flutter, React Native)</li>
              <li>Backend (Django, Python, Java)</li>
              <li>Databases (SQL, NoSQL)</li>
              <li>Javascript / Typescript</li>
            </ul>
            
            <p>Cloud & Others:</p>
            <ul>
              <li>Firebase, Google Authentication</li>
              <li>Git / GitHub</li>
            </ul>
          </div>
        </section>

        <section id="projects" className="projects">
          <div className="comment">
            <h3>// my projects</h3>
          </div>
          <div className="project">
            <h4>Skoff Application</h4>
            <p>
              I built an app for taxi drivers, and they don't use it.
              How did this idea come about? Living with taxi drivers made me curious about 
              how their system works, which brought this project to life. I programmed it over December 
              2020. 
              {!showMore && (
                <span id="readmore" onClick={toggleReadMore} className="read" style={{ cursor: 'pointer', textDecoration: 'underline', marginLeft: '5px' }}>
                  Read more
                </span>
              )}
            </p>
            
            <div style={{ marginTop: '10px' }}>
              <button 
                onClick={toggleNotionModal}
                className="read"
                style={{ 
                  background: '#2c2c2c', 
                  color: 'white', 
                  border: '1px solid #444', 
                  padding: '5px 15px', 
                  cursor: 'pointer',
                  borderRadius: '4px',
                  fontSize: '0.9rem'
                }}
              >
                View Documentation (Notion)
              </button>
            </div>
            
            {showMore && (
              <div id="hideout" className="hideout">
                <p className="hide">
                  If you know how their system works, you might be curious about how I managed to re-sort the list multiple times, as it was the hardest problem to solve at the time. Imagine a list of ten taxi drivers: every day, the driver who started first becomes the last the following day. The person who was second becomes first, the third becomes second, and so on. Another challenge is when a driver is absent on purpose or neglecting work; that driver has to be moved to the back of the line the following day. At least, that's how it was explained to me.
                </p>
                <div className="techu">
                  Technologies used in this project:
                </div>
                <p>
                  <span className="tech">Java</span> - native for android applications<br />
                  SQL - for storing the data (list of drivers)<br />
                  Firebase - Storing the data, so it can sync with the other drivers<br />
                  Google auth - verify user with phone number, names, location of the taxi rank
                </p>

                <div className="challenge">
                  <div className="techu">
                    Challenges at the time.
                  </div>
                  <p>
                    Sorting the list.<br/>
                    Since the list had to be sorted more than once, keeping track of the old and new lists became challenging. First, you must identify the last driver; second, you must identify the absent or lazy driver(s). This meant I had to be smart about how the lists were rearranged.
                    <br/><br/>
                    -- full concept coming soon --
                  </p>
                  <a className="scouf" href="https://play.google.com/store/apps/details?id=com.taxi.scouf" target="_blank" rel="noopener noreferrer"> Link to app</a>
                </div>
              </div>
            )}
          </div>
        </section>

        <section id="experience" className="foot">
          <div className="comment">
            <h3>// experience</h3>
          </div>
          <div className="timeline">
            <div className="exp-item">
              <div className="timeline-dot"></div>
              <h4>Full Stack Software Developer</h4>
              <div className="exp-company">MDIHUB</div>
              <div className="exp-date">October 2025 – Present</div>
              <ul className="exp-desc">
                <li>Launched a scalable, full-stack hackathon management platform (<a href="https://devpluxe.co.za" target="_blank" rel="noopener noreferrer" style={{ color: 'gold', textDecoration: 'underline' }}>devpluxe.co.za</a>) to support complete event execution and simplify the user journey.</li>
                <li>Created a strong Role-Based Access Control (RBAC) system that provides customized, interactive dashboards and specific permissions for four different user types: participants, mentors, judges, and administrators.</li>
                <li>Led the development of essential core features, including dynamic team formation logic, secure project solution upload pipelines, and a full administrative suite for managing participant lifecycles.</li>
                <li>Improved platform security and protected user data by adding smooth two-factor authentication (2FA) protocols at all account access points.</li>
              </ul>
            </div>
            <div className="exp-item">
              <div className="timeline-dot"></div>
              <h4>Software Developer Intern</h4>
              <div className="exp-company">Afrosurance</div>
              <div className="exp-date">July 2024 – August 2025</div>
              <ul className="exp-desc">
                <li>Designed and developed an SEO-friendly web app aimed at streamlining the onboarding process and educating potential clients about complicated funeral products.</li>
                <li>Designed a custom Customer Relationship Management (CRM) portal specifically for targeted market segments, complete with user authentication to ensure all client information remains confidential.</li>
                <li>Implemented Notion’s API technology to design a dynamic admin dashboard, allowing users to easily view and manage potential applications on a real-time basis.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Notion WebView Modal */}
      {showNotion && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.8)',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            width: '90%',
            height: '80%',
            backgroundColor: '#1a1a1a',
            borderRadius: '8px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              padding: '10px 20px',
              borderBottom: '1px solid #333',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ color: '#fff' }}>Skoff Documentation</span>
              <button onClick={toggleNotionModal} style={{
                background: 'none',
                border: 'none',
                color: '#fff',
                fontSize: '1.5rem',
                cursor: 'pointer'
              }}>&times;</button>
            </div>
            
            <div style={{ flex: 1, position: 'relative' }}>
              <iframe 
                src={notionUrl}
                title="Notion Documentation"
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  borderRadius: '0 0 8px 8px'
                }}
              />
              {/* Fallback overlay in case Notion blocks Iframe */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                textAlign: 'center',
                color: '#aaa',
                zIndex: -1
              }}>
                <p>If the documentation doesn't load below (due to Notion's security policies),</p>
                <a href={notionUrl} target="_blank" rel="noopener noreferrer" style={{
                  color: '#4a90e2',
                  pointerEvents: 'auto',
                  textDecoration: 'underline'
                }}>Click here to open it in a new tab</a>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="page">
        <div className="home"> <a href="#head">//home</a></div>
        <div className="about"><a href='#about'>//about</a></div>
        <div className="swp"><a href="#projects">//projects</a></div>
        <div className="exp"><a href="#experience">//experience</a></div>
      </footer>
    </div>
  );
}

export default App;
