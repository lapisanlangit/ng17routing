import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
export interface vehicle {
  id: number;
  name: string;
  price: number;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  quantity = signal(1);

  qtyAvailable = signal([1, 2, 3, 4, 5, 6]);
  selectedVehicle = signal<vehicle>({ id: 1, name: 'AT-AT', price: 5000 });
  vehicles = signal<vehicle[]>([]);
  exPrice = computed(() => this.selectedVehicle().price * this.quantity());

  constructor() {
    console.log(this.quantity());

    //this.quantity.update((qty) => qty * 2);
  }

  qtyeff = effect(() => console.log('Latest quantity ', this.quantity()));

  onQuantitySelected(qty: number) {
    this.quantity.set(qty);
  }
}
