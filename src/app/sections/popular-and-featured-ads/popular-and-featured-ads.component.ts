import { CommonModule, formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { AdsService } from '../../services/ads.service';
import { FormatDatePipe } from '../../pipes/format-date.pipe';

@Component({
  selector: 'app-popular-and-featured-ads',
  imports: [CommonModule, FormatDatePipe],
  templateUrl: './popular-and-featured-ads.component.html',
  styleUrl: './popular-and-featured-ads.component.scss',
})
export class PopularAndFeaturedAdsComponent {
  activeBtn: any = 'popular';
  pages: any;
  pageActive: any = 1;
  hide: boolean=false
  constructor(private _ads: AdsService) {}
  ads: any[] = [];
  ngOnInit(): void {
this.getAds(1)
  }
  getAds(page:any){
    this.hide = true
    this._ads.getData(page).subscribe((data: any) => {
      if (data.total % data.limit >= 1) {
        this.pages = new Array(Math.trunc(data.total / data.limit + 1));
      } else {
        this.pages = data.total / data.limit;
        this.pages = new Array(data.total / data.limit);
      }
      this.ads = data.products;
    this.hide = false

    });
  }
  getPage(pageNum: any) {
    this.pageActive = pageNum;
    this.getAds(this.pageActive)

  }
  next() {
    if (this.pageActive + 5 <= this.pages.length) {
      this.pageActive = this.pageActive + 5;
    } else {
      this.pageActive = this.pages.length;
    }
    this.getAds(this.pageActive)

  }
  prev() {


    if (this.pageActive - 5 >= 1) {
      this.pageActive = this.pageActive - 5;
    } else {
      this.pageActive = 1;
    }
    this.getAds(this.pageActive)

  }
  featured(){
    this.hide = true
    setTimeout(() => {
      this.activeBtn = 'featured'
      this.hide = false

    }, 1000);
  }
  // hideAds(){
  //   this.hide = true
  //   setTimeout(() => {
  //     this.hide = false

  //   }, 600);
  // }
}
