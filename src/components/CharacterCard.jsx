import React from 'react';

import { Col, Card, } from 'react-bootstrap';
import CharacterModal from './CharacterModal';
import { useState } from 'react';



const CharacterCard = ({characters}) => {
    const [appear, setAppear] = useState(false);
    const [tempShows, setTempShows] = useState([]);
    const setShow = ( name, text, planet, friends ) => {
        let tempShow = [ name, text, planet, friends ];
        setTempShows(char => [1, ...tempShow]);
        return setAppear(true);
    }


    return (
        <>
            <div className="row" style={{ display: 'flex' }}>
                {
                characters.map( (char) => (
                    <Col md ={4} lg = {3} sm={6} key={char.id}>
                        <Card className="border-0 shadow"
                        onClick={() => setShow(char.name, char.text, char.planet, char.friends)}>
                            <Card.Img src={char.img} className="char-img"/>
                            <div className="ms-2 mt-3">
                                <h5 className="mb-0">{char.name}</h5>
                                <p className="lighter-text">{char.friends} friends</p>                               
                            </div>
                        </Card>
                    </Col>
                ))
                }
            </div>
            {
                appear === true? <CharacterModal appear={appear} setAppear={setAppear}
                name={tempShows[1]} text={tempShows[2]} planet={tempShows[3]} friends={tempShows[4]} />: ""
            }

        </>
    )
}

export default CharacterCard
