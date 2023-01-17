import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { IAddressRequest } from "../interfaces/properties";

import { Addresses } from "./addresses.entity";
import { Categories } from "./categories.entity";
import { schedulesUsersProperties } from "./schedules.entity";

@Entity("properties")
class Properties {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: "false" })
  sold: boolean;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  value: number;

  @Column({ type: "integer" })
  size: number;

  @Column()
  categoryId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Addresses)
  @JoinColumn()
  address: IAddressRequest;

  @ManyToOne(() => Categories)
  category: Categories;

  @OneToMany(
    () => schedulesUsersProperties,
    (schedulesUsersProperties) => schedulesUsersProperties.property
  )
  schedulesUsersProperties: schedulesUsersProperties[];
}

export { Properties };
