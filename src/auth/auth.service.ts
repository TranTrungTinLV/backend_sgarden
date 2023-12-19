import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/auth.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { SignupDto } from './dto/signup-dto';
@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}
  async signUp(signupDto: SignupDto): Promise<{ token: string }> {
    const {
      username,
      password,
      email,
      sex,
      birthday,
      phone,
      level_member,
      avatar,
    } = signupDto;
    const hashedPassword = bcrypt.hash(password, 10);

    const user = await this.userModel.create({
      username,
      password: hashedPassword,
      email,
      sex,
      birthday,
      phone,
      avatar,
      level_member,
    });
    const token = this.jwtService.sign({
      id: user._id,
    });
    return { token };
  }
}
