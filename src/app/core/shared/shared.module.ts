import { NgModule } from "@angular/core";
import { EmptyStateComponent } from "../components/empty-state/empty-state.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { LoadingStateComponent } from "../components/loading-state/loading-state.component";
const modules = [EmptyStateComponent, CommonModule, RouterModule, LoadingStateComponent];
@NgModule({
  imports: [...modules],
  exports: [...modules]
})

export class SharedModule {

}
