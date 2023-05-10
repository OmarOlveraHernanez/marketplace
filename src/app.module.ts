import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { LogUsersModule } from './log_users/log_users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
dotenv.config();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: String(process.env.DATABASE_HOST),
      port:  parseInt(process.env.DATABASE_PORT),
      username:  String(process.env.DATABASE_USERNAME),
      password:  String(process.env.DATABASE_PASSWORD),
      database:  String(process.env.DATABASE_NAME),
      entities: ['src/**/*.entity{.ts,.js}'],
      synchronize: false,
      retryDelay: 3000,
      retryAttempts: 10
    }),
    
    UsersModule, LogUsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
