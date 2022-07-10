import { User } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../server/db/client'

type Data = User | User[] | null | { message: string }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    switch (req.method) {
      case 'GET': {
        if (req.query.id) {
          const user = await prisma.user.findUnique({
            where: { id: req.query.id as string } // TODO if string[] return res.status(422).json({ message: 'Invalid input.' })
          })
          return res.status(200).json(user) // todo 404
        } else {
          const users = await prisma.user.findMany()
          return res.status(200).json(users) // todo 404
        }
      }
      case 'POST': {
        const { email, name, birthYear } = req.body
        const user = await prisma.user.create({
          data: { email, name, birthYear }
        })
        return res.status(201).json(user)
      }
      case 'PUT': {
        const { id, ...updateData } = req.body
        const user = await prisma.user.update({
          where: { id },
          data: { ...updateData }
        })
        return res.status(200).json(user) // todo 404
      }
      case 'DELETE': {
        const { id } = req.body
        const user = await prisma.user.delete({
          where: { id }
        })
        return res.status(200).json(user) // todo 404
      }
      default: {
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
        res.status(405).end({ message: `Method ${req.method} not allowed.` })
      }
    }
  } catch (error) {
    res.status(500).json({ message: 'something went wrong' })
  }
}
