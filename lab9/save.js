const path = require('path')
const express = require('express')
const cors = require('cors')
const app = express()
const router = express.Router()
const dotenv = require('dotenv')
const mysql = require('mysql2')
const port = process.env.DB_PORT || 6014
dotenv.config()
app.use(cors())
app.use(router)
router.use(express.json())
router.use(express.urlencoded({ extended: true }))
const dbConnection = mysql.createConnection({
  host: process.env.host,
  user: process.env.DB_user,
  password: process.env.DB_pass,
  database: process.env.DB_name,
})
dbConnection.connect((err) => {
  if (err) throw err
  console.log(`Connected DB: ${process.env.DB_name}`)
})
router.get('/', (_req, res) =>
  res.sendFile(path.join(__dirname, '/StudentForm.html')),
)
router.get('/students', (_req, res) => {
  dbConnection.query('SELECT * FROM personal_info', (error, results) => {
    if (error)
      return res.status(400).json({ status: 'error', message: error.sqlMessage,})
  return res.send({ status: 'success', message: 'Student retrieved', payload: results,})
  })
})
router.get('/students/:pId', (req, res) => {
  const { pId } = req.params
  if (!pId)
    return res.status(400).json({ status: 'error', message: 'Please provide student id',})
  dbConnection.query('SELECT * FROM personal_info where StudentId = ?',pId,(_error, results) => {
    return res.send({ status: 'success', message: 'Student retrieved',payload: results[0],})
  },)
})
router.post('/students', (req, res) => {
  const { personalInfo: pInfo } = req.body;
  if (!pInfo)
    return res.status(400).json({status: 'error',message: 'Please provide personal information',})
  dbConnection.query('INSERT INTO personal_info SET ?',pInfo,(error, _results) => {
    if (error)
      return res.status(400).json({ status: 'error',  message: error.sqlMessage,})
    return res.json({status: 'success',message: 'New student has been created successfully.',})
  },)
})
router.put('/students', (req, res) => {
    let StudentId = req.body.student.student_id;
    let student = req.body.student;
    if (!StudentId || !student) {
        return res.status(400).send({ error: student, message: 'Please provide student information' });
    }
    dbconn.query("UPDATE personal_info SET ? WHERE student_id = ?", [student, StudentId], function (error,results) {
    if (error) throw error;
        return res.send({error: false, data: results.affectedRows, message: 'Student has been updated successfully.'})
    });
})
router.delete('/students', (req, res) => {
  const { StudentId } = req.body;
  if (!StudentId)
    return res.status(400).json({status: 'error',message: 'Please provide student id',})
  dbConnection.query('DELETE FROM personal_info WHERE StudentId = ?',[StudentId],(error, _results) => {
    if (error)
      return res.status(400).json({status: 'error',message: error.sqlMessage,})
    return res.json({status: 'success',message: 'Student has been deleted successfully.',})
  },)
})
app.listen(port, () => {
  console.log(`Listening at port ${port}`)
})