import React from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import WorksDrawings from './WorksDrawings';
import WorksPysanki from './WorksPysanki';
import WorksWoodburning from './WorksWoodburning';





function Works() {

    return (
        <Router>
            <div className="works">
                <div className="subnav">
                    <Link to="/drawings" className="link">Drawings</Link>
                    <Link to="/pysanki" className="link">Pysanki</Link>
                    <Link to="/woodburning" className="link">Woodburning</Link>
                </div>

                <div className="works-container">
                    <Switch>
                        <Route exact path="/" component={WorksDrawings}/>
                        <Route path="/drawings" component={WorksDrawings}/>
                        <Route path="/pysanki" component={WorksPysanki}/>
                        <Route path="/woodburning" component={WorksWoodburning}/>
                    </Switch>
                </div>
            </div> 
        </Router>
    );
}

export default Works;