import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from './roles.models';
import { User } from 'src/users/users.model';
import { UserRoles } from './user-roles.model';
import { Category } from 'src/categories/categories.model';
import { CategoryRoles } from './category-roles.model';
import { Spending } from 'src/spendings/spendings.model';
import { SpendingRoles } from './spending-roles.model';

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [
    SequelizeModule.forFeature([Role, User, UserRoles])
  ],
  exports: [
    RolesService
  ]
})
export class RolesModule {}

@Module({
  controllers: [SpendingsController],
  providers: [SpendingsService],
  imports: [
    SequelizeModule.forFeature([Spending, Role, SpendingRoles]),
    RolesModule
  ],
  exports: [SpendingsService]
})
export class SpendingsModule {}