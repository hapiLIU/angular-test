import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { JsonEditorComponent } from './json-editor/json-editor.component';
import { CountDownComponent } from './count-down/count-down.component';
import { DrawingComponent } from './drawing/drawing.component';
import { MapComponent } from './map/map.component';
import { LuckDrawComponent } from './luck-draw/luck-draw.component';
import { JSONEditor } from 'vanilla-jsoneditor';

const COMPONENTS: never[] = [];
const HEADER_COMPONENTS = [JsonEditorComponent, CountDownComponent, DrawingComponent, MapComponent, LuckDrawComponent];
// const CUSTOM_ELEMENTS_SCHEMA=[JSONEditor]
@NgModule({
    imports: [SharedModule],
    exports: [...COMPONENTS],
    declarations: [...COMPONENTS, ...HEADER_COMPONENTS],
    entryComponents: [],
    // schemas:[...CUSTOM_ELEMENTS_SCHEMA]
})
export class codeModule { }
