import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signup() {
    return { msg: 'Sign up' };
  }
  login() {
    return { msg: 'Log in' };
  }
}