import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import { JSONResponse, Utilizador } from '../utils/types/types';

const prismaClient = new PrismaClient();
const { utilizador } = prismaClient;

export class UserController {
	async getUser(request: Request, response: Response, next: NextFunction) {
		const UID = request.params.UID;
		const userData = (await utilizador.findFirst({
			where: { id: UID }
		})) as Utilizador;
		console.log(userData);
		const resp = {} as JSONResponse;
		response.json(resp);
	}
}
