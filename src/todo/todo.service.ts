import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from './task.entity';
import { Repository } from 'typeorm';
import { UserSessionEntity } from './user.session.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TaskEntity) private taskRepo: Repository<TaskEntity>,
    @InjectRepository(UserSessionEntity)
    private UserSessionRepo: Repository<UserSessionEntity>,
  ) {}
  async getUserSession(userId: number) {
    const session = await this.UserSessionRepo.findOne({ where: { userId } });
    return session;
  }
  async updateUserSession(userId: number, scene: string) {
    const session = await this.getUserSession(userId);
    if (!session) {
      const newSession = await this.UserSessionRepo.create({
        userId,
        scene,
      });
      await this.UserSessionRepo.save(newSession);
      return newSession;
    }
    return this.UserSessionRepo.update({ userId }, { scene });
  }
  async findAll() {
    return this.taskRepo.find();
  }
  async findById(id: number) {
    const foundTask = await this.taskRepo.findOne({ where: { id } });
    if (!foundTask) return;
    return foundTask;
  }
  async create(title: string) {
    const createdTask = await this.taskRepo.create({
      title,
      isCompleted: false,
    });
    await this.taskRepo.save(createdTask);
    return this.findAll();
  }
  async delete(id: number) {
    const result = await this.taskRepo.delete({ id });
    console.log(result);
    return this.findAll();
  }
  async update(id: number, payload: { title?: string; isCompleted?: boolean }) {
    await this.taskRepo.update({ id }, payload);
    return this.findAll();
  }
}
