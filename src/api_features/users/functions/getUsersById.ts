import { Request, Response } from 'express'
import StandardResponse from '../../../interfaces/StandardResponse'
import { usersDB } from '../../../storage'

export function getUsersById(req: Request, res: Response) {
	const { uid } = req.params

	const findTargetUser = usersDB.find((f) => f.uid === uid)

	if (!findTargetUser) {
		return res.status(400).json({
			success: false,
			message: 'User not found'
		} as StandardResponse)
	}

	const targetUserData = {
		uid: findTargetUser?.uid,
		name: findTargetUser?.name,
		cpf: findTargetUser?.cpf,
		email: findTargetUser?.email,
		age: findTargetUser?.age
	}

	return res.status(200).json({
		success: true,
		message: 'User found by ID!',
		data: targetUserData
	} as StandardResponse)
}
