export type Utilizador = {
	id?: string;
	nome: string;
	sobrenome: string;
	email: string;
	senha?: string;
	foto?: string;
	lista_linguas?: [];
};

export type JSONResponse = {
	codigo: number;
	mensagem: string | object;
};
