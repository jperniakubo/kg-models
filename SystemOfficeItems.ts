import {
  PrimaryKey,
  Column,
  DataType,
  Model,
  Table,
  CreatedAt,
  UpdatedAt,
  DeletedAt
} from 'sequelize-typescript';

@Table({timestamps: true, tableName: 'systemOfficeItems'})
export class SystemOfficeItems extends Model<SystemOfficeItems> {
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number;

  @Column(DataType.STRING)
  public name!: string;

  @Column(DataType.STRING)
  public status: string;

  @CreatedAt
  readonly createdAt!: Date;

  @UpdatedAt
  readonly updatedAt!: Date;

  @DeletedAt
  readonly deletedAt!: Date;
}
