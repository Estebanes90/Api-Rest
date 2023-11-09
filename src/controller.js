import {pool} from './database.js';
import bcrypt from 'bcrypt'; // Importa la librería bcrypt

class UsuariosController{

    async getAll(req, res){
	try {
             const [result] = await pool.query('SELECT * FROM usuarios');
             res.json(result);
	}catch (error){
	     res.status(500).json({"Error": "Ha ocurrido un error al obtener los datos de usuarios"});
	}
    }

    async add(req, res) {
    const usuario = req.body;
    try {
        // Hashear la contraseña
        const hashedPassword = await bcrypt.hash(usuario.pass, 10); // 10 es el número de rondas de salting

        // Insertar el usuario en la base de datos con la contraseña hasheada
        const [result] = await pool.query('INSERT INTO usuarios(nombre, apellido, usuario, email, pass, perfil_id, id_bandera) VALUES (?,?,?,?,?,?,?)', [usuario.nombre, usuario.apellido, usuario.usuario, usuario.email, hashedPassword, usuario.perfil_id, usuario.id_bandera]);

        res.json({ "Usuario insertado": result.insertId, "message": "El usuario se ha agregado con éxito" });
    } catch (error) {
        res.status(500).json({ "Error": "Ha ocurrido un error al agregar el usuario" });
    }
}


async update(req, res) {
    const usuario = req.body;
    try {
    // Primero verificamos si usuario.pass se proporciona en la solicitud.
	// Hashear la contraseña si se proporciona en la solicitud
        if (usuario.pass) {
            const hashedPassword = await bcrypt.hash(usuario.pass, 10);
            usuario.pass = hashedPassword; // Actualiza la contraseña hasheada en el objeto usuario
        }
        // Realizar la actualización en la base de datos
        const [result] = await pool.query('UPDATE usuarios SET nombre=?, apellido=?, usuario=?, email=?, pass=?, perfil_id=?, id_bandera=? WHERE usuario=?', [usuario.nombre, usuario.apellido, usuario.usuario, usuario.email, usuario.pass, usuario.perfil_id, usuario.id_bandera, usuario.usuario]);
        if (result.affectedRows > 0) {
            res.json({ "message": `El usuario ${usuario.usuario} se ha actualizado con éxito` });
        } else {
            res.status(404).json({ "Error": `No se ha encontrado el usuario ${usuario.usuario}` });
        }
    } catch (error) {
        res.status(500).json({ "Error": "Ha ocurrido un error al intentar actualizar el usuario" });
    }
}

    async deleteLogicoEmail (req, res){
        const usuario = req.body;
        try {
              const [result] = await pool.query('UPDATE usuarios SET id_bandera=2 WHERE email=(?)', [usuario.email]);
              if (result.affectedRows > 0){
		 res.json ({"message": "El usuario con email ${usuario.email} se ha eliminado con éxito"});
	      }else{
		 res.status(404).json({"Error": "No se ha encontrado el usuario con email: ${usuario.email}"});
	    }
        } catch(error){
             res.status(500).json({"Error": "Ha ocurrido un error al intentar eliminar el usuario"});
        } 
    }

    async deleteLogicoUsuario (req, res){
        const usuario = req.body;
        try {
              const [result] = await pool.query('UPDATE usuarios SET id_bandera=2 WHERE usuario=(?)', [usuario.usuario]);
              if (result.affectedRows > 0){
		 res.json ({"message": "El usuario ${usuario.usuario} se ha eliminado con éxito"});
	      }else{
		 res.status(404).json({"Error": "No se ha encontrado el usuario ${usuario.usuario}"});
	    }
        } catch(error){
             res.status(500).json({"Error": "Ha ocurrido un error al intentar eliminar el usuario"});
        } 
    }

    async deleteEmail (req, res){
        const usuario = req.body;
        try {
              const[result] = await pool.query('DELETE FROM usuarios WHERE email=(?)', [usuario.email]);
              if (result.affectedRows> 0){
		  res.json({"mesagge": "Se ah eliminado con éxito el usuario con Email: ${usuario.email}"});
	      }else{
		  res.status(404).json({"Error": "No se ha encontrado ningún usuario con el Email: ${usuario.email}"});
	      }
        } catch(error){
              res.status(500).json({"Error": "Ocurrió un error al eliminar el usuario con Email: ${usuario.email}"});
        }
    }
	    
    async deleteUsuario (req, res){
        const usuario = req.body;
        try {
              const[result] = await pool.query('DELETE FROM usuarios WHERE usuario=(?)', [usuario.usuario]);
              if (result.affectedRows > 0){ 
		 res.json({"mesagge": "Se ha eliminado con éxito el usuario ${usuario.usuario}"});
	      }else{
		 res.status(404).json({"Error": "No se encontró ningún usuario ${usuario.usuario}"});
          }        
	} catch(error){
              res.status(500).json({"Error": "Ocurrió un error al eliminar el usuario"});
        }
    }
    

    async getOne(req, res){
        const usuario = req.body.usuario;
        try {
	     const [result] = await pool.query('SELECT * FROM usuarios WHERE usuario = ?', [usuario]);
             if (result.length > 0) {
            	res.json(result[0]);
             }else{
                res.status(404).json({"Error": "No se encontró el usuario ${usuario.usuario}"});
        }
	} catch (error){
		res.status(500).json({"Error": "Ocurrió un error al obtener el usuario"});
        }
    }
}
export const usuarios = new UsuariosController(); 