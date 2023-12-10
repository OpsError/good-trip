declare module "*.svg" {
    import React = require("react");
    export const ReactComponent: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    const src: string;
    export default src;
}

declare module "*.jpg" {
    import React from "react";
    export const ReactComponent: React.FunctionComponent<React.ImgHTMLAttributes<React.ImgHTMLAttributes>>;
    const src: string;
    export default src;
}