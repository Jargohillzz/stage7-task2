import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import CharacterArray from './CharacterArray';
import PlanetArray from './PlanetArray';

const MyTabs = () => {
    return (
        <div>
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="PLANETS">
                    <PlanetArray/>
                </Tab>
                <Tab eventKey="profile" title="CHARACTERS">
                    <CharacterArray/>
                </Tab>
            </Tabs>
        </div>
    )
}

export default MyTabs
