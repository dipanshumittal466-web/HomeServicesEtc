const express = require('express'); const router = express.Router(); const multer = require('multer'); const Document = require('../models/Document'); const Audit = require('../models/Audit');
const storage = multer.diskStorage({destination:(req,file,cb)=>cb(null,'uploads/'), filename:(req,file,cb)=>cb(null,Date.now()+'-'+file.originalname)});
const upload = multer({storage});
router.post('/upload', upload.single('file'), async (req,res)=>{ try{ const doc = new Document({user:req.body.user,type:req.body.type,filename:req.file.originalname,path:req.file.path,expiresAt:req.body.expiresAt}); await doc.save(); await Audit.create({user:req.body.user,action:'upload_document',meta:{docId:doc._id}}); res.json(doc);}catch(err){res.status(500).json({error:String(err)})}});
router.post('/:id/verify', async (req,res)=>{ try{ const doc = await Document.findById(req.params.id); doc.verified = true; doc.notes = req.body.notes; await doc.save(); await Audit.create({user:req.body.admin,action:'verify_document',meta:{docId:doc._id}}); res.json(doc);}catch(err){res.status(500).json({error:String(err)})}});
module.exports = router
