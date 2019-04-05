import { Component, OnInit } from "@angular/core";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: "/admin/dashboard", title: "Principal", icon: "dashboard", class: "" },
  { path: "/admin/languages/menu-language", title: "Lenguajes", icon: "content_paste", class: "" },
  { path: "/admin/users/user-manage", title: "Usuarios", icon: "person", class: "" },
  { path: "/admin/competences/menu-competence", title: "Competencia", icon: "location_on", class: "" },
  { path: "/admin/tests/menu-test", title: "Evaluacion", icon: "library_books", class: "" },
  { path: "/admin/exercise", title: "Ejercicios", icon: "layers", class: "" },
  { path: "/admin/competences/map-competence", title: "Mapa", icon: "layers", class: "" }

];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
