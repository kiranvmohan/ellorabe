const Announce = require("../Models/announceSchema");

exports.getAnnouncements = async (req,res)=>{
    try{
        const data = (await Announce.find()).sort({date:-1});
        res.status(200).json(data);
    }
    catch(error){
        res.status(500).json("Failed to fetch announcements")
    }
};

exports.createAnnouncements = async(req,res)=>{
    try{
        const {title, message,category,priority} = req.body

        if(!title || !message || !category || !priority){
            return res.status(400).json("All fields are required")
        }

        const newAnnouncement = new Announce({
            title,
            message,
            category,
            priority
        })
        await newAnnouncement.save()
        res.status(201).json ("Announcemnt published successfully")

    }catch(error){
        console.log(error)
        res.status(500).json ("Server error")
    }
}