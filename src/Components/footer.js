import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'antd';
import { Divider } from 'antd';


import './footer.css';



function LayoutFooter() {
    return (
        <div class=" ar-footer">


            <div className="ar-footer-1">

                <Row>

  
                    <Col className="pt-1">
                    <h6 className="ar-footerp pt-2">© <b>arunplukose.com </b> 2020</h6>
                    <h6 className ="ar-footer-all  ">All Rights Reserved </h6>
                    </Col>
                    <div className="ar-footer-hyper pt-4">

                        <Button type="link" href="https://www.youtube.com/channel/UCro0TQrF3jlxg0us0u2NY6g" icon={<i class="fab fa-youtube ar-youtube "></i>  }  target="_blank"></Button>
                        <Button type="link" href="https://www.linkedin.com/in/arun-p-lukose-22b277176" icon={<i class="fab fa-linkedin-in ar-linkedin"></i>} target="_blank"></Button>
                        <Button type="link" href="https://vimeo.com/349005260" icon={<i class="fab fa-vimeo-v ar-vimeo"></i>} target="_blank"></Button>
                        <Button type="link" href="https://twitter.com/tuskerlone" icon={<i class="fab fa-twitter ar-twitter"></i>} target="_blank"></Button>
                    </div>
                    

                </Row>

            </div>


        </div >
                   
    );
}

export default LayoutFooter;


















