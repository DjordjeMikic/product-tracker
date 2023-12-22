import { EventEmitter } from 'events';
import 'express';

declare module 'express' {
  interface Request {
    event: EventEmitter;
  }
}
