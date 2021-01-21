import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { BrandComponent } from './brand/brand.component';
import { TileComponent } from './tile/tile.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  imports: [
    CommonModule, HeaderComponent, FooterComponent, MainComponent, BrandComponent, Notification, TileComponent, BannerComponent
  ],
  declarations: [SharedComponent],
  exports:[
    HeaderComponent, FooterComponent, MainComponent, BrandComponent, Notification, TileComponent, BannerComponent
  ]
})
export class SharedModule { }
