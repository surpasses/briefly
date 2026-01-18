import { Router } from "express";
import healthRoutes from "./healthRoutes";
import subscriptionRoutes from "./subscriptionRoutes"
import userRoutes from "./userRoutes"

const router = Router();

router.use(healthRoutes);
router.use(userRoutes);
router.use(subscriptionRoutes);

export default router;
