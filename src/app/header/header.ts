import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  isConfiguring = signal(false)
  shouldShowOptions = computed(() => this.isConfiguring() ? true : false)
  toggleDropdown = () => {
    this.isConfiguring.set(!this.isConfiguring())
  }
}
