const Router = require("express");
const { validateParamId, validateBody } = require("../validations/tasks.validation.js");
const { getTasks, getTask, createTask, updateTask, deleteTask } = require("../controllers/tasks.controller.js");

const routes = Router();

routes
    .get("/", (req, res) => {
        getTasks(req, res);
    })
    .get("/:id", validateParamId, (req, res) => {
        getTask(req, res);
    })
    .post("/", validateBody, (req, res) => {
        createTask(req, res);
    })
    .put("/:id", validateParamId, validateBody, (req, res) => {
        updateTask(req, res);
    })
    .delete("/:id", validateParamId, (req, res) => {
        deleteTask(req, res);
    });

module.exports = routes;