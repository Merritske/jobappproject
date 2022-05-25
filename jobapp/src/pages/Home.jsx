import React from "react";
import "../styles/home.css";

 
import Joblisting from "../components/Joblisting";

function Home() {
  return (
    <div>
 

      <header className="masthead">
        <div className="headHome">
                <h1 className="heading">Open Positions</h1>
                <span className="subheading">
                  Current listings for web design and front-end development
                  jobs.
                </span>
              </div>
        
      </header>

      <section>
      <Joblisting/>
      </section>
    </div>
  );
}

export default Home;
