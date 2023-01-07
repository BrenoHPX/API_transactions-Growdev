import { NextFunction, Request, Response } from 'express'
import StandardResponse from '../../../interfaces/StandardResponse'
import { usersDB } from '../../../storage'

const checkCpfExistence = (req: Request, res: Response, next: NextFunction) => {
	const { cpf } = req.body
	const cpfCheck = usersDB.some((s) => s.cpf === cpf)
	if (cpfCheck) {
		return res.status(403).json({
			success: false,
			message: 'Cpf existente, não é possivel cadastrar novo cliente!'
		} as StandardResponse)
	}
	next()
}

export { checkCpfExistence }
