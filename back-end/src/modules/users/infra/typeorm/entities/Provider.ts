import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import User from './User';

export type ProviderStatusType = 'active' | 'inactive' | 'suspended';

@Entity('providers')
class Provider {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  begin_date: Date;

  @Column({ nullable: true })
  final_date: Date;

  @Column({ nullable: true })
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

  @Column({
    type: 'enum',
    enum: ['active', 'inactive', 'suspended'],
    default: 'active',
  })
  status: ProviderStatusType;

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
