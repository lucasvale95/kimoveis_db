import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("addresses")
class Addresses {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 60 })
  district: string;

  @Column({ length: 8 })
  zipCode: string;

  @Column({ length: 10 })
  number: string;

  @Column({ length: 30 })
  city: string;

  @Column({ length: 2 })
  state: string;
}

export { Addresses };
