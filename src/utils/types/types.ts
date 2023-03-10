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
	codigo: 200 | 201 | 202 | 400 | 401 | 404 | 500 | 503;
	mensagem:
		| object
		| 'Não encontrado'
		| 'Erro interno no servidor'
		| 'Não autorizado'
		| 'Serviço não disponível';
};
