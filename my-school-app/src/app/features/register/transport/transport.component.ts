import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppContainerComponent } from '../../../layouts/app-container/app-container.component';

@Component({
  selector: 'app-transport',
  standalone: true,
  imports: [AppContainerComponent],
  templateUrl: './transport.component.html',
  styleUrl: './transport.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransportComponent { }
