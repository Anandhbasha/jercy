export const readUser = async(req,res)=>{
    res.send("Node is working")
}

export const  addNewUser= async(req,res)=>{
    const {userName,userPassword} = req.body
    if(userName && userPassword){
        res.status(200).json(`Data Inserted Sucessfully${userName},${userPassword}`)
    }
    else{
        res.status(401).json({message:`unable to insert the data`})
    }
    
}