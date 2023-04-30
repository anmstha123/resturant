import { Component } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { TopNavComponent } from 'src/app/components/top-nav/top-nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resturantApp';
}
