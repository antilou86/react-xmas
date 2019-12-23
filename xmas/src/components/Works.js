import React, {useState} from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import WorksDrawings from './WorksDrawings';
import WorksPysanki from './WorksPysanki';
import WorksWoodburning from './WorksWoodburning';

function Works() {

    const [images] = useState({
        woodburning: ["./images/woodburning/bee_2.PNG","./images/woodburning/bees.PNG","./images/woodburning/butterflies.PNG","./images/woodburning/chameleon.PNG","./images/woodburning/cigar_box_burning_showcase.PNG","./images/woodburning/coy.PNG", "./images/woodburning/craft_table_pile.PNG","./images/woodburning/custom_for_katie.PNG", "./images/woodburning/custom_for_madison.PNG","./images/woodburning/custom_for_mimi.PNG","./images/woodburning/custom_for_nana.PNG", "./images/woodburning/custom_for_ruthi.PNG","./images/woodburning/dove.PNG","./images/woodburning/elephant.PNG","./images/woodburning/flowah_powah.PNG","./images/woodburning/flower_mandala_and_outline.PNG","./images/woodburning/flowers.PNG", "./images/woodburning/gnarled_old_scary_tree.PNG","./images/woodburning/goldfish.PNG","./images/woodburning/heart.PNG","./images/woodburning/heron.PNG","./images/woodburning/jeweled_flower.PNG","./images/woodburning/lotus.PNG","./images/woodburning/matis.PNG","./images/woodburning/moose.PNG", "./images/woodburning/mushroom_coasters.PNG","nelson_mandala_maybe.PNG", "./images/woodburning/pointelism_cat.PNG", "./images/woodburning/showcase_leafy.PNG","./images/woodburning/shroomies.PNG","./images/woodburning/skull_and_bones.PNG","./images/woodburning/spider.PNG","./images/woodburning/tree_on_bark.PNG","./images/woodburning/turtlee.PNG", "./images/woodburning/viney_flower.PNG","./images/woodburning/weeping_willow.PNG"],
        pysanky: ["./images/pysanky/blue_flowers.PNG","./images/pysanky/dragon_on_ostrich_egg.PNG","./images/pysanky/goldfish.PNG","./images/pysanky/in_progress_egg.PNG","./images/pysanky/pysanki.PNG","./images/pysanky/showcase_for_more_eggy_bois.PNG","./images/pysanky/showcase_for_eggos.PNG","./images/pysanky/swirls.PNG","./images/pysanky/xmas_eggs.PNG"],
        drawings: ["./images/drawings/abstract.PNG","./images/drawings/Cats_Eyes.PNG","./images/drawings/cherry_blossom.PNG","./images/drawings/custom_order.PNG","./images/drawings/earth_heart.PNG","./images/drawings/fleur_de_leah.PNG","./images/drawings/ice_8x11.PNG", "./images/drawings/name_sketch.PNG","./images/drawings/ocean_heart.PNG","./images/drawings/owl.PNG","./images/drawings/pencil_doodle.PNG","./images/drawings/rastapus.PNG","./images/drawings/Tree_Frog.PNG", "./images/drawings/tree_of_the_dead.PNG","./images/drawings/Turtle.PNG"]
    });
    //tabbing functionality will be mostly react routing. easy peasy. works page will act as homepage.

    return (
            <div class="works">
                
                <nav class="subnav">
                        <Link to="/drawings">Drawings</Link>
                        <Link to="/pysanki">Pysanki</Link>
                        <Link to="/woodburning">Woodburning</Link>
                </nav>

                <div class="works-container">
                    <Switch>
                        <Route path="/drawings">
                            <WorksDrawings props={images.drawings}/>
                        </Route>

                        <Route path="/pysanki">
                            <WorksPysanki props={images.pysanky}/>
                        </Route>

                        <Route path="/woodburning">
                            <WorksWoodburning props={images.woodburning}/>
                        </Route>
                    </Switch>
                </div>
            </div> 
    );
}

export default Works;