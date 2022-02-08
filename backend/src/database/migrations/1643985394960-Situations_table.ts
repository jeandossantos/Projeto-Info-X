import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class SituationsTable1643985394960 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'situations',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'name',
                    type: 'varchar'
                }
            ]
        }))

        await queryRunner.query('Insert into situations (name) values("Entrega OK")');
        await queryRunner.query('Insert into situations (name) values("Orçamento reprovado")');
        await queryRunner.query('Insert into situations (name) values("Aguardando Aprovação")');
        await queryRunner.query('Insert into situations (name) values("Aguardando Peças")');
        await queryRunner.query('Insert into situations (name) values("Abandonado pelo Cliente")');
        await queryRunner.query('Insert into situations (name) values("Retornou")');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('situations');
    }

}
