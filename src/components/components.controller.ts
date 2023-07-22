import { Controller, Get, Post } from '@nestjs/common';
import { ComponentsService } from './components.service';

@Controller()
export class ComponentsController {
  constructor(private readonly componentsService: ComponentsService) {}

  @Get('names')


  @Post('inputs')
  

}
