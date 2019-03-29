import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { MonacoFile } from "ngx-monaco";



@Component({
  selector: "app-monaco-code",
  templateUrl: "./monaco.component.html",
  styleUrls: ["./monaco.component.css"]
})
export class MonacoComponent implements OnInit {
  @Input('code') _code
  file: MonacoFile = {
    uri: "index.js",
    language: "javascript",
    content: `console.log('Hola Mundo!');\n monaquito ajajjaa`
  };

  
  public languageList = [
    {
      id: 1,
      name: "Python",
      description:
        "Python es un lenguaje de programación interpretado cuya filosofía hace hincapié en una sintaxis que favorezca un código legible.Se trata de un lenguaje de programación multiparadigma, ya que soporta orientación a objetos, programación imperativa y, en menor medida, programación funcional.Es un lenguaje interpretado, usa tipado dinámico y es multiplataforma.",
      img: "../../assets/img/pythonlogo2.png",
      color: "success"
    },
    {
      id: 2,
      name: "Java",
      description:
        'Java es un lenguaje de programación de propósito general, concurrente, orientado a objetos, que fue diseñado específicamente para tener tan pocas dependencias de implementación como fuera posible.Su intención es permitir que los desarrolladores de aplicaciones escriban el programa una vez y lo ejecuten en cualquier dispositivo(conocido en inglés como WORA, o "write once, run anywhere").',
      img: "../../assets/img/javalogo.jpg",
      color: "danger"
    },
    {
      id: 3,
      name: "C++",
      description:
        "C++ es un lenguaje de programación diseñado en 1979 por Bjarne Stroustrup. La intención de su creación fue extender al lenguaje de programación C mecanismos que permiten la manipulación de objetos. En ese sentido, desde el punto de vista de los lenguajes orientados a objetos, el C++ es un lenguaje híbrido.",
      img: "../../assets/img/c++logo.png",
      color: "primary"
    }
  ];
  constructor(private router: Router) {}

  ngOnInit() {
    if (this._code){
      this.file.content = this._code
    }
  }

  getRouteTheme(id: number) {
    this.router.navigate(["/theme", { id: id }]);
  }


  onFileChange(file: MonacoFile) {
    // Handle file change
    console.log(file.content)
  }
}
