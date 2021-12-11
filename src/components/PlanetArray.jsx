import React from 'react';
// import PlanetCard from './PlanetCard';
import planet1 from "../images/planet1.svg";
import planet2 from "../images/planet2.svg";
import planet3 from "../images/planet3.svg";
import planet4 from "../images/planet4.svg";
import planet5 from "../images/planet5.svg";
import planet6 from "../images/planet6.svg";
import planet7 from "../images/planet7.svg";
import planet8 from "../images/planet8.svg";
import planet9 from "../images/planet1.svg";
import planet10 from "../images/planet5.svg";
import planet11 from "../images/planet7.svg";
import planet12 from "../images/planet4.svg";


import PlanetCard from './PlanetCard';
import AddPlanet from './AddPlanet';



const PlanetArray = () => {
    const planets = [
        {
            id: '1',
            img: planet1,
            name: 'Planet Alpha',
            pop: '234',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt placeat animi qui autem ratione perferendis necessitatibus iure quis debitis odio quasi explicabo impedit voluptates cupiditate nostrum voluptatem, assumenda unde odit.'
        },
        {
            id: '2',
            img: planet2,
            name: 'Planet Bravo',
            pop: '233',
            text: 'Dolor sit amet consectetur adipisicing elit. Saepe veniam molestiae, molestias odit numquam error illo nemo, soluta a, laborum delectus dolorum excepturi cupiditate aspernatur libero necessitatibus voluptatum quae? Iusto, rem harum!'
        },
        {
            id: '3',
            img: planet3,
            name: 'Planet Charlie',
            pop: '209',
            text: 'Aspernatur quam doloribus perferendis mollitia sint! Deleniti aut pariatur repellat doloribus consectetur! Ratione ut ipsa alias esse aperiam deleniti ducimus, mollitia vitae iure, possimus et ipsam pariatur voluptatem. Fugit.'
        },
        {
            id: '4',
            img: planet4,
            name: 'Planet Delta',
            pop: '147',
            text: 'Porro illo voluptas reprehenderit eligendi quis ipsa neque et quod adipisci deleniti blanditiis molestias, tempore, suscipit assumenda odio eum eius iure ducimus ab quidem reiciendis modi incidunt sit rem!'
        },
        {
            id: '5',
            img: planet5,
            name: 'Planet Echo',
            pop: '123',
            text: 'Sequi ut hic vel dolorum? Omnis, ex optio at esse minima odio eligendi dolore temporibus ipsum repudiandae a nulla quia illo commodi officia delectus, dolores ea corporis ducimus sequi voluptate'
        },
        {
            id: '6',
            img: planet6,
            name: 'Planet Foxtrot',
            pop: '439',
            text: 'Suscipit dolores nobis ipsam molestias corrupti ex saepe non esse asperiores quisquam laborum mollitia modi cupiditate, quas consectetur repellat nemo illum aperiam atque eligendi, deserunt quam corporis cum ad. Rem fuga modi cupiditate et'
        },
        {
            id: '7',
            img: planet7,
            name: 'Planet Golf',
            pop: '065',
            text: 'Eaque hic harum soluta aspernatur, saepe sapiente corporis necessitatibus eligendi voluptatum quam autem velit, iure modi? Corporis repellendus facere soluta officiis. Nulla, reprehenderit commodi non itaque consectetur numquam id, officiis, eligendi inventore quaerat alias.'
        },
        {
            id: '8',
            img: planet8,
            name: 'Planet Hotel',
            pop: '235',
            text: 'Ipsa est quaerat magnam, maiores dignissimos omnis officia assumenda, in inventore praesentium animi labore consectetur? Ullam, quaerat maiores illum explicabo quibusdam totam delectus modi veniam, rem corporis culpa. Accusamus reiciendis animi eligendi.'
        },
        {
            id: '9',
            img: planet9,
            name: 'Planet India',
            pop: '204',
            text: 'Ipsa est quaerat magnam, maiores dignissimos omnis officia assumenda, in inventore praesentium animi labore consectetur? Ullam, quaerat maiores illum explicabo quibusdam totam delectus modi veniam, rem corporis culpa. Accusamus reiciendis animi eligendi.'
        },
        {
            id: '10',
            img: planet10,
            name: 'Planet Juliet',
            pop: '123',
            text: 'Eaque hic harum soluta aspernatur, saepe sapiente corporis necessitatibus eligendi voluptatum quam autem velit, iure modi? Corporis repellendus facere soluta officiis. Nulla, reprehenderit commodi non itaque consectetur numquam id, officiis, eligendi inventore quaerat alias'
        },
        {
            id: '11',
            img: planet11,
            name: 'Planet Kilo',
            pop: '302',
            text: 'Aspernatur quam doloribus perferendis mollitia sint! Deleniti aut pariatur repellat doloribus consectetur! Ratione ut ipsa alias esse aperiam deleniti ducimus, mollitia vitae iure, possimus et ipsam pariatur voluptatem. Fugit.'
        },
        {
            id: '12',
            img: planet12,
            name: 'Planet Limo',
            pop: '467',
            text: 'Molestiae voluptatum ea, maiores laboriosam excepturi officiis. Provident atque itaque facere suscipit optio praesentium nulla minima molestias, consequuntur rerum, veritatis veniam porro cupiditate eveniet facilis laborum ut officia corrupti, nihil ea expedita.'
        },

    ];


    return (
        <>
            <div className="container ">
                <div className="ref" >
                    <PlanetCard planets={planets}/>
                    <AddPlanet/>
                </div>
            </div>
        </>
    )
}

export default PlanetArray
