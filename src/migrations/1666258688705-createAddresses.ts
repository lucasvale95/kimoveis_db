import { MigrationInterface, QueryRunner } from "typeorm";

export class createAddresses1666258688705 implements MigrationInterface {
    name = 'createAddresses1666258688705'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "properties" ALTER COLUMN "sold" SET DEFAULT 'false'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" ALTER COLUMN "sold" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "password" character varying(120) NOT NULL`);
    }

}
