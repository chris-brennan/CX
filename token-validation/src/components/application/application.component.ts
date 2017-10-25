import { Component } from '../../component.decorator';

@Component({
    templateUrl: require('./application.component.html')
})

/**
 * This is the TypeScript controller for our application component.  It has a single
 * function call which invokes the Gromit Service.  You can add more calls to the 
 * Gromit Service to make more REST calls.
 */
export default class ApplicationComponent {
    static $inject = ['gromitService'];
    constructor(private gromitService) {

        this.getUsers();
    }

    private users = [];

    /**
     * Load users from the middle tier and add them to the users array
     */
    getUsers() {
        let gromitService = this.gromitService;
        let users = this.users;

        gromitService.getUsers(function(data: any) {
            for (let user of data) {
                users.push(user);
            }
        });
    }
}