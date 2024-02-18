import { User } from "@/app/user/entities/user.entity";
import { UserController } from "@/app/user/user.controller";
import { UserService } from "@/app/user/user.service";
import { File } from "@/app/file/entities/file.entity";
import { FileModule } from "@/app/file/file.module";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([User]), FileModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}