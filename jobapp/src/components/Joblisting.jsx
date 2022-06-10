/* eslint-disable no-restricted-globals */
import React, { useState } from "react";
import "../styles/joblisting.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import { collection, getFirestore, getDocs, doc } from "firebase/firestore";
import Footer from "./Footer";

function Joblisting() {
  const [data, setData] = useState([]);
  const db = getFirestore();
  const colRef = collection(db, "job-desc");

  function getData() {
    getDocs(colRef)
      .then((snapshot) => {
        let jobdesc = [];
        snapshot.docs.forEach((doc) => {
          jobdesc.push({ ...doc.data(), id: doc.id });
        });
        setData(jobdesc);
     
      })

      .catch((err) => {
        console.log(err.message);
      });
  }  
    const jobdescription= document.querySelectorAll(".jobdescription");
  useEffect(() => {  

    getData();
    console.log(data);
  }, []);

  //const [jobdescription, setJobdescription] = useState(false);

  console.log(jobdescription);
  function toggleJob(e) {
    //setJobdescription(true);
    // fetch("")
    //   .then((res) => res.json())
    //   .then((data) => {
      console.log(data)
        for(let x= 0; x<data.length; x++){
          console.log(data[x].title);
          console.log(e.target.innerText);
          if(data[x].title === e.target.innerText){
            jobdescription[x].style.display = "block";
         console.log("ok")
          }else if(data[x].title !== e.target.innerText){
            jobdescription[x].style.display = "none";
          }
        }
     // });
  }
  console.log(jobdescription);
  return (
    <div className="jobs" id="joblist">
      <div className="row text-center">
        <div className="col md-1 ">
          <ul className="job-list">
            <li className="job-preview">
              <div className="content float-left">
                <h4 className="job-title" >
        
 {data.map((dev) => (
                    <div key={dev.id}>
                      <h1 onClick={(e)=>toggleJob(e)}>{dev.title}</h1>
                      <h2>{dev.companey}</h2>
                      <h3>{dev.place}</h3>
                 
                      <h6 className="jobdescription" style={{"display": "none" , "textAlign":"start"}}>{dev.detail}</h6>  
                      <a
                        href="apply"
                        className="btn btn-apply float-sm-right float-xs-left"
                      >
                        Apply
                      </a>
                    </div>
                  ))}
       
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Joblisting;
