const dbConnection = require('../resources/data/dbConnection')
class ReminderModel {
    async getRemiders() {
        let connection = await dbConnection()
        try {
            let sqlCommand = 'SELECT * from reminders ORDER BY duedate ASC'
            let results = await connection.query(sqlCommand)
        return results
        } catch (err) {
            throw err
        }
    }
}
module.exports.ReminderModel = ReminderModel