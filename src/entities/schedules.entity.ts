import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Properties } from "./properties.entity";
import { User } from "./user.entity";

@Entity("schedules_users_properties")
class schedulesUsersProperties {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "date" })
  date: string;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Properties)
  property: Properties;
}

export { schedulesUsersProperties };
