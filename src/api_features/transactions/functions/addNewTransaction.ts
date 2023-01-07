import { Request, Response } from 'express'
import { v4 } from 'uuid'
import { Transaction } from '../../../classes/Transactions'
import StandardResponse from '../../../interfaces/StandardResponse'
import { usersDB } from '../../../storage'

function addNewTransaction(req: Request, res: Response) {
	const { userId } = req.params
	const { title, value, type } = req.body
	const newUid = v4()

	if (!title || !value || !type) {
		return res.status(418).json({
			success: false,
			message:
				'Requisição incompleta. Favor enviar um title, value e type no corpo da requisição.'
		} as StandardResponse)
	}

	const targetUser = usersDB.find((f) => f.uid === userId)
	if (!targetUser) {
		return res.status(418).json({
			success: false,
			message: 'Usuário não encontrado'
		} as StandardResponse)
	}

	const newTransaction = new Transaction(title, value, type, newUid)

	targetUser.addNewTransaction(newTransaction)

	return res.status(200).json({
		success: true,
		message: 'Transação realizada!',
		data: newTransaction
	} as StandardResponse)
}

export { addNewTransaction }
