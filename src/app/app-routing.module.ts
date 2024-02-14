import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrayComponent } from './array/array.component';
import { ArrayDetailsComponent } from './array-details/array-details.component';

const routes: Routes = [
    {
      path : "moviebutton",
      component : ArrayComponent
    },
    {
      path: "moviebutton/:id/:title",
      component : ArrayDetailsComponent
    }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
