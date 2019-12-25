import React, {useState} from 'react';

import blue from "./images/pysanki/blue_flowers.PNG";
import dragon from "./images/pysanki/dragon_on_ostrich_egg.PNG";
import goldfish2 from "./images/pysanki/goldfish.PNG";
import egg from "./images/pysanki/in_progress_egg.PNG";
import pysanki from "./images/pysanki/pysanki.PNG";
import eggyBois from "./images/pysanki/showcase_for_more_eggy_bois.PNG";
import eggos from "./images/pysanki/showcase for the eggos.PNG";
import swirls from "./images/pysanki/swirls.PNG";
import xmas from "./images/pysanki/xmas_eggs.PNG";

const WorksPysanki = () => {
    const [pysanky] = useState([blue,dragon,goldfish2,egg,pysanki,eggyBois,eggos,swirls,xmas])
    
    return (
        <div className="imageContainer">
                {pysanky.map(img => { 
                    return (
                            <img src={img} className="img" alt="a hand dyed pysanki egg designed by Lealyn"></img>
                    )
                })}  
        </div>         
        );
}
export default WorksPysanki