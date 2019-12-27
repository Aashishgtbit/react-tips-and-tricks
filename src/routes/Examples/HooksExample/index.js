/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useCallback } from "react";

const addFruitsFunctionCount = new Set();
const addVegetableFunctionCount = new Set();
export default function HooksExample() {
    const [appleounter, setAppleCounter] = useState(0);
    // const [ mangoCounter , setMangoCounter] = useState(0);
    const [beansCounter, setBeansCounter] = useState(0);
    // const [turnipCounter , setTurnipCounter]= useState(0);

    const addVegetable = useCallback(() => {
        setBeansCounter(beansCounter + 1);
    }, []);
    const addFruits = () => {
        setAppleCounter(appleounter + 1);
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
        </div>
    );
}
