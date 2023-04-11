import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtracaoPageComponent } from './pages/atracao-page/atracao-page.component';
import { DescontosPageComponent } from './pages/descontos-page/descontos-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListaAtracoesPageComponent } from './pages/lista-atracoes-page/lista-atracoes-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { PerfilPageComponent } from './pages/perfil-page/perfil-page.component';
import { SobrePageComponent } from './pages/sobre-page/sobre-page.component';
import { DescontosPageExtendedComponent } from './pages/descontos-page-extended/descontos-page-extended.component';
import { PagamentosPageComponent } from './pages/pagamentos-page/pagamentos-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'atracoes/:atracaoId',
    component: AtracaoPageComponent,
  },
  {
    path: 'atracoes',
    component: ListaAtracoesPageComponent,
  },
  {
    path: 'descontos',
    component: DescontosPageComponent,
  },
  {
    path: 'extendido',
    component: DescontosPageExtendedComponent
  },
  {
    path: 'sobre',
    component: SobrePageComponent,
  },
  {
    path: 'perfil',
    component: PerfilPageComponent,
  },
  {
    path: 'pagamento',
    component: PagamentosPageComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
