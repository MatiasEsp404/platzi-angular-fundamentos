// Dato de color: Si queremos utilizar esta interface en algun
// otro componente tenemos que poner la palabra clave export

export interface Product {
  name: string;
  price: number;
  image: string;
  category?: string; // al agregarle un signo de pregunta hacemos que la categoria sea opcional
}
