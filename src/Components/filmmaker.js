import React from 'react';
import './filmmaker.css';
import { Divider } from 'antd';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Filmmaker() {
    return (

        <div className="ar-maker-r1 ">
            <h6 className="ar-videoessay mb-0">Video Essay</h6>
            <div className="ar-film-divider w-35">
                <Divider className="ar-filmdivider" />
            </div>
            <div class="row w-100 justify-content-md-center">
                <div class="col col-sm-12 col-md-6">
                    <iframe className="w-100 ar-vid-essay" height="337" src="https://www.youtube.com/embed/GVa7nMKrDQg?list=PLWNCxGaTWxTSpYSAto_UCOTHbXzGns6VX" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="col col-sm-12 col-md-6 ">
                    <iframe className="w-100 ar-vid-essay" height="337" src="https://www.youtube.com/embed/OUQW9psh3hA?list=PLWNCxGaTWxTSpYSAto_UCOTHbXzGns6VX" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    </div>
            </div>
            <div>

                <h6 className="ar-cover">Here are some of my works I did back in the day during college , mostly as DOP and Editor </h6>
                <div className="ar-film-divider w-35">
                    <Divider className="ar-filmdivider" />
                </div>
                <div class="row ">

                    <div class="col col-md-4">
                        <iframe className="w-100 ar-vid-essay" height="229" src="https://www.youtube.com/embed/mTge_9YBkmE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="col col-md-4">

                        <iframe className="w-100 ar-vid-essay" height="229" src="https://www.youtube.com/embed/DechSCVUhBM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


                    </div>
                    <div class="col col-md-4">
                        <iframe className="w-100 ar-vid-essay" height="229" src="https://www.youtube.com/embed/pyQ2TNbWlvI?list=PLWNCxGaTWxTTsoNDd5e85ffZNdPInIZwL" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    </div>
                    <div class="col col-md-4">
                        <iframe className="w-100 ar-vid-essay" height="229" src="https://www.youtube.com/embed/fPpfXrpjx54" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    </div>
                    <div class="col col-md-4 ">

                        <iframe className="w-100 ar-vid-essay" height="229" src="https://www.youtube.com/embed/t2L0liqKYaQ?list=PLWNCxGaTWxTTsoNDd5e85ffZNdPInIZwL" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    </div>
                    <div class="col col-md-4">
                        <iframe className="w-100 ar-vid-essay" height="229" src="https://www.youtube.com/embed/vPaercEh-88" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>

                </div>
                <h6 className="ar-videoessay mb-0">Short Film</h6>
                <div className="ar-film-divider w-35">
                    <Divider className="ar-filmdivider" />
                </div>
                <div class="row  ">
                    <div class="col col-sm-12 col-md-6">
                        <iframe  className="w-100 ar-vid-essay" height="337" src="https://www.youtube.com/embed/Y1gmBEGJx-A?list=PLWNCxGaTWxTQvknyEI88GeLVL2hDPHaxw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>

                </div>

            </div>
        </div>



    );
}
export default Filmmaker;




