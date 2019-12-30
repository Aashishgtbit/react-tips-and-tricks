import React, { Suspense } from "react";
import Loader from "../../../components/Loader";

export default function LazyLoadingExample() {
    const Alert = React.lazy(() => import("reactstrap/lib/Alert"));
    return (
        <div>
            <h2> Lazy loading Example</h2>
            <Suspense fallback={<Loader />}>
                <Alert color="success">This is Example of Lazy Loading</Alert>
            </Suspense>
        </div>
    );
}
