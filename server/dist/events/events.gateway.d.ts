import { WsResponse } from '@nestjs/websockets';
import { Server } from 'socket.io';
export declare class EventsGateway {
    server: Server;
    findAll(data: any): WsResponse<number>;
    identity(data: number): Promise<number>;
}
