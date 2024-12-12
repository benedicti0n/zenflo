import { AppService } from './app.service';
import { CreateFormDto } from './dto/create-form.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    handleSubmit(CreateFormDto: CreateFormDto): Promise<{
        name: string;
        email: string;
        message: string;
        createdAt: Date;
        id: number;
    }>;
}
