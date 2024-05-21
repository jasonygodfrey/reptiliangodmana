import React from 'react';

const GuaranteeListComponent = () => {
  return (
    <div className="neoh_fn_aboutpage">
      <section id="information">
        <div className="container">
          
         {/* <div className="neoh_fn_gualist">
            <ul>
              <li>
                <div className="item">
                  <span className="line"></span>
                  <div className="icon">
                    <img src="svg/search-engine.svg" alt="" className="fn__svg" />
                  </div>
                  <h3 className="fn_title">Transparency</h3>
                  <p className="fn_desc fn_animated_text" style={{ color: 'white' }}>
                    Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est.
                  </p>
                </div>
              </li>
              <li>
                <div className="item">
                  <span className="line"></span>
                  <div className="icon">
                    <img src="svg/management.svg" alt="" className="fn__svg" />
                  </div>
                  <h3 className="fn_title">Experienced Team</h3>
                  <p className="fn_desc fn_animated_text" style={{ color: 'white' }}>
                    Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est.
                  </p>
                </div>
              </li>
              <li>
                <div className="item">
                  <span className="line"></span>
                  <div className="icon">
                    <img src="svg/padlock.svg" alt="" className="fn__svg" />
                  </div>
                  <h3 className="fn_title">Security Guarantee</h3>
                  <p className="fn_desc fn_animated_text" style={{ color: 'white' }}>
                    Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est.
                  </p>
                </div>
              </li>
            </ul>
          </div>*/}

          {/* Skills Section */}
          <div className="neoh_fn_skills">
          <div className="neoh_fn_title">
            <h3 className="fn_title"></h3>
            <div className="line">
              <span />
            </div>
          </div>
          <p className="fn_desc fn_animated_text" style={{ color: 'white', whiteSpace: 'pre-line' }}>
{`Skills: 
C++ , C# , Lua , Unreal Engine, Unity, VR Virtual Reality, Systems Design, Databases: SQL, MySQL, MongoDB, Data Structures & Algorithms, Data Visualization, Scripting & Web: TypeScript, JavaScript, Python, PHP, WebGL, ThreeJS, React.js, Next.JS, Full-Stack Web, HTML, CSS, Tools: GitHub, Git, Jira, Atlassian, Figma, Blender, Photoshop Web Frameworks: Django, Apache, Node.js, API Cloud and Servers: AWS Suite, Google Cloud, Linux Methodologies: Agile, Scrum, SDLC, AI
Education:
Bachelor of Science - BS, Computer Science 
Bachelor of Science - BS, Computer/Information Technology Administration
Certifications: AWS, Systems Design, Coding, Algos, Full-Stack, Data Analysis, Web Design, J.P. Morgan, Walmart Tech, Lyft Back-End`}
</p>

          </div>

          {/* Contact Section */}
          <div className="neoh_fn_contact">
          <div className="neoh_fn_title">
           {/*  <h3 className="fn_title">Contact</h3>
            <div className="line">
              <span />
            </div> */}
          </div>
         {/*   <p className="fn_desc fn_animated_text" style={{ color: 'white' }}>
                    Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est.
                  </p> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GuaranteeListComponent;
