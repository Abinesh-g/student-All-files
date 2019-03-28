import { NgModule } from '@angular/core';
import {  RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';

import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

import {InsertComponent} from './insert/insert.component';
import {UpdateComponent} from './update/update.component';
import {ViewComponent} from './view/view.component';
import { SubjectComponent } from './subject/subject.component';
import { MarkComponent } from './mark/mark.component';
import { ChatComponent } from './chat/chat.component';
const routes: Routes = [
	{ path:'', redirectTo:' ', pathMatch:'full' },
	{ path:'login', component: LoginComponent },
	{ path:'register', component: RegisterComponent },
	{ path:'insert', component: InsertComponent },
	{ path:'update', component: UpdateComponent },
	{ path:'view', component: ViewComponent },
	{ path:'subject', component: SubjectComponent },
	{ path:'mark', component: MarkComponent },
	{ path:'chat', component: ChatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }