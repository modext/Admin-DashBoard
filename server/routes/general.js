import express from "express";
import {getUser} from "../controllers/general.js"


const router = express.Router();

router.get("/user/:ID", getUser)

export default router