import React from 'react';
import './About.css';
export default function About() {
    return(
        <div className='about'>
       
       <div class="skill-container">
        <ul>
            <li class="html">HTML</li>
            <li class="CSS">CSS</li>
            <li class="JS">JS</li>
            <li class="React">React</li>
            <li class="Node">Node</li>
            <li class="C">Python</li>
        </ul>
    </div>

    <div className='skill-intro'>
        <p> So far so good, I started with the HTML thats my 1st language<br />
        To add more flexibility I learnt the CSS it makes my projects a new look <br />
        As I just learn the simple magic, time to do some practical <br />
        I started learning JAVASCRIPT, I did some simple projects <br />
        Recenltly I started learning React and Node js to become more effeiceint <br />
        At last I learnt the C++ cause I want to take part in google kickstart <br />
        </p>

    </div>
        </div>
    )
}