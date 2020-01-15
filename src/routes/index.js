import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import routesConfig from "./routes.config";

const Routes = () => {
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
};

export default Routes;
