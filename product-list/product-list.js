// product-list/product-list.js

// Bien Toan Cuc

let currentPage = 1;
const ITEM_PER_PAGE = 18

let currentFilter = {
    categories: [],
    minPrice: '',
    maxPrice: ''
};
let currentSort = 'default';
let filteredProducts = [];
let currentSearchQuery = '';


document.addEventListener("DOMContentLoaded", function () {
    // Nap du lieu vao localStorage neu chua co
    if (typeof loadData === 'function') loadData();

    // Render header & footer
    if (typeof loadHeader === 'function') loadHeader();
    if (typeof loadFooter === 'function') loadFooter();

    initializeProductList();
})

