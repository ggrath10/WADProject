
const { query } = require('./db_connect');

// Retrieve all users from the database
async function getAllUsers() {
    let sql = `
        SELECT UserID, Username, Email, FirstName, LastName
        FROM \`USER\`;
    `;

    return await query(sql);
}

module.exports = { getAllUsers };
