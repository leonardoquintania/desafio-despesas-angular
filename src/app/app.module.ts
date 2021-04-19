import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';

import { ListSenadoresComponent } from './components/list-senadores/list-senadores.component';
import { DetahesSenadoresComponent } from './components/detahes-senadores/detahes-senadores.component';
import { FormatDespesaPipe } from './pipes/format-despesa.pipe';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { MatDividerModule } from '@angular/material/divider';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    ListSenadoresComponent,
    DetahesSenadoresComponent,
    FormatDespesaPipe,
    FormatDatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatDividerModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
