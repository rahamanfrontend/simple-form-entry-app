import { MouseEvent } from "react";

export interface ISiteConfig {
   title: string;
   description: string;
}

export type IOnclick = (e: MouseEvent<HTMLElement, MouseEvent>) => void;
