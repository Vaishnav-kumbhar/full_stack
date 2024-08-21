const regex = / "http: || https:", "&&" , ".", "="/gi;
const url = "https://www.bing.com/ck/a?!&&p=314080813e515e59JmltdHM9MTcwNzc4MjQwMCZpZ3VpZD0wNTE4Y2M0OS1iOGM4LTZiMjctMzJlYi1kZGI2Yjk2MDZhMGYmaW5zaWQ9NTIxMw&ptn=3&ver=2&hsh=3&fclid=0518cc49-b8c8-6b27-32eb-ddb6b9606a0f&psq=google+url&u=a1aHR0cHM6Ly93d3cuZ29vZ2xlLmNvLmluLw&ntb=1";

let result = regex.test(url);
if (result === true) {
console.log(`url matched ${result}`);
} else {
  console.log(`url not matched`);
}
// expected output url matched trur;

// let result = url.replace(regex, "👍");
// console.log(result);