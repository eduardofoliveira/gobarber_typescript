import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentController from '@modules/appointments/infra/http/controllers/AppointmentsController';

const appointmentsRouter = Router();
const appointmentController = new AppointmentController();

appointmentsRouter.use(ensureAuthenticated);

// appointmentsRouter.get('/', async (req, res) => {
//   const appointmentsRepository = new AppointmentsRepository();
//   const appointments = await appointmentsRepository.find();

//   return res.json(appointments);
// });

appointmentsRouter.post('/', appointmentController.create);

export default appointmentsRouter;
