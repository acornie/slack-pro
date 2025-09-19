const userService = require('../services/userService');

exports.create = async (req, res) => {
    try {
        const result = await userService.create(req.body);
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
}

exports.read = async (req, res) => {
    try {
        const result = await userService.read();
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
}

exports.readOne = async (req, res) => {
    try {
        const result = await userService.readOne(req.params.id);
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
}

exports.update = async (req, res) => {
    try {
        const result = await userService.update(req.params.id, req.body);
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
}

exports.delete = async (req, res) => {
    try {
        const result = await userService.delete(req.params.id);
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
}

