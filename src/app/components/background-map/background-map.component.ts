import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';

import { Map, initialMap } from '../../models/map.model';

@Component({
  selector: 'app-background-map',
  templateUrl: './background-map.component.html',
  styleUrls: ['./background-map.component.scss'],
})
export class BackgroundMapComponent {
  @Input() map: Map = initialMap;
}
