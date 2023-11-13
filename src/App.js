
import classes from './App.module.css';
import React from 'react';
import image1 from  "../src/logo.png";
import image from  "../src/header.png";


const  App =()=> {
 
  
  
   const handle2Click=() =>{
    window.scrollTo({
      top: 2000, // Scroll to the top of the window
      left: 0, // Scroll to the left of the window
      behavior: 'smooth', // Use smooth scrolling animation
    });
   };

   const projectFilterHandler= (e) =>{
    const dropdown = document.getElementById("myDropdown");
    const selectedValue = dropdown.options[dropdown.selectedIndex].value;
    
  
    if (selectedValue !== "#") {
      window.open(selectedValue, '_blank');
    }
   };
  return (
    <div>
   <nav> 
       <div className={classes['nav-logo']}>
         <a href='#' > 
           <img src={image1}  />
         </a>
       </div>

       <ul className={classes['nav-links']}>
       <li className={classes.links}><a href="file:///C:/Users/Kevi/Desktop/Kevin's%20Resume%20The%20One.pdf"
        download="Kevin's Resume The One.pdf">My Resume</a>
        </li>
        <li className={classes.link}><a href='#'>Home</a></li>
        <li className={classes.link}><a onClick={handle2Click} href='#'>About</a></li>
       </ul>
       
       <select 
       onChange={projectFilterHandler}
       name="project"
       id="myDropdown" 
       className={classes.btn} >
       <option  value="#" 
       defaultValue > My project</option>
       <option value="https://car-management-7gye.vercel.app/" >Car-Management </option>
       
       </select>
      
       
       
   </nav>
   
   
  <header  className={classes.container} >
    <div className={classes.content} >
       <span className={classes.blur} ></span>
       <span className={classes.blur} ></span>
       <h1>Hi, I'm <span>Kevi</span>, Web Developer</h1>
      <p>Enthusiastic and detail-oriented junior web developer with a passion for creating modern, responsive, and user-friendly websites. Eager to contribute to a dynamic team, applying my technical skills and collaborative mindset to deliver high-quality web solutions.</p> 
       
       
    </div>
    <div className={classes.image} >
      <img src={image}></img>
    </div>
 
  </header>


    

<div className={classes.copyright} >
  Copyright © 2023. All Rights Reserved.
</div>

  
  </div>
  );
}

export default App;
