import {pool} from './database.js';

class LibrosController{

    async getAll(req, res){
        const [result] = await pool.query('SELECT * FROM libros');
        res.json(result);
    }

    async add (req, res){
	        const libro = req.body;
        try {
	        const [result] = await pool.query ('INSERT INTO libros(nombre, autor, categoria, año_publicacion, ISBN) VALUES (?,?,?,?)', [libro.nombre, libro.autor, libro.categoria, libro.año_publicacion, libro.ISBN]);
	        res.json({"Id insertado": result.insertId});
        } catch(error) {
            console.log('Error al añadir libro:', error);
        }
    }

    async update (req, res){
        const libro = req.body;
        try{
            const [result] = await pool.query('UPDATE libros SET nombre=(?), autor(?), categoria(?), año_publicacion(?), ISBN(?) WHERE id=(?)', [libro.nombre, libro.autor, libro.categoria, libro.año_publicacion, libro.ISBN, libro.id]);
            res.json ({"Registros actualizados": result.changedRows});
        } catch(error){
            console.log ('Error al actualizar libro:', error);
        } 
    }

    async delete (req, res){
        const libro = req.body;
        try{
            const[result] = await pool.query('DELETE FROM libros WHERE id=(?)', [libro.id]);
            res.json({"Registros eliminados": result.affectedRows});
        }catch(error){
            console.log ('Error al eliminar libro:', error);
        }
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
