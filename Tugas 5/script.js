const addEvent = () => {
    document.addEventListener("click", e => {
        // console.log(e);
        if(e.target.getAttribute("list-menu")){
            const listMenu = e.target.getAttribute("list-menu")
            selectMenu(listMenu)
        }
        // Klik Registrasi 
        if (e.target.getAttribute("data-input")) saveData()
        // Klik Search
        if(e.target.getAttribute("search-data")) searchData()
    })
}

function selectMenu(selector) {
    let menus = document.querySelectorAll(".menu")
    for (let index = 0; index < menus.length; index++) {
        const menu = menus[index];
        menu.classList.remove("selected")
    }
    document.querySelector(`[list-menu='${selector}']`)?.classList.add("selected") // Tanda Tanya(?) untuk conditional if jika ada atau tidak'nya data
    changeContent(selector)
}

const changeContent = selector => {
    let menus = document.querySelectorAll("[data-section]")
    menus.forEach(menu => menu.classList.remove("show"))
    document.querySelector(`[data-section='${selector}']`)?.classList.add("show")
}

// const fn1 = () => {
//     return fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     // .then(json => console.log(json))
// }

// const callAPI = async () => {
//     users = await fn1()
// }
countList = []
addPageList = []
presentPage = 1;
countPerEachPage = 5;
countOfPages = 1;

const saveData = () => {
    const name = document.querySelector("[name='name']").value
    const username = document.querySelector("[name='username']").value
    const email = document.querySelector("[name='email']").value
    const city = document.querySelector("[name='city']").value

    countList.push({
        name,
        username,
        email,
        city
    })

    document.querySelector("table>tbody").innerHTML = ""
    loadMyPaginationList()
    for (let index = 0; index < countList.length; index++) {
        countOfPages = getCountOfPages();
    }
    selectMenu("user")
}

// Searching Data Function
const searchData = () => {

}

// Paging Function
const getCountOfPages = () => {
    countList.length / countPerEachPage;
}

const firstPage = () => {
    presentPage = 1;
    loadMyPaginationList();
}

const nextPage = () => {
    presentPage += 1;
    loadMyPaginationList();
}

const previousPage = () => {
    presentPage -= 1;
    loadMyPaginationList();
}

const lastPage = () => {
    presentPage = countOfPages;
    loadMyPaginationList();
}

const loadMyPaginationList = () => {
    let start = ((presentPage - 1) * countPerEachPage);
    let end = start + countPerEachPage;
    addPageList = countList.slice(start, end);
    createPageList();
    validatePageCount();
}

// input default data dari json
// const fn1 = () => {
//     return fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
// }

const createPageList = async () => {
    // countList = await fn1()
    document.querySelector("table>tbody").innerHTML = "";
    for (p = 0; p< addPageList.length; p++) {
        document.querySelector("table>tbody").innerHTML += `
        <tr>
            <td value='${p + 1}'>${p + 1}</td>
            <td>${addPageList[p].name}</td>
            <td>${addPageList[p].username}</td>
            <td>${addPageList[p].email}</td>
            <td>${addPageList[p].city}</td>
            <td align='center' type='button'>Edit</td>
            <td align='center'type='button'>Delete</td>
        </tr>
        `
    }
}

const validatePageCount = () => {
    document.getElementById("next").disabled = presentPage == countOfPages ? true : false;
    document.getElementById("previous").disabled = presentPage == 1 ? true : false;
    document.getElementById("first").disabled = presentPage == 1 ? true : false;
    document.getElementById("last").disabled = presentPage == countOfPages ? true : false;
}

// const loadMyPagination = () => {
//     prepareList();
//     loadMyPaginationList();
// }

// window.onload = loadMyPagination;


// Untuk memanggil function di awal
const __init = () => {
    addEvent()
    selectMenu("register")
    createPageList()
    loadMyPaginationList();
}
__init()

