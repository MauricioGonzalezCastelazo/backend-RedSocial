const User = require('../models/usersModel');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();

        // Enviar respuesta
        res.status(200).json({
            status: 'success',
            results: users.length,
            data: {
                users
            }
        });
    } catch (err) {
        // Manejar posibles errores
        res.status(500).json({
            status: 'error',
            message: 'Error al obtener los usuarios',
            error: err
        });
    }
};

