import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn
} from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
export class Recipe extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  description!: string;

  @Field(() => Int)
  @Column()
  categoryId!: number;

  @Field(() => Int)
  @Column()
  userId!: number;

  @Field(() => String)
  @CreateDateColumn({ type: "timestamp" })
  createdAt!: string;
}
