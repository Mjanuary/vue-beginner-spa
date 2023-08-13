const pagesKey = "pages";

let pagesJson = localStorage.getItem(pagesKey);
let pageStore = JSON.parse(pagesJson);

export default {
  addPage(page) {
    pageStore.push(page);
    localStorage.setItem(pagesKey, JSON.stringify(pageStore));
  },

  getAllPages() {
    return pageStore;
  },

  getSinglePage(index) {
    return pageStore[index];
  },

  editPage(index, page) {
    pageStore[index] = page;

    localStorage.setItem(pagesKey, JSON.stringify(pageStore));
  },
};
