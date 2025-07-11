import { Routes } from '@angular/router';
import { Client } from './pages/client/client';
import { Cuisine } from './pages/cuisine/cuisine';
import { Command } from './pages/command/command';

export const routes: Routes = [
    {
        path:'',
        redirectTo: '/client',
        pathMatch: 'full'
    },
    {
        path: 'client',
        component: Client
    },
    {
        path: 'cuisine',
        component: Cuisine
    },
    {
        path: 'command/:name',
        component: Command
    }
];
