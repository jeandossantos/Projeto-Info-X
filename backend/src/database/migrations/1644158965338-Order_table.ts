import { MigrationInterface, QueryRunner, Table } from "typeorm";

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
                    name: 'employee_id',
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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orders');
    }

}
