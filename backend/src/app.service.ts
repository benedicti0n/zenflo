import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { CreateFormDto } from './dto/create-form.dto';

@Injectable()
export class AppService {
  private prisma = new PrismaClient()

  async saveFromData(CreateFormDto: CreateFormDto) {
    return await this.prisma.formData.create({
      data: CreateFormDto
    })
  }

  getHello(): string {
    return 'Hello World!';
  }
}
