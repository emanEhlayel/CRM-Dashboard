import express from 'express';
import 'dotenv/config';
import connectDB from './configs/db.js';
import customerRouter from './routes/customerRoute.js';
import dealRouter from './routes/dealRouter.js';
import taskRouter from './routes/taskRoute.js';

const app = express();
const PORT = 3000;


await connectDB()

app.use(express.json());
app.use('/api', customerRouter)
app.use("/api", dealRouter);
app.use('/api', taskRouter)


// API Routes
app.get('/', (req, res) => res.send('Server is Live'))
app.listen(PORT , ()=>console.log(`Server is running on port http://localhost:${PORT}`))
