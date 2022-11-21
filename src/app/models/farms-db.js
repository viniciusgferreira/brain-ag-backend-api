import pg from 'pg';
const Pool = pg.Pool;

export const pool = new Pool({
	user: 'brainag',
	host: 'localhost',
	database: 'farmsdb',
	password: 'brainpw',
	port: 5432,
	max: 1,
	IdleTimeoutMillis: 30000
});
