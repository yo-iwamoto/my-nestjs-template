import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    TasksModule,
  ],
})
export class AppModule {}
