const books = [
  { title: "Rich Dad Poor Dad", author: "james clear", year: 2007 },
  { title: "The India Story", author: "bimal jalal", year: 2022 },
  { title: "Ek Samandar, Mere Andar", author: "Sanjeev Joshi", year: 2021 },
  {
    title: "Gandhi: A Life in Three Campaigns",
    author: "M.J. Akbar and K Natwar Singh",
    year: 2023,
  },
];

function BookObject(bookObject, callBack) {
  let newListTitles = bookObject.map((title) => title.title);
  callBack(newListTitles);
}

const callBack = (titles) => {
  titles.sort()
  console.log(`Book title is: ${titles.join(", ")}`);
};

BookObject(books, callBack);
