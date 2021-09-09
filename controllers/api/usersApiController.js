const { Op } = require('sequelize')
const { User} = require ('../../database/models')

module.exports = {
    async listUsers (req,res) {
        try{
            const users = await User.findAndCountAll({
                attributes: ["id", "name", "email"],
            })
            
            const usersMapped = users.rows.map(users=>{
                const urlDetail = 'http://localhost:3000/api/users/' + users.id
                users.setDataValue('detail', urlDetail)
                return users
            });

            res.status(200).json({
                meta: {
                    status: "success",
                    title: "Total de usuarios",                    
                    count: users.count
                },
                data: {
                    detail: usersMapped
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
                id: user.id,
                name: user.name,
                lastName: user.lastName,
                email: user.email,
                image: 'http://localhost:3000' + user.image
            }
            
        })
    }} 