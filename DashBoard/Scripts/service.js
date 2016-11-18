'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
//var myPatToken = 'olj6oc3rlwhnljmgclpq7554gvi2crag6qhpkiu2r7h4mqdgt7fq';
var myPatToken = 'nefoy4i2ilz4uhvlxx2yj4ttln2khclrr226dyl23zus3bbylkbq';

//httpChannel.setRequestHeader("Authorization", 'Basic ' + btoa("" + ":" + myPatToken), false);

var Service = exports.Service = function Service(service, success) {
    return $.ajax({
        url: 'https://neobd.visualstudio.com/defaultcollection' + service,
        dataType: 'json',
        headers: {
            'Authorization': 'Basic ' + btoa("" + ":" + myPatToken)
        },
        success: success
    });
};

var ServicePost = exports.ServicePost = function ServicePost(service, data, success) {
    return $.ajax({
        url: 'https://neobd.visualstudio.com/DefaultCollection' + service,
        type: "POST",
        contentType: 'application/json',
        dataType: 'json',
        data: data,
        headers: {
            'Authorization': 'Basic ' + btoa("" + ":" + myPatToken)
        },
        success: success
    });
};