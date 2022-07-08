import SanPham from "../models/SanPham.js";
import SpService from "../services/SpServices.js";
const Spser = new SpService();
let ShowSp = (Splist) => {
    let content = "";
    for (const index in Splist) {
        let { id, name, price, backCamera, frontCamera, decs, type } = Splist[index]

        content += `
        <tr>
    
    <td>${id}</td>
    <td>${name}</td>
    <td>${Number(price)}</td>
    <td>${backCamera}</td>
    <td>${frontCamera}</td>
    <td>${decs}</td>
    <td>${type}</td>
    <td>
    <button  class="btn btn-info" data-toggle="modal" data-target="#exampleModal">Xem</button>
    <button class="btn btn-danger" >Xóa</button>
    </td>
    </tr>
        
        `
    }

    document.querySelector("#tbodyFood").innerHTML = content;


}

let getSpDetail = () => {
    Spser.getListSp().then((result) => {
        console.log(result.data);
        ShowSp(result.data)

    }).catch((er) => {
        console.log(er)
    })

};
getSpDetail();

let getFormValue = () => {
    // arrControl là một loại dữ liệu được biểu diễn dưới dạng Arr nhưng ko có được những thuộc tính của arr 
    let arrControl = document.querySelectorAll("#exampleModal .form-control");
    let formValue = {};
    for (let i = 0; i < arrControl.length; i++) {
        let { id, value } = arrControl[i];

        // lưu các giá trị vào đối tượng sử dụng object literal 
        formValue = {...formValue, [id]: value }

    }
    return formValue

};
getFormValue();

let addSp = () => {
    let formValue = getFormValue();
    let { name, price, backCamera, frontCamera, decs, type } = formValue;
    let Sp = new SanPham(name, price, backCamera, frontCamera, decs, type);

    console.table("Sp")

    Spser.addSpAPI(Sp).then((result) => {
        getSpDetail(result.data)
        document.querySelector("#exampleModal .close").click();
    }).catch((er) => {
        console.log(er)
    })

}
window.addSp = addSp;

let searchTen = () => {
    var mangSP = [];
    let tenSp = document.getElementById("selLoai").value;


}