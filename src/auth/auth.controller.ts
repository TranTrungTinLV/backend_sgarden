import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup-dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/signup')
  SignUp(@Body() signUpDto: SignupDto): Promise<{ token: string }> {
    return this.authService.signUp(signUpDto);
  }
}
