import knex from 'knex'
import path from 'path'

// migrations - Controle de versão do banco de dados

const db = knex({
    client: 'squilie3',
    connection: {
        filename: path.resolve(__filename, 'database.sqlite')
    },
    useNullAsDefault: true,
});

export default db;