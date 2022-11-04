import express from "express";
import {updateUser,getUser,deleteUser,followUser,UnFollowUser, getAllUsers} from '../Controllers/UserController.js'
const router = express.Router();
import authMiddleWare from '../middleware/AuthMiddleware.js';


//for testing
// router.get('/',async(req,res)=>{res.send("User Routes")})


router.get('/',getAllUsers)
router.get('/:id', getUser)
router.put('/:id',authMiddleWare, updateUser)
router.delete('/:id',authMiddleWare, deleteUser)
router.put('/:id/follow',authMiddleWare, followUser)
router.put('/:id/unfollow',authMiddleWare, UnFollowUser)
export default router;