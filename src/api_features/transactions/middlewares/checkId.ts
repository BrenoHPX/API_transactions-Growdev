import { NextFunction, Request, Response } from 'express'
import StandardResponse from '../../../interfaces/StandardResponse'
import { usersDB } from '../../../storage'

const checkId = (req: Request, res: Response, next: NextFunction) => {
	const { userId } = req.params
	if (!userId) {
		return res.status(403).json({
			success: false,
			message: 'Usuário não foi lozalizado!'
		} as StandardResponse)
	}
	next()
}

export { checkId }
