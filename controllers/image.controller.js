const imageController ={
    uploadImg: (req, res) => {
        try {
           res.json({
            url: `/uploads/${req.file.originalname}`
           })
        } catch (error) {
            res.json({error: error.message})
        }
    }
}

module.exports = imageController