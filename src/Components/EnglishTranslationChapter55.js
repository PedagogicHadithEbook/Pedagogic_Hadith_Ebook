import React,{useState} from 'react';
import Thadith from './EnglishUrduTranslation.json';
import HadithRef from './Hadith_References.json';
import { HashLink } from 'react-router-hash-link';
import copy from "copy-to-clipboard";   
import "./Translation.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { RWebShare } from "react-web-share";
export default function EnglishTranslationChapter55() {
  
  const [buttonIcons, setButtonIcons] = useState(Array.from({ length: Thadith.length }, () => faCopy));
  // eslint-disable-next-line
 const [showAlert, setShowAlert] = useState(false);
 
 const copyToClipboard = (loop) => {
    // eslint-disable-next-line
   copy(Thadith[loop].AR + '\n' + '\n' + Thadith[loop].ET);
   setShowAlert(true);
   const newButtonIcons = [...buttonIcons];
   newButtonIcons[loop] = faCheck;
   setButtonIcons(newButtonIcons);
 
   setTimeout(() => {
     setShowAlert(false);
     newButtonIcons[loop] = faCopy;
     setButtonIcons(newButtonIcons);
   }, 500);
 };
 const loop55=[383,384,385,386,387,388,389]
  return (
    <>
    

    <center><h1>English Translation</h1></center><br />
    <center><h2>Chapter 55. The Seeing Of Rasoolullah In a Dream</h2></center>

    {
      loop55.map((loop,index) => (  
        <div className="container">
          <br />
          <h3 id={'Hadith'+ (loop+1)} >Hadith {Thadith[loop].Hadith_No}</h3>
          <h5>Arabic</h5>
          {/* Arabic hadith container */} 
          <div className="container1">
           <p> {Thadith[loop].AR}</p>
          </div>
          {/* Arabic hadith container closed*/}
          <div className="Reference">
           <p><b>Reference: </b>{HadithRef[loop].Reference}<br />
           <b>In-book reference: </b>{HadithRef[loop].Book_Reference}</p>
      </div>
          {/* English hadith container */} 
          <h5 > English Translation</h5>
          <div className="container2"><p>{Thadith[loop].ET}</p>
          <button onClick={() => copyToClipboard(loop)} ><FontAwesomeIcon icon={buttonIcons[loop]} size="1x" ></FontAwesomeIcon></button>&nbsp;&nbsp;
    <RWebShare
        data={{
          title: "Share",
        }}
        onClick={() => console.log("shared successfully!")}
      >
        <button><FontAwesomeIcon icon={faShare} size="1x"></FontAwesomeIcon></button>
      </RWebShare>
    {/* eslint-disable-next-line */}
      <h6><HashLink to={'/UrduTranslationChapters/UrduTranslationChapter55' +'/#Hadith'+(loop+1)} style={{ color:"midnightblue"}}>View Urdu Translation</HashLink></h6>
      {/* eslint-disable-next-line */}
      <h6><HashLink to={'/WordToWordTranslationChapters/WordToWordTranslationChapter55' +'/#Hadith'+(loop+1)} style={{ color:"midnightblue"}}>View Word-By-Word Grammar</HashLink></h6>

           </div>
           </div>
          /* English hadith container closed*/

        /*hadith container closed */  

        ))
      }
    </>
  )
}

