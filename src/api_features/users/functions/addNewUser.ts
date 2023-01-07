// >> body(name, cpf<único por usuário>, email, age)
// >> criar uma instância de User com os dados recebidos e add ao array de usuários
// >> Middleware para verificar se já existe usuário com CPF informado

import { Request, Response } from 'express'
import { v4 } from 'uuid'
import { User } from '../../../classes/User'
import StandardResponse from '../../../interfaces/StandardResponse'
import { usersDB } from '../../../storage'

function addNewUser(req: Request, res: Response) {
	const { name, cpf, email, age } = req.body

	if (!name || !cpf || !email || !age) {
		return res.status(418).json({
			success: false,
			message:
				'Você deve informar nome, cpf, email e idade no corpo da requisição!',
			data: null
		} as StandardResponse)
	}
	const newUid = v4()
	const newUser = new User(name, cpf, email, age, newUid)
	usersDB.push(newUser)

	return res.status(200).json({
		success: true,
		message: 'Success!',
		data: newUser
	} as StandardResponse)
}

export { addNewUser }
