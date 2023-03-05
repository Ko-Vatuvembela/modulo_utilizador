import express from 'express';
import { config } from 'dotenv';

config();

const PORT = Number(process.env.PORT);

const app = express();
app.use(express.json());

app.listen(PORT, () => {
	console.log(`O servidor gateway está a executar na porta ${PORT}`);
});
