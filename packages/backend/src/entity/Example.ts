import {
  Column,
  Entity,
  PrimaryColumn,
} from "typeorm";

@Entity()
export default class Event {
  @PrimaryColumn()
  id: string = '';
  @Column()
  date: string = '';
  @Column()
  name: string = '';
}