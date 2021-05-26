import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateSpendingDto } from './dto/create-spending-dto';
import { SpendingsService } from './spendings.service';

@Controller('spendings')
export class SpendingsController {

    constructor(private spendingsService: SpendingsService) {}

    @Post()
    create(@Body() spendingDto: CreateSpendingDto) {
        return this.spendingsService.createSpending(spendingDto)
    }

    @Get()
    getAll() {
        return this.spendingsService.getAllSpendings()
    }
}
