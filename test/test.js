/**
 * XadillaX created at 2014-10-21 15:27
 *
 * Copyright (c) 2014 Huaban.com, all rights
 * reserved.
 */
var fbbkJSON = require("../");

console.log(fbbkJSON.parse('[\
    {\
        name: "user_id",\
        alias: "userId",\
        primaryKey: true\
    },\
    { name: "username" },\
    { name: "password" },\
    { name: "email" },\
    { name: "urlname" },\
    { name: "created_at", alias: "createdAt"},\
    { name: "avatar" },\
    { name: "roles" },\
    { name: "rating" }\
]'));
