
import classes from './App.module.css';
import React from 'react';
import image1 from  "../src/logo.png";
import image from  "../src/header.png";
import { FaDollarSign, FaArrowRight, FaBug,
   FaHistory, FaHandshake, FaYoutube,
    FaInstagram, FaTwitter
  }
   from 'react-icons/fa';

const  App =()=> {
  
   const handleClick =(event)=>{
    window.scrollTo({
      top: 680, // Scroll to the top of the window
      left: 0, // Scroll to the left of the window
      behavior: 'smooth', // Use smooth scrolling animation
    });
  
   };
   const handle2Click=() =>{
    window.scrollTo({
      top: 2000, // Scroll to the top of the window
      left: 0, // Scroll to the left of the window
      behavior: 'smooth', // Use smooth scrolling animation
    });
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
        <li className={classes.link}><a href='#'>Home</a></li>
        <li className={classes.link}><a onClick={handleClick} href='#'>Features</a></li>
        <li className={classes.link}><a onClick={handle2Click} href='#'>About</a></li>
       </ul>
       <button className={classes.btn} >Hire Me</button>
   </nav>
   
   
  <header  className={classes.container} >
    <div className={classes.content} >
       <span className={classes.blur} ></span>
       <span className={classes.blur} ></span>
       <h4>CREATE YOUR SITE LIKE A PRO</h4>
       <h1>Hi, I'm <span>Kevi</span>, Web Developer</h1>
       <p>sdgbhyfg
        shjgfkhjsdhfjk
        sdhfkjsddhkjfsdhfsde
        dfhghghghghghghghghghghg
        hghghghghghghghghghghghgh
        ghghgkgjgkjuhjukhkjhkujhku
        jghjkgkhjgkhjgkhjgkgkhgkjgk
        hjghgrgfdhrdehgdfghdfgdgrdeg
        erdgrdgdrfdggggggggggggggggggg
        </p>
       <button className={classes.btn} >Get Started</button>
    </div>
    <div className={classes.image} >
      <img src={image}></img>
    </div>
    Element to scroll to
  </header>

<section className={classes.container} >
   <h2 className={classes.header} >OUR FEATURES</h2>
   <div className={classes.features} >
    <div className={classes.card} >
      <span><FaDollarSign/></span>
      <h4>Free Tutorials</h4>
      <p>My tutorials in my chanel "Asmr Prog" are 
        free and you don't need to pay anything.
        </p>
        <a href='#'>Join Now  <FaArrowRight/></a>
    </div>
    <div className={classes.card} >
      <span><FaBug/></span>
      <h4>Fix Your Bugs</h4>
      <p>You have any problem in your code? Tell
        me, i will help you fix it.
        </p>
        <a href='#'>Join Now  <FaArrowRight/></a>
    </div>
    <div className={classes.card} >
      <span><FaHistory/></span>
      <h4>On Time Videos</h4>
      <p>We have video each 4 days, So check
        channel every 4 days to watch it!
        </p>
        <a href='#'>Join Now <FaArrowRight/></a>
    </div>
    <div className={classes.card} >
      <span><FaHandshake/></span>
      <h4>Cooperation</h4>
      <p>You want we work togeather? Write email to 
        us, we will read it.
        </p>
        <a href='#'>Join Now  <FaArrowRight/></a>
    </div>
   </div>
</section>

<footer  className={classes.container}>
  <span className={classes.blur} ></span>
  <span className={classes.blur} ></span>
  <div className={classes.column} >
    <div className={classes.logo}>
      <img src={image1} ></img>
    </div>
    <p>
        sdgbhyfg
        shjgfkhjsdhfjk
        sdhfkjsddhkjfsdhfsde
        dfhghghghghghghghghghghg
    </p>
    <div className={classes.socials}>
      <a href='#'><FaYoutube/></a>
      <a href='#'><FaInstagram /></a>
      <a href='#'><FaTwitter/></a>
    </div>
  </div>
  <div className={classes.column}>
    <h4>Company</h4>
    <a href='#' >Business</a>
    <a href='#' >Partnership</a>
    <a href='#' >Network</a>
  </div>
  <div className={classes.column}>
    <h4>About Us</h4>
    <a href='#' >Blogs</a>
    <a href='#' >Chanels</a>
    <a href='#' >Sponsors</a>
  </div>
  <div className={classes.column}>
    <h4>Contact</h4>
    <a href='#' >Contact Us</a>
    <a href='#' >Privicy Policy</a>
    <a href='#' >Terms & Conditions</a>
  </div>

</footer>


<div className={classes.copyright} >
  Copyright © 2023. All Rights Reserved.
</div>

  
  </div>
  );
}

export default App;
