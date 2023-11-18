import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'task' })
export class TaskEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'text' })
  title: string;
  @Column({ type: 'boolean' })
  isCompleted: boolean;
}
