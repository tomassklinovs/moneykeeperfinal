import { Column, DataType, Model, Table, BelongsToMany } from "sequelize-typescript";
import { Role } from "src/roles/roles.models";
import { CategoryRoles } from "src/roles/category-roles.model";

interface CategoryCreationAttrs {
    userid: string
    name: string
}

@Table({tableName: 'categories'})
export class Category extends Model<Category, CategoryCreationAttrs> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    userid: string;

    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @BelongsToMany(() => Role, () => CategoryRoles)
    roles: Role[]
}