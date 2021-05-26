import { Column, DataType, Model, Table, BelongsToMany } from "sequelize-typescript";
import { IntegerDataType } from "sequelize/types";
import { Role } from "src/roles/roles.models";
import { SpendingRoles } from "src/roles/spending-roles.model";

interface SpendingCreationAttrs {
    categoryname: string
    amount: string
    date: string
}

@Table({tableName: 'spendings'})
export class Spending extends Model<Spending, SpendingCreationAttrs> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    categoryname: string;

    @Column({type: DataType.STRING, allowNull: false})
    amount: string;

    @Column({type: DataType.STRING, allowNull: false})
    date: string;

    @BelongsToMany(() => Role, () => SpendingRoles)
    roles: Role[]
}