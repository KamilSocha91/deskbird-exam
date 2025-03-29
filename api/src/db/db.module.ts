import { Module } from '@nestjs/common';
import { User } from './entity/user';
import { UserDbService } from './services/user-db.service';

@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: 'DB_REPOSITORY-USER',
      useValue: User,
    },
    UserDbService,
  ],
  exports: [
    {
      provide: 'DB_REPOSITORY-USER',
      useValue: User,
    },
    UserDbService,
  ],
})
export class DbModule {}
