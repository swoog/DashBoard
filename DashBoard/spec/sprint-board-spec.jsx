import {addTilesBoard, addTile, addSprintBoard, updateSprintBoard} from '../js/actions'
import {dashboardreducer} from '../js/dashboardstore'

describe('Sprint Boards',
    function() {     
        it('Add sprint board',
            function() {
                var action = addSprintBoard('My board', 'http://', 'MyVSTSProject');
                var state = {};

                state = dashboardreducer(state, action);

                expect(state).toEqual({ boards: [{ name: 'My board', url:'http://', project:'MyVSTSProject', type: 'SPRINT', sprints: [], backLog: [] }] });
            });
        it('Update Sprint board',
            function() {
                var data = {
                    "count": 3,
                    "value": [
                      {
                          "id": 524,
                          "rev": 12,
                          "fields": {
                              "System.Id": 524,
                              "System.IterationPath": "Wanapp\\Sprint 1",
                              "System.WorkItemType": "Product Backlog Item",
                              "System.State": "New",
                              "System.Title": "Se déconnecte",
                              "Microsoft.VSTS.Scheduling.Effort": 1,
                              "Microsoft.VSTS.Common.BacklogPriority": 75187965
                          },
                          "url": "https://cellenza-studio.visualstudio.com/DefaultCollection/_apis/wit/workItems/524"
                      },                      {
                          "id": 523,
                          "rev": 12,
                          "fields": {
                              "System.Id": 523,
                              "System.IterationPath": "Wanapp\\Sprint 1",
                              "System.WorkItemType": "Product Backlog Item",
                              "System.State": "Done",
                              "System.Title": "Se déconnecte",
                              "Microsoft.VSTS.Scheduling.Effort": 1,
                              "Microsoft.VSTS.Common.BacklogPriority": 75187966
                          },
                          "url": "https://cellenza-studio.visualstudio.com/DefaultCollection/_apis/wit/workItems/524"
                      },
                      {
                          "id": 568,
                          "rev": 9,
                          "fields": {
                              "System.Id": 568,
                              "System.IterationPath": "Wanapp",
                              "System.WorkItemType": "Product Backlog Item",
                              "System.State": "New",
                              "System.Title": "Affiche le détail d'un rendez-vous ou alerte sur une page scannée",
                              "Microsoft.VSTS.Common.BacklogPriority": 1108646789,
                              "Microsoft.VSTS.Scheduling.Effort": 3
                          },
                          "url": "https://cellenza-studio.visualstudio.com/DefaultCollection/_apis/wit/workItems/568"
                      },
                      {
                          "id": 569,
                          "rev": 7,
                          "fields": {
                              "System.Id": 569,
                              "System.IterationPath": "Wanapp",
                              "System.WorkItemType": "Product Backlog Item",
                              "System.State": "New",
                              "System.Title": "Ajoute une alerte depuis l'agenda",
                              "Microsoft.VSTS.Common.BacklogPriority": 1,
                              "Microsoft.VSTS.Scheduling.Effort": 1
                          },
                          "url": "https://cellenza-studio.visualstudio.com/DefaultCollection/_apis/wit/workItems/569"
                      }
                    ]
                };

                var action = updateSprintBoard(data);
                var state = dashboardreducer({ boards: [{ name: 'My board', type: 'SPRINT' }] }, action);
                expect(state)
                    .toEqual({
                        boards: [
                            {
                                name: 'My board',
                                type: 'SPRINT',
                                sprints: [
                                    {
                                        name: 'Sprint 1',
                                        effort: 2,
                                        sprintLog: [
                                            { id: 524, title: 'Se déconnecte', effort: 1, state: 'New' },
                                            { id: 523, title: 'Se déconnecte', effort: 1, state: 'Done' }
                                        ]
                                    }
                                ],
                                backLog: [
                                    { id: 569, title: 'Ajoute une alerte depuis l\'agenda', effort: 1, state: 'New' },
                                    {
                                        id: 568,
                                        title: 'Affiche le détail d\'un rendez-vous ou alerte sur une page scannée',
                                        effort: 3,
                                        state: 'New'
                                    }
                                ]
                            }
                        ]
                    });

            });
        it('Update an ordered Sprint board',
            function() {
                var data = {
                    "count": 3,
                    "value": [
                      {
                          "id": 2,
                          "rev": 12,
                          "fields": {
                              "System.Id": 2,
                              "System.IterationPath": "Wanapp\\Sprint 2",
                              "System.WorkItemType": "Product Backlog Item",
                              "System.State": "New",
                              "System.Title": "",
                              "Microsoft.VSTS.Scheduling.Effort": 0,
                              "Microsoft.VSTS.Common.BacklogPriority": 0
                          }
                      },
                      {
                          "id": 3,
                          "rev": 12,
                          "fields": {
                              "System.Id": 3,
                              "System.IterationPath": "Wanapp\\Sprint 10",
                              "System.WorkItemType": "Product Backlog Item",
                              "System.State": "New",
                              "System.Title": "",
                              "Microsoft.VSTS.Scheduling.Effort": 0,
                              "Microsoft.VSTS.Common.BacklogPriority": 0
                          }
                      },
                      {
                          "id": 1,
                          "rev": 12,
                          "fields": {
                              "System.Id": 1,
                              "System.IterationPath": "Wanapp\\Sprint 1",
                              "System.WorkItemType": "Product Backlog Item",
                              "System.State": "New",
                              "System.Title": "",
                              "Microsoft.VSTS.Scheduling.Effort": 0,
                              "Microsoft.VSTS.Common.BacklogPriority": 0
                          }
                      },

                    ]
                };

                var action = updateSprintBoard(data);
                var state = dashboardreducer({ boards: [{ name: 'My board', type: 'SPRINT' }] }, action);
                expect(state)
                    .toEqual({
                        boards: [
                            {
                                name: 'My board',
                                type: 'SPRINT',
                                sprints: [
                                    {
                                        name: 'Sprint 1',
                                        effort: 0,
                                        sprintLog: [
                                            { id: 1, title: '', effort: 0, state: 'New' }
                                        ]
                                    },
                                    {
                                        name: 'Sprint 2',
                                        effort: 0,
                                        sprintLog: [
                                            { id: 2, title: '', effort: 0, state: 'New' }
                                        ]
                                    },
                                    {
                                        name: 'Sprint 10',
                                        effort: 0,
                                        sprintLog: [
                                            { id: 3, title: '', effort: 0, state: 'New' }
                                        ]
                                    }
                                ],
                                backLog: [
                                ]
                            }
                        ]
                    });

            });
        it('Update a Sprint board and remove sprint done',
    function() {
        var data = {
            "count": 3,
            "value": [
              {
                  "id": 1,
                  "rev": 12,
                  "fields": {
                      "System.Id": 1,
                      "System.IterationPath": "Wanapp\\Sprint 1",
                      "System.WorkItemType": "Product Backlog Item",
                      "System.State": "Done",
                      "System.Title": "",
                      "Microsoft.VSTS.Scheduling.Effort": 0,
                      "Microsoft.VSTS.Common.BacklogPriority": 0
                  }
              },
              {
                  "id": 2,
                  "rev": 12,
                  "fields": {
                      "System.Id": 2,
                      "System.IterationPath": "Wanapp\\Sprint 1",
                      "System.WorkItemType": "Product Backlog Item",
                      "System.State": "Done",
                      "System.Title": "",
                      "Microsoft.VSTS.Scheduling.Effort": 0,
                      "Microsoft.VSTS.Common.BacklogPriority": 0
                  }
              }
            ]
        };

        var action = updateSprintBoard(data);
        var state = dashboardreducer({ boards: [{ name: 'My board', type: 'SPRINT' }] }, action);
        expect(state)
            .toEqual({
                boards: [
                    {
                        name: 'My board',
                        type: 'SPRINT',
                        sprints: [],
                        backLog: []
                    }
                ]
            }   );

    });

    });