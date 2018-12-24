/**
 * LocationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    search: async function(req, res) {
        const locations = await Location.find({

        }).sort('id desc');
        return res.json(locations);
    }
};

