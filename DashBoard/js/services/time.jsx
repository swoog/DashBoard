import {updateTile, addTile} from '../actions'

export default (dispatch) => {
    var service = function(index) {
        var d = new Date();
        dispatch(updateTile(index, {name: d.toLocaleTimeString()}))
    };
    dispatch(addTile({ type: 'time', service: service }));
}