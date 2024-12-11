import { Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { LoginComponent } from './layout/login/login.component';
import { MaindashboardComponent } from './layout/maindashboard/maindashboard.component';
import { MypipeComponent } from './mypipe/mypipe.component';
import { AngformComponent } from './forms/angform/angform.component';
import { UtdfComponent } from './forms/utdf/utdf.component';
import { RtfComponent } from './forms/rtf/rtf.component';
import { PagenotfoundComponent } from './layout/pagenotfound/pagenotfound.component';

export const routes: Routes = [

    //2. default routing
    // {path:"", component:LoginComponent },

    // 3. redirecting routing 
    {path:"", redirectTo: "login", pathMatch: "full" },

    //1. naming routing
    {path:"login", component:LoginComponent },
    {path:"maindashboard", component:MaindashboardComponent },
    {path:"databinding", component:DatabindingComponent },

    //4. parameterize routing
    {path:"mypipe/:id", component:MypipeComponent},

    // 5. child routing 
    {path:"angform", component:AngformComponent, children:[
        {path:"utdf", component:UtdfComponent},
        {path:"rtf", component:RtfComponent}
    ]},
    // 6. wild card routing
    {path:"**", component:PagenotfoundComponent}
];
