// class User {
//     name
//     username
//     password
//     jenisKelamin
//     agama
//     hobby
//     alamat
// }

function regis() {
    const name = document.querySelector("#name")
    const username = document.querySelector("#username")
    const password = document.querySelector("#password")
    const jenisKelaminf = document.querySelector("#female")
    const jenisKelaminm = document.querySelector("#male")
    const agama = document.querySelector("#agama")
    const hobby = document.querySelector("#hobby")
    const alamat = document.querySelector("#alamat")
    console.log(name.value);
    console.log(username.value);
    console.log(password.value);
    console.log(jenisKelaminf.value);
    console.log(jenisKelaminm.value);
    console.log(agama.value);
    console.log(hobby.value);
    console.log(alamat.value);
    let list = document.querySelector(".list")
    list.innerHTML = "Nama : " + name.value + "<br>" + 
    "Username : " + username.value + "<br>" + 
    "Jenis Kelamin : " + jenisKelaminm.value + "<br>" + 
    "Agama : " + agama.value + "<br>" + 
    "Hobby : " + hobby.value + "<br>" + 
    "Alamat : " + alamat.value
}

