# Udacity Image Processing API

This is an API that serves two different purposes. As a simple placeholder API, It allows the user to place images into the frontend with the sizes set via URL parameters for rapid prototyping. It can also be used as a library to serve properly scaled versions of user images to the frontend to reduce page load time. Rather than needing to resize and upload multiple copies of the same image to be used throughout the site, this API will handle resizing and serving stored images for the user.


## Project setup

First, clone this repo and switch into the repo folder:

```bash
git clone https://github.com/mrabdoul/image-processing-api.git
cd image-processing-api
```

Now you need to install the dependencies for the server code.

### Install all dependencies using the package.json file

```bash
npm install
```

### Lint the code using Eslint

```bash
npm run lint
```

### Format the code using Prettier

```bash
npm run format
```

### Build and Test the app using Jasmine

```bash
npm run test
```

### Now that everything is set up, you can test the app by starting the server using nodemon

```bash
npm run dev
```
 
##### Usage:
To use the Image Processor API, send a request to the endpoint with the following query parameters:

**filename** : The filename of the image file to process as stored under assets

**width** : The intended width of the image file to be returned

**height** : The intended height of the image file to be returned

###### Example - http://localhost:5000/api/images?filename=palmtunnel&width=500&height=500


Once the application is running, a sample front-end page can be viewed - http://localhost:5000/ - which displays image thumbnails with varying sizes.



##### Error messages:

___401 Bad Request___:  query parameters are missing, invalid or cannot be determined

___404 Not Found___:  image file could not be found or does not exist under assets
