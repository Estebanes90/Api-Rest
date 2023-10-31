import {pool} from './database.js';

class LibrosController{

    async getAll(req, res){
        const [result] = await pool.query('SELECT * FROM libros');
        res.json(result);
    }

    async getOne(req, res){
        const id = req.body.id;
        const [result] = await pool.query('SELECT * FROM libros WHERE id = ?', [id]);
        if (result.length > 0) {
            res.json(result[0]);
        }else{
            res.status(404).json({"Error": `No se encontro el libro con el id ${id}`});
        }
    }
}

export const libros = new LibrosController(); 
