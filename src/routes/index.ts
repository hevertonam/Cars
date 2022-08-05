import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";

const router = Router();

router.use("/modelo",categoriesRoutes); 

router.use("/modelo",specificationsRoutes); 

export{router}
