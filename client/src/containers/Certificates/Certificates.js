import React, {useState} from "react";
import "./Certificates.css";
import { Fade } from "react-reveal";
import {Link} from "react-router-dom";
import banner from "../../img/banner.png";

export default function Certificates(props) {
    const  id = props.match.params.id;
    if(id>="IIITUGOC2020001" && id<="IIITUGOC2020222"){
        return (
            <div id="certificate" className='events'
                 style={{ marginBottom: "20px", marginTop: "130px", overflow: "hidden" }}>
                <div className='banner'>
                    <Link to='/goc'>
                        <img data-aos='zoom-out' data-aos-duration='500' src={banner} />
                    </Link>
                </div>
                <div className='upcoming container' style={{marginTop:"3rem"}}>
                    <h1>Download Certificate</h1>
                </div>
                <h4 style={{marginTop:"1rem"}}>Certificate ID : <strong>{id}</strong></h4>
                <Fade bottom duration={1000} distance="20px">
                    <div className="certificate-container" id="workcertificate">
                        <a target="_blank" href={`https://firebasestorage.googleapis.com/v0/b/code-cops.appspot.com/o/${id}.pdf?alt=media`}>
                            <h3>Click here to download your certificate!</h3>
                        </a>
                    </div>
                </Fade>
            </div>
        );
    }else{
        return (
            <div id="certificate" className='events'
                 style={{ marginBottom: "20px", marginTop: "130px", overflow: "hidden" }}>
                <div className='banner'>
                    <Link to='/goc'>
                        <img data-aos='zoom-out' data-aos-duration='500' src={banner} />
                    </Link>
                </div>
                <div className='upcoming container' style={{marginTop:"3rem"}}>
                    <h1>Certificate</h1>
                </div>
                <p style={{marginTop:"1rem"}}><strong>Certificate not found!!!</strong></p>
            </div>
        );
    }

}
