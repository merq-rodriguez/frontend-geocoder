import { environment } from 'src/environments/environment';


  interface StatusJudge{
    id: number;
    title: string;
    message: string;
    image: string;
  }
  

  export const warning:StatusJudge = {
    id: 0,
    title: '¡El servidor no responde!',
    message: '',
    image: `${environment.api.geoprogram +'uploads/images/warning.png'}`
  }

  export const waiting:StatusJudge = {
    id: 1,
    title: '¡Esperando respuesta!',
    message: '',
    image: `${environment.api.geoprogram +'uploads/images/waiting.png'}`
  }
  export const processing:StatusJudge = {
    id: 2,
    title: '¡Procesando respuesta!',
    message: '',
    image: `${environment.api.geoprogram +'uploads/images/waiting.png'}`
  }

  export const accepted:StatusJudge = {
    id: 3,
    title: '¡Compilacion exitosa!',
    message: '',
    image: `${environment.api.geoprogram +'uploads/images/fine.jpg'}`
  };

  export const failed:StatusJudge = {
    id: 4,
    title: '¡Respuesta incorrecta!',
    message: '',
    image: `${environment.api.geoprogram +'uploads/images/bad.png'}`
  }

  export const internalError:StatusJudge = {
    id: 13,
    title: '¡Error interno en el servidor!',
    message: '',
    image: `${environment.api.geoprogram +'uploads/images/bad.png'}`
  }