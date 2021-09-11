const { Op } = require('sequelize')
const { User} = require ('../../database/models')

module.exports = {
    async listUsers (req,res) {
        try{
            const users = await User.findAndCountAll( {
                attributes: ["id", "name","lastName", "email", "image"],
            } )
            
            const usersMapped = users.rows.map(user=>{
                const urlDetail = 'http://localhost:3000/api/users/' + user.id
                user.setDataValue('detail', urlDetail)
                const imageUrl = 'http://localhost:3000' + user.image
                user.setDataValue('image', imageUrl)
                return user
            });
            const lastUser = usersMapped[usersMapped.length -1];   


            res.status(200).json({
                meta: {
                    status: "success",
                    title: "Total de usuarios",                    
                    count: users.count
                },
                data: {
                    detail: usersMapped,
                    lastUser: lastUser

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
    },
    
    async updateUserRolID(req, res){
        const user = await User.findByPk (req.params.id)

        if (!user) {
            res.status(404).json({
                meta: {
                    status: "not_found",
                },
            })
            return
        }

        const {roleID} = req.body

        const userUpdated = await user.update({
            roleID,
        })
        res.status(201).json({
            meta: {
                status: "success",
            },
            data: {
                id: userUpdated.id,
                roleID: userUpdated.roleID
                }
        
        })
    }
} 