"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ReactDOM = require("react/lib/ReactDOM");

var _ReactDOM2 = _interopRequireDefault(_ReactDOM);

var _Tiles = require("./Tiles");

var _Tiles2 = _interopRequireDefault(_Tiles);

var _service = require("./service");

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getBuild = function getBuild(b) {
    return function () {
        (0, _service2.default)('/Wanapp/_apis/build/builds?definitions=' + b + '&$top=1&api-version=2.0', function (result) {
            this.builds = result;
        }.bind(this));
    };
};

var datas = [{
    name: 'Tile1',
    type: 'time',
    service: function service() {
        var d = new Date();
        this.name = d.toTimeString();
    }
}, {
    name: 'Tile1',
    type: 'build',
    service: getBuild(6)
}, {
    name: 'Tile2',
    type: 'build',
    service: getBuild(7)
}, {
    name: 'Tile2',
    type: 'build',
    service: getBuild(20)
}];

var Main = function (_Component) {
    _inherits(Main, _Component);

    function Main() {
        _classCallCheck(this, Main);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Main).apply(this, arguments));
    }

    _createClass(Main, [{
        key: "getInitialState",
        value: function getInitialState() {
            return { data: datas };
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.me = this;
            var myVar = setInterval(this.myTimer, 2000, this);
        }
    }, {
        key: "myTimer",
        value: function myTimer(me) {
            datas.forEach(function (b) {
                return b.service();
            });
            var d = new Date();
            me.setState({
                data: datas
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(_Tiles2.default, { data: datas });
        }
    }]);

    return Main;
}(_react.Component);

var mainNode = document.getElementById('main');
_ReactDOM2.default.render(_react2.default.createElement(Main, null), mainNode);

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