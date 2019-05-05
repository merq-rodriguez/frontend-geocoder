import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  UserService } from './services/user.service';
import { ServiceDataModule } from './services/services.module';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { UserData } from './data/user.data';
import { ContentEditorData } from './data/content-editor.data';
import { ContentEditorService } from './services/content-editor.service';
import { ThemeListData } from './data/theme-list.data';
import { ThemeListService } from './services/themeList.service';
import { MonacoService } from './services/monaco.service';
import { MonacoData } from './data/monaco.data';
import { LanguageService } from './services/language.service';
import { LanguageData } from './data/language.data';




const DATA_SERVICES = [
  { provide: UserData, useClass: UserService },
  { provide:  ContentEditorData, useClass: ContentEditorService},
  { provide:  ThemeListData, useClass: ThemeListService },
  { provide:  LanguageData, useClass: LanguageService },
  { provide:  MonacoData, useClass: MonacoService }
  
];



export const CORE_PROVIDERS = [
  ...ServiceDataModule.forRoot().providers,
  ...DATA_SERVICES
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [  ],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...CORE_PROVIDERS,
      ],
    };
  }
}
