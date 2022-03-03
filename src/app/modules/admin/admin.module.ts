import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule } from '@angular/router';

import { MainComponent } from '../template/main/main.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { ChipsModule } from 'primeng/chips';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { InplaceModule } from 'primeng/inplace';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KnobModule } from 'primeng/knob';
import { LightboxModule } from 'primeng/lightbox';
import { ListboxModule } from 'primeng/listbox';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrderListModule } from 'primeng/orderlist';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { PickListModule } from 'primeng/picklist';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { SkeletonModule } from 'primeng/skeleton';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SliderModule } from 'primeng/slider';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SplitterModule } from 'primeng/splitter';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { TerminalModule } from 'primeng/terminal';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { TimelineModule } from 'primeng/timeline';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { AppCodeModule } from '../template/code/code.component';
import { MessageService, ConfirmationService, SharedModule } from 'primeng/api';
import { ViewUsersComponent } from './components/view-users/view-users.component';
import { ReactiveFormsModule } from '@angular/forms';

import { UserProfileComponent } from '../feature/user-profile/user-profile.component';
import { FeatureModule } from '../feature/feature.module';
import { ViewCarsComponent } from '../feature/view-cars/view-cars.component';
import { DashboardComponent } from '../feature/dashboard/dashboard.component';
@NgModule({
  declarations: [

    ViewUsersComponent,


  
  ],
  imports: [
    CommonModule,
    AccordionModule,
      AutoCompleteModule,
      AvatarModule,
      AvatarGroupModule,
      BadgeModule,
      BreadcrumbModule,
      ButtonModule,
      CalendarModule,
      CardModule,
      CarouselModule,
      ReactiveFormsModule,
      CascadeSelectModule,
      ChartModule,
      CheckboxModule,
      ChipModule,
      ChipsModule,
      CodeHighlighterModule,
      ConfirmDialogModule,
      ConfirmPopupModule,
      ColorPickerModule,
      ContextMenuModule,
      DataViewModule,
      DialogModule,
      DividerModule,
      DropdownModule,
      FieldsetModule,
      FileUploadModule,
      FullCalendarModule,
      GalleriaModule,
      ImageModule,
      InplaceModule,
      InputNumberModule,
      InputMaskModule,
      InputSwitchModule,
      InputTextModule,
      InputTextareaModule,
      KnobModule,
      LightboxModule,
      ListboxModule,
      MegaMenuModule,
      MenuModule,
      MenubarModule,
      MessageModule,
      MessagesModule,
      MultiSelectModule,
      OrderListModule,
      OrganizationChartModule,
      OverlayPanelModule,
      PaginatorModule,
      PanelModule,
      PanelMenuModule,
      PasswordModule,
      PickListModule,
      ProgressBarModule,
      RadioButtonModule,
      RatingModule,
      RippleModule,
      ScrollPanelModule,
      ScrollTopModule,
      SelectButtonModule,
      SidebarModule,
      SkeletonModule,
      SlideMenuModule,
      SliderModule,
      SplitButtonModule,
      SplitterModule,
      StepsModule,
      TableModule,
      TabMenuModule,
      TabViewModule,
      TagModule,
      TerminalModule,
      TimelineModule,
      TieredMenuModule,
      ToastModule,
      ToggleButtonModule,
      ToolbarModule,
      TooltipModule,
      TreeModule,
      TreeTableModule,
      VirtualScrollerModule,
      AppCodeModule,
      FeatureModule,

    RouterModule.forChild([
      {path:'',component: MainComponent, children:[
      {path:'', redirectTo: 'admin', pathMatch: 'full'},
      {path:'dashboard',component:DashboardComponent},
      {path:'viewcars',component:ViewCarsComponent},
      {path:'viewusers',component:ViewUsersComponent},
      {path:'profile',component:UserProfileComponent},
      ]},
    ]),
    
  ],
   exports:[],
   providers: [ MessageService, ConfirmationService]

})
export class AdminModule { }