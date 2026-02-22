module.exports = (roleRequired) => {

return (req,res,next)=>{

if(req.user.role !== roleRequired){

return res.status(403).json({

error:"Acceso denegado: se requiere rol " + roleRequired

});

}

next();

};

};