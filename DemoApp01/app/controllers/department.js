angular.module('employeeapp', []).
    controller('departmentinfo', function ($scope) {
        $scope.department = [
            {
                'departmentid': '1',
                'departmentname' : 'White House'
            },
            {
                'departmentid': '2',
                'departmentname' : 'White House East Wing'
            },
            {
                'departmentid': '3',
                'departmentname' : 'White House West Wing'
            }
        ];
    });