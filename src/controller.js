import {pool} from './database.js';

class LibrosController{

    async getAll(req, res){
        const [result] = await pool.query('SELECT * FROM libros');
        res.json(result);
    }

    async add (req, res){
	    const libro = req.body;
	    const [result] = await pool.query ('INSERT INTO libros(nombre, autor, categoria, año_publicacion, ISBN) VALUES (?,?,?,?)', [libro.nombre, libro.autor, libro.categoria, libro.año_publicacion, libro.ISBN]);
	    res.json({"Id insertado": result.insertId});
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
