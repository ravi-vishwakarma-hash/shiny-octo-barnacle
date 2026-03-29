import { Component, Input } from '@angular/core';
import { InViewDirective } from '../../directives/in-view.directive';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  imports: [InViewDirective],
  templateUrl: './section-heading.component.html',
  styleUrl: './section-heading.component.scss'
})
export class SectionHeadingComponent {
  @Input({ required: true }) eyebrow = '';
  @Input({ required: true }) title = '';
  @Input() description = '';
}
