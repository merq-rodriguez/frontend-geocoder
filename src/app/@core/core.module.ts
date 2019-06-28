import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  UserService } from './services/user.service';
import { ServiceDataModule } from './services/services.module';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { UserData } from './data/user.data';
import { ContentEditorData } from './data/content-editor.data';
import { ContentEditorService } from './services/content-editor.service';
import { ThemathicData } from './data/theme-list.data';
import { ThemathicService } from './services/themathic.service';
import { MonacoService } from './services/monaco.service';
import { MonacoData } from './data/monaco.data';
import { LanguageService } from './services/language.service';
import { LanguageData } from './data/language.data';
import { ThemeService } from './services/theme.service';
import { ThemeData } from './data/theme.data';
import { SubthemeService } from './services/subtheme.service';
import { SubthemeData } from './data/subtheme-data';
import { ExerciseService } from './services/exercise.service';
import { ExerciseData } from './data/exercise.data';
import { AuthGuard } from './guards/auth.guard';




const DATA_SERVICES = [
  { provide: UserData, useClass: UserService },
  { provide:  ContentEditorData, useClass: ContentEditorService},
  { provide:  MonacoData, useClass: MonacoService },
  { provide:  ThemathicData, useClass: ThemathicService },
  { provide:  ThemeData, useClass: ThemeService },
  { provide:  SubthemeData, useClass: SubthemeService },
  { provide:  LanguageData, useClass: LanguageService },
  { provide:  ExerciseData, useClass: ExerciseService },
];

const GUARDS = [
  AuthGuard
]

export const CORE_PROVIDERS = [
  ...ServiceDataModule.forRoot().providers,
  ...DATA_SERVICES,
  ...GUARDS
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
