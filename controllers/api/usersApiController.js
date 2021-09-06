const { Op } = require('sequelize')
const { User} = require ('../../database/models')

module.exports = {
    async listUsers (req,res) {
        try{
            const users = await User.findAndCountAll()
            
            res.status(200).json({
                meta: {
                    status: "success",
                    count: users.count
                },
                data: {
                    users: users.rows
                }
            })
    } catch(err) {
        res.status(500).json({
            meta: {
                status: "error"
            },
            error: {
                msg: "Cant connect to database"
            }
        })
    }
    },

    async detailUser(req, res){
        const user = await User.findByPk (req.params.id)

        if (!user) {
            res.status (404).json({
                meta: {
                    status: "not_found"
                },
            })
            return
        }

        res.status(200).json({
            meta: {
                status: "success",
            },
            data: {
                user
            }
        })
    }
}