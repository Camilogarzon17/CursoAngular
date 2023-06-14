import { Component } from '@angular/core';

import {products} from './Models/Product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgparent = '';
  showImage = true;

  onloaded(img:string){
    console.log('log padre', img);
  }

  toggleImg(){
    this.showImage = !this.showImage;
  }
}
