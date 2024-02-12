import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './login/login.component';
import { AddbooksComponent } from './pages/addbooks/addbooks.component';
import { BookbyidComponent } from './pages/bookbyid/bookbyid.component';
import { BookbytitleComponent } from './pages/bookbytitle/bookbytitle.component';
import { GetbookComponent } from './pages/getbook/getbook.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';


export const routes: Routes = [
    {path:'getbook',component:GetbookComponent},
    {path:'addbook',component:AddbooksComponent},
    {path:"register",component:RegisterComponent},
    {path:"login",component:LoginComponent},
    {path:"edit/:rid",component:BookbyidComponent},
    {path:"booktitle",component:BookbytitleComponent},
    { path: '', component: LoginComponent },
    
{
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    children: [
        {path:'getbook',component:GetbookComponent},
        {path:'addbook',component:AddbooksComponent},
        {path:"login",component:LoginComponent},
        {path:"edit/:rid",component:BookbyidComponent},
    ],
},
{
    path: 'user-dashboard',
    component: UserDashboardComponent,
    children: [
        {path:'getbook',component:GetbookComponent},
        {path:"login",component:LoginComponent},
        {path:"booktitle",component:BookbytitleComponent},
    ],
},
];
