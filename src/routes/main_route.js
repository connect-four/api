var router = require("express").Router();
var common = require("../libs/common");
var gameController = require("../controllers/game_controller");

module.exports = function () {
    router.get('/game', gameController.get);
    router.post('/game', gameController.post);
    router.post('/game/clear', gameController.clear);
    return router;
};

