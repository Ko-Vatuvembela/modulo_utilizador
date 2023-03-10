import express, { Request, Response, NextFunction } from 'express';
import { config } from 'dotenv';
import { JSONResponse } from './utils/types/types';
import userRoute from './routes/userRoute';

config();

const PORT = Number(process.env.PORT);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/utilizador', userRoute);

// app.use((request: Request, response: Response,next: NextFunction) =>{

// });

// 404 error handling
app.use((request: Request, response: Response, next: NextFunction) => {
	const codigo = 404;
	const resp = {
		codigo,
		mensagem: 'Não encontrado'
	} as JSONResponse;

	response.status(codigo).json(resp);
});

// 500 error handling
app.use(
	(error: Error, request: Request, response: Response, next: NextFunction) => {
		const codigo = Number(error.message);
		const resp = {
			codigo,
			mensagem: 'Erro interno no servidor'
		} as JSONResponse;
		response.status(codigo).json(resp);
	}
);

app.listen(PORT, () => {
	console.log(`O servidor gateway está a executar na porta ${PORT}`);
});
