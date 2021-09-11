const eventModel = require('../model/event')
const newController = {
    createEvent: async(req, res) => {
        try {
            const {
                title,
                descriptions,
                content,
                status,
                imgUrl,
                date
            }
            = req.body

            const event = new eventModel({
                title,
                descriptions,
                content,
                status,
                imgUrl,
                date
            })

            await event.save()
            return res.json({success: true, message: "thêm thành công"})

        } catch (error) {
            return res.status(500).json({success: false, message: error.message})
        }
    },
    getEvent: async (req, res) => {
        try {
            const event = await eventModel.find({})
            return res.json(event)
        } catch (error) {
            return res.status(500).json({success: false, message: error.message})
        }
    },
    findEvent: async (req, res) => {
        try {
            const id = req.params.id
            const event = await eventModel.findById(id)
            if(!event){
                return res.json({success: false, message: "Không tìm thấy"})
            }
            return res.json(event)
        } catch (error) {
            return res.status(500).json({success: false, message: error.message})
        }
    },
    updateEvent: async (req, res) => {
        try {
            const id = req.params.id
            const {
                title,
                descriptions,
                content,
                status,
                imgUrl
            }
            = req.body
            const news = await eventModel.findByIdAndUpdate(id,
                {$set: {
                    title,
                    descriptions,
                    content,
                    status,
                    imgUrl
                } 
            })
            return res.json({message: "Sửa thành công"})
        } catch (error) {
            return res.status(500).json({success: false, message: error.message})
        }
    },
    deleteEvent: async (req, res) => {
        try {
            const id = req.params.id
            const news = await eventModel.findByIdAndDelete(id)
            if(!news){
                return res.json({message: 'Không tìm thấy'})
            }
            return res.json({message: 'Xoá thành công'})
        } catch (error) {
            return res.status(500).json({success: false, message: error.message})
        }
    }
}

module.exports = newController