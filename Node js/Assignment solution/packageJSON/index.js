const f = require("fs");

/*
f.appendFile(
  "node_js_architecture.txt",
  "node_js is runtime environment of js",
  function (err) {
    if (err) {
      console.log(err);
    }
    console.log("added successfully");
  }
);

*/

// Read file and log the content
/*
f.readFile('node_js_architecture.txt', 'utf8', (err, msg) => {
  if (err) {
 console.log('error while reading file content', err);
  } else {
    console.log(`File succesfully read and the content is:${msg.toString()}`);
  }
})

*/


/*
f.appendFile(
  "node_js_architecture.txt",
  "It is used for server-side programming, and primarily deployed for non-blocking, event-driven servers, such as traditional web sites and back-end API services, but was originally designed with real-time, push-based architectures in mind. Every browser has its own version of a JS engine, and node",
  function (err) {
    if (err) {
      console.log(err);
    }
    console.log("added successfully");
  }
);

*/

f.unlink("node_js_architecture.txt", function(err) {
 if (err) {
  console.log('error while deleting file', err);
 } else {
    console.log('sucessfully deleted file');
 }
})