const Agenda = require('../models/agenda.model');
const Consultor = require('../models/consultor.model');

//Simple version, without validation or sanitation
exports.agenda_salvar = function (req, res) {
    let agenda = new Agenda(
        {
            Nome: req.body.Nome,
            Telefone: req.body.Telefone
        }
    );

    agenda.save(function (err) {

        const consultor = new Consultor({
            Nome: req.body.Consultor,
            ConsultorId: agenda._id
        });

        if (err) {
            return err;
        }
        consultor.save(function (err) {
            if (err) return handleError(err);
            return err;
        });

        res.send('Visita criada com sucesso')
    })
};

exports.resident_getResident = (req, res) => {
    Resident.findById(req.params.id, (err, resident) => {
        if (err) return next(err);

        res.send(resident);
    })
}

exports.agenda_listar = (req, res) => {
    // Agenda.find({}, (err, agenda) => {
    //     if (err) return next(err);

    //     res.send(agenda);
    // });

    // Agenda.
    //     find({}).
    //     populate('Consultor', 'Nome'). // only works if we pushed refs to children
    //     exec(function (err, agenda) {
    //         if (err) return handleError(err);
    //         res.send(agenda);
    //     });


        Agenda
        .find({})
        .populate('Consultor')
        .exec(function (err, agenda) {
            if (err) console.log(err);
            //this will log all of the users with each of their posts 
            res.send(agenda);
        })
}