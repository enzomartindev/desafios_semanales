const { disconnect, getCollection, generateID } = require("../connection_db.js");
const { HEADER_CONTENT_TYPE } = require("../constants/headers.js");

const {
    ERROR_ID_NOT_FOUND,
    ERROR_SERVER,
} = require("../constants/messages.js");

const collectionName = "tareas";

// Controller para obtener tareas
const getTasks = async (req, res) => {
    res.set(HEADER_CONTENT_TYPE);

    try {
        const { titulo, descripcion } = req.query;
        const filters = {};

        if (titulo) filters.titulo = { $regex: titulo, $options: "i" };
        if (descripcion) filters.descripcion = { $regex: descripcion, $options: "i" };

        const collection = await getCollection(collectionName);
        const tasks = await collection.find(filters).sort({ id: 1 }).toArray();

        res.status(200).send(tasks);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: ERROR_SERVER });
    } finally {
        await disconnect();
    }
};

// Controller para obtener una tarea en específico
const getTask = async (req, res) => {
    res.set(HEADER_CONTENT_TYPE);

    try {
        const { id } = req.params;

        const collection = await getCollection(collectionName);
        const task = await collection.findOne({ id: Number(id) });

        if (!task) return res.status(400).send({ message: ERROR_ID_NOT_FOUND });

        res.status(200).send(task);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: ERROR_SERVER });
    } finally {
        await disconnect();
    }
};

// Controller para crear una tarea
const createTask= async (req, res) => {
    res.set(HEADER_CONTENT_TYPE);

    try {
        const { titulo, descripcion } = req.body;
        if(!titulo || !descripcion) return res.status(400).send({ message: ERROR_DATA_MISSING });
        const collection = await getCollection(collectionName);
        const id = await generateID(collection);
        const task = { id, titulo, descripcion };
        await collection.insertOne(task);

        res.status(201).send(`Tarea "${task.titulo}" creada exitosamente\n${JSON.stringify(task)}`);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: ERROR_SERVER });
    } finally {
        await disconnect();
    }
};

// Controller para modificar una tarea especifica
const updateTask = async (req, res) => {
    res.set(HEADER_CONTENT_TYPE);

    try {
        const { id } = req.params;
        const { titulo, descripcion } = req.body;
        if (!titulo || !descripcion) return res.status(400).send({ message: ERROR_DATA_MISSING });
        const collection = await getCollection(collectionName);
        const task = await collection.findOne({ id: Number(id) });

        if (!task) return res.status(400).send({ message: ERROR_ID_NOT_FOUND });

        const values = { titulo, descripcion };
        await collection.updateOne({ id: task.id }, { $set: values });

        res.status(200).send({ ...task, ...values });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: ERROR_SERVER });
    } finally {
        await disconnect();
    }
};

// Controller para eliminar una tarea especifica
const deleteTask= async (req, res) => {
    res.set(HEADER_CONTENT_TYPE);

    try {
        const { id } = req.params;

        const collection = await getCollection(collectionName);
        const task = await collection.findOne({ id: Number(id) });

        if (!task) return res.status(400).send({ message: ERROR_ID_NOT_FOUND });

        await collection.deleteOne({ id: Number(id) });

        res.status(200).send(`Tarea id:${id} eliminada ${JSON.stringify(task)}`);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: ERROR_SERVER });
    } finally {
        await disconnect();
    }
};

module.exports = { getTasks, getTask, createTask, updateTask, deleteTask };