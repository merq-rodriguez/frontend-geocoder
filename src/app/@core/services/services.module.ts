import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { ContentEditorService } from './content-editor.service';
import { ThemathicService } from './themathic.service';
import { MonacoService } from './monaco.service';
import { LanguageService } from './language.service';
import { Api } from './api.service';
import { ThemeService } from './theme.service';
import { SubthemeService } from './subtheme.service';
import { SnackBarService } from './snackbar.service';
import { LocalstorageService } from './localstorage.service';
import { UploadService } from './upload-file.service';
import { ExerciseService } from './exercise.service';
import { Judge0Service } from './judge0.service';
import { AuthService } from './auth.service';
import { CodeService } from './code.service';


const SERVICES = [
  Api,
  UserService,
  AuthService,
  ContentEditorService,
  ThemathicService,
  MonacoService,
  LanguageService,
  ThemeService,
  SubthemeService,
  SnackBarService,
  LocalstorageService,
  UploadService,
  ExerciseService,
  Judge0Service,
  CodeService
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
