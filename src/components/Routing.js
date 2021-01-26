import React, {Component} from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Wrap from "./Wrap";
import LessonOttizikki from "./LessonOttizikki";
import LessonUttizTurt from "./LessonUttizTurt";
import LifeCycleMethods from "./LifeCycleMethods";
import Hoocks from "./Hoocks";
import Nav from "./Nav";
import NotFound from "./NotFound";
import Bun from "./Bun";
import PostView from "./PostView";


class Routing extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>

                    <Nav/>

                    <Switch>
                    <Route exact path='/' component={Wrap}/>
                    <Route exact path='/product' component={LessonOttizikki}/>
                    <Route exact path='/lifecycle' component={LifeCycleMethods}/>
                    <Route exact path='/employee' component={LessonUttizTurt}/>
                    <Route exact path='/hoocks' component={Hoocks}/>
                    <Route exact path='/posts' component={Bun}/>
                        {/*{diynamik routing}*/}
                    <Route exact path='/posts/:id' component={PostView}/>
                    <Route component={NotFound}/>

                    </Switch>


                </BrowserRouter>

            </div>
        );
    }
}

export default Routing;