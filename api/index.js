import express from 'express'
import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'

const app = express()

app.use(express.json())  //without this we can't send user data to db
app.use("/api/posts", postRoutes)
app.listen(8800, ()=> {
    console.log("Connected!")
})
