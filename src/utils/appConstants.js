const CODE_EXAMPLES = {
    hooksExampleCode: `import React, { useState, useCallback, useMemo } from "react";
import "./style.scss";

const addFruitsFunctionCount = new Set();
const addVegetableFunctionCount = new Set();

const applePrice = 4; // each unit costs 4$ of money .
const beansPrice = 2; // each unit costs 2$ of money .

export default function HooksExample() {
    const [appleCounter, setAppleCounter] = useState(0);
    const [beansCounter, setBeansCounter] = useState(0);

    const totalProfit = useMemo(() => {
        return appleCounter * applePrice + beansCounter * beansPrice;
    }, [beansCounter]);

    const addVegetable = useCallback(() => {
        setBeansCounter(beansCounter + 1);
    }, [beansCounter]);

    // calculate profit made by the shopkeeper

    const addFruits = () => {
        setAppleCounter(appleCounter + 1);
    };

    // In each render new instance of addFruits will be created .
    addFruitsFunctionCount.add(addFruits);

    addVegetableFunctionCount.add(addVegetable);
    return (
        <div className="wrapper-hooks-example">
            <h3> Hooks Example</h3>
            <div className="wrapper-fruits">
                <button onClick={addVegetable} type="button">
                    Add vegetables
                </button>
            </div>
            <div className="wrapper-vegetables">
                <button onClick={addFruits} type="button">
                    Add fruits
                </button>
            </div>
            <div>
                New functions created :
                <ul>
                    <li>fruits :{addFruitsFunctionCount.size - 1}</li>
                    <li>vegetable : {addVegetableFunctionCount.size - 1}</li>
                </ul>
            </div>

            <div> Total Profit = {totalProfit}</div>

        </div>
    );
}`,

    dynamicImport: `import React, { useState, useCallback } from "react";
import "./style.scss";
// Dynamic import example .

export default function DynamicImport() {
    const a = 10;
    const b = 20;
    const [sum, setSum] = useState(0);

    const addData = useCallback(() => {
        // Dynamic import syntax .
        import("lodash").then(_ => {
            setSum(_.add(a, b));
        });
    }, []);

    return (
        <div className="wrapper-dynamic-import">
            <h2> Dynamic Import Example</h2>
            <button onClick={addData} type="button">
                Add
            </button>
            <div>
                sum is
                {sum}
            </div>
        </div>
    );
}`,

    lazyLoadExampleCode: `import React, { Suspense } from "react";
// import { Alert } from "reactstrap";
import Loader from "../../../components/Loader";
import "./style.scss";


export default function LazyLoadingExample() {
    const Alert = React.lazy(() => import("reactstrap/lib/Alert"));
    return (
        <div className="wrapper-lazy-load">
            <h2> Lazy loading Example</h2>
            <Suspense fallback={<Loader />}>
                <Alert color="success">This is Example of Lazy Loading</Alert>
            </Suspense>

        </div>
    );
}
`
};

export default CODE_EXAMPLES;
