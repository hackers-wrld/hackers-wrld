/* eslint-disable react/jsx-no-comment-textnodes */
import './App.scss';
import './scss/_hi.scss';
import { ReactComponent as MailLogo } from './img/mail.svg';
import me from './img/me.png';
// head till say hi

import './scss/_head.scss';
import './scss/_body.scss';
import './scss/_me.scss';
import './scss/_page.scss';
import './scss/_comments.scss';
//import git from './img/github.png';
const readmore = () => {
  console.log("hi");
  document.getElementById("hideout").style.display = "block";
  document.getElementById("readmore").style.display = "none";
};
//get screen width 
const screen = window.innerWidth;
console.log(screen);

function App() {
  return (
    <div style={{  }}>
    
    {/* Your content goes here */}
    <body>
      <div id="head" class="head">
        <div class="hi">
          <h2>hi, I'm Kamogelo, aka <div class="wrld"><a href='https://github.com/hackers-wrld'>hackerswrld</a></div></h2> 
        </div>
          <div class="create"><h3>I like to create stuff sometimes.</h3>
        </div>
        <div class="mini">  Interested in almost anything to do with data, 
                            finding relations through manipulation, sorting algorithms. I like to create interesting stuff sometimes by interesting ( challenging ideas, 
                            ain’t been done yet or at least my way). And no I am not a hacker.
        </div>
        <div class="_mail">
        < MailLogo class ="mailto"/>
          <a href='mailto:36458953@student.g.nwu.ac.za'>Say Hi!</a>
        </div>
      </div>
      <div id="about" class="about">
          <div class="comment">
            <h3>// about me</h3> 
          </div>
          <img src={me} class="me_2" alt='me' />

          <p class="me">I’m currently a computer science and mathematics undergrad student at <div class="nwu">NWU</div> (North West University), Finishing my studies in 2024.</p>
          <div>
            <p>
              Here are some technologies i have been working with:
              <ul>
                <li>Java</li>
                <li>Flutter (dart)</li>
                <li>Django (python)</li>
                <li>SQL</li>
                <li>React.js (HTML & CSS)</li>
                <li>Javascript</li>
              </ul>
              
              Cloud: 
              <ul>
                <li>Firebase, including Google Authentication</li>
              </ul>
            </p>
          </div>
      </div>
      <div id="projects" class="projects">
          <div class="comment">
            <h3>// my projects</h3>
          </div>
          <div class="project">
            <h4>Scouf application</h4>
            <p>
              I made an app for taxi drivers, and they don't use it.
              How this idea came bout. Basically living w/ taxi drivers, got me curious as 
              how their system works, then this came to life programmed it over december of 
              2020. <div id="readmore" onClick={readmore} class="read" >Read more</div>
            </p>
            <div id="hideout" class="hideout">
            <p class="hide">
            If you know how their systems works you would also be curious as how I managed to resort the list multiple times cause twas The hardest part to solve at the time, basically 
            imagine a list of ten taxi drivers and everyday the driver who started first they will be the last the following day.
            Second part is the person who was second becomes first the following, and third second on and on..
            Third comes the occasion where if a is absent on purpose or neglecting work and that driver has to be last following day if they miss a full day of work. Or that’s 
            how twas explained to me.
            </p>
              <div class="techu">
                Technologies used in this project.
              </div>
            <p>
              <div class="tech">
                Java
              </div> - native for android applications
              SQL - for storing the data (list of drivers)
              Firebase - Storing the data, so it can sync with the other drivers
              Google auth - verify user with phone number, names, location of the taxi rank
            </p>

            <div class="challenge">
              <p>
                <div class="techu">
                  Challenges at the time.
                </div>
                Sorting the list.
                  Since the list has to be sorted more than once, it got challenging to keep track
                  of the old list and new list. First is when you must select the last driver, 
                  second is when you select the lazy driver(s) meaning we'll have to be smart on how
                  we rearrange the lists.
                  -- full concept coming soon --

              </p>
              <a class="scouf" href="https://play.google.com/store/apps/details?id=com.taxi.scouf"> Link to app</a>
            </div>
            </div>
          
          </div>
      </div>
      <div id="foot" class="foot">
          <div class="comment">
            <h3>// experience</h3>
          </div>
          <p>
            None, watchu spec.
          </p>
      </div>
    </body>

    <footer class="page">
          <div class="home"> <a href="#head">//home</a></div>
          <div class="about"><a href='#about'>//about</a></div>
          <div class="swp"><a href="#projects">//projects</a></div>
          <div class="exp"><a href="#foot">//experience</a></div>
    </footer>
    
  </div>

  );
}



export default App;
