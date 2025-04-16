import { JSX } from "react";
//This is here because the compiler hates me
export type navItem = {
    name: string;
    link: string;
    icon?: JSX.Element;
}