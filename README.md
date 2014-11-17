Imageresizer
===========
This JavaScript script resizes images to fit a selected container.

The resize is performed by checking the original image's height and then computing the correct alignment margins in order to fit the image rappresentation to its container.

The main computing function is binded on the window load event (or when all images have been loaded by the browser) and when the window resizes so that the images can fit to the new container's sizes (this scenario is expecially used on responsive web applications).

### Installation

Include the JavaScript source into the `head` tag and then insert images with containers as below: 

```html
<div class="image-panel">
  <img class="image-to-resize" src="http://host/example.jpg" />
</div>
```
Note that the used CSS classes `image-panel` and `image-to-resize` are hard-coded inside the script, so you can change as you prefer.

### Requirements

Requires jQuery library, version 1.9.* and greater.

### Future improvements

- Authoring this script into a jQuery plugin.

### Version
0.2
