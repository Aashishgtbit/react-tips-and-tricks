import React from "react";
import { Route, BrowserRouter, Switch, HashRouter } from "react-router-dom";
import routesConfig from "./routes.config";

const Routes = () => {
    return (
        <HashRouter>
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
        </HashRouter>
    );
};

export default Routes;
