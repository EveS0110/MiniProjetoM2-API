const Categoria = requite('../models/categoriaModel.js')

module.exports = {
    async criar(req,res) {
        const categoria = await Categoria.create(req.body);
        res.status(201).json(categoria);
    },


    async listar(req,res) {
        const categorias = await Categoria.findAll();
        res.json(categorias);
    }
}