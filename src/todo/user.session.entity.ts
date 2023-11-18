import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'userSession' })
export class UserSessionEntity {
  @PrimaryColumn()
  userId: number;
  @Column()
  scene: string;
}
