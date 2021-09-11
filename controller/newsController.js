const newsModel = require('../model/news')
const newController = {
    createNew: async(req, res) => {
        try {
            const {
                title,
                descriptions,
                content,
                status,
                imgUrl
            }
            = req.body

            const news = new newsModel({
                title,
                descriptions,
                content,
                status,
                imgUrl
            })

            await news.save()
            return res.json({success: true, message: "thêm thành công"})

        } catch (error) {
            return res.status(500).json({success: false, message: error.message})
        }
    },
    getNews: async (req, res) => {
        try {
            const news = await newsModel.find({})
            return res.json(news)
        } catch (error) {
            return res.status(500).json({success: false, message: error.message})
        }
    },
    findNew: async (req, res) => {
        try {
            const id = req.params.id
            const news = await newsModel.findById(id)
            if(!news){
                return res.json({success: false, message: "Không tìm thấy"})
            }
            return res.json(news)
        } catch (error) {
            return res.status(500).json({success: false, message: error.message})
        }
    },
    updateNew: async (req, res) => {
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
            const news = await newsModel.findByIdAndUpdate(id,
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
    deleteNew: async (req, res) => {
        try {
            const id = req.params.id
            const news = await newsModel.findByIdAndDelete(id)
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