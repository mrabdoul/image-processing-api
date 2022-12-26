//Import Express framework
import express from 'express';
//Import routes
import images from './routes/api/routes';

//Call Express
const app = express();

//Port
const port = 5000;

//Establish routes
app.use('/api', routes);


// The following callback is executed for requests to ./ using GET

app.get('/', (req: express.Request, res: express.Response): void => {
  res
    .status(200)
    .send(
      'Welcome to the image processing api. See example api call http://localhost:5000/api/images?filename=palmtunnel&width=500&height=500'
    );
});

app.listen(port, (): void => {
  console.log(`Server running on port ${port}`);
});

export default app;
