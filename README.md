Imageresizer
===========
This JavaScript script resizes images to fit a selected container.

The resize is performed by checking the original image's height and then computing the correct alignment margins in order to fit the image rappresentation to its container.

The main computing function is binded on the window load event (or when all images have been loaded by the browser) and when the window resizes so that the images can fit to the new container's sizes (this scenario is expecially used on responsive web applications).

### Version
0.2
