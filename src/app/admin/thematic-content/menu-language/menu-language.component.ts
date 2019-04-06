import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: "app-language-menu",
  templateUrl: "./menu-language.component.html",
  styleUrls: ["./menu-language.component.css"]
})
export class LanguageMenuComponent implements OnInit {


  constructor( private router: ActivatedRoute) { }
  
  ngOnInit() {}


}
