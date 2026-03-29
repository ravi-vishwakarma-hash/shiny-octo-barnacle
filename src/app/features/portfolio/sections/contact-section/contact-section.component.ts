import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CONTACT_LINKS } from '../../../../core/data/portfolio.data';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';
import { InViewDirective } from '../../../../shared/directives/in-view.directive';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [ReactiveFormsModule, SectionHeadingComponent, InViewDirective],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {
  private readonly fb = inject(FormBuilder);

  readonly contactLinks = CONTACT_LINKS;
  readonly form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });
  readonly submitLabel = 'UI-ready form';
}
