import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";

import { Exclude } from "class-transformer";
import { schedulesUsersProperties } from "./schedules.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 60 })
  name: string;

  @Column({ length: 60, unique: true })
  email: string;

  @Column()
  isAdm: boolean;

  @Column()
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ length: 120 })
  @Exclude()
  password: string;

  @OneToMany(
    () => schedulesUsersProperties,
    (schedulesUsersProperties) => schedulesUsersProperties.user
  )
  schedulesUsersProperties: schedulesUsersProperties[];
}

export { User };
