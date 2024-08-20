import { Frank_Ruhl_Libre, Merriweather } from "next/font/google";

export const frank = Frank_Ruhl_Libre({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
export const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-merriweather",
});
