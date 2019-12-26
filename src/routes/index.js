import React from "react";
import PropTypes from "prop-types";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import routesConfig from "./routes.config";

const Routes = () => (
    <Router>
        <Switch>
            {routesConfig.map(config => {
                return (
                    <Route
                      exact
                      key={`${config.name}`}
                      path={config.path}
                      render={({ history }) => (
                            <config.component history={history} />
                        )}
                    />
                );
            })}
        </Switch>
    </Router>
);

Route.propTypes = {
    history: PropTypes.object.isRequired
};
export default Routes;
