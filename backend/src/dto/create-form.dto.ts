import { IsString, IsEmail } from 'class-validator'

export class CreateFormDto {
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    message: string
}