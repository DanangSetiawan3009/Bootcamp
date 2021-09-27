// class User {
//     name
//     username
//     password
//     jenisKelamin
//     agama
//     hobby
//     alamat
// }

const addEvent = () => {
    document.addEventListener("click", e => {
        // console.log(e);
        if(e.target.getAttribute("list-menu")){
            const listMenu = e.target.getAttribute("list-menu")
            selectMenu(listMenu)
        }
        // Klik Registrasi 
        if (e.target.getAttribute("data-input")) saveData()
        // Klik First Page
        if (e.target.getAttribute("paging-first")) firstPage()
        // Klik Next Page
        if (e.target.getAttribute("paging-next")) nextPage()
        // Klik Previous Page
        if (e.target.getAttribute("paging-previous")) previousPage()
        // Klik Last Page
        if (e.target.getAttribute("paging-last")) lastPage()
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
    // if (selector === "user") showUser()
}

// const showUser = () => {
//     const userList = [{
        
//     }]
    
//     const section = document.querySelector("[data-section='user']")
    
//     section.innerHTML = ""
//     userList.forEach(user => {
//         section.innerHTML += `<h1>${user.name}</h1>`
//     })
// }

users = [] // Membuat Array kosong untuk di update
const updateUserList = () => {
    document.querySelector("table>tbody").innerHTML = ""
    for (let index = 0; index < users.length; index++) {
        const user = users[index]
        document.querySelector("table>tbody").innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.gender}</td>
            <td>${user.agama}</td>
            <td>${user.hobby}</td>
            <td>${user.alamat}</td>
        </tr>
        `
    }
}

const saveData = () => {
    const name = document.querySelector("[name='name']").value
    const username = document.querySelector("[name='username']").value
    const gender = document.querySelector("[name='gender']:checked")?.value
    const agama = document.querySelector("[name='agama']").value
    const hobby = document.querySelector("[name='hobby']").value
    const alamat = document.querySelector("[name='alamat']").value

    users.push({
        name,
        username,
        gender,
        agama,
        hobby,
        alamat
    })
    updateUserList()
    selectMenu("user")
    if (users => 5) {
        
    }
}

// Paging Methods
countList = new Array();
addPageList = new Array();
presentPage = 1;
countPerEachPage = 10;
countOfPages = 0;

const prepareList = () => {
    for (let index = 0; index < 100; index++) {
        countList.push(index);
        countOfPages = getCountOfPages();
    }
}

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

const createPageList = () => {
    document.getElementById("countList").innerHTML = "";
    for (p = 0; p< addPageList.length; p++) {
    document.getElementById("countList").innerHTML = document.getElementById("countList").innerHTML+ addPageList[p] + "<br/>";
    }
}

const validatePageCount = () => {
    document.getElementById("next").disabled = presentPage == countOfPages ? true : false;
    document.getElementById("previous").disabled = presentPage == 1 ? true : false;
    document.getElementById("first").disabled = presentPage == 1 ? true : false;
    document.getElementById("last").disabled = presentPage == countOfPages ? true : false;
}

const loadMyPagination = () => {
    prepareList();
    loadMyPaginationList();
}
window.onload = loadMyPagination;

// 
const __init = () => {
    addEvent()
    selectMenu("register")
    updateUserList()
}
__init()

