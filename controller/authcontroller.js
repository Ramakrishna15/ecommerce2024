import userModels  from "../models/usermodels";

export const registerController=async(req,res)=>{
try{

}
catch(error){
          console.log(error)
           res.status(500).send({
            success:false,
            message:'error in Registration',
            error
           })

}

};
