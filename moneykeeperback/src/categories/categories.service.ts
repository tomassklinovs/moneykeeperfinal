import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './categories.model';
import { CreateCategoryDto } from './dto/create-category-dto';
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class CategoriesService {

    constructor(@InjectModel(Category) private categoryRepository: typeof Category,
                private roleService: RolesService) {}

    async createCategory(dto: CreateCategoryDto) {
        const category = await this.categoryRepository.create(dto)
        const role = await this.roleService.getRoleByValue("CATEGORY")
        await category.$set('roles', [role.id])
        category.roles = [role]
        return category
    }

    async getAllCategories() {
        const categories = await this.categoryRepository.findAll({include: {all: true}})
        return categories
    }

    async getCategoryByName(name: string) {
        const category = await this.categoryRepository.findOne({where: {name}, include: {all: true}})
        return category;
    }

}
