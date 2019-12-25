import React, {useState} from 'react';

import abstract from "./images/drawings/abstract.PNG";
import catEyes from "./images/drawings/Cats_Eyes.PNG";
import cherryBlossom from "./images/drawings/cherry_blossom.PNG";
import customOrder from "./images/drawings/custom_order.PNG";
import earthHeart from "./images/drawings/earth_heart.PNG";
import fleurDeLeah from "./images/drawings/fleur_de_leah.PNG";
import ice from "./images/drawings/Ice_8x11.PNG";
import name from "./images/drawings/name_sketch.PNG";
import oceanHeart from "./images/drawings/ocean_heart.PNG";
import owl from "./images/drawings/owl.PNG";
import doodle from "./images/drawings/pencil_doodle.PNG";
import rastapus from "./images/drawings/rastapus.PNG";
import treeFrog from "./images/drawings/Tree_Frog.PNG";
import deathTree from "./images/drawings/tree_of_the_dead.PNG";
import turtle from "./images/drawings/Turtle.PNG";

const WorksDrawings = () => {
    const [drawings] = useState([abstract, catEyes, cherryBlossom, customOrder, earthHeart, fleurDeLeah, ice, name, oceanHeart, owl, doodle, rastapus, treeFrog, deathTree, turtle])

    return (
        <div className="imageContainer">
                {drawings.map(img => {
                    return (
                            <img src={img} className="img" alt="a hand drawn work by Lealyn"></img>
                )})}

        </div>                
        );}
    
    export default WorksDrawings