import React, { useState, useMemo } from "react";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import Loader from "../Loader";

export default function AsyncComponent(props) {
    const { moduleProvider, language, style, children } = props;
    const [Component, setComponent] = useState(null);

    async function getComponent() {
        try {
            const component = await moduleProvider();

            if (component.default.registerLanguage) {
                component.default.registerLanguage("jsx", jsx);
            }
            setComponent(
                component.default({
                    children,
                    style,
                    language
                })
            );
        } catch (err) {
            console.log("err :", err);
        }
    }
    useMemo(() => {
        if (!Component) {
            getComponent();
        }
    }, []);

    return Component || <Loader />;
}
