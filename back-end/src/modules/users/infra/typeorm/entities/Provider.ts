import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';

@Entity('providers')
class Provider {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  begin_date: Date;

  @Column()
  final_date: Date;

  @Column()
  demission_reason: string;

  @Column({ length: 2 })
  uniform_size: string;

  @Column({ length: 12 })
  voter_registration: string;

  @Column()
  voting_zone: string;

  @Column()
  voting_section: string;

  @Column()
  password_mei: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column('uuid')
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;
}

export default Provider;
