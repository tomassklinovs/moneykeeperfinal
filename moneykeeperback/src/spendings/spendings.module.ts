import { Module } from '@nestjs/common';
import { SpendingsController } from './spendings.controller';
import { SpendingsService } from './spendings.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Spending } from './spendings.model';
import { Role } from 'src/roles/roles.models';
import { SpendingRoles } from 'src/roles/spending-roles.model';
import { RolesModule } from 'src/roles/roles.module';

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
