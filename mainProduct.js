//<img src="./img/${products[i].imgSP}" width="200px" height="200px">
//Hàm tạo Sản Phẩm
class Product {
    constructor(code, name, count, date, sup, img, price) {
        this.code = code;
        this.name = name;
        this.count = count;
        this.date = date;
        this.sup = sup;
        this.img = img;
        this.price = price;
    }
}
//BẢNG TẠO SẢM PHẨM
    var listCode = localStorage.getItem('listCode') ? JSON.parse(localStorage.getItem('listCode')) : [] ;
    var tmp = -1;
    var tableCreateProduct = document.getElementById('tableCreate');
    var tableProduct = document.getElementById('tableProduct');
    var products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [] ;

//Không bị mất sản phẩm khi refresh lại trang
if(products.length > 0) {
    for(let i = 0 ; i<products.length ; i++) {
        resultProduct.innerHTML += 
        `<tr>
        <td>${products[i].code}</td>
        <td>${products[i].name}</td>
        <td>${products[i].count}</td>
        <td>${products[i].price}</td>
        <td>${products[i].date}</td>
        <td>${products[i].sup}</td>
        <td> <button class="text-danger font-weight-bolder" type='button' onclick='delProduct(${i})' > Delete </button>
        <button class="text-success font-weight-bolder" type='button' onclick='edit(${i})' > Edit </button>
        </td> </tr>`
    }
}    
//Nút Tạo Sản Phẩm
function createProduct() {
    var codeSP =checkCodeSP(valueID("inputCodeSP"));
    var nameSP = checkNameSP(valueID("inputNameSP"));
    var countSP = checkCountSP(valueID("inputCount"));
    var dateSP = checkDateSP(valueID("inputDate"));
    var supSP = checkNCCSP(valueID("inputNCC"));
    var urlImg = checkIMG(valueID("imgSP")); 
    var imgSP = urlImg.substr(12,urlImg.length);
    var priceSP = checkPriceSP(valueID("inputPrice"));
    var checkForm = document.getElementById('checkForm');
    document.getElementById('errForm').innerHTML = "";
    
    //Tạo đối tượng sp từ Class Product
    var sp = new Product();
        sp.code = codeSP;
        sp.name = nameSP;
        sp.count = countSP;
        sp.date = dateSP;
        sp.sup = supSP;
        sp.img = imgSP;
        sp.price = priceSP;

        if(tmp>=0){
            products[tmp]=sp;
            tmp = -1;
            localStorage.setItem('listCode',JSON.stringify(listCode));
            localStorage.setItem('products',JSON.stringify(products));
        }else if(codeSP == ""|| nameSP == ""|| countSP == ""|| dateSP == ""|| supSP == ""|| imgSP =="" || priceSP == "") {
        alert("Nhập đầy đủ thông tin");
        }else if( checkForm.checked === false) {
            alert('Phải tích chọn ở mục cuối cùng');
            document.getElementById('errForm').innerHTML = "Không dược để trống";
        }else{
            
        alert("Thêm thành công");
        listCode.push(codeSP);
        console.log(listCode);
        products.push({
            code : codeSP,
            img : imgSP,
            name : nameSP,
            count : countSP,
            date : dateSP,
            sup : supSP,
            price : priceSP
        });
        localStorage.setItem('listCode',JSON.stringify(listCode));
        localStorage.setItem('products',JSON.stringify(products));
    }
    outPut();
}
// Xuất danh sách
function outPut() {
    var resultProduct = document.getElementById('resultProduct');
        resultProduct.innerHTML = " "; 
        for(let i = 0 ; i<products.length ; i++) {
            resultProduct.innerHTML += 
            `<tr>
            <td>${products[i].code}</td>
            <td>${products[i].name}</td>
            <td>${products[i].count}</td>
            <td>${products[i].price.replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1.')}</td>
            <td>${products[i].date}</td>
            <td>${products[i].sup}</td>
            <td> <button class="text-danger font-weight-bolder" type='button' onclick='delProduct(${i})' > Delete </button>
            
            </td> </tr>`
        }
    // location.reload();    
}
        //<button class="text-success font-weight-bolder" type='button' onclick='edit(${i})' > Edit </button>


