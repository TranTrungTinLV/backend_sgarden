
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { User } from './schema/auth.schema';
import { SignupDto } from './dto/signup-dto';


@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async signUp(signUpDto: SignupDto): Promise<{ token: string }> {
    const {
      username,
      email,
      password,
      birthday,
      fullname,
      avatar,
      level_member,
      phone,
      sex,
    } = signUpDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.userModel.create({
      username,
      email,
      password: hashedPassword,
      birthday,
      fullname,
      avatar,
      level_member,
      phone,
      sex,
    });

    const token = this.jwtService.sign({ id: user._id });

    return { token };
  }
}
