import React from 'react';
import { Divider } from 'antd';

import './filmography.css';




import { Card } from 'antd';

const { Meta } = Card;


function Filmograhy({ name, director, company, img }) {
    return (
        <div className="ar-film">
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<><Divider className="film-bg-yellow" /><img alt="example" src={img} /></>}
            >
                <Meta className="ar-card-meta" title={<div classname="ar-film-tit">{name}</div>} />
                <p className="ar-role">Digital Compositor</p>
                <p className="ar-film-p">Director :{director}</p>
                <p className="ar-film-p">Company : {company}</p>

            </Card>
        </div>

    );
}

export default Filmograhy;
