var app = require('./index');

var db = app.get('db');

module.exports = {
	getPlanes: function (req, res, next) {
		var amount = req.query.amount;
		db.get_planes([amount],function (err, planes) {
			if (err) {
				res.status(500).send(err)
			} else {
				res.json(planes);
			}
		})
	},
	
};