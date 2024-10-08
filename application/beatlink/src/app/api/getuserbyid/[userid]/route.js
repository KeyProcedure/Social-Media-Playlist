// app/api/getuserbyid/[userid].js
import { findUserById } from '../../../../../helpers/database/controllers/UserController'

export const dynamic = 'force-dynamic'
export async function GET (request, { params }) {
  try {
    const userid = params.userid
    const user = await findUserById(userid)

    if (!user) {
      return Response.json({ error: 'User not found' }, { status: 400 })
    }

    return Response.json(user)
  } catch (e) {
    return Response.json({ error: e.message }, { status: 500 })
  }
}