//Xóa sản phẩm
function delProduct(i){
    
    var del = confirm("Bạn có chắc chắn muốn xóa !! ");
    
    if(del){
        products.splice(i,1);
        listCode.splice(i,1);  
    }
    localStorage.setItem('listCode',JSON.stringify(listCode));
    localStorage.setItem('products',JSON.stringify(products));
    outPut();
}

//Chỉnh sửa sản phẩm      
function edit(i){
   for(j = 0 ; j<listCode.length ; j++) {
       if(listCode[j] == products[i].code){
        products[i].code = listCode[i];
       }
   }
    document.getElementById('create').style.display = "none";
    document.getElementById('edit').style.display = "block";
    document.getElementById('errForm').innerHTML = "Nhớ tích vào đây !!";
    document.getElementById('errIMG').innerHTML = "Chọn lại đúng ảnh";
    tmp = i;
    document.getElementById('inputCodeSP').value = products[i].code;
    document.getElementById('inputNameSP').value = products[i].name;
    document.getElementById('inputCount').value = products[i].count;
    document.getElementById('inputNCC').value = products[i].sup;
    document.getElementById('inputPrice').value = products[i].price;
    document.getElementById('inputDate').value = products[i].date;
    document.getElementById('showIMG').innerHTML =`<h4 class="text-center">Ảnh Sản Phẩm</h4>
    <img src="./img/${products[i].img}" width="200px" height="200px">
    <p class="text-center">Tên sản phẩm : ${products[i].img}</p>`;
}

function valueID(id) {
    return document.getElementById(id).value;
}

//Kiểm tra dữ liệu đầu vào
function checkCodeSP(data) {
    var filterCode = /^[0-9]{3}$/;
    document.getElementById('errCode').innerHTML = "";
    if(listCode.includes(data)){
        document.getElementById('errCode').innerHTML = `Mã ${data} đã tồn tại`;
        data ="";
        return false;
    }
    if(data.trim().length == 0) {
        document.getElementById('errCode').innerHTML = "Không được để trống";
        return false;
    }else if(!filterCode.test(data.trim())) {
        document.getElementById('errCode').innerHTML = "Nhập sai cú pháp : 1__";
        return false;
    }
    return data;
}

function checkNameSP(data) {
    document.getElementById('errName').innerHTML = "";
    if(data.trim().length == 0) {
        document.getElementById('errName').innerHTML = "Không được để trống";
        return false;
    }
    return data;
}

function checkCountSP(data) {
    document.getElementById('errCount').innerHTML = "";
    if(data.trim().length == 0) {
        document.getElementById('errCount').innerHTML = "Không được để trống";
        return false;
    }
    return data;
}

function checkNCCSP(data) {
    document.getElementById('errNCC').innerHTML = "";
    if(data.trim().length == 0) {
        document.getElementById('errNCC').innerHTML = "Không được để trống";
        return false;
    }
    return data;
}

function checkPriceSP(data) {
    document.getElementById('errPrice').innerHTML = "";
    if(data.trim().length == 0) {
        document.getElementById('errPrice').innerHTML = "Không được để trống";
        return false;
    }
    return data;
}

function checkDateSP(data) {
    document.getElementById('errDate').innerHTML = "";
    if(data.trim().length == 0) {
        document.getElementById('errDate').innerHTML = "Không được để trống";
        return false;
    }
    return data;
}



function checkIMG(data) {
    document.getElementById('errIMG').innerHTML = "";
    if(data.trim().length == 0) {
        document.getElementById('errIMG').innerHTML = "Không được để trống";
        return false;
    }
    return data;
}