// Import dependencies
import express from 'express';
import path from 'path';
import fs from 'fs';
import resizeImage from '../../utilities/utilities';

const routes = express.Router();
const morgan = require('morgan');


// Use morgan to log all the incoming requests to console

routes.use(morgan('tiny'));


//  Uses an application-level middleware to check if the requested file has been pre-stored before regenerating a new image each time

routes.use(
  async (req, res, next) => {
  
    //Defines the path to check if the image has been cached before
	
    let filePath = `${
      path.join(__dirname, '../../../assets/thumb/') + req.query.filename
    }_thumb_${req.query.width}_${req.query.height}.jpg`;

    //Checks if the image exist in the thumb folder or not
	
    try {
      await fs.promises.readFile(filePath, 'utf8');
      res.status(200).sendFile(filePath);
    }
    catch(err) {
      next();
    }
  }
);


// If the requested file is not pre-stored before regeneration, a new image is created and stored to be returned on future requests

routes.get(
  '/images',
  async (
    req: express.Request,
    res: express.Response
  ): Promise<void> => {
    const filename = req.query.filename;
    const imgWidth: number = parseInt(req.query.width as string);
    const imgHeight: number = parseInt(req.query.height as string);

    // Defines the path for the file to be resized
    let imgPath = `${
      path.join(__dirname, '../../../assets/full/') + filename
    }.jpg`;

    // Defines the path to store the resized file for caching
    let filePath = `${
      path.join(__dirname, '../../../assets/thumb/') + filename
    }_thumb_${imgWidth}_${imgHeight}.jpg`;

    // Checks if the image requested for resize exists
    try {
      await fs.promises.readFile(imgPath, 'utf8');
    }
    catch(err) {
      res.status(404).send('Sorry, filename provided does not exist.');
    }

    try {
      //Attempts to resize the image based on the user sizes
      await resizeImage(imgPath, imgWidth, imgHeight, filePath);
      res.status(200).sendFile(filePath);
    } catch (error) {
      if (!res.headersSent) {
        //Informs the user of an image processing error
        res
          .status(401)
          .send(
            'Failed to process image. Please check parameters and try again.'
          );
      }
    }
  }
);

export default routes;
