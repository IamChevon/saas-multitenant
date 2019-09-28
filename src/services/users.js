import { getConnection } from '../connectionManager';

/**
* Get all the users.
**/
export async function getAll(req, res, next) {
  res.json({ body: await getConnection().select('*').from('users') });
}