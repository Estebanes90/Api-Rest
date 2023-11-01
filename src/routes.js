import {Router } from 'express'; 
import {libros} from './controller.js';

export const router = Router()

router.get ('/libros', libros.getAll);
router.post ('/libro', libros.add);
router.put ('/libro', libros.update);
router.delete ('/libroId', libros.deleteId);
router.delete ('/libroISBN', libros.deleteISBN);
router.get ('/libros', libros.getOne);