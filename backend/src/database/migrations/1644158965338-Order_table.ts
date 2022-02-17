import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class OrderTable1644158965338 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'orders',
            columns: [
                {
                    name: 'id',
                    isPrimary: true,
                    type: 'varchar',
                },
                {
                    name: 'client_id',
                    type: 'integer',
                },
                {
                    name: 'user_id',
                    type: 'integer'
                },
                {
                    name: 'situation_id',
                    type: 'integer'
                },
                {
                    name: 'equipment',
                    type: 'varchar'
                },
                {
                    name: 'difect',
                    type: 'varchar'
                },
                {
                    name: 'service',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'price',
                    type: 'decimal(12,2)',
                    isNullable: true
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
        }))

        await queryRunner.createForeignKey(
            'orders',
            new TableForeignKey({
                columnNames: ['user_id'],
                referencedTableName: 'users',
                referencedColumnNames: ['id'],
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'orders',
            new TableForeignKey({
                columnNames: ['client_id'],
                referencedTableName: 'clients',
                referencedColumnNames: ['id'],
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'orders',
            new TableForeignKey({
                columnNames: ['situation_id'],
                referencedTableName: 'situations',
                referencedColumnNames: ['id'],
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orders');
    }

}
