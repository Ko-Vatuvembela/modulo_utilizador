import { Handler, Request, Response, NextFunction } from 'express';

export function asyncResolver(handler: Handler) {
	return (request: Request, response: Response, next: NextFunction) => {
		return Promise.resolve(handler(request, response, next)).catch((e) =>
			next(e)
		);
	};
}
