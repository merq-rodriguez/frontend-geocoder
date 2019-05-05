import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { ContentEditorService } from './content-editor.service';
import { ThemeListService } from './themeList.service';
import { MonacoService } from './monaco.service';
import { LanguageService } from './language.service';
import { Api } from './api.service';


const SERVICES = [
  UserService,
  ContentEditorService,
  ThemeListService,
  MonacoService,
  LanguageService,
  Api
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class ServiceDataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ServiceDataModule,
      providers: [ ...SERVICES ],
    };
  }
}
