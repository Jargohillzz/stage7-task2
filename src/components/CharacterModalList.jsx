import React from 'react';

import character13 from "../images/character13.png";
import character14 from "../images/character14.png";
import character15 from "../images/character15.png";
import character16 from "../images/character16.png";
import character17 from "../images/character17.png";
import character18 from "../images/character18.png";


const PlanetModalList = () => {
    const pList =[
        {
            id: '1',
            img: character13,
            name: 'Jason Hilt',
            friends: 45,
            text: 'dolor sit.'
        },
        {
            id: '2',
            img: character14,
            name: 'Hillary Eunice',
            friends: 56,
            text: 'Aspernatur quam.'
        },
        {
            id: '3',
            img: character15,
            name: 'Christopher Hoover',
            friends: 100,
            text: 'Oex optio at esse.'
        },
        {
            id: '4',
            img: character16,
            name: 'Desmond Elliot',
            friends: 5,
            text: 'ipsam molestias.'
        },
        {
            id: '5',
            img: character17,
            name: 'Christabella Ofor',
            friends: 68,
            text: 'Eaque hic harum.'
        },
        {
            id: '6',
            img: character18,
            name: 'Tom Bunt',
            friends: 30,
            text: 'saepe sapiente.'
        }
    ]
    return (
        <div>
            {
            pList.map( (item) => (
                <div key={item.id} className="my-2" >
                    <div className="d-flex align-items-center" style={{ height: '72px' }} >
                        <div>
                            <img src={item.img} alt="" className="list-img"/>
                        </div>
                        <div >
                            <h5 className="mb-1">{item.name}</h5>
                            <p className="lighter-text m-0" >{item.text} friends</p>                               
                        </div>
                    </div>
                </div>
            ))
            }
 
        </div>
    )
}

export default PlanetModalList