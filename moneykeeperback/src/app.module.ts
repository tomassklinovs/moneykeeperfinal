import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from './users/users.model';
import { CategoriesModule } from './categories/categories.module';
import { SpendingsModule } from './spendings/spendings.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/roles.models';
import { UserRoles } from './roles/user-roles.model';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers:[],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRESS_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRESS_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Role, UserRoles],
      autoLoadModels: true
    }),
    CategoriesModule,
    SpendingsModule,
    UsersModule,
    RolesModule,
    AuthModule,
  ]
})
export class AppModule {}
