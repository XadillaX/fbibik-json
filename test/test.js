/**
 * XadillaX created at 2015-03-24 10:37:30
 *
 * Copyright (c) 2018 xcoder.in, all rights
 * reserved
 */
var fbbk = require("../fjson");
var fs = require("fs");

function createOrigJSON(filename, text) {
    if(filename === "json10.txt") {
        text = text.replace(/},,/g, "},").replace(/^,/g, "").replace(",\"label\"", "\"label\"")
            .replace("  ,\n  ,", "").replace("\"multipart\":{,", "\"multipart\":{");
    }

    return new Function("return JSON.parse(JSON.stringify(" + text + "))")(); // jshint ignore: line
}

describe("test for fbbk-json", function() {
    describe("traversal for the directory", function() {
        require("should");
        var fn = fs.readdirSync(__dirname + "/jsons");

        function trueTest(filename) {
            it("should equal `eval()` for file " + filename, function() {
                var text = fs.readFileSync(__dirname + "/jsons/" + filename, "utf8");
                var json1, json2;
                try {
                    json1 = fbbk.parse(text);
                    json2 = createOrigJSON(filename, text);
                } catch(e) {
                    if(e) {
                        console.log(e.stack);
                    }
                    (e instanceof Error).should.be.eql(false);
                    (1).should.be.eql(0);
                }

                json1.should.be.eql(json2);
            });
        }

        for(var i = 0; i < fn.length; i++) {
            if(fn[i].substr(fn[i].length - 4) !== ".txt") continue;
            trueTest(fn[i]);
        }
    });
});
