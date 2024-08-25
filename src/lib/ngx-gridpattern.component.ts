import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'om-gridpattern',
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./ngx-gridpattern.component.html",
  styleUrl: "./ngx-gridpattern.component.scss",
})
export class NgxGridpatternComponent {
  @ViewChild('OmGridPatternBackground')
  elementRef!: ElementRef<HTMLElement>;

  @Input("styleClass")
  styleClass?: string;

  @Input("smallGrid")
  smallGrid = false;

  @Input("gridColor")
  set gridColorValue(color: string) {
    this.gridColor = color;
    this.setGridStyle();
  }

  gridColor: string = 'rgba(255, 255, 255, 0.2)';

  @Input("gradientColor")
  set gradientColorValue(color: string) {
    this.gradientColor = color;
    this.setGridStyle();
  }

  gradientColor: string = 'rgb(0, 0, 0)';

  gridStyle: any = {};

  setGridStyle(): void {
    const dataUri = `data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='${this.gridColor}' %3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e`;
    this.gridStyle["background-image"] = `url("${dataUri}")`;
    this.gridStyle["--om-gridpattern-gradient-color"] = this.gradientColor;
  }
}
