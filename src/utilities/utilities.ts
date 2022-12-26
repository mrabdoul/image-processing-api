import sharp from 'sharp';


// Function to resize images using 'Sharp'

async function resizeImage(
  imagePath: string,
  imgWidth: number,
  imgHeight: number,
  outputPath: string
): Promise<void> {

//Throws an error
  try {
    await sharp(imagePath)
      .resize(imgWidth, imgHeight, { fit: 'cover' })
      .toFile(outputPath);
  } catch (error) {
		console.log(error);
  }
}

export default resizeImage;
