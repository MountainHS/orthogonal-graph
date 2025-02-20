import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseGraphComponent } from './base-graph/base-graph.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { TreemapComponent } from './treemap/treemap.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseGraphComponent,
    WorkspaceComponent,
    TreemapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
