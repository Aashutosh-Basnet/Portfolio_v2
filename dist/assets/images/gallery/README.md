# Project Gallery Images

This directory contains project gallery images organized by project ID.

## How to Add Images to Project Galleries

1. Each project has its own folder named `project1`, `project2`, etc., corresponding to the project ID in the data.
2. Place your images in the appropriate project folder.
3. Name your images sequentially (e.g., `image1.jpg`, `image2.jpg`, etc.).
4. For best results, use consistent image dimensions (recommended: 1200x800px or 4:3 aspect ratio).
5. The gallery supports various image formats (jpg, jpeg, png, webp).

## Folder Structure

```
/gallery
├── project1
│   ├── image1.jpg
│   ├── image2.jpg
│   └── image3.jpg
├── project2
│   ├── image1.jpg
│   ├── image2.jpg
│   └── image3.jpg
...
└── project9
    ├── image1.jpg
    ├── image2.jpg
    └── image3.jpg
```

## Notes

- The project gallery will automatically display all images found in the corresponding project folder.
- If no images are found for a project, the main project image will be displayed as a fallback.
- Images are displayed in a responsive grid layout that adapts to different screen sizes.
- Clicking on any image opens a full-screen lightbox viewer with navigation controls. 