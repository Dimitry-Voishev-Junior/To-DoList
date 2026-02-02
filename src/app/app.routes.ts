import { Routes } from '@angular/router';
import { TaskList } from './task-list/task-list';
import { TaskDetails } from './task-details/task-details';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
    {path: "taskList", title: "Lista de Tarefas", component: TaskList},
    {path: "taskDetails", title: "Detalhes da Tarefa", component: TaskDetails},
    {path: "", redirectTo: "taskList", pathMatch: "full"},
    {path: "**", title: "Página não encontrada", component: PageNotFound}
];
