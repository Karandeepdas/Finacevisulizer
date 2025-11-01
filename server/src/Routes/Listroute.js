import express from 'express'
import {updateList,getList,deleteList,addList} from '../Controllers/Listcontroller.js'
import { listValidate} from '../Middleware/Validate.js'
import { Authentication } from '../Middleware/Authenticate.js'

const router=express.Router()

router.get('/',Authentication,getList)
router.post('/',Authentication,listValidate,addList)
router.put('/:id',Authentication,listValidate,updateList)
router.delete('/:id',Authentication,deleteList)

export default router