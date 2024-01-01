## Patterns and event optimization

### Acceptance criteria

- `js-hw-07` repository created.
- In your submitted homework, there are two links: to the source files and your working page on `GitHub Pages`.
- During live page visits, there are no errors or warnings generated in the console.
- Clear and descriptive names of variables and functions.
- Code formatted with `Prettier`.

### Start files

[Download the startup files](https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/goitacademy/javascript-homework/tree/main/v2/07/src) with the ready layout and attached script files for each task. Copy them into your project.

In the `gallery-items.js` file, there is an array called `galleryItems`, which contains objects with information about images: small (preview), original (large) and description. It has already been added to each of the project's JS files.

### Task 1 - Image gallery

Create a gallery with the ability to click on its items and view full size images in a modal window. Check out the demo video of the gallery.

Do this task in the `01-gallery.html` and `01-gallery.js` files. Break it down into several subtasks:

1. Creating and rendering markup from the `galleryItems` data array and provided gallery item template.
2. Implementing delegation to `ul.gallery` and getting the `url` of a large image.
3. Adding the script and styles of the modal window library `basicLightbox`. Use the `jsdelivrCDN` service and add links to minified (`.min`) library files to your project.
4. Opening a modal window by clicking on a gallery item. To do this, check out the `documentation` and `examples`.
5. Replacing the value of the src attribute of the `<img>` element in a modal window before opening. Use the ready-made modal window markup with the image from the examples of the `basicLightbox` library.

### Gallery item markup

The link to the original image must be stored in the source data attribute on the `<img>` element and specified in the link's `href`. Do not add any HTML tags or CSS classes other than those in this template.

```javascript
<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</li>
```

Please note that the image is wrapped in a link, which means that, when clicked, the user will be redirected to another page by default. Disable this behavior by default.

**Closing from keyboard**
**ATTENTION**
_The following features are optional, but they will be a good additional practice._

Add modal window closing upon pressing the Escape key. Make keyboard listening available only while the modal window is open. In the `basicLightbox` library, there is a method to close the modal window programmatically.

### Task 2 - SimpleLightbox library

Create the same gallery as in the first task, but using the `SimpleLightbox` library, which will handle image clicks, modal opening and closing and image scrolling with the keyboard.

It is necessary to slightly change the gallery card markup; use this template.

```javascript
<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img class="gallery__image" src="small-image.jpg" alt="Image description" />
  </a>
</li>
```

Do this task in the `02-lightbox.html` and `02-lightbox.js` files. Break it down into several subtasks:

1. Creating and rendering markup from the `galleryItems` data array and provided gallery element template. Use the ready-made code from the first task.
2. Adding the script and library styles using the `cdnjs CDN` service. You need to add links to two files: `simple-lightbox.min.js` and `simple-lightbox.min.css`.
3. Library initialization after gallery items are created and added to `ul.gallery`. To do this, read the `SimpleLightbox` documentation - first of all, the Usage and Markup sections.
4. Look in the documentation for the Options section and add image caption display from the `alt` attribute. Let the caption be at the bottom and appear 250 milliseconds after image opening.
