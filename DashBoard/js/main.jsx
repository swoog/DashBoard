import React, { Component, PropTypes } from "react";
import ReactDOM from "react/lib/ReactDOM";
import Tiles from "./Tiles";
import Service from "./service";


var getBuild = function(b) {
    return function() {
        Service('/Wanapp/_apis/build/builds?definitions=' + b + '&$top=1&api-version=2.0',
            function(result) {
                this.builds = result;
            }.bind(this));
    };
};

var datas = [
    {
        name: 'Tile1',
        type:'time',
        service:function() {
            var d = new Date();
            this.name = d.toTimeString();
        }
    },
    {
        name: 'Tile1',
        type:'build',
        service: getBuild(6)
    },
    {
        name: 'Tile2',
        type:'build',
        service: getBuild(7)
    },
    {
        name: 'Tile2',
        type:'build',
    service: getBuild(20)
    }
];


class Main extends Component{
    getInitialState() {
        return {data: datas};
    }
    componentDidMount() {
        this.me = this;
        var myVar = setInterval(this.myTimer, 2000, this);
    }
    myTimer(me) {
        datas.forEach(b => b.service());
        var d = new Date();
        me.setState({
            data: datas
        });
    }
    render () {
        return <Tiles data={datas} />;
    }
}



var mainNode = document.getElementById('main');
ReactDOM.render(<Main />, mainNode);


//{
//    "count":
//    1, "value":
//    [
//        {
//            "_links": {
//                "self": {
//                    "href":
//                        "https://cellenza-studio.visualstudio.com/DefaultCollection/95f275e6-c8a2-4844-9d3d-769e90005f8c/_apis/build/Builds/416"
//                },
//                "web": {
//                    "href":
//                        "https://cellenza-studio.visualstudio.com/DefaultCollection/_permalink/_build/index?collectionId=cb37b89d-5a1b-482a-bd27-e85da9e4f14d&projectId=95f275e6-c8a2-4844-9d3d-769e90005f8c&buildId=416"
//                },
//                "timeline": {
//                    "href":
//                        "https://cellenza-studio.visualstudio.com/DefaultCollection/95f275e6-c8a2-4844-9d3d-769e90005f8c/_apis/build/builds/416/Timeline"
//                }
//            },
//            "plans": [{ "planId": "cd4ddf62-1040-4291-aaee-6895ba5bc947" }],
//            "id": 416,
//            "buildNumber": "LaCentrale.master_1.0.16110.1",
//            "status": "completed",
//            "result": "partiallySucceeded",
//            "queueTime": "2016-04-18T23:29:59.6928395Z",
//            "startTime": "2016-04-18T23:30:05.0903777Z",
//            "finishTime": "2016-04-18T23:35:45.6780805Z",
//            "url":
//                "https://cellenza-studio.visualstudio.com/DefaultCollection/95f275e6-c8a2-4844-9d3d-769e90005f8c/_apis/build/Builds/416",
//            "definition": {
//                "path": "\\",
//                "type": "build",
//                "revision": 62,
//                "id": 2,
//                "name": "LaCentrale.master",
//                "url": "https://cellenza-studio.visualstudio.com/DefaultCollection/95f275e6-c8a2-4844-9d3d-769e90005f8c/_apis/build/Definitions/2",
//                "project": { "id": "95f275e6-c8a2-4844-9d3d-769e90005f8c", "name": "CarBoat.LaCentrale", "url": "https://cellenza-studio.visualstudio.com/DefaultCollection/_apis/projects/95f275e6-c8a2-4844-9d3d-769e90005f8c", "state": "wellFormed", "revision": 17 }
//            },
//            "buildNumberRevision": 1,
//            "project": {
//                "id": "95f275e6-c8a2-4844-9d3d-769e90005f8c",
//                "name": "CarBoat.LaCentrale",
//                "url": "https://cellenza-studio.visualstudio.com/DefaultCollection/_apis/projects/95f275e6-c8a2-4844-9d3d-769e90005f8c",
//                "state": "wellFormed",
//                "revision": 17
//            },
//            "uri": "vstfs:///Build/Build/416",
//            "sourceBranch": "refs/pull/16/merge",
//            "sourceVersion": "86ebf3e4e611f3bbb94c2e42fd15a49b4e37ff64",
//            "queue": { "pool": { "id": 1, "name": "Default" }, "id": 1, "name": "Default" },
//            "priority": "normal",
//            "reason": "validateShelveset",
//            "requestedFor": {
//                "id": "5511e96b-c2b3-401e-b576-7c412c79da3a",
//                "displayName": "Guillaume DEMICHELI",
//                "uniqueName": "30379@supinfo.com",
//                "url": "https://cellenza-studio.vssps.visualstudio.com/_apis/Identities/5511e96b-c2b3-401e-b576-7c412c79da3a",
//                "imageUrl": "https://cellenza-studio.visualstudio.com/_api/_common/identityImage?id=5511e96b-c2b3-401e-b576-7c412c79da3a"
//            },
//            "requestedBy": {
//                "id": "16126a12-65f5-4b6a-a9b1-ff64f5f718f3",
//                "displayName": "[DefaultCollection]\\Project Collection Service Accounts",
//                "uniqueName": "vstfs:///Framework/IdentityDomain/cb37b89d-5a1b-482a-bd27-e85da9e4f14d\\Project Collection Service Accounts",
//                "url": "https://cellenza-studio.vssps.visualstudio.com/_apis/Identities/16126a12-65f5-4b6a-a9b1-ff64f5f718f3",
//                "imageUrl": "https://cellenza-studio.visualstudio.com/_api/_common/identityImage?id=16126a12-65f5-4b6a-a9b1-ff64f5f718f3",
//                "isContainer": true
//            },
//            "lastChangedDate": "2016-04-18T23:35:46.7Z",
//            "lastChangedBy": {
//                "id": "16126a12-65f5-4b6a-a9b1-ff64f5f718f3",
//                "displayName": "[DefaultCollection]\\Project Collection Service Accounts",
//                "uniqueName": "vstfs:///Framework/IdentityDomain/cb37b89d-5a1b-482a-bd27-e85da9e4f14d\\Project Collection Service Accounts",
//                "url": "https://cellenza-studio.vssps.visualstudio.com/_apis/Identities/16126a12-65f5-4b6a-a9b1-ff64f5f718f3",
//                "imageUrl": "https://cellenza-studio.visualstudio.com/_api/_common/identityImage?id=16126a12-65f5-4b6a-a9b1-ff64f5f718f3",
//                "isContainer": true
//            },
//            "orchestrationPlan": { "planId": "cd4ddf62-1040-4291-aaee-6895ba5bc947" },
//            "logs": {
//                "id": 0,
//                "type": "Container",
//                "url": "https://cellenza-studio.visualstudio.com/DefaultCollection/95f275e6-c8a2-4844-9d3d-769e90005f8c/_apis/build/builds/416/logs"
//            },
//            "repository": {
//                "id": "f1e48df1-4fb0-4f98-ac36-12fbbfd5d2f6",
//                "type": "TfsGit",
//                "clean": null,
//                "checkoutSubmodules": false
//            },
//            "keepForever": false,
//            "retainedByRelease": false
//        }
//    ]
//}