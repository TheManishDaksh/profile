import React from "react";

function Project() {
  return (
    <div>
      <div className="text-slate-400 font-bold text-5xl flex justify-center py-5 ">
        SKILLS
      </div>
      <div>
        <div className="grid gap-y-4 md:grid-cols-4 lg:grid-cols-5 gap-2  md:gap-3 lg:gap-6 justify-items-center py-5">
          <div className="flex items-center px-3 py-2  text-slate-400 font-bold text-2xl gap-1 border-2 border-slate-700 w-[150px] rounded-full shadow-2xl shadow-white transition-transform duration-300 hover:-translate-y-4 hover:text-sky-300 cursor-pointer hover:rotate-x-180">
            <span>
              <img src="/html.png" alt="Html" width="40px" />
            </span>
            <span>HTML</span>
          </div>
          <div className="flex items-center px-3 py-2  text-slate-400 font-bold text-2xl gap-1 border-2 border-slate-700 w-[12 0px] rounded-full shadow-2xl shadow-white transition-transform duration-300 hover:-translate-y-4 hover:text-sky-300 cursor-pointer hover:rotate-x-180">
            <span>
              <img src="/css.png" alt="CSS" width="40px" />
            </span>
            <span>CSS</span>
          </div>
          <div className="flex items-center px-2 py-2  text-slate-400 font-bold text-2xl gap-1 border-2 border-slate-700 w-[190px] rounded-full shadow-2xl shadow-white transition-transform duration-300 hover:-translate-y-4 hover:text-sky-300 cursor-pointer hover:rotate-x-180">
            <span>
              <img
                src="/Bootstrap.png"
                alt="Bootstrap"
                width="50px"
              />
            </span>
            <span>Bootstrap</span>
          </div>
          <div className="flex items-center px-3 py-2  text-slate-400 font-bold text-2xl gap-1 border-2 border-slate-700 w-[150px] rounded-full shadow-2xl shadow-white transition-transform duration-300 hover:-translate-y-4 hover:text-sky-300 cursor-pointer hover:rotate-x-180">
            <span>
              <img
                src="/material-ui.png"
                alt="Material UI"
                width="50px"
              />
            </span>
            <span>Material</span>
          </div>
          <div className="flex items-center px-3 py-2  text-slate-400 font-bold text-2xl gap-1 border-2 border-slate-700 w-[150px] rounded-full shadow-2xl shadow-white transition-transform duration-300 hover:-translate-y-4 hover:text-sky-300 cursor-pointer hover:rotate-x-180">
            <span>
              <img
                src="/tailwind.png"
                alt="Tailwind"
                width="40px"
              />
            </span>
            <span>Tailwind</span>
          </div>
          <div className="flex items-center px-3 py-2  text-slate-400 font-bold text-2xl gap-1 border-2 border-slate-700 w-[150px] rounded-full shadow-2xl shadow-white transition-transform duration-300 hover:-translate-y-4 hover:text-sky-300 cursor-pointer hover:rotate-x-180">
            <span>
              <img src="/node-js.png" alt="Node js" width="40px" />
            </span>
            <span>Node</span>
          </div>
      
        
          <div className="flex items-center px-3 py-2  text-slate-400 font-bold text-2xl gap-2 border-2 border-slate-700 w-[100px] rounded-full shadow-2xl shadow-white transition-transform duration-300 hover:-translate-y-4 hover:text-sky-300 cursor-pointer hover:rotate-x-180">
            <span>
              <img src="/js.png" alt=" js" width="30px" />
            </span>
            <span>JS</span>
          </div>
          <div className="flex items-center px-3 py-2  text-slate-400 font-bold text-2xl gap-1 border-2 border-slate-700 w-[150px] rounded-full shadow-2xl shadow-white transition-transform duration-300 hover:-translate-y-4 hover:text-sky-300 cursor-pointer hover:rotate-x-180">
            <span>
              <img src="/react.png" alt="React" width="40px" />
            </span>
            <span>React</span>
          </div>
          <div className="flex items-center px-3 py-2  text-slate-400 font-bold text-2xl gap-1 border-2 border-slate-700 w-[150px] rounded-full shadow-2xl shadow-white transition-transform duration-300 hover:-translate-y-4 hover:text-sky-300 cursor-pointer hover:rotate-x-180">
            <span>
              <img src="/redux.png" alt="Redux" width="40px" />
            </span>
            <span>Redux</span>
          </div>
        </div>
        </div>

      <div>
        <div className="text-5xl font-bold flex justify-center py-14 text-slate-400 ">
          Projects
        </div>
        <div className="grid  md:grid-cols-1 md:px-24 lg:px-10 lg:grid-cols-2 gap-10 pb-10">
          <div className="transition-transform duration-300 hover:scale-105 hover:shadow-2xl border-2 border-slate-700 w-[280px] h-[400px] md:w-[450px] md:h-[450px] lg:w-[450px] lg:h-[450px] shadow-sky-300 rounded-2xl px-5 py-4">
            <div className="flex justify-center">
              <img src="/trave3.jpg" alt="Travel Project" className="w-[400px] rounded-2xl" />
            </div>
            <div>
              <div className="text-slate-400">
                <div className="text-3xl py-4 font-bold ">TravelO</div>
                <p className="pb-2">
                Developed a Tavel website for booking hotels online
                </p>
                <p>
                Implemented Features like user-SignUp/Login, add to wishlist, Search destinations, Add guests
                </p>
              </div>
              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2 border-2 border-slate-700 shadow shadow-white w-24 text-slate-400 rounded-xl hover:text-sky-300 cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                  <a href="https://github.com/TheManishDaksh/travel_fe" target="_blank" rel="noopener noreferrer" style={{display:"flex", alignItems:"center", gap:"8px"}}>
                  <img src="/github.png" alt="git" width="30px" />
                  <span>Github</span>
                  </a>
                </div>
                <div className="flex items-center gap-2 border-2 border-slate-700 shadow shadow-white w-20 pl-2 text-slate-400 rounded-lg hover:text-sky-300 cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                  <a href="https://mahi-travels.vercel.app/" target="_blank" rel="noopener noreferrer">Live Link</a>
                </div>
              </div>
            </div>
          </div>

          <div className="transition-transform duration-300 hover:scale-105 hover:shadow-2xl border-2 border-slate-700 w-[280px] h-[400px] md:w-[450px] md:h-[450px] lg:w-[450px] lg:h-[450px] shadow-sky-300 rounded-2xl px-5 py-4">
            <div className="flex justify-center">
              <img src="/viewtube.png" alt="View-tube" className="w-[400px] h-[150px] md:h-[220px] rounded-2xl" />
            </div>
            <div>
              <div className="text-slate-400">
                <div className="text-3xl py-4 font-bold ">View Tube</div>
                <p className="py-2">
                  Build a you tube like clone 
                </p>
                <p>Build this application for sharping my skills with API's</p>
              </div>
              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2 border-2 border-slate-700 shadow shadow-white w-24 text-slate-400 rounded-xl hover:text-sky-300 cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                  <a href="https://github.com/TheManishDaksh/yt_clone" target="_blank" rel="noopener noreferrer"
                  style={{display:"flex", alignItems:"center", gap:"8px"}}>
                  <img src="/github.png" alt="git" width="30px" />
                  <span>Github</span>
                  </a>
                </div>
                <div className="flex items-center gap-2 border-2 border-slate-700 shadow shadow-white w-20 pl-2 text-slate-400 rounded-lg hover:text-sky-300 cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                  <a href="https://view-tube-neon.vercel.app/" target="_blank" rel="noopener noreferrer">Live Link</a>
                </div>
              </div>
            </div>
          </div>

          
          <div className="transition-transform duration-300 hover:scale-105 hover:shadow-2xl border-2 border-slate-700 w-[280px] h-[400px] md:w-[450px] md:h-[450px] lg:w-[450px] lg:h-[450px] shadow-sky-300 rounded-2xl px-5 py-4">
            <div className="flex justify-center">
              <img src="/profilepage.png" alt="profile" className="w-[400px] rounded-2xl" />
            </div>
            <div>
              <div className="text-slate-400">
                <div className="text-3xl py-4 font-bold ">Profile</div>
                <p>
                 It's a simple Profile Page that contains my details and some fo my projects with their github repo link
                </p>
              </div>
              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2 border-2 border-slate-700 shadow shadow-white w-24 text-slate-400 rounded-xl hover:text-sky-300 cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                  <a href="https://github.com/TheManishDaksh/profile" target="_blank" rel="noopener noreferrer"
                  style={{display:"flex", alignItems:"center", gap:"8px"}}  >
                  <img src="/github.png" alt="git" width="30px" />
                  <span>Github</span>
                  </a>
                </div>
                <div className="flex items-center gap-2 border-2 border-slate-700 shadow shadow-white w-20 pl-2 text-slate-400 rounded-lg hover:text-sky-300 cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                <a href="http://manishdev-hazel.vercel.app" target="_blank" rel="noopener noreferrer">Live Link</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="transition-transform duration-300 hover:scale-105 hover:shadow-2xl border-2 border-slate-700 w-[280px] h-[400px] md:w-[450px] md:h-[450px] lg:w-[450px] lg:h-[450px] shadow-sky-300 rounded-2xl px-5 py-4">
            <div className="flex justify-center">
              <img src="/blog-category.jpg" alt="Blog" className="w-[400px] rounded-2xl" />
            </div>
            <div>
              <div className="text-slate-400">
                <div className="text-3xl py-4 font-bold ">Blog App</div>
                <p>
                  Build a simple Blogging application with Features like SignUp/Login, Craete Post, Edit-post, Delete-post
                </p>
              </div>
              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2 border-2 border-slate-700 shadow shadow-white w-24 text-slate-400 rounded-xl hover:text-sky-300 cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                  <a href="https://github.com/TheManishDaksh/blogApp" target="_blank" rel="noopener noreferrer"
                  style={{display:"flex", alignItems:"center", gap:"8px"}}>
                  <img src="/github.png" alt="git" width="30px" />
                  <span>Github</span>
                  </a>
                </div>

              </div>
            </div>
          </div>


          <div className="transition-transform duration-300 hover:scale-105 hover:shadow-2xl border-2 border-slate-700 w-[280px] h-[450px] md:w-[450px] md:h-[450px] lg:w-[450px] lg:h-[450px] shadow-sky-300 rounded-2xl px-5 py-4">
            <div className="flex justify-center">
              <img src="/sora.png" alt="sora" className="w-[400px] h-[160px] md:h-[200px] lg:h-[200px] rounded-2xl" />
            </div>
            <div>
              <div className="text-slate-400">
                <div className="text-3xl py-4 font-bold ">Sora</div>
                <p className="py-2">
                  Sora is a landing page made with react and tailwind-css 
                </p>
                <p>
                  It's a service agency landing page that contains no functionality
                </p>
              </div>
              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2 border-2 border-slate-700 shadow shadow-white w-24 text-slate-400 rounded-xl hover:text-sky-300 cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                  <a href="https://github.com/TheManishDaksh/SaaSFirst" target="_blank" rel="noopener noreferrer"
                  style={{display:"flex", alignItems:"center", gap:"8px"}}  >
                  <img src="/github.png" alt="git" width="30px" />
                  <span>Github</span>
                  </a>
                </div>
              
              </div>
            </div>
          </div>

          <div className="transition-transform duration-300 hover:scale-105 hover:shadow-2xl border-2 border-slate-700 w-[280px] h-[430px] md:w-[450px] md:h-[450px] lg:w-[450px] lg:h-[450px] shadow-sky-300 rounded-2xl px-5 py-4">
            <div className="flex justify-center">
              <img src="/extensions.webp" alt="extension"className="w-[400px] h-[160px] md:h-[200px] lg:h-[200px] rounded-2xl" />
            </div>
            <div>
              <div className="text-slate-400">
                <div className="text-3xl py-4 font-bold ">Extension</div>
                <p className="py-2">
                  This is a Extension 
                </p>
                <p>
                  It greet you, hold your todo in itself and help to complete today's Goal
                </p>
              </div>
              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2 border-2 border-slate-700 shadow shadow-white w-24 text-slate-400 rounded-xl hover:text-sky-300 cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                  <a href="https://github.com/TheManishDaksh/browserExtension" target="_blank" rel="noopener noreferrer"
                  style={{display:"flex", alignItems:"center", gap:"8px"}}  >
                  <img src="/github.png" alt="git" width="30px" />
                  <span>Github</span>
                  </a>
                </div>
          
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Project;
