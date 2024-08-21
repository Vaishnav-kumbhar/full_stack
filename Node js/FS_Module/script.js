/*
const f = require("fs");
console.log("READ START");
f.readFile("index.txt", (err, data) => {
  if (err) {
    console.log("Error", err);
    return err;
  }
  console.log("DATA:", data.toString());
  console.log("READ END");
  return data;
});

console.log("OTHER STUFF");
*/

// sync way of reading file of file system
/*
const f = require("fs");
const data = f.readFileSync('index.txt');
console.log('other stuff');
console.log('DATA:->', data.toString());
console.log('READ END')
*/

// another way to read this is low level api
/*
const f = require("fs");
const buf = new Buffer(1024);
f.open("index.txt", "r+", function (err, fd) {
  if (err) {
    console.log("error while opeing file", err);
  }
  console.log(fd, "succesfully opend file");
  f.read(fd, buf, 0, buf.length, 0, function (error, bytes) {
    if (error) {
      console.log("error while reading file", error);
    }
    console.log("file data:->", bytes);
    console.log("file data:->", buf.slice(0, bytes).toString());
    f.close(fd, function (err) {
      if (err) console.log("error while closing file");
    });
    console.log("file succesfully closed!");
  });
});
*/

/*
// how to write file in file system
const f = require("fs");
f.writeFile("index.txt", "node js", function (err) {
  if (err) {
    console.log("error while writing files");
  }
  console.log("Success in writing file!");
});
*/

/*
const f = require("fs");
f.appendFile("index.txt", "-- Backend dev", "utf8", function (err) {
  if (err) {
    console.log("error while appending file");
  } else {
    console.log("Successfully appended");
  }
});
*/

// how to delete file in fs module
const f = require("fs");
f.unlink("index.txt", function (err) {
  if (err) {
    console.log("error while deleting file");
  }
  console.log("file successfully deleted!");
});
