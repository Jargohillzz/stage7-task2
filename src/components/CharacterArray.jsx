import React from 'react';

import character1 from "../images/character1.png";
import character2 from "../images/character2.png";
import character3 from "../images/character3.png";
import character4 from "../images/character4.png";
import character5 from "../images/character5.png";
import character6 from "../images/character6.png";
import character7 from "../images/character7.png";
import character8 from "../images/character8.png";
import character9 from "../images/character9.png";
import character10 from "../images/character10.png";
import character11 from "../images/character11.png";
import character12 from "../images/character12.png";
import CharacterCard from './CharacterCard';
import AddCharacter from './AddCharacter';




const CharacterArray = () => {
    const characters = [
        {
            id: '1',
            img: character1,
            name: 'John Doe',
            planet: 'Alpha',
            friends: 23,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt placeat animi qui autem ratione.'
        },
        {
            id: '2',
            img: character2,
            name: 'Harvey Spectre',
            planet: 'Beta',
            friends: 104,
            text: 'Dolor sit amet consectetur adipisicing elit. Saepe veniam molestiae, molestias odit numquam error illo nemo, soluta a.'
        },
        {
            id: '3',
            img: character3,
            name: 'Mario Luigi',
            planet: 'Charlie',
            friends: 123,
            text: 'Aspernatur quam doloribus perferendis mollitia sint! Deleniti aut pariatur repellat doloribus consectetur.'
        },
        {
            id: '4',
            img: character4,
            name: 'Jason Mamoa',
            planet: 'Delta',
            friends: 236,
            text: 'Porro illo voluptas reprehenderit eligendi quis ipsa neque et quod adipisci deleniti blanditiis molestias!'
        },
        {
            id: '5',
            img: character5,
            name: 'Chris Evans',
            planet: 'Echo',
            friends: 27,
            text: 'Sequi ut hic vel dolorum? Omnis, ex optio at esse minima odio eligendi dolore temporibus ipsum repudiandae.'
        },
        {
            id: '6',
            img: character6,
            name: 'Clark Kent',
            planet: 'Foxtrot',
            friends: 12,
            text: 'Suscipit dolores nobis ipsam molestias corrupti ex saepe non esse asperiores quisquam laborum mollitia modi cupiditate, quast.'
        },
        {
            id: '7',
            img: character7,
            name: 'Jargo Hillz',
            planet: 'Golf',
            friends: 19,
            text: 'Eaque hic harum soluta aspernatur, saepe sapiente corporis necessitatibus eligendi voluptatum quam.'
        },
        {
            id: '8',
            img: character8,
            name: 'Tom Holland',
            planet: 'Hotel',
            friends: 100,
            text: 'Ipsa est quaerat magnam, maiores dignissimos omnis officia assumenda, in inventore praesentium animi labore consectetur? Ullam.'
        },
        {
            id: '9',
            img: character9,
            name: 'Indie Jones',
            planet: 'India',
            friends: 223,
            text: 'Ipsa est quaerat magnam, maiores dignissimos omnis officia assumenda, in inventore praesentium animi labore consectetur.'
        },
        {
            id: '10',
            img: character10,
            name: 'Ibrahim Samad',
            planet: 'Juliet',
            friends: 194,
            text: 'Eaque hic harum soluta aspernatur, saepe sapiente corporis necessitatibus eligendi voluptatum quam autem velit, quaerat alias'
        },
        {
            id: '11',
            img: character11,
            name: 'Kate Henshaw',
            planet: 'Kilo',
            friends: 73,
            text: 'Aspernatur quam doloribus perferendis mollitia sint! Deleniti aut pariatur repellat doloribus consectetur! Ratione.'
        },
        {
            id: '12',
            img: character12,
            name: 'Cyrus Bony',
            planet: 'Limo',
            friends: 43,
            text: 'Molestiae voluptatum ea, maiores laboriosam excepturi officiis. Provident atque itaque facere suscipit '
        },

    ]


    return (
        <>
            <div className ="container">
                <div className = "ref" >
                    <CharacterCard characters={characters}/>
                    <AddCharacter/>
                </div>
            </div>
        </>
    )
}

export default CharacterArray
