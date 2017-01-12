import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';

import { AuthService } from './user/auth.service';

@Component({
    selector: 'pm-app',
    templateUrl: './app/app.component.html'
})
export class AppComponent {
    pageTitle: string = 'Acme Product Management';
    loading: boolean = true;

    constructor(private authService: AuthService,
                private router: Router) {

        router.events.subscribe((routerEvent: Event) => {
            this.watchRoutes(routerEvent);
        });
    }

    logIn(): void {
        // this.router.navigate(['/login', { outlets: { popup: ['messages'] } }]);
        this.router.navigateByUrl('/login(popup:messages)');
    }

    logOut(message: string): void {
        this.authService.logout();
        this.router.navigate(['/welcome']);
    }

    watchRoutes(routerEvent: Event): void {
        if (routerEvent instanceof NavigationStart) {
            this.loading = true;
        } 

        if (routerEvent instanceof NavigationEnd ||
            routerEvent instanceof NavigationCancel ||
            routerEvent instanceof NavigationError) {
            this.loading = false;
        }
    }
}