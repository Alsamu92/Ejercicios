import { printTemplateGallery } from "../components/Gallery/Gallery"

export const initTemplates=()=>{
    const app=document.getElementById("app")
    const header=document.createElement("header")
    const main=document.createElement("main")
    app.append(header,main)
    printTemplateGallery()
}