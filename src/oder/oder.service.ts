import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './schema/oder.schema';
import * as mongoose from 'mongoose';
import { UpdateOrderDto, oderDto } from './dto/oder-dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: mongoose.Model<Order>,
  ) {}
  async create(order: Order): Promise<Order> {
    const createOder = await this.orderModel.create(order);
    return createOder.save();
  }

  async findOneByIdOrder(id: string): Promise<Order> {
    return this.orderModel.findOne({
      _id: id,
    });
  }

  async findAll(): Promise<Order[]> {
    return this.orderModel.find();
  }

  async UpdateOrderById(id: string, updateOrderDto: UpdateOrderDto) {
    return this.orderModel.findByIdAndUpdate(id, updateOrderDto, { new: true });
  }

  async removeOrderById(id: string) {
    return this.orderModel.findByIdAndDelete(id);
  }
}
