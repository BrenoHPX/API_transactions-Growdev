import { Request, Response } from 'express'
import StandardResponse from '../../../interfaces/StandardResponse'
import { usersDB } from '../../../storage'

function deleteTransaction(req: Request, res: Response) {
	const { userId } = req.params
	const { transactionId } = req.params

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

	targetUser.deleteTransaction(targetTransaction)

	return res.status(200).json({
		success: true,
		message: 'Transação deletada!'
	} as StandardResponse)
}

export { deleteTransaction }
