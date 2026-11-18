import { Component, signal } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  template: `
    <h1>Hello, Angular</h1>
    <button (click)="count.set(count() + 1)">Clicked {{ count() }} times</button>
  `,
})
class App {
  count = signal(0); // signals are Angular's reactive values
}

bootstrapApplication(App);
