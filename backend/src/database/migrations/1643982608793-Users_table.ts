import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class UsersTable1643982608793 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isUnique: true
                },
                {
                    name: 'password',
                    type: 'varchar'
                },
                {
                    name: 'cpf',
                    type: 'varchar',
                    length: '11',
                    //isUnique: true

                },
                {
                    name: 'whatsapp',
                    type: 'varchar'
                },
                {
                    name: 'admin',
                    type: 'boolean',
                    default: false
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
