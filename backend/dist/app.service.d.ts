import { CreateFormDto } from './dto/create-form.dto';
export declare class AppService {
    private prisma;
    saveFromData(CreateFormDto: CreateFormDto): Promise<{
        name: string;
        email: string;
        message: string;
        createdAt: Date;
        id: number;
    }>;
    getHello(): string;
}
