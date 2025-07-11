import { Plate } from './plate.model';
import { User } from './user.model';

export interface Command {
  id?: number;
  plate: Plate;
  user: User;
}
