var lib = {
    getFile:function(file){
        var fs = require('fs');
        return fs.readFileSync("./src/files/" +file+ ".json");
    },
    saveFile:function(file, content){
        var fs = require('fs');
        fs.writeFileSync("./src/files/" +file+ ".json", content);
    }
};
module.exports = lib;
