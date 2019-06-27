import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import { RouteInfo } from 'src/app/@theme/components/navroutes/navroutes.component';
import { LanguageService } from 'src/app/@core/services/language.service';
import { AuthService } from 'src/app/@core/services/auth.service';
import { ThemeService } from 'src/app/@core/services/theme.service';

@Component({
  selector: "app-language-list",
  templateUrl: "./language-list.component.html",
  styleUrls: ["./language-list.component.css"]
})
export class LanguageListComponent implements OnInit {
  private user: any;
  public languageList = [];

  constructor(
    private router: Router,
    private languageService: LanguageService,
    private themeService: ThemeService,
    private authUser: AuthService  
  ) {
           
  }

  ngOnInit() {
    console.log(" ========== RESQUEST TO LANGUAGE ==========")
     this.authUser.userObservable$.subscribe( user => {
      this.user = user
      console.log(this.user)
      this.languageService.getLanguages(this.user.idUser).subscribe(res => {
        this.languageList = res;
        console.log(this.languageList)
      });
     }); 
  }


  getRouteTheme(language: any) {
      let extras: NavigationExtras = {
        queryParams: {
          "idlanguage": language.idlanguage,
          "name": language.name,
          "description": language.description,
          "image": language.image,
        }
      }
      this.router.navigate(["/admin/thematic-content/language"], extras); 
  }

  public getRoutesItem(){
    return ROUTES_LANGUAJELIST; 
  }
}

const ROUTES_LANGUAJELIST: RouteInfo[] = [
  { path: '/admin/dashboard', icon: "dashboard", title: "Home", class: "", active: true },
  { path: '/admin/thematic-content/menu-language', icon: "school", title: "Menu Lenguaje", class: "", active: true },
  { path: '', icon: "school", title: "Listado de Lenguajes", class: "", active: false },
];