import {CommonModule} from "@angular/common";
import {ChangeDetectionStrategy, Component, computed, Input, signal} from "@angular/core";
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';

@Component({
  selector: "om-gridpattern",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./ngx-gridpattern.component.html",
  styleUrl: "./ngx-gridpattern.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxGridpatternComponent {
  @Input("styleClass")
  styleClass?: string;

  @Input("smallGrid")
  set smallGridValue(smallGrid: boolean) {
    this.smallGrid$.set(smallGrid);
  }

  @Input("gridColor")
  set gridColorValue(color: string) {
    this.gridColor$.set(color);
  }

  @Input("gradientColor")
  set gradientColorValue(color: string) {
    this.gradientColor$.set(color);
  }

  readonly smallGrid$ = signal(false);
  readonly gridColor$ = signal("rgba(0, 0, 0, 0.2)");
  readonly gradientColor$ = signal("rgba(255, 255, 255, 0.8)");

  readonly backgroundImage = computed<SafeStyle>(() => {
    const size = this.smallGrid$() ? 16 : 32;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32" width="${size}" height="${size}"
      fill="none" stroke="${this.gridColor$()}">
      <path d="M0 .5H31.5V32"/>
    </svg>`;
    const uri = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
    return this.sanitizer.bypassSecurityTrustStyle(`url("${uri}")`);
  });

  readonly gradientColor = computed(() => ({
    '--om-gridpattern-gradient-color': this.gradientColor$(),
  }));

  constructor(private readonly sanitizer: DomSanitizer) {
  }
}
