import {
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Url } from './Url';

@Entity('short-urls')
export class ShortUrl {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'url_id' })
  urlId: string;

  @ManyToOne(() => Url)
  @JoinColumn({ name: 'url_id' })
  url: Url;

  @Column({ unique: true, name: 'short-url' })
  shortUrl: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
