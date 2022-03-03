import { Component, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { BreadcrumbService } from 'src/app/core/services/breadcrumb.service';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent implements OnDestroy {

    subscription: Subscription;

    items: MenuItem[];

    constructor(public breadcrumbService: BreadcrumbService) {
        this.subscription = breadcrumbService.itemsHandler.subscribe(response => {
            this.items = response;
            console.log(response);
        });
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
