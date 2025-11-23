import { Router } from 'express';
import { patientController } from '../controllers/patient.controller';
// import { authorization } from '../middlewares/auth.middleware'; // Uncomment if auth is needed
// import { authorizeRoles } from '../middlewares/authorizeRoles.midleware'; // Uncomment if roles are needed

const router: Router = Router();

router.post('/create', patientController.create);
router.get('/getall', patientController.getAll);
router.get('/getbyId/:id', patientController.getById);
router.put('/update/:id', patientController.update);
router.delete('/delete/:id', patientController.delete);

export default router;

