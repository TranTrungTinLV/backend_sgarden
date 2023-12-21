import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { OrderService } from './oder.service';
import { Order } from './schema/oder.schema';
import { AuthGuard } from '@nestjs/passport';
import { oderDto } from './dto/oder-dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Order')
@Controller('order')
@UseGuards(AuthGuard())
export class OderController {
  constructor(private orderService: OrderService) {}
  @Post()
  async createOrder(@Body() orderDto: oderDto): Promise<Order> {
    const order = new Order();
    order.products = orderDto.products;
    order.type = orderDto.type;
    order.payment_status = orderDto.payment_status;
    return this.orderService.create(order);
  }
}
