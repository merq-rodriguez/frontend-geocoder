import { Component, OnInit } from "@angular/core";
import * as Chartist from "chartist";
import { Router } from "@angular/router";



@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent {
 

  constructor(private router: Router) {}

  getRouteCompetition() {
    this.router.navigate(["competition-list"]);
  }

  getRouteTheme() {
    this.router.navigate(["theme-list"]);
  }

  getRouteExcersice() {
    this.router.navigate(["exersice"]);
  }

  getRouteLanguage() {
    this.router.navigate(["language"]);
  }

  getRouteTest() {
    this.router.navigate(["test"]);
  }

  /** */
}
