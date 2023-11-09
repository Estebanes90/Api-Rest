import {Router } from 'express'; 
import {usuarios} from './controller.js';

export const router = Router()

router.get ('/usuarios', usuarios.getAll);
router.post ('/usuarios', usuarios.add);
router.put ('/usuarios', usuarios.update);
router.delete ('/usuariosLogicoEmail', usuarios.deleteLogicoEmail);
router.delete ('/usuariosLogicoUsuario', usuarios.deleteLogicoUsuario);
router.delete ('/usuariosEmail', usuarios.deleteEmail);
router.delete ('/usuariosUsuario', usuarios.deleteUsuario);
<<<<<<< HEAD
router.get ('/usuarios', usuarios.getOne);
=======
router.get ('/usuarios', usuarios.getOne);
>>>>>>> caef6ab07e418d107e97e91d9af5887a2bc196ab
