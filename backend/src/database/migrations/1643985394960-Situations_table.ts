import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class SituationsTable1643985394960 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'situacions',
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

        await queryRunner.query('Insert into situacions (name) values("Entrega OK")');
        await queryRunner.query('Insert into situacions (name) values("Orçamento reprovado")');
        await queryRunner.query('Insert into situacions (name) values("Aguardando Aprovação")');
        await queryRunner.query('Insert into situacions (name) values("Aguardando Peças")');
        await queryRunner.query('Insert into situacions (name) values("Abandonado pelo Cliente")');
        await queryRunner.query('Insert into situacions (name) values("Retornou")');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('situacions');
    }

}
