import { Injectable } from '@nestjs/common';
import cats from './cats';

@Injectable()
export class CatsService {
  
  getCats(): object {
    return cats;
  }

  getCat(params: string): object {
    const parametro: number = parseInt(params)
    let getOneCat = {}
    cats.forEach(cat => {if(cat.id === parametro){getOneCat = cat}})
    return getOneCat;
  }

  createCat(body): string {
    const newCat = {
      id: cats.length + 1,
      name: body
    }
    cats.push(newCat)
    return 'El gato fue creado correctamente';
  }

  // deleteCat(params): string {
  //   const parametro: number = parseInt(params)
  //   for (let i = 0; i < cats.length; i++) {
  //     if (cats[i].id === parametro) {
  //       cats.splice(i, 1)
  //     }
  //   }
  //   return `El gato fue eliminado correctamente`;
  // }

  updateCat(params, body): string {
    const parametro: number = parseInt(params)
    for (let i = 0; i < cats.length; i++) {
      if (cats[i].id === parametro) {
        cats[i] = {
          "id": cats[i].id,
          "name": body
        }
      }
    }
    return `El gato ${body} fue actualizado correctamente`;
  }

  deleteCat():string {
    cats.pop();
    return `El ultimo gato fue eliminado correctamente`;
  }

}
