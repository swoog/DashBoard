import {closeSettings, gotoSettings} from '../js/actions'
import {dashboardreducer} from '../js/dashboardreducer'

describe('Settings',
    function() {
        it('Settings at startup for first time',
            function() {
                var state = dashboardreducer();
                expect(state).toEqual({mode:'SETTINGS'});
            });
        it('is close',
            function() {
                var action = closeSettings();
                var state = dashboardreducer({mode:'SETTINGS'}, action);
                expect(state).toEqual({mode:'DASHBOARD'});
            });
        it('goto settings',
            function() {
                var action = gotoSettings();
                var state = dashboardreducer({mode:'DASHBOARD'}, action);
                expect(state).toEqual({mode:'SETTINGS'});
            });
    });