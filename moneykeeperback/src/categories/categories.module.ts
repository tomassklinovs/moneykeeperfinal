import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from './categories.model';
import { Role } from 'src/roles/roles.models';
import { CategoryRoles } from 'src/roles/category-roles.model';
import { RolesModule } from 'src/roles/roles.module';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [
    SequelizeModule.forFeature([Category, Role, CategoryRoles]),
    RolesModule
  ],
  exports: [CategoriesService]
})
export class CategoriesModule {}
