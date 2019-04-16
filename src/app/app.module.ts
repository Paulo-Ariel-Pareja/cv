import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './layout/profile/profile.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';
import { OtrosComponent } from './components/otros/otros.component';
import { YoComponent } from './components/yo/yo.component';
import { SocialComponent } from './components/social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PerfilComponent,
    EducacionComponent,
    CursosComponent,
    ExperienciaComponent,
    SkillsComponent,
    FooterComponent,
    OtrosComponent,
    YoComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
