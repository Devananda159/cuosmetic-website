import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail implements OnInit {
  product: any = null;
  
  products: any[] = [
    {
      id: 1,
      title: 'Luxury Foundation',
      description: 'Full coverage liquid foundation with SPF 30. Perfect for all skin types and provides long-lasting coverage.',
      price: 45.99,
      image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Matte Lipstick Set',
      description: 'Collection of 6 vibrant matte lipsticks in trending colors. Long-wearing and comfortable formula.',
      price: 32.50,
      image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Eye Shadow Palette',
      description: '12-color eyeshadow palette with shimmer and matte finishes. Perfect for day and night looks.',
      price: 28.99,
      image: 'https://images.pexels.com/photos/3373717/pexels-photo-3373717.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'Moisturizing Face Cream',
      description: 'Anti-aging face cream with hyaluronic acid and vitamin C. Suitable for all skin types.',
      price: 55.00,
      image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      id: 5,
      title: 'Mascara Waterproof',
      description: 'Volumizing waterproof mascara that lasts all day. Creates dramatic lashes without clumping.',
      price: 18.75,
      image: 'https://images.pexels.com/photos/3373720/pexels-photo-3373720.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      id: 6,
      title: 'Blush & Highlighter Duo',
      description: 'Two-in-one compact with natural blush and illuminating highlighter for a radiant glow.',
      price: 24.99,
      image: 'https://images.pexels.com/photos/3373725/pexels-photo-3373725.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find(p => p.id === id);
  }
}