import { Router } from "express";
import healthRoutes from "./healthRoutes";
import subscriptionRoutes from "./subscriptionRoutes"

const router = Router();

router.use(healthRoutes);
router.use(subscriptionRoutes);

export default router;
