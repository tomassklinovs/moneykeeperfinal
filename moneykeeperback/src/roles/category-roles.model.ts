import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Category } from "src/categories/categories.model";
import { Role } from "./roles.models";

@Table({tableName: 'category_roles', createdAt: false, updatedAt: false})
export class CategoryRoles extends Model<CategoryRoles> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Role)
    @Column({type: DataType.INTEGER})
    roleId: number;
    
    @ForeignKey(() => Category)
    @Column({type: DataType.INTEGER})
    categoryId: number;

}