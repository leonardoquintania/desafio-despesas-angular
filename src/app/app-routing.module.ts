import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetahesSenadoresComponent } from './components/detahes-senadores/detahes-senadores.component';
import { ListSenadoresComponent } from './components/list-senadores/list-senadores.component';

const routes: Routes = [
  { path: 'senadores', component: ListSenadoresComponent },
  { path: 'senadores/:id', component: DetahesSenadoresComponent },
  { path: '', redirectTo: 'senadores', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
