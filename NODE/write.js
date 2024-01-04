const { XMLBuilder } = require("fast-xml-parser");
const fs=require("fs")
const alumnosROOT = {
    alumnosRootElement: {
      alumnos: [
        {
          name: "Rodri",
          age: "43",
          job: "dev",
        },
        {
          name: "Laura",
          age: "37",
          job: "libreria",
        },
        {
          name: "Antonio",
          age: "33",
          job: "dev",
        },
      ],
    },
  };

  let options={
    ignoreAttributes:false,
    format:true,
    
  }

  const builder= new XMLBuilder(options)
  let output=builder.build(alumnosROOT)

console.log(output)

fs.writeFile("root.xml",output,()=>{
    console.log("archivo escrito")
})