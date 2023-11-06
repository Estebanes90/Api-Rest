import {pool} from './database.js';

class LibrosController{

    async getAll(req, res){
	try {
             const [result] = await pool.query('SELECT * FROM libros');
             res.json(result);
	}catch (error){
	     res.status(500).json({"Error": "Ha ocurrido un error al obtener los datos de libros"});
	}
    }

    async add (req, res){
	const libro = req.body;
        try {
	     const [result] = await pool.query ('INSERT INTO libros(nombre, autor, categoria, año_publicacion, ISBN) VALUES (?,?,?,?,?)', [libro.nombre, libro.autor, libro.categoria, libro.año_publicacion, libro.ISBN]);
	     res.json({"Id insertado": result.insertId, "message": "El libro se ha agregado con éxito"});
        } catch(error) {
             res.status(500).json({"Error": "Ha ocurrido un error al agregar el libro"});
        }
    }

    async update (req, res){
        const libro = req.body;
        try {
              const [result] = await pool.query('UPDATE libros SET nombre=(?), autor=(?), categoria=(?), año_publicacion=(?), ISBN=(?) WHERE id=(?)', [libro.nombre, libro.autor, libro.categoria, libro.año_publicacion, libro.ISBN, libro.id]);
              if (result.affectedRows > 0){
		 res.json ({"message": "El libro con el ISBN ${libro.ISBN} se ha actualizado con éxito"});
	      }else{
		 res.status(404).json({"Error": "No se ha encontrado ningún libro con el ISBN ${libro.ISBN}"});
	    }
        } catch(error){
             res.status(500).json({"Error": "Ha ocurrido un error al intentar actualizar el libro"});
        } 
    }

    async deleteId (req, res){
        const libro = req.body;
        try {
              const[result] = await pool.query('DELETE FROM libros WHERE id=(?)', [libro.id]);
              if (result.affectedRows> 0){
		  res.json({"mesagge": "Se ah eliminado con éxito el libro con Id: ${libro.id}"});
	      }else{
		  res.status(404).json({"Error": "No se ha encontrado ningún libro con el Id ${libro.id}"});
	      }
        } catch(error){
              res.status(500).json({"Error": "Ocurrió un error al eliminar libro:"});
        }
    }
	    
    async deleteISBN (req, res){
        const libro = req.body;
        try {
              const[result] = await pool.query('DELETE FROM libros WHERE ISBN=(?)', [libro.ISBN]);
              if (result.affectedRows > 0){ 
		 res.json({"mesagge": "Se ha eliminado con éxito el libro con el ISBN ${libro.ISNB}"});
	      }else{
		 res.status(404).json({"Error": "No se encontró ningún libro con el ISBN ${libro.ISBN}"});        
	} catch(error){
              res.status(500).json({"Error": "Ocurrió un error al eliminar el libro"});
        }
    }
    

    async getOne(req, res){
        const id = req.body.id;
        try {
	     const [result] = await pool.query('SELECT * FROM libros WHERE id = ?', [id]);
             if (result.length > 0) {
            	res.json(result[0]);
             }else{
                res.status(404).json({"Error": "No se encontró el libro con el id ${libro.id}"});
        }
	} catch (error){
		res.status(500).json({"Error": "Ocurrió un error al obtener el libro"});
        }
    }
}
export const libros = new LibrosController(); 
