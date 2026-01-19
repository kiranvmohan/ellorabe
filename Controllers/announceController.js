const announcements = require("../Models/announceSchema");



exports.createAnnouncements = async(req,res)=>{
    try{
        const {title,category,priority,message} = req.body

        if(!title || !message || !category || !priority){
            return res.status(400).json("All fields are required")
        }

        const newAnnouncement = new announcements({
            title,
             category,
              priority,
            message,
            
           
           
        })
        await newAnnouncement.save()
        res.status(200).json (newAnnouncement)

    }catch(error){
        console.log(error)
        res.status(500).json (error)
    }
}

exports.getAnnouncements = async(req,res)=>{

    try{
        const data = await announcements.find().Sort({postedAt:-1})
        res.status(200).json(data)
    }
    catch(err){
        res.status(500).json(err)
    }
}