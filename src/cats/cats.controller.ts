import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catService: CatsService) {}

  @Get()
  getHello(): object {
    return this.catService.getCats();
  }

  @Get(':id')
  getCat(@Param('id') id: string): object {
    return this.catService.getCat(id);
  }

  @Post()
  createCat(@Body('name') body): string {
    return this.catService.createCat(body);
  }

//   @Put(':id')
//   updateCat(@Param() params, @Body('name') body): string {
//     return this.catService.updateCat(params, body);
//   }

  @Put(':id')
  updateCat(@Param() params, @Body('name') body): string {
    return this.catService.updateCat(params, body);
  }

//   @Delete(':id')
//   deleteCat(@Param() params): string {
//     return this.catService.deleteCat(params);
//   }

  @Delete()
  deleteCat(): string {
    return this.catService.deleteCat();
  }

}
