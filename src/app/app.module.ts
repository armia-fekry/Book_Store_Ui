import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ToolbarModule} from 'primeng/toolbar';
import {SplitButtonModule} from 'primeng/splitbutton';
import {PaginatorModule} from 'primeng/paginator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CheckboxModule} from 'primeng/checkbox';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BookViewComponent } from './Content/book-view/book-view.component';
import { BookViewListComponent } from './Content/book-view-list/book-view-list.component';
import {HttpClientModule} from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {MatTableModule} from '@angular/material/table';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import {CarouselModule} from 'primeng/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DataViewModule} from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {RippleModule} from 'primeng/ripple';
import { BookServiceService } from './Content/Services/Books/book-service.service';
import {SplitterModule} from 'primeng/splitter';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AsideNavComponent } from './Content/aside-nav/aside-nav.component';
import { CarousalBooksComponent } from './Content/carousal-books/carousal-books.component';
import {RatingModule} from 'primeng/rating';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {DockModule} from 'primeng/dock';
import {BadgeModule} from 'primeng/badge';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import { BookListComponent } from './Content/book-list/book-list.component';
import { BookDetailsComponent } from './Content/book-details/book-details.component';
import { MainComponent } from './Content/main/main.component';
import {GalleriaModule} from 'primeng/galleria';
import {ImageModule} from 'primeng/image';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { CartComponent } from './Content/cart/cart.component';
import { cartservice } from './Content/Services/Cart/cart.service';
import { LogInComponent } from './log-in/log-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SidebarModule} from 'primeng/sidebar';
import {TableModule} from 'primeng/table';
import {MatChipsModule} from '@angular/material/chips';
import { ChipModule } from 'primeng/chip';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {CaptchaModule} from 'primeng/captcha';
import {MatDialogModule} from '@angular/material/dialog';
import { CartConfirmComponent } from './Content/cart-confirm/cart-confirm.component';
import {MatButtonModule} from '@angular/material/button';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BookViewComponent,
    BookViewListComponent,
    AsideNavComponent,
    CarousalBooksComponent,
    BookListComponent,
    BookDetailsComponent,
    MainComponent,
    CartComponent,
    LogInComponent,
    CartConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToolbarModule,
    CheckboxModule,
    ButtonModule,
    SplitButtonModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    DataViewModule,
    PanelModule,
    TableModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    MatChipsModule,
    ChipModule,
    ButtonModule,
    RippleModule,
    HttpClientModule,
    RatingModule,
    SplitterModule,
    MatSidenavModule,
    PaginatorModule,
    MatPaginatorModule,
    CarouselModule,
    RatingModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatInputModule,
    DockModule,
    BadgeModule,
    AvatarModule,
    AvatarGroupModule,
    GalleriaModule,
    ImageModule,
    DynamicDialogModule,
    SidebarModule,
    ToastModule,
    CaptchaModule,
    MatDialogModule,
    MatButtonModule,
    MessagesModule,
    MessageModule

  ],
  providers: [cartservice,BookServiceService,MessageService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
