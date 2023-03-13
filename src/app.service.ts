import { Injectable, Get, Put } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getList(): Array<{ userId: number }> {
    return [{ userId: 1 }];
  }
  getName(): string {
    return 'nest';
  }
}
