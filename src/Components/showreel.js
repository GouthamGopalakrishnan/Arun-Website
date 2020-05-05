import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import resume from './Arun P Lukose Resume 2020.pdf';
import './showreel.css';




function Showreel() {
    return (
        <div className="showreel-specs mt-4 mb-3" style={{ minHeight: window.innerHeight - 310 }}>
            <div class="row justify-content-md-center ">
                <div class="col col-sm-12 col-md-5">
                    <p className="ar-sr-cont ">Hi, I'm <b>Arun P Lukose</b> , a Visual Effects Compositor from India doing feature film works.

                                                Keen into programming and math to better build, experience and share the whole process for myself and the community.<br />

                                                Have a look at my showreel,it's not particularly recent.

                                                Filmography will give you an idea about films I've worked.


                    </p>


                    <table className="ar-resume">
                        <tr>
                            <td rowSpan="2"><i class="fas fa-file-pdf fa-2x"></i></td>

                            <td><a className=" ar-pdf" title="Resume" href={resume} target="_blank">Click here to View/Download my CV</a></td>
                        </tr>


                    </table>
                </div>
                <div className="content">
                    <div className="col col-sm-12 col-md-auto">
                        <div className="ar-sr-parent  " >


                            
                                <iframe className="ar-sr-parent1"src="https://player.vimeo.com/video/349005260" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen>

                                </iframe>
                           
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
}
export default Showreel;




