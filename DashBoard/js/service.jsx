//var myPatToken = 'olj6oc3rlwhnljmgclpq7554gvi2crag6qhpkiu2r7h4mqdgt7fq';
//var myPatToken = 'nefoy4i2ilz4uhvlxx2yj4ttln2khclrr226dyl23zus3bbylkbq';
//var myPatToken = 'hzgmmfa4ndmzag3as2okohdhgjhj6fewaomtbqkcrgl7dnhvzpbq';

//httpChannel.setRequestHeader("Authorization", 'Basic ' + btoa("" + ":" + myPatToken), false);

export const Service = function(url, myPatToken, service, success) {
    return $.ajax({
        url: url + '/defaultcollection' + service,
        dataType: 'json',
        headers: {
            'Authorization': 'Basic ' + btoa("" + ":" + myPatToken)
        },
        success: success
    });
};

export const ServicePost = function(url, myPatToken, service, data, success) {
    return $.ajax({
        url: url + '/DefaultCollection' + service,
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