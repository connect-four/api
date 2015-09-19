var common = require("../libs/common");
module.exports = {
    get: function (req, res) {
        var file = common.getFile("game").toString();
        res.json(JSON.parse(file));
    },
    post: function (req, res) {
        var file = JSON.parse(common.getFile("game").toString());
        file.push(req.body);
        common.saveFile("game", JSON.stringify(file));
        res.send(200);
    },
    clear: function (req, res) {
        var file = [];
        common.saveFile("game", JSON.stringify(file));
        res.send(200);
    }
};