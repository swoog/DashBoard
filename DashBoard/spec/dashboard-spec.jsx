import {addTilesBoard, addTile, addSprintBoard, updateSprintBoard, removeBoard, selectBoard} from '../js/actions'
import {dashboardreducer} from '../js/dashboardreducer'

describe('Tile board',
    function() {
        it('Add board',
         function() {
             var action = addTilesBoard('My board');
             var state = { boards: [] };

             state = dashboardreducer(state, action);

             expect(state).toEqual({ boards: [{ name: 'My board', tiles: [] }] });
         });
        it('Select board',
            () => {
                var action = selectBoard(1);
                var state = { selectedBoard: 0 };

                state = dashboardreducer(state, action);

                expect(state).toEqual({ selectedBoard: 1 });
            });
        it('Remove board',
            () => {
                var action = removeBoard(0);
                var state = { boards: [{name:'My board'}] };

                state = dashboardreducer(state, action);

                expect(state).toEqual({ boards: [] });
            })
        it('Add a second board',
            function() {
                var action = addTilesBoard('My board 2');
                var state = {boards:[{ name: 'My board', tiles: [] }]};

                state = dashboardreducer(state, action);

                expect(state).toEqual({ boards: [{ name: 'My board', tiles: [] }, { name: 'My board 2', tiles: [] }] });
            });
        it('Add tile',
            function() {
                var action = addTile('myTile');
                var state = dashboardreducer([{ tiles: [] }], action);
                expect(state).toEqual([{ tiles: ['myTile'] }]);
            });
        it('Update tile',
            function() {
                var state = dashboardreducer({ boards: [{ tiles: [{ name: 'mytile' }] }] },
                {
                    type: "UPDATE_TILE",
                    index: 0,
                    boardIndex: 0,
                    result: { name: 'myUpdatedTile' }
                });
                expect(state).toEqual({ boards: [{ tiles: [{ name: 'myUpdatedTile' }] }] });
            });
    });
