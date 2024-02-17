import React from "react";
import "./project.css";
import VPN from '../public/vpn.jpg';
export default function Projects() {

    return(
        <>
        <header>
            <div className="intro">
                <h3> Here those top 5 projects, that I worked so far</h3>
            </div>
        </header>
            <div className="Project-list">

        
            <div className="ThealVPN">
            <img src={VPN} />
            <h3><a href="#">ThealVPN</a> </h3>
            <p>Fast and elegant VPN</p>
            </div>
       

            </div>
        </>
    )
}
