import { Component } from '@angular/core';
import { Assets } from '../../shared/assets';

@Component({
  selector: 'bl-loading-state',
  standalone: true,
  imports: [],
  templateUrl: './loading-state.component.html',
  styleUrl: './loading-state.component.scss'
})
export class LoadingStateComponent {
  LOADING_IMAGE = Assets.IMAGES.LOADING_GIF
}
