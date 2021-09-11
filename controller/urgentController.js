const urgentModel = require('../model/urgent')
const urgentController = {
    createUrgent: async(req, res) => {
        try {
            const {
                unit,
                bloodType,
                status,
                imgUrl,
                reason
            }
            = req.body

            const urgent = new urgentModel({
                unit,
                bloodType,
                status,
                imgUrl,
                reason
            })

            await urgent.save()
            return res.json({success: true, message: "thêm thành công"})

        } catch (error) {
            return res.status(500).json({success: false, message: error.message})
        }
    },
    getUrgents: async (req, res) => {
        try {
            const urgent = await urgentModel.find({})
            return res.json(urgent)
        } catch (error) {
            return res.status(500).json({success: false, message: error.message})
        }
    },
    findUrgent: async (req, res) => {
        try {
            const id = req.params.id
            const urgent = await urgentModel.findById(id)
            if(!urgent){
                return res.json({success: false, message: "Không tìm thấy"})
            }
            return res.json(urgent)
        } catch (error) {
            return res.status(500).json({success: false, message: error.message})
        }
    },
    updateUrgent: async (req, res) => {
        try {
            const id = req.params.id
            const {
                unit,
                bloodType,
                status,
                imgUrl,
                reason
            }
            = req.body
            const urgent = await urgentModel.findByIdAndUpdate(id,
                {$set: {
                    unit,
                    bloodType,
                    status,
                    imgUrl,
                    reason
                } 
            })
            return res.json({message: "Sửa thành công"})
        } catch (error) {
            return res.status(500).json({success: false, message: error.message})
        }
    },
    deleteUrgent: async (req, res) => {
        try {
            const id = req.params.id
            const urgent = await urgentModel.findByIdAndDelete(id)
            if(!urgent){
                return res.json({message: 'Không tìm thấy'})
            }
            return res.json({message: 'Xoá thành công'})
        } catch (error) {
            return res.status(500).json({success: false, message: error.message})
        }
    }
}

module.exports = urgentController