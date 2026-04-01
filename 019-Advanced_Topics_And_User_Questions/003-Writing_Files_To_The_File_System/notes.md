# Writing Files To The File System

- Postman scripts cannot directly access the file system
- Use Node.js `fs` module combined with Newman to read/write files
- Use `fs.writeFile()` to write request or response data to `.txt` files
- Use Newman's `beforeRequest` event to capture and save request bodies
- Use Newman's `request` event to capture and save response data
- File names can be made unique using `Date.now()` as a prefix
