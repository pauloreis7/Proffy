import express from 'express'

const routes = express.Router();

routes.post("/classes", (request, response) => {

    const { 
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule
    } = request.body


    

    return response.send()
})

export default routes;