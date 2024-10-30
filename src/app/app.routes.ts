import { Routes } from '@angular/router';
import { GetApiComponent } from './components/APIIntegration/get-api/get-api.component';

export const routes: Routes = [

    { path: 'GETAPI', component: GetApiComponent },
    { path: '', component: GetApiComponent }, 
    { path: '', redirectTo: '/GETAPI', pathMatch: 'full' },
    { path: '**', redirectTo: '/GETAPI' } 
];
