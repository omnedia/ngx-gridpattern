# ngx-gridpattern

`@omnedia/ngx-gridpattern` is an Angular library that provides a customizable grid pattern background. The component allows for the easy customization of grid and gradient colors, making it a great addition for adding visually engaging backgrounds to sections of your Angular application.

## Features

- Customizable SVG grid pattern with adjustable colors.
- Gradient background that can be customized independently of the grid pattern.
- Lightweight and easy to integrate as a standalone component.

## Installation

Install the library using npm:

```bash
npm install @omnedia/ngx-gridpattern
```

## Usage

Import the `NgxGridpatternComponent` in your Angular module or component:

```typescript
import { NgxGridpatternComponent } from '@omnedia/ngx-gridpattern';

@Component({
  ...
  imports: [
    ...
    NgxGridpatternComponent,
  ],
  ...
})
```

Use the component in your template:

```html
<om-gridpattern [gridColor]="'rgba(255, 255, 255, 0.5)'" [gradientColor]="'#ff69b4'" styleClass="custom-grid">
  <h1>Welcome to Grid Patterns</h1>
</om-gridpattern>
```

## How It Works

- Grid and Gradient Colors: The grid and gradient colors are independently adjustable via the gridColor and gradientColor inputs. This allows for a wide range of styling possibilities.
- Global and Custom Styling: The .om-gridpattern container can be styled globally or with a custom styleClass. The content inside the component will retain its original styling.

## API

```html
<om-gridpattern
  [gridColor]="gridColor"
  [gradientColor]="gradientColor"
  styleClass="your-custom-class"
>
  <ng-content></ng-content>
</om-gridpattern>
```

- `gridColor` (optional): The color of the grid lines. Accepts any valid CSS color value (e.g., 'rgba(255, 255, 255, 0.5)').
- `gradientColor` (optional): The background color of the gradient overlay. Accepts any valid CSS color value (e.g., '#ff69b4').
- `styleClass` (optional): A custom CSS class to apply to the .om-gridpattern container for additional styling.

## Example

```html

<om-gridpattern [gridColor]="'rgba(0, 255, 255, 0.4)'" [gradientColor]="'#000000'" styleClass="grid-container">
  <div class="content">
    <p>Grid pattern with customizable colors</p>
  </div>
</om-gridpattern>
```

This will create a grid background with cyan grid lines and a black gradient overlay.

## Contributing

Contributions are welcome. Please submit a pull request or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License.