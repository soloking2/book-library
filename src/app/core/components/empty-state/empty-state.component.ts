import { Component, Input } from '@angular/core';
import { EmptyState } from '../../models/empty-state.model';

@Component({
  selector: 'bl-empty-state',
  standalone: true,
  imports: [],
  templateUrl: './empty-state.component.html',
  styleUrl: './empty-state.component.scss'
})
export class EmptyStateComponent {
@Input() emptyState!: EmptyState;
}
