import Service from "../service"
import {updateTile, addTile} from '../actions'

export default (dispatch, buildId) => {
    var getBuild = function (b) {
        return function (index) {
            Service('/Wanapp/_apis/build/builds?definitions=' + b + '&$top=1&api-version=2.0',
                function (result) {
                    dispatch(updateTile(index, { builds: result }));
                }.bind(this));
        };
    };

    var service = getBuild(buildId);
    dispatch(addTile({ type: 'build', buildId: buildId, service: service }));
}