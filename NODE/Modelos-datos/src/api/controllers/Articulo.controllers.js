const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const Articulo = require("../models/Articulo.model");

//todo CONTROLADOR POST
const create = async (req, res, next) => {
  try {
    let catchImg = req.file ? req.file.path : null;

    await Articulo.syncIndexes();

    const nuevoArticulo = new Articulo(req.body);

    if (catchImg) {
      nuevoArticulo.image = catchImg;
    } else {
      nuevoArticulo.image =
        "https://res.cloudinary.com/dhkbe6djz/image/upload/v1689099748/UserFTProyect/tntqqfidpsmcmqdhuevb.png";
    }

    const guardarArticulo = await nuevoArticulo.save();

    if (guardarArticulo) {
      return res.status(200).json(guardarArticulo);
    } else {
      return res
        .status(404)
        .json("No se ha podido guardar el elemento en la DB ❌");
    }
  } catch (error) {
    if (catchImg) {
      deleteImgCloudinary(catchImg);
    }

    return res.status(404).json({
      message: "Error en la creación del elemento",
      error: error,
    });
  }
};
//todo-----------------------------------------------------------------------------------------------------------------------------------------

//TODO CONTROLADOR PARA LEER TODO
const getAll = async (rq, res, next) => {
  try {
    const TodosLosArticulos = await Articulo.find();
    if (TodosLosArticulos.length > 0) {
      return res.status(200).json(TodosLosArticulos);
    } else {
      return res.status(404).json("No se han encontrado artículos");
    }
  } catch (error) {
    return res.status(404).json({
      error: "error al buscar",
      message: error.message,
    });
  }
};
//TODO--------------------------------------------------------------------------------------------------------------------------------------------

//TODO CONTROLADOR PARA BUSCAR POR id

const getByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const articuloPorId = await Articulo.findById(id);
    if (articuloPorId) {
      return res.status(200).json(articuloPorId);
    } else {
      return res.status(404).json("Artículo no encontrado");
    }
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

//todo-------------------------------------------------------------------------------------------------------------------------------------------------

//TODO CONTROLADOR PARA BUSCAR POR NOMBRE

const getByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const articuloPorNombre = await Articulo.find({ name });
    if (articuloPorNombre.length > 0) {
      return res.status(200).json(articuloPorNombre);
    } else {
      return res.status(404).json("Articulo no encontrado");
    }
  } catch (error) {
    return res.status(404).json({
      error: "Error al buscar",
      message: error.message,
    });
  }
};
//todo-------------------------------------------------------------------------------------------------------------------------------------------------
//todo CONTROLADOR DELETE

const deleteArticulo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const article = await Articulo.findByIdAndDelete(id);

    if (article) {
      const findByIdArticulo = await Articulo.findById(id);
      return res.status(findByIdArticulo ? 404 : 200).json({
        deleteTest: findByIdArticulo ? false : true,
      });
    } else {
      return res.status(404).json("Este artículo no está");
    }
  } catch (error) {
    return res.status(404).json(error);
  }
};
//todo-------------------------------------------------------------------------------------------------------------------------------------------------

//todo CONTROLADOR UPDATE

const update = async (req, res, next) => {
  try {
    await Articulo.syncIndexes();
    const { id } = req.params;
    const ArticuloById = await Articulo.findById(id);

    if (!ArticuloById) {
      return res.status(404).json("Este artículo no existe");
    }

    const fotoAntigua = ArticuloById.image;
    const customBody = {
      _id: ArticuloById._id,
      image: req.file?.path ?req.file?.path: fotoAntigua,
      name: req.body?.name ? req.body?.name: ArticuloById.name,
      price: req.body?.price ?req.body?.price: ArticuloById.price,
    };

    await Articulo.findByIdAndUpdate(id, customBody);

    if (req.file?.path && fotoAntigua) {
      deleteImgCloudinary(fotoAntigua);
    }

    return res.status(200).json("Artículo actualizado con éxito");
  } catch (error) {
    return res.status(500).json({ error: "Error interno en el servidor" });
  }
};



module.exports = {
  create,
  getByID,
  getAll,
  getByName,
  deleteArticulo,
  update,
};
