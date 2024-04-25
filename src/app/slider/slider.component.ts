import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit{
  ngOnInit(): void {}
  slides = [
    { image: 'https://tse2.mm.bing.net/th?id=OIP.6BwkUUfvRDHNMLZtZltBFQHaE7&pid=Api&P=0&h=1800', caption: 'Caption 1' },
    { image: 'https://tse3.mm.bing.net/th?id=OIP.HEK7mVVntvJSmWPg1c2zSAHaFk&pid=Api&P=0&h=1200', caption: 'Caption 2' },
    { image: 'https://tse4.explicit.bing.net/th?id=OIP.lzYGzTOTo8RUQBDtPfjXyQHaFL&pid=Api&P=0&h=1200', caption: 'Caption 1' },
    { image: 'https://tse1.mm.bing.net/th?id=OIP.qBxS38n7YaPPyVMmFhCgzwHaEh&pid=Api&P=0&h=180', caption: 'Caption 2' },
    
  ];
  currentIndex = 0;

  constructor() { }

  startSlideShow() {
    setInterval(() => {
      this.nextSlide();
    }, 6000); 
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    console.log("slides content:  " +this.slides);
    console.log("inside nextslide: " +this.nextSlide);
  }

  prevSlide() {
    this.currentIndex = this.currentIndex === 0 ? this.slides.length - 1 : this.currentIndex - 1;
    console.log("inside prevSlide: " +this.prevSlide);
  }


}
