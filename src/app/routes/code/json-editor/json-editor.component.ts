import { Component } from '@angular/core';

@Component({
  selector: 'app-json-editor',
  templateUrl: './json-editor.component.html',
  styleUrls: ['./json-editor.component.scss']
})
export class JsonEditorComponent {
  content = {
    text: undefined,
    json: {
      greeting: 'Hello World'
    }
  }

}
