import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import {EventsGateway} from './events/events.gateway'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    const io = new EventsGateway()
    io.findAll('hhh')
    return {message: 'hello world!'};
  }
}
