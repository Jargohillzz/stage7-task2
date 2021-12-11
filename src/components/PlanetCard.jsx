import React from 'react';

import { Col, Card } from 'react-bootstrap';
import { useState } from 'react';
import PlanetModal from './PlanetModal';



const PlanetCard = ( {planets} ) => {
    const [appear, setAppear] = useState(false);
    const [tempShows, setTempShows] = useState([]);
    const setShow = ( name, pop, text ) => {
        let tempShow = [ name, pop, text];
        setTempShows(plan => [1, ...tempShow]);
        return setAppear(true);
    }


    return (
        <>
            <div className="row" style={{ display: 'flex' }}>
                {
                planets.map( (plan) => (
                    <Col md ={4} lg = {3} sm={6} key={plan.id}>
                        <Card className="border-0 shadow" 
                        onClick={() => setShow(plan.name, plan.pop, plan.text)}>
                            <div >
                                <Card.Img src={plan.img} id="planet-img"/>
                            </div>
                            <div className="ms-2 mt-2" >
                                <h5 className="mb-0" >{plan.name}</h5>
                                <p className="lighter-text" >pop: {plan.pop}</p>
                            </div>
                        </Card>
                    </Col>
                ))
                }
            </div>
            {
                appear === true? <PlanetModal appear={appear} setAppear={setAppear} 
                name={tempShows[1]} pop={tempShows[2]} text={tempShows[3]} />: ""
            }
            
        </>
    )
}

export default PlanetCard
