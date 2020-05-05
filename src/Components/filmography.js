import React from 'react';
import { Divider, Button } from 'antd';
import { Card } from 'antd';


import './filmography.css';







const { Meta } = Card;


function Filmography({ name, director, company, img, trailer }) {
    return (
        <div className="ar-film w-100">
            <a href={trailer} target="_blank" title={name} >

                <Card
                    hoverable


                    cover={<><Divider className="film-bg-yellow" /><img alt="example" src={img} /></>}
                >
                    <Meta className="ar-card-meta" title={
                        <div classname="ar-film-title">
                            <b className="ar-film-tit">{name}</b>
                        </div>
                    } />
                    <p className="ar-role">Digital Compositor</p>
                    <p className="ar-film-p">Director : {director}</p>
                    <p className="ar-film-p">Company : {company}</p>


                </Card>
            </a>
        </div>

    );
}

export default Filmography;
