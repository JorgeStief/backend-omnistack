const Dev =  require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')
module.exports = {
    async index(request, response){
        const {latitute, longitude, techs} = request.query;

        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitute]
                    },
                    $maxDistance: 10000,
                },
            }
        })


        //Buscar todos os devs num raio de 10km
        //filtrar por tecnologias
        return response.json({devs})
    }
}