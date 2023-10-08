import { printTemplateHeader } from "../components/Header/Header";
import { printTemplateMainImage } from "../components/MainImage/MainImage";


export const initTemplate = () => {
    const app = document.getElementById("app");
  
    //? ------------> crear las etiquetas de html de header, main y footer
    const header = document.createElement("header");
    const main = document.createElement("main");
    const footer = document.createElement("footer");
  
   
    app.append(header, main, footer);

printTemplateHeader()
printTemplateMainImage()
}
