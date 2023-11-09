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
router.get ('/usuarios', usuarios.getOne);