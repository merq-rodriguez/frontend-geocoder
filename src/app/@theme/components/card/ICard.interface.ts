import { ISubtheme } from 'src/app/@core/data/subtheme-data';

export interface  ICardTheme{
    id: string;
    name: string;
    description: string;
    image: string;
    subtitle: string;
    content?: string;
    subthemes?: Array<ISubtheme>
}


export interface  ICardSubTheme{
    id: string;
    name: string;
    description: string;
    image: string;
    subtitle: string;
    content?: string;
    idTheme: string;
}

export interface  ICardTest{
    id: string;
    name: string;
    description: string;
    image: string;
    subtitle: string;
    content?: string;
}



