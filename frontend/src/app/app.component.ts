import { Component } from '@angular/core';
import Glightbox from 'glightbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'posts';
  lightbox:any;
  ngOnInit(){
      this.lightbox = Glightbox({
        selector: ".glightbox"
      })
  }
}
