import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateFormDto } from './dto/create-form.dto';

@Controller('form')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async handleSubmit(@Body() CreateFormDto: CreateFormDto) {
    return await this.appService.saveFromData(CreateFormDto)
  }
}

