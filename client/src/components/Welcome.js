import React from "react"
import {BrowserRouter as Router ,Switch ,Route ,Link,} from "react-router-dom"
import Monitores from "./Monitor"
import Monitorias from "./Monitoring"

export default class Welcome extends React.Component {
    render(){
        return(

            <Router>
                <nav className=" navbar navbar-dark bg-dark sticky-top navbar-expand-lg">
                    <span className="navbar-brand">Monitorias App</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/monitores" className="nav-link btn btn-outline-primary m-2">Monitores</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/monitorias" className="nav-link btn btn-outline-success m-2">Monitorias</Link>
                        </li>
                        </ul>

                    </div>
                </nav>
                <Switch>
                    <Route path="/monitores">
                        <ListMonitores />
                    </Route>
                    <Route path="/monitorias">
                        <ListMonitorias />
                    </Route>
                </Switch>
            </Router>
        )
    }
}
function ListMonitores() {
    return <Monitores />;
  }

  function ListMonitorias() {
    return <Monitorias />;
  }
