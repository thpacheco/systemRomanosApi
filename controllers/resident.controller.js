const Resident = require('../models/resident.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Controller resident! ..');
};

exports.resident_create = function (req, res) {
    let resident = new Resident(
        {
            Name: req.body.Name,
            Number: req.body.Number
        }
    );

    resident.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Resident Created successfully')
    })
};

exports.resident_getResident = (req, res) => {
    Resident.findById(req.params.id, (err, resident) => {
        if (err) return next(err);

        res.send(resident);
    })
}

exports.resident_getAll = (req, res) => {
    Resident.find({}, (err, resident) => {
        if (err) return next(err);

        res.send(resident);
    })
}