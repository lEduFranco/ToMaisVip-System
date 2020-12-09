import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class Client1607019835068 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'clients',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'cf_df',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'profession',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'condominium_name',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'reference_points',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'nearest_subway_station',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'company_responsible',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'user_id',
            type: 'uuid',
            isNullable: true,
          },
        ],
      }),
    );
    await queryRunner.createForeignKey(
      'clients',
      new TableForeignKey({
        name: 'ClientUser',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('clients');
  }
}
