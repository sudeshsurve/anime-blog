import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { SpeedDialModule } from 'primeng/speeddial';
import { SliderModule } from 'primeng/slider';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { TagModule } from 'primeng/tag';
import { CarouselModule } from 'primeng/carousel';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { TreeModule } from 'primeng/tree';
import { MenuModule } from 'primeng/menu';
import { SplitButtonModule } from 'primeng/splitbutton';
import { AccordionModule } from 'primeng/accordion';
import { DividerModule } from 'primeng/divider';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessagesModule } from 'primeng/messages';
import { TabViewModule } from 'primeng/tabview';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ImageModule } from 'primeng/image';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { TabMenuModule } from 'primeng/tabmenu';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FieldsetModule } from 'primeng/fieldset';
import { TimelineModule } from 'primeng/timeline';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MenubarModule } from 'primeng/menubar';
import { PaginatorModule } from 'primeng/paginator';
import { SidebarModule } from 'primeng/sidebar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
const arrays = [
  CommonModule,
  CarouselModule,
  CalendarModule,
  PasswordModule,
  ToastModule,
  InputTextModule,
  DropdownModule,
  StepsModule,
  CardModule,
  SpeedDialModule,
  SliderModule,
  FileUploadModule,
  TableModule,
  MultiSelectModule,
  MultiSelectModule,
  MenuModule,
  CheckboxModule,
  TagModule,
  DialogModule,
  TreeModule,
  MenuModule,
  SplitButtonModule,
  ToastModule,
  AccordionModule,
  DividerModule,
  ConfirmPopupModule,
  InputTextareaModule,
  MessagesModule,
  DynamicDialogModule,
  CardModule,
  TabViewModule,
  ImageModule,
  ToastModule,
  KeyFilterModule,
  InputNumberModule,
  AutoCompleteModule,
  InputMaskModule,
  TabMenuModule,
  InputSwitchModule,
  FieldsetModule,
  TimelineModule,
  RadioButtonModule,
  MenubarModule,
  PaginatorModule,
  SidebarModule,
  ConfirmDialogModule
  

];  
@NgModule({
  imports: arrays,
  exports: [arrays],
  providers:[ ConfirmationService]
})
export class UiModule {}

