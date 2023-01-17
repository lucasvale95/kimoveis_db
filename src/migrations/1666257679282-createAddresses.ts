import { MigrationInterface, QueryRunner } from "typeorm";

export class createAddresses1666257679282 implements MigrationInterface {
    name = 'createAddresses1666257679282'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "addresses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "district" character varying(60) NOT NULL, "zipCode" character varying(60) NOT NULL, "number" character varying(10) NOT NULL, "city" character varying(30) NOT NULL, "state" character varying(30) NOT NULL, CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "properties" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "sold" boolean NOT NULL DEFAULT 'false', "value" numeric(10,2) NOT NULL, "size" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "password" character varying(120) NOT NULL, "addressesId" uuid, CONSTRAINT "REL_26a719ca228cd83b596b68bb3c" UNIQUE ("addressesId"), CONSTRAINT "PK_2d83bfa0b9fcd45dee1785af44d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_26a719ca228cd83b596b68bb3ca" FOREIGN KEY ("addressesId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_26a719ca228cd83b596b68bb3ca"`);
        await queryRunner.query(`DROP TABLE "properties"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
    }

}
