// editar transação
// middleware

//dto

import { Request, Response } from 'express'
import StandardResponse from '../../../interfaces/StandardResponse'
import { usersDB } from '../../../storage'

function editTransaction(req: Request, res: Response) {
	const { userId, transactionId } = req.params
	const { title, value, type } = req.body

	const targetUser = usersDB.find((f) => f.uid === userId)
	const targetTransaction = targetUser?.getSingleTransaction(transactionId)

	if (!targetUser) {
		return res.status(400).json({
			success: false,
			message: 'Usuário não localizado!'
		} as StandardResponse)
	}

	if (!targetTransaction) {
		return res.status(400).json({
			success: false,
			message: 'Transação não localizada!'
		} as StandardResponse)
	}

	targetUser.editTransactionMethod(targetTransaction, { title, type, value })

	return res.status(200).json({
		success: true,
		message: 'Transação atualizada!',
		data: targetTransaction
	} as StandardResponse)
}

export { editTransaction }
