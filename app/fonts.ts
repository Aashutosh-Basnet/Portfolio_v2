import {DM_Serif_Text} from "next/font/google";
import { Raleway, Anaheim } from "next/font/google";

export const dmSerifText = DM_Serif_Text({
  weight: ["400"],
  subsets: ["latin"],
});

export const raleway = Raleway({
  weight: ["200", "400", "700"],
  subsets: ["latin"],
});

export const anaheim = Anaheim({
  weight: ["400"],
  subsets: ["latin"],
});