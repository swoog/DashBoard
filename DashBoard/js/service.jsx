//var myPatToken = 'olj6oc3rlwhnljmgclpq7554gvi2crag6qhpkiu2r7h4mqdgt7fq';
var myPatToken = 'nefoy4i2ilz4uhvlxx2yj4ttln2khclrr226dyl23zus3bbylkbq';

//httpChannel.setRequestHeader("Authorization", 'Basic ' + btoa("" + ":" + myPatToken), false);

export const Service = function(service, success) {
    return $.ajax({
        url: 'https://neobd.visualstudio.com/defaultcollection' + service,
        dataType: 'json',
        headers: {
            'Authorization': 'Basic ' + btoa("" + ":" + myPatToken)
        },
        success: success
    });
};

export const ServicePost = function(service, data, success){
    return $.ajax({
        url:'https://neobd.visualstudio.com/DefaultCollection' + service,       
        type: "POST",
        contentType:'application/json',
        dataType: 'json',
        data: data,
        headers: {
            'Authorization': 'Basic ' + btoa("" + ":" + myPatToken)
        },
        success: success
    });
};