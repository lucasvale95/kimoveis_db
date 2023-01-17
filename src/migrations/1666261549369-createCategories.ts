import { MigrationInterface, QueryRunner } from "typeorm";

export class createCategories1666261549369 implements MigrationInterface {
    name = 'createCategories1666261549369'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(60) NOT NULL, CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878" UNIQUE ("name"), CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "categoriesId" uuid`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "zipCode"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "zipCode" character varying(8) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "state" character varying(2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "properties" ALTER COLUMN "sold" SET DEFAULT 'false'`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_ca9977669df4807ef2202584495" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_ca9977669df4807ef2202584495"`);
        await queryRunner.query(`ALTER TABLE "properties" ALTER COLUMN "sold" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "state" character varying(30) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "zipCode"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "zipCode" character varying(60) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "categoriesId"`);
        await queryRunner.query(`DROP TABLE "categories"`);
    }

}
