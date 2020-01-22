import React, { Suspense } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import routesConfig from "./routes.config";
import Loader from "../components/Loader";

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
                                <Suspense fallback={<Loader />}>
                                    <config.component history={history} />
                                </Suspense>
                            )}
                        />
                    );
                })}
            </Switch>
        </HashRouter>
    );
};

export default Routes;
