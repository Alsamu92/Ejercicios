import { printTemplateFooter } from "../components/Footer/footer"
import { printTemplateHeader } from "../components/Header/Header"
import { PrintTemplateMain } from "../components/Main/Main"

export const initTemplate=()=>{
    const app =document.getElementById("app")

    const header=document.createElement("header")
    const main=document.createElement("main")
    const footer=document.createElement("footer")
    app.append(header,main,footer)
printTemplateFooter()
printTemplateHeader()
PrintTemplateMain()
}
