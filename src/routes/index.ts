import { Router } from 'express';
import * as PageController from '../controllers/pageController';
import * as PesquisaController from '../controllers/pesquisaController';

const router = Router();

router.get('/', PageController.home);
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/peixes', PageController.peixes);

router.get('./busca', PesquisaController.busca);

export default router;