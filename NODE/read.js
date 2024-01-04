
const { XMLParser } = require("fast-xml-parser")
const fs=require("fs")

const parser=new XMLParser()

fs.readFile("root.xml","utf-8",(error,data)=>{
    let dataParse
    error?console.log(error):dataParse=parser.parse(data)
    const {alumnosRootElement}=dataParse
    const {alumnos}=alumnosRootElement
    console.log(alumnos)
})