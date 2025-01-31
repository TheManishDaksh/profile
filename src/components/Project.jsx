import React from "react";

function Project() {
  return (
    <div>
      <div className="text-slate-400 font-bold text-5xl flex justify-center py-5 ">
        SKILLS
      </div>
      <div>
        <div className="flex gap-6 justify-items-center py-5">
          <div className="flex items-center px-3 py-2  text-slate-400 font-bold text-2xl gap-1 border-2 border-slate-700 w-[150px] rounded-full shadow-2xl shadow-white transition-transform duration-300 hover:-translate-y-4 hover:text-sky-300 cursor-pointer hover:rotate-x-180">
            <span>
              <img src="../../public/html.png" alt="Html" width="40px" />
            </span>
            <span>HTML</span>
          </div>
          <div className="flex items-center px-3 py-2  text-slate-400 font-bold text-2xl gap-1 border-2 border-slate-700 w-[12 0px] rounded-full shadow-2xl shadow-white transition-transform duration-300 hover:-translate-y-4 hover:text-sky-300 cursor-pointer hover:rotate-x-180">
            <span>
              <img src="../../public/css.png" alt="CSS" width="40px" />
            </span>
            <span>CSS</span>
          </div>
          <div className="flex items-center px-2 py-2  text-slate-400 font-bold text-2xl gap-1 border-2 border-slate-700 w-[190px] rounded-full shadow-2xl shadow-white transition-transform duration-300 hover:-translate-y-4 hover:text-sky-300 cursor-pointer hover:rotate-x-180">
            <span>
              <img
                src="../../public/Bootstrap.png"
                alt="Bootstrap"
                width="50px"
              />
            </span>
            <span>Bootstrap</span>
          </div>
          <div className="flex items-center px-3 py-2  text-slate-400 font-bold text-2xl gap-1 border-2 border-slate-700 w-[150px] rounded-full shadow-2xl shadow-white transition-transform duration-300 hover:-translate-y-4 hover:text-sky-300 cursor-pointer hover:rotate-x-180">
            <span>
              <img
                src="../../public/material-ui.png"
                alt="Material UI"
                width="50px"
              />
            </span>
            <span>Material</span>
          </div>
          <div className="flex items-center px-3 py-2  text-slate-400 font-bold text-2xl gap-1 border-2 border-slate-700 w-[150px] rounded-full shadow-2xl shadow-white transition-transform duration-300 hover:-translate-y-4 hover:text-sky-300 cursor-pointer hover:rotate-x-180">
            <span>
              <img
                src="../../public/tailwind.png"
                alt="Tailwind"
                width="40px"
              />
            </span>
            <span>Tailwind</span>
          </div>
          <div className="flex items-center px-3 py-2  text-slate-400 font-bold text-2xl gap-1 border-2 border-slate-700 w-[150px] rounded-full shadow-2xl shadow-white transition-transform duration-300 hover:-translate-y-4 hover:text-sky-300 cursor-pointer hover:rotate-x-180">
            <span>
              <img src="../../public/node-js.png" alt="Node js" width="40px" />
            </span>
            <span>Node</span>
          </div>
        </div>
        <div className="flex gap-6 justify-center ">
          <div className="flex items-center px-3 py-2  text-slate-400 font-bold text-2xl gap-2 border-2 border-slate-700 w-[100px] rounded-full shadow-2xl shadow-white transition-transform duration-300 hover:-translate-y-4 hover:text-sky-300 cursor-pointer hover:rotate-x-180">
            <span>
              <img src="../../public/js.png" alt=" js" width="30px" />
            </span>
            <span>JS</span>
          </div>
          <div className="flex items-center px-3 py-2  text-slate-400 font-bold text-2xl gap-1 border-2 border-slate-700 w-[150px] rounded-full shadow-2xl shadow-white transition-transform duration-300 hover:-translate-y-4 hover:text-sky-300 cursor-pointer hover:rotate-x-180">
            <span>
              <img src="../../public/react.png" alt="React" width="40px" />
            </span>
            <span>React</span>
          </div>
          <div className="flex items-center px-3 py-2  text-slate-400 font-bold text-2xl gap-1 border-2 border-slate-700 w-[150px] rounded-full shadow-2xl shadow-white transition-transform duration-300 hover:-translate-y-4 hover:text-sky-300 cursor-pointer hover:rotate-x-180">
            <span>
              <img src="../../public/redux.png" alt="Redux" width="40px" />
            </span>
            <span>Redux</span>
          </div>
        </div>
      </div>
      <div>
        <div className="text-5xl font-bold flex justify-center py-14 text-slate-400 ">
          Projects
        </div>
        <div className="grid grid-cols-2 gap-10 pb-10">
          <div className="transition-transform duration-300 hover:scale-105 hover:shadow-2xl border-2 border-slate-700 w-[450px] h-[450px] shadow-sky-300 rounded-2xl px-5 py-4">
            <div className="flex justify-center">
              <img src="../../public/react.png" alt="Project" width="200px" />
            </div>
            <div>
              <div className="text-slate-400">
                <div className="text-3xl py-4 font-bold ">TravelO</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita magnam ipsum repellendus voluptate. Possimus maxime
                  laudantium tempora velit hic quaerat? A voluptate assumenda
                  debitis,
                </p>
              </div>
              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2 border-2 border-slate-700 shadow shadow-white w-24 text-slate-400 rounded-xl hover:text-sky-300 cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                  <a href="https://github.com/TheManishDaksh/travel_fe" target="_blank" rel="noopener noreferrer" style={{display:"flex", alignItems:"center", gap:"8px"}}>
                  <img src="../../public/github.png" alt="git" width="30px" />
                  <span>Github</span>
                  </a>
                </div>
                <div className="flex items-center gap-2 border-2 border-slate-700 shadow shadow-white w-20 pl-2 text-slate-400 rounded-lg hover:text-sky-300 cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                  Live Link
                </div>
              </div>
            </div>
          </div>

          <div className="transition-transform duration-300 hover:scale-105 hover:shadow-2xl border-2 border-slate-700 w-[450px] h-[450px] shadow-sky-300 rounded-2xl px-5 py-4">
            <div className="flex justify-center">
              <img src="../../public/react.png" alt="Project" width="200px" />
            </div>
            <div>
              <div className="text-slate-400">
                <div className="text-3xl py-4 font-bold ">View Tube</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita magnam ipsum repellendus voluptate. Possimus maxime
                  laudantium tempora velit hic quaerat? A voluptate assumenda
                  debitis,
                </p>
              </div>
              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2 border-2 border-slate-700 shadow shadow-white w-24 text-slate-400 rounded-xl hover:text-sky-300 cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                  <a href="https://github.com/TheManishDaksh/yt_clone" target="_blank" rel="noopener noreferrer"
                  style={{display:"flex", alignItems:"center", gap:"8px"}}>
                  <img src="../../public/github.png" alt="git" width="30px" />
                  <span>Github</span>
                  </a>
                </div>
                <div className="flex items-center gap-2 border-2 border-slate-700 shadow shadow-white w-20 pl-2 text-slate-400 rounded-lg hover:text-sky-300 cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                  Live Link
                </div>
              </div>
            </div>
          </div>

          <div className="transition-transform duration-300 hover:scale-105 hover:shadow-2xl border-2 border-slate-700 w-[450px] h-[450px] shadow-sky-300 rounded-2xl px-5 py-4">
            <div className="flex justify-center">
              <img src="../../public/react.png" alt="Project" width="200px" />
            </div>
            <div>
              <div className="text-slate-400">
                <div className="text-3xl py-4 font-bold ">Blog App</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita magnam ipsum repellendus voluptate. Possimus maxime
                  laudantium tempora velit hic quaerat? A voluptate assumenda
                  debitis,
                </p>
              </div>
              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2 border-2 border-slate-700 shadow shadow-white w-24 text-slate-400 rounded-xl hover:text-sky-300 cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                  <a href="https://github.com/TheManishDaksh/blogApp" target="_blank" rel="noopener noreferrer"
                  style={{display:"flex", alignItems:"center", gap:"8px"}}>
                  <img src="../../public/github.png" alt="git" width="30px" />
                  <span>Github</span>
                  </a>
                </div>

                <div className="flex items-center gap-2 border-2 border-slate-700 shadow shadow-white w-20 pl-2 text-slate-400 rounded-lg hover:text-sky-300 cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                  Live Link
                </div>
              </div>
            </div>
          </div>

          <div className="transition-transform duration-300 hover:scale-105 hover:shadow-2xl border-2 border-slate-700 w-[450px] h-[450px] shadow-sky-300 rounded-2xl px-5 py-4">
            <div className="flex justify-center">
              <img src="../../public/react.png" alt="Project" width="200px" />
            </div>
            <div>
              <div className="text-slate-400">
                <div className="text-3xl py-4 font-bold ">Keeper</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita magnam ipsum repellendus voluptate. Possimus maxime
                  laudantium tempora velit hic quaerat? A voluptate assumenda
                  debitis,
                </p>
              </div>
              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2 border-2 border-slate-700 shadow shadow-white w-24 text-slate-400 rounded-xl hover:text-sky-300 cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                  <a href="https://github.com/TheManishDaksh/Keeper" target="_blank" rel="noopener noreferrer"
                  style={{display:"flex", alignItems:"center", gap:"8px"}}  >
                  <img src="../../public/github.png" alt="git" width="30px" />
                  <span>Github</span>
                  </a>
                </div>
                <div className="flex items-center gap-2 border-2 border-slate-700 shadow shadow-white w-20 pl-2 text-slate-400 rounded-lg hover:text-sky-300 cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                  Live Link
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
