import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  /* { path: "/admin/dashboard", title: "Principal", icon: "dashboard", class: "" }, */
  { path: "/admin/thematic-content/menu-language", title: "Lenguajes", icon: "school", class: "" },
  { path: "/admin/users/user-manage", title: "Usuarios", icon: "person", class: "" },
  { path: "/admin/competences/menu-competence", title: "Competencia", icon: "place", class: "" },
  { path: "/admin/tests/menu-test", title: "Evaluacion", icon: "library_books", class: "" },
  { path: "/admin/exercise", title: "Ejercicios", icon: "insert_chart", class: "" },
  { path: "/admin/competences/map-competence", title: "Mapa", icon: "public", class: "" }

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
    console.log(this.menuItems);
  }
 
}
