import {
  PrimaryKey,
  Column,
  DataType,
  Model,
  Table,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  ForeignKey
} from 'sequelize-typescript';

import {BoAdmin} from './BoAdmin';

@Table({timestamps: true, tableName: 'passwordReset'})
export class PasswordReset extends Model<PasswordReset> {
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number;

  @Column(DataType.STRING)
  public code!: string;

  @ForeignKey(() => BoAdmin)
  @Column(DataType.STRING)
  uid!: string;

  @Column(DataType.STRING)
  public status!: string;

  @CreatedAt
  readonly createdAt!: Date;

  @UpdatedAt
  readonly updatedAt!: Date;

  @DeletedAt
  readonly deletedAt!: Date;
}
