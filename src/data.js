const pagesKey = "pages";

let pagesJson = localStorage.getItem(pagesKey);
let pagesStorage = JSON.parse(pagesJson);

export default {
  getAllPages() {
    return pagesStorage;
  },

  getSinglePage(index) {
    return pagesStorage[index];
  },
};
