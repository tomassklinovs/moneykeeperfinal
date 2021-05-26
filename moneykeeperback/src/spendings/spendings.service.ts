import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Spending } from './spendings.model';
import { CreateSpendingDto } from './dto/create-spending-dto';
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class SpendingsService {

    constructor(@InjectModel(Spending) private spendingRepository: typeof Spending,
                private roleService: RolesService) {}

    async createSpending(dto: CreateSpendingDto) {
        const spending = await this.spendingRepository.create(dto)
        const role = await this.roleService.getRoleByValue("SPENDING")
        await spending.$set('roles', [role.id])
        spending.roles = [role]
        return spending
    }

    async getAllSpendings() {
        const spendings = await this.spendingRepository.findAll({include: {all: true}})
        return spendings
    }

    async getSpendingByCategoryname(categoryname: string) {
        const spending = await this.spendingRepository.findOne({where: {categoryname}, include: {all: true}})
        return spending;
    }

}
