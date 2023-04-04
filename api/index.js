import express from 'express'
import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'
import cors from 'cors'

const app = express()

app.use(express.json()) //without this we can't send user data to db
app.use(cors())


app.use("/api/posts", postRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
// app.get('/test',(req,res) => {
//     res.json('It works!')
// })


app.listen(8800, ()=> {
    console.log("Connected!")
})
