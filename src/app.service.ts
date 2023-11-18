import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from './todo/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  // constructor(
  //   @InjectRepository(TaskEntity) private taskRepo: Repository<TaskEntity>,
  // ) {}
  // async findAll() {
  //   return this.taskRepo.find();
  // }
  // async findById(id: number) {
  //   const foundTask = await this.taskRepo.findOne({ where: { id } });
  //   if (!foundTask) return;
  //   return foundTask;
  // }
  // async create(title: string) {
  //   const createdTask = await this.taskRepo.create({
  //     title,
  //     isCompleted: false,
  //   });
  //   await this.taskRepo.save(createdTask);
  //   return this.findAll();
  // }
  // async delete(id: number) {
  //   const result = await this.taskRepo.delete({ id });
  //   console.log(result);
  //   return this.findAll();
  // }
  // async update(id: number, payload: { title?: string; isCompleted?: boolean }) {
  //   await this.taskRepo.update({ id }, payload);
  //   return this.findAll();
  // }
}
