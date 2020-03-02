import React from "react"
import {BrowserRouter as Router ,Switch ,Route ,Link,} from "react-router-dom"
import Monitores from "./Monitor"
import Monitorias from "./Monitoring"

export default class Welcome extends React.Component {
    render(){
        return(

            <Router>
                <nav className=" navbar navbar-dark bg-dark sticky-top navbar-expand-lg">
                    <a className="navbar-brand" href="#">Monitorias App</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/monitores" className="nav-link">Monitores</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/monitorias" className="nav-link">Monitorias</Link>
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
