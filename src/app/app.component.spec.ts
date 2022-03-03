import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { BreadcrumbService } from './core/services/breadcrumb.service';
import { TopBarComponent } from './modules/template/profile/topbar/topbar.component';
import { BreadcrumbComponent } from './modules/template/profile/breadcrumb/breadcrumb.component';
import { FooterComponent } from './modules/template/profile/footer/footer.component';
import { MenuComponent } from './modules/menu/menu.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { MainComponent } from './modules/template/profile/main/main.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, RouterTestingModule, AccordionModule, PanelModule],
            declarations: [
                AppComponent,
                MainComponent,
                TopBarComponent,
                MenuComponent,
                ProfileComponent,
                FooterComponent,
                BreadcrumbComponent
            ],
            providers: [BreadcrumbService]
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
