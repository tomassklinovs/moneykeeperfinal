import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Spending } from "src/spendings/spendings.model";
import { Role } from "./roles.models";

@Table({tableName: 'spending_roles', createdAt: false, updatedAt: false})
export class SpendingRoles extends Model<SpendingRoles> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Role)
    @Column({type: DataType.INTEGER})
    roleId: number;
    
    @ForeignKey(() => Spending)
    @Column({type: DataType.INTEGER})
    spendingId: number;

}