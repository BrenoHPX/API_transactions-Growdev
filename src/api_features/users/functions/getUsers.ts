// >>Retornar todos os usuários SEM transações.
// >>filtrar por nome, email ou CPF

import { Request, Response } from 'express'
import StandardResponse from '../../../interfaces/StandardResponse'
import { usersDB } from '../../../storage'

export function getUsers(req: Request, res: Response) {
	const { name, email, cpf } = req.query

	if (!name && !email && !cpf) {
		return res.status(400).json({
			success: true,
			message: 'Filtros não declarados',
			data: usersDB.map((m) => {
				return {
					name: m.name,
					cpf: m.cpf,
					email: m.email,
					age: m.age,
					uid: m.uid
				}
			})
		})
	}

	if (name) {
		const filteredByName = usersDB.filter((f) =>
			f.name.toLowerCase().includes(name.toString().toLowerCase())
		)
		return res.status(400).json({
			success: true,
			message: 'Usuários filtrados pelo nome.',
			data: filteredByName.map((m) => {
				return {
					name: m.name,
					cpf: m.cpf,
					email: m.email,
					age: m.age,
					uid: m.uid
				}
			})
		} as StandardResponse)
	}

	if (email) {
		const filteredByEmail = usersDB.filter((f) =>
			f.email.toLowerCase().includes(email.toString().toLowerCase())
		)
		return res.status(400).json({
			success: true,
			message: 'Usuários filtrados pelo nome.',
			data: filteredByEmail.map((m) => {
				return {
					name: m.name,
					cpf: m.cpf,
					email: m.email,
					age: m.age,
					uid: m.uid
				}
			})
		} as StandardResponse)
	}

	if (cpf) {
		const filteredByCpf = usersDB.filter((f) =>
			f.cpf.toLowerCase().includes(cpf.toString().toLowerCase())
		)
		return res.status(400).json({
			success: true,
			message: 'Usuários filtrados pelo nome.',
			data: filteredByCpf.map((m) => {
				return {
					name: m.name,
					cpf: m.cpf,
					email: m.email,
					age: m.age,
					uid: m.uid
				}
			})
		} as StandardResponse)
	}
}
