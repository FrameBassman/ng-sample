import { Component, Input, transition } from '@angular/core';

@Component( {
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent {
    @Input() user;
    isPinned = false;

    onClick() {
        this.isPinned = true;
    }
}
