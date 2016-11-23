import {runServices} from '../js/actions/services'
import {dashboardreducer} from '../js/dashboardstore'

describe('Service',
    function() {
        it('Does not run service when no board',
         function() {
             let objService = { service: () => {} };
             spyOn(objService, 'service');
             var action = runServices(objService.service);
             var state = { };

             state = dashboardreducer(state, action);

             expect(objService.service).not.toHaveBeenCalled();
         });
        it('Run service',
         function() {
             let objService = { service: () => {} };
             spyOn(objService, 'service');
             var action = runServices(objService.service);
             var state = { boards: [{}] };

             state = dashboardreducer(state, action);

             expect(objService.service).toHaveBeenCalled();
         });
        it('Run service with board on parameter',
         function() {
             let objService = { service: () => {} };
             spyOn(objService, 'service');
             var action = runServices(objService.service);
             var state = { boards: [{name:'My Board'}] };

             state = dashboardreducer(state, action);

             expect(objService.service).toHaveBeenCalledWith({name:'My Board'});
         });
    });
