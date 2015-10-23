angular.module('employeeapp', []).
controller('employeeinfo', function ($scope) {
    $scope.employee = [
        {
            'title' : 'President',
            'firstName': 'Obama',
            'middleName': 'Hussein',
            'lastName' : 'Barrack',
            'dob' : '01/01/1956',
            'qualification' : 'Major in (Political Science)',
            'specialty' : 'International Relations',
            'department' : 'Sales'
        },
        {
            'title' : 'Vice-President',
            'firstName': 'Joe',
            'middleName': 'Robinette',
            'lastName' : 'Biden',
            'dob' : '11/20/1942',
            'qualification' :' Double Major in (Political Science)',
            'specialty' : 'N/A',
            'department' : 'Service'
        },
        {
            'title' : 'Senator',
            'firstName': 'Mitchell',
            'middleName': 'Addison',
            'lastName' : 'McConnell',
            'dob' : '02/20/1942',
            'qualification' : 'B.A. History',
            'specialty' : 'Foreign Policy',
            'department' : 'Call Center'
        }
    ];
        $scope.department = [
            {
                'departmentid': '0',
                'departmentname' : 'All',
                'filterparam' : ''
            },
            {
                'departmentid': '1',
                'departmentname' : 'Sales',
                'filterparam' : 'Sales'
            },
            {
                'departmentid': '2',
                'departmentname' : 'Service',
                'filterparam' : 'Service'
            },
            {
                'departmentid': '3',
                'departmentname' : 'Call Center',
                'filterparam' : 'Call Center'
            }
        ];
});