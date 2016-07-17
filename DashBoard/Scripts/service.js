'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (service, success) {
    return $.ajax({
        url: 'https://cellenza-studio.visualstudio.com/defaultcollection' + service,
        dataType: 'json',
        headers: {
            'Authorization': 'Basic ' + btoa("" + ":" + myPatToken)
        },
        success: success
    });
};

var myPatToken = 'olj6oc3rlwhnljmgclpq7554gvi2crag6qhpkiu2r7h4mqdgt7fq';

//httpChannel.setRequestHeader("Authorization", 'Basic ' + btoa("" + ":" + myPatToken), false);

;