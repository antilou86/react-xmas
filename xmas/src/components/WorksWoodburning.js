import React, {useState} from 'react';

import bee2 from './images/woodburning/bee_2.PNG';
import bees from './images/woodburning/bees.PNG';
import butterflies from './images/woodburning/butterflies.PNG';
import chameleon from './images/woodburning/chameleon.PNG';
import cigarShowcase from './images/woodburning/cigar_box_burning_showcase.PNG';
import coy from './images/woodburning/coy.PNG';
import craftTable from './images/woodburning/craft_table_pile.PNG';
import katieCustom from './images/woodburning/custom_for_katie.PNG';
import madisonCustom from './images/woodburning/custom_for_madison.PNG';
import mimiCustom from "./images/woodburning/custom_for_mimi.PNG";
import nanaCustom from "./images/woodburning/custom_for_nana.PNG";
import ruthiCustom from "./images/woodburning/custom_for_ruthi.PNG";
import dove from "./images/woodburning/dove.PNG";
import elephant from "./images/woodburning/elephant.PNG";
import flower from "./images/woodburning/flowah_powah.PNG";
import flowerMandala from "./images/woodburning/flower_mandala_and_outline.PNG";
import flowers from "./images/woodburning/flowers.PNG";
import oleGnarly from "./images/woodburning/gnarled_old_scary_tree.PNG";
import goldfish from "./images/woodburning/goldfish.PNG";
import heart from "./images/woodburning/heart.PNG";
import heron from "./images/woodburning/heron.PNG";
import jeweledFlower from "./images/woodburning/jeweled_flower.PNG";
import lotus from "./images/woodburning/lotus.PNG";
import mantis from "./images/woodburning/mantis.PNG";
import moose from "./images/woodburning/moose.PNG";
import mushies from "./images/woodburning/mushroom_coasters.PNG";
import nelsonMandala from "./images/woodburning/nelson_mandala_maybe.PNG";
import cat from "./images/woodburning/pointelism_cat.PNG";
import leafy from "./images/woodburning/showcase_leafy.PNG";
import shroomies from "./images/woodburning/shroomies.PNG";
import bonez from "./images/woodburning/skull_and_bones.PNG";
import spider from "./images/woodburning/spider.PNG";
import treeBark from "./images/woodburning/tree_on_bark.PNG";
import turtlee from "./images/woodburning/turtlee.PNG";
import viney from "./images/woodburning/viney_flower.PNG";
import willow from "./images/woodburning/weeping_willow.PNG";

const WorksWoodburning = () => {
    const [woodburning] = useState([bee2,bees,butterflies,chameleon,cigarShowcase,coy,craftTable,katieCustom,madisonCustom,mimiCustom,nanaCustom,ruthiCustom,dove,elephant,flower,flowerMandala,flowers,oleGnarly,goldfish,heart,heron,jeweledFlower,lotus,mantis,moose,mushies,nelsonMandala,cat,leafy,shroomies,bonez,spider,treeBark,turtlee,viney,willow]);

    return (
        <div className="imageContainer">
                {woodburning.map(img => { 
                    return(
                        <img src={img} className="img" alt="a hand burned design in wood, created by Lealyn" />
                )})} 
        </div>             
);}
export default WorksWoodburning