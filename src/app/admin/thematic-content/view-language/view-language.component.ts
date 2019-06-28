import { Component, OnInit, Input } from "@angular/core";
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ILanguage } from 'src/app/@core/data/language.data';
import { MatDialog } from '@angular/material';
import { ISubthemeDialog, } from '../../modal/create-subtheme/create-subtheme.component';
import { ShowSubthemeDialog } from '../../modal/show-subtheme/show-subtheme.component';
import { ISubtheme } from 'src/app/@core/data/subtheme-data';
import { RouteInfo } from 'src/app/@theme/components/navroutes/navroutes.component';
import { ITheme } from 'src/app/@core/data/theme.data';
import { ActivatedRoute } from '@angular/router';
import { ThemeService } from 'src/app/@core/services/theme.service';
import { ShowThemeDialog } from '../../modal/show-theme/show-theme.component';



@Component({
  selector: "app-language",
  templateUrl: "./view-language.component.html",
  styleUrls: ["./view-language.component.css"],
})
export class ViewLanguageComponent implements OnInit {

  public subscriberArrayTheme: any;
  public arrayThemes: ITheme[] = [];
 /*  public arrayThemes: ITheme[] = [
    {
      id: '1',
      subtitle: 'Temas',
      name: 'Operadores logicos',
      content: 'x',
      description: '',
      image: null,
      subthemes: [
        {
          id: '1',
          name: 'Nombre del subtheme',
          description: 'Description of the subthemexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxssssssssssssssssssssssssssssssxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          contentEditor: '<h1> Titulo... </h1> <p>Holaxxxxxxxsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>'
        },
        {
          id: '1',
          name: '',
          description: ''
        },
        {
          id: '1',
          name: '',
          description: ''
        },
        {
          id: '1',
          name: '',
          description: ''
        },
        {
          id: '1',
          name: '',
          description: ''
        },
      ]
    },
    {
      id: '1',
      subtitle: 'Temas',
      name: 'Operadores logicos',
      content: 'x',
      description: '',
      image: null,
      subthemes: [
        {
          id: '1',
          name: '',
          description: ''
        },
        {
          id: '1',
          name: '',
          description: ''
        },
        {
          id: '1',
          name: '',
          description: ''
        },
        {
          id: '1',
          name: '',
          description: ''
        },
        {
          id: '1',
          name: '',
          description: ''
        },
      ]
    },

    {
      id: '1',
      subtitle: 'Temas',
      name: 'Operadores logicos',
      content: 'x',
      description: '',
      image: null,
      subthemes: [

        {
          id: '1',
          name: '',
          description: ''
        },
        {
          id: '1',
          name: '',
          description: ''
        },
        {
          id: '1',
          name: '',
          description: ''
        },
        {
          id: '1',
          name: '',
          description: ''
        },
      ]
    }
  ]
 */
  public language: ILanguage = {
    idLanguage: null,
    name: '',
    description: '',
    imageSrc: '',
    themes: []
  }
  public showSubtheme: boolean = false;

  public subthemeSelected: ISubtheme = {
    id: '',
    name: '',
    description: '',
    contentEditor: '',
    contentCode: '',
    imageSrc: 'https://www.eff.org/files/banner_library/coder-cat-2.png',
    url_video: '',

  }


  constructor(
    private router: ActivatedRoute,
    private themeService: ThemeService,
    public dialog: MatDialog
  ) { }


  ngOnInit() {
    this.router.queryParams.subscribe(params => {
      console.log("========= CONTENIDO TEMATICO VIEW  ===========")
      this.language = {
        idLanguage: Number(params["idlanguage"]),
        name: params["name"],
        description: params["description"],
        image: params["image"]
      }
      this.getThemes();
    })

  }

  openDialogSubtheme(subtheme): void {
    console.log(subtheme);
    const dialogRef = this.dialog.open(ShowSubthemeDialog, {
      width: '1024px',
      data: subtheme
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
  openDialogTheme(theme): void {
    const dialogRef = this.dialog.open(ShowThemeDialog, {
      width: '1024px',
      data: theme
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

   getThemes() {
    this.themeService.getThemesWithSubthemes(this.language.idLanguage).subscribe( themes => {
      for (const theme of themes) {
        for (let subtheme of theme.subthemes) {
          Object.assign(subtheme, { imageSrc: subtheme.image })
          delete subtheme.image;
        }
         this.arrayThemes.push({
          id: theme.idTheme,
          name: theme.name,
          image: theme.image,
          description: theme.description,
          content: theme.content,
          subthemes: theme.subthemes
        } as ITheme) 
      }
    })
  }


/*   openDialog(subtheme: ISubtheme): void {
    const _subtheme = Object.assign(this.subthemeSelected, subtheme);
    console.log(_subtheme);
  } */

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  public getRoutesItem() {
    return ROUTES_THEMATIC;
  }
}


const ROUTES_THEMATIC: RouteInfo[] = [
  { path: '/admin/dashboard', icon: "dashboard", title: "Home", class: "", active: true },
  { path: '/admin/thematic-content/menu-language', icon: "school", title: "Menu Lenguajes", class: "", active: true },
  { path: '/admin/thematic-content/language-list', icon: "school", title: "Listado de Lenguajes", class: "", active: true },
  { icon: "", title: "Lenguaje", class: "", active: false },
];