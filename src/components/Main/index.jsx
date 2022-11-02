import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const Main = () => {
    return(
        <Router>
            <Switch>
                <Route path="/notes" exact>
                    Notes List Components
                </Route>
                <Route path="/notes/:notesId" >
                    Notes Detail Component
                </Route>
                <Route path="*" >
                    Not Found Page
                </Route>
            </Switch>
        </Router>
    )
}


export {Main}