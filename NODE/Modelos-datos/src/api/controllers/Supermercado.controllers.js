const Articulo = require("../models/Articulo.model");
const Supermercado = require("../models/Supermercado.model");

const crearSupermercado=async(req,res,next)=>{
    try {
        await Supermercado.syncIndexes()
        const nuevoSupermercado=new Supermercado(req.body)
        const guardarSuper=await nuevoSupermercado.save()
        return res
        .status(guardarSuper?200:400)
        .json(guardarSuper?guardarSuper:"Error al crear el Supermercado")
    } catch (error) {
        return(
            res.status(404).json({
                error:"error en el catch",
                message:error.message
            })&&next(error)
        )
    }
}

const toggleArticulo=async(req,res,next)=>{
    const{id}=req.params
    const{articulos}=req.body
    const supermercadoByID=await Supermercado.findById(id)

    if(supermercadoByID){
        const arrayArticulos=articulos.split(",")
        Promise.all(
            arrayArticulos.map(async(articulo)=>{
                if(supermercadoByID.articulos.includes(articulo)){
                    try {
                        await Supermercado.findByIdAndUpdate(id,{
                         $pull:{articulos:articulo}
                        })
                        try {
                            await Articulo.findByIdAndUpdate(articulo,{
                                $pull:{supermercados:id}
                            })
                        } catch (error) {
                            res.status(404).json({
                                error:"error al actualizar el articulo",
                                message:error.message
                            })&&next(error)
                            
                        }
                    } catch (error) {
                        res.status(404).json({
                            error:"error al actualizar el supermercado",
                            message:error.message
                        })&&next(error)
                        
                    }
                }else{ try {
                    await Supermercado.findByIdAndUpdate(id,{
                     $push:{articulos:articulo}
                    })
                    try {
                        await Articulo.findByIdAndUpdate(articulo,{
                            $push:{supermercados:id}
                        })
                    } catch (error) {
                        res.status(404).json({
                            error:"error al actualizar el articulo",
                            message:error.message
                        })&&next(error)
                        
                    }
                } catch (error) {
                    res.status(404).json({
                        error:"error al actualizar el supermercado",
                        message:error.message
                    })&&next(error)
                    
                }
                    
                }
            })
        
        ).then(async()=>{
            return res.status(200).json({
                dataUpdate:await Supermercado.findById(id),
            })
        })
    }
}








module.exports={crearSupermercado, toggleArticulo}