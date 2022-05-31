import React from "react";
import "../styles/home.css";

 
import Joblisting from "../components/Joblisting";
import { Container } from "react-bootstrap";

function Home() {
  return (
<Container fluid className="text-center ">

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

</Container>
 


  );
}

export default Home;
