/**
 * XadillaX created at 2015-03-24 10:37:30
 *
 * Copyright (c) 2015 Huaban.com, all rights
 * reserved
 */
var fbbk = require("../fjson");
var fs = require("fs");

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
                    json2 = new Function("return " + text)();
                } catch(e) {
                    (e instanceof Error).should.be.eql(false);
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

