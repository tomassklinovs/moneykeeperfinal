import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category-dto';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {

    constructor(private categoriesService: CategoriesService) {}

    @Post()
    create(@Body() categoryDto: CreateCategoryDto) {
        return this.categoriesService.createCategory(categoryDto)
    }

    @Get()
    getAll() {
        return this.categoriesService.getAllCategories()
    }
}
