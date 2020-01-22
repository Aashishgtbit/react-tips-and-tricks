/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useCallback, useMemo } from "react";
import "./style.scss";
import CodeHighlighter from "../../../components/CodeHighlighter";
// import AsyncComponent from "../../../components/AsyncComponent";
import CODE_EXAMPLES from "../../../utils/appConstants";

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

            <CodeHighlighter codeString={CODE_EXAMPLES.lazyLoadExampleCode} />
        </div>
    );
}
