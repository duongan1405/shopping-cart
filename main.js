var listProduct = [
    {
        code : 101,
        name : 'Giày Nike Mercurial SUPERFLY',
        img : './img/giay-1.jpg',
        price : '2200000',
        color : 'Xanh lá',
        form : 'Phù hợp form chân bè',
        size : '39| 40| 41| 42| 43',
        material : 'Da tự nhiên có cấu trúc đẹp',
        weight : '250gram/chiếc',
        quality : 'Tốt'
    },
    {
        code : 102,
        name : 'Giày Nike Mercurial VAPOR',
        img : './img/giay-7.jpg',
        price : '2200000',
        color :'Xanh dương',
        form : 'Phù hợp form chân thon/chân bè',
        size : '39| 40| 41| 42| 43',
        material : 'Da tổng hợp mới mềm mại',
        weight : '198 gram/chiếc',
        quality : 'Tốt'
    },
    {
        code : 103,
        name : 'Giày Nike PhanTom GT ACADEMY',
        img : './img/giay-2.jpg',
        price : '2200000',
        color :'Xám',
        form : 'Phù hợp form chân thon/chân bè',
        size : '39| 40| 41| 42| 43',
        material : 'Da tổng hợp mới mềm mại',
        weight : '245 gram/chiếc',
        quality : 'Rất Tốt'
    },
    {
        code : 104,
        name : 'Giày Adidas CopaAmeria 2021',
        img : './img/giay-3.jpg',
        price : '1800000',
        color :'Xanh dương',
        form : 'Phù hợp form chân bè',
        size : '39| 40| 41| 42| 43',
        material : 'Da tự nhiên có cấu trúc Fusionskin.',
        weight : '250 gram/chiếc',
        quality : 'Tốt'
    },
    {
        code : 105,
        name : 'Giày Adidas Nemeziz Messi',
        img : './img/giay-4.jpg',
        price : '3000000',
        color :'Trắng',
        form : 'Phù hợp form chân bè,chân thon',
        size : '39| 40| 41| 42| 43',
        material : 'Da tổng hợp',
        weight : '250 gram/chiếc',
        quality : 'Tốt'
    },
    {
        code : 106,
        name : 'Giày Asics DS BLACK/WHITE',
        img : './img/giay-5.jpg',
        price : '1800000',
        color :'Xanh dương',
        form : 'Phù hợp form chân bè.',
        size : '39| 40| 41| 42| 43',
        material : 'Da tổng hợp độc quyền.',
        weight : '250 gram/chiếc',
        quality : 'Tốt'
    },
    {
        code : 107,
        name : 'Giày Puma Limited Euro 2021',
        img : './img/giay-6.jpg',
        price : '1500000',
        color :'Trắng',
        form : 'Phù hợp chân thon',
        size : '39| 40| 41| 42| 43',
        material : 'Da tổng hợp mỏng nhẹ',
        weight : '250 gram/chiếc',
        quality : 'Tốt'
    },
    {
        code : 108,
        name : 'Giày Asics ToQue 6 TF RED/BLACK',
        img : './img/giay-8.jpg',
        price : '1500000',
        color :'Cam',
        form : 'Phù hợp chân thon',
        size : '39| 40| 41| 42| 43',
        material : 'Da tổng hợp mỏng nhẹ',
        weight : '250 gram/chiếc',
        quality : 'Tốt'
    }
];
var products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
if(products.length==0) {
    listProduct.forEach((product) => {
        products.push({
            code : product.code,
            name : product.name,
            img : product.img,
            price :product.price ,
            color :product.color,
            form :product.form ,
            size :product.size,
            material : product.material,
            weight : product.weight,
            quality :product.quality 
        });
    });
    localStorage.setItem('products',JSON.stringify(products));
}

//Hiển thị bảng đăng ký , đăng nhập
var tableCreateUser = document.querySelector('#btnCreateUser');
var tableUser = document.querySelector('#btnUser');

tableCreateUser.onclick = () => {
    document.getElementById('tableCreateUser').style.display = "block";
    document.getElementById('tableUser').style.display = "none";
};
tableUser.onclick = () => {
    document.getElementById('tableUser').style.display = "block";
    document.getElementById('tableCreateUser').style.display = "none";
}

//Lấy dữ liệu
function valueID(id) {
    return document.getElementById(id).value;
}

// BẢNG TẠO TÀI KHOẢN

    //Nút tạo tài khoản
function creUserr() {
    var accounts = localStorage.getItem('accounts') ? JSON.parse(localStorage.getItem('accounts')) : [] ;
    
    var creUser = checkDataUser(valueID('creUser'));
    var crePass = checkDataPass(valueID('crePass'));
    var creName = filterName(checkDataName(valueID('creName'))) ;
    var creMail = checkDataMail(valueID('creMail'));
    var crePhone = checkDataPhone(valueID('crePhone'));
    var creAddress = checkDataAddress(valueID('creAddress'));
    var checkForm = document.getElementById('checkForm');
    document.getElementById('errForm').innerHTML = "";
    if(accounts.length == 0){
        if(creUser == "" || crePass == "" || creName == "" || creMail == "" || crePhone == "" || creAddress == "") {
            alert('Nhập đúng và đầy đủ thông tin');
        }else if( checkForm.checked === false) {
            alert('Phải tích chọn ở mục cuối cùng');
            document.getElementById('errForm').innerHTML = "Không dược để trống";
        }else {
            
            alert('Tạo thành công');
            accounts.push({
                user : creUser,
                pass : crePass,
                name : creName,
                mail : creMail,
                phone : crePhone,
                address : creAddress
            });
            localStorage.setItem('accounts',JSON.stringify(accounts));
            location.reload();
            
        }
    }else{ //Kèm xét trường hợp bị trùng tên tài khoản
        accounts.forEach((account)=> {
            if(creUser == account.user){
                alert('Tên tài khoản đã tồn tại');
            }else if(creUser == "" || crePass == ""  || creName == "" || creMail == "" || crePhone == "" || creAddress == "") {
                alert('Nhập đầy đủ thông tin cần');
            }else if( checkForm.checked === false) {
                alert('Phải tích chọn ở mục cuối cùng');
                document.getElementById('errForm').innerHTML = "Không dược để trống";
            }else{
                alert('Tạo thành công');
            accounts.push({
                user : creUser,
                pass : crePass,
                name : creName,
                mail : creMail,
                phone : crePhone,
                address : creAddress
            });
            localStorage.setItem('accounts',JSON.stringify(accounts));
            location.reload();
            }
        });
    }

}
    //Kiêm tra dữ liệu đăng ký

    function checkDataUser(data) {
        var filterUser = /^[a-zA-Z][a-zA-Z0-9]*$/;
         document.getElementById('errCreUser').innerHTML ="";
            if(data.trim().length == 0 ){
                document.getElementById('errCreUser').innerHTML = 'Không được để trống';
                return false;
            }else if(data.trim().length >=20){
                document.getElementById('errCreUser').innerHTML = 'Không quá 20 từ';
                return false;
            }else if ( !filterUser.test(data.trim())) {
                document.getElementById('errCreUser').innerHTML = 'Ký tự đầu không phải là số';
                return false;
            }
        return data;
    }

    function checkDataPass(data) {
        var filterPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]*$/;
        document.getElementById('errCrePass').innerHTML ="";
            if(data.trim().length == 0 ){
                document.getElementById('errCrePass').innerHTML = 'Không được để trống';
                return false;
            }else if(!filterPass.test(data.trim())) {
                    document.getElementById('errCrePass').innerHTML ='Trong Pass phải có chữ hoa chữ thường và số';
                    return false;
            }
       return data;
   }

   function checkDataName(data) {
    document.getElementById('errCreName').innerHTML ="";
    if(data.trim().length == 0){
        document.getElementById('errCreName').innerHTML = " Không được để trống";
        return false;
    }
    return data;
}   

    //Định dạng viết hoa tất cả chữ đầu trong các từ
function filterName(data) {
    var splitStr = data.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
         return splitStr.join(' '); 
 }

   function checkDataMail(data) {
    var filterEmail = /^[A-Za-z][\w$.]+@[\w]+\.\w+$/; // \w : bất kỳ ký tự gì : A-Z , a-z , 0-9 và _
    document.getElementById('errCreMail').innerHTML ="";
        if(data.trim().length == 0 ){
            document.getElementById('errCreMail').innerHTML = 'Không được để trống';
            return false;
        }else if (!filterEmail.test(data.trim())) {
                document.getElementById('errCreMail').innerHTML = 'Không đúng cú pháp : anco@gmail.com'
                return false; 
        }
   return data;
    }

function checkDataPhone(data) {
    var filterPhone = /^(0[56789][0-9]{8})$/ ;
    document.getElementById('errCrePhone').innerHTML ="";
        if(data.trim().length == 0 ){
            document.getElementById('errCrePhone').innerHTML = 'Không được để trống';
            return false;
        }else if(!filterPhone.test(data.trim())) {
                document.getElementById('errCrePhone').innerHTML = 'Không đúng cú pháp : 0[56789]_8số nữa'
                return false;
        }
   return data;
   
    }
function checkDataAddress(data) {
    document.getElementById('errCreAddress').innerHTML ="";
    if(data.trim().length == 0){
        document.getElementById('errCreAddress').innerHTML = " Không được để trống";
        return false;
    }
    return data;
}    

//BẢNG ĐĂNG NHẬP
    //Nút bấm đăng nhập
        function loginAcc() {
            var user = checkDataUser(valueID('user'));
            var pass = checkDataPass(valueID('pass'));
            var accounts = localStorage.getItem('accounts') ? JSON.parse(localStorage.getItem('accounts')) : [] ;
            var tmp = 0;
            accounts.forEach((account) => { 
                if(user == account.user && pass == account.pass) {
                    alert('Đăng nhập thành công');
                    location.reload();
                    if(account.user == sessionStorage.key(0)) {
                        document.getElementById('tableUser').style.display = "none";
                        document.getElementById('btnLogIn').style.display = 'none';
                        document.getElementById('btnLogOut').style.display = 'block';
                        document.getElementById('cart').style.display = "block";
                    }
                       if (typeof(sessionStorage) !== "undefined") {
                        sessionStorage.setItem(user, pass);
                    }
                }else if(user == account.user){
                    alert('Sai tài khoản hoặc mật khẩu');
                }else{
                    tmp++;
                }    
            });
            if(tmp==accounts.length){
                alert("Tài khoản không tồn tại")
            }
        }
    //Muốn Đăng xuất
        document.querySelector('#btnOutUser').onclick = () => {
            var logOut = confirm("Bạn có chắc chắn muốn đăng xuất !! ");
            var accounts = localStorage.getItem('accounts') ? JSON.parse(localStorage.getItem('accounts')) : [] ;
            for(let i = 0 ; i< accounts.length ; i++){ //2
                if(logOut){
                    if(sessionStorage.length >0 && accounts[i].user == (sessionStorage.key(0))){
                        alert('Đăng xuất thành công');
                        localStorage.removeItem('listTMP');
                        localStorage.removeItem('carts');
                        sessionStorage.removeItem(accounts[i].user);
                        location.reload();        
                    }
                }
            }
            
        }

//loading lại sau khi đăng nhập
function loadData() {
    document.getElementById("countProduct").innerText = JSON.parse(localStorage.getItem('listTMP'));
    if (typeof(sessionStorage) !== "undefined") {
		if(sessionStorage.length ==1) {
            document.getElementById('tableUser').style.display = "none";
            document.getElementById('btnLogIn').style.display = 'none';
            document.getElementById('btnLogOut').style.display = 'block';
            document.getElementById('cart').style.display = "block";
            
            var accounts = localStorage.getItem('accounts') ? JSON.parse(localStorage.getItem('accounts')) : [] ;
                for(let i = 0 ; i< accounts.length ; i++){
                    if(accounts[i].user == sessionStorage.key(0)){
                        document.getElementById('showUser').innerHTML = `
                            <img src="./img/among-us-lol-7.jpg" width="15%">
                            <input type="button"  value="${accounts[i].user}" class="btn btn-dark" id="admin">`;  
                    }
                }  
        }
    }
}
    
    //Show Sản phẩm 
        var products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [] ;
        var showProduct = document.getElementById('showProduct');
    showProduct.innerHTML =  "";
        for(let i = 0 ; i<products.length ; i++) {
            
            showProduct.innerHTML += `
            <div class="col-12 col-12 col-md-6 col-lg-3 col-xl-3 text-center mt-3">
                <div class="card text-center"" style="width: 18rem;">
                    <img src="${products[i].img}" class="card-img-top" >
                  <div class="card-body">
                        <h4 class="card-title">${products[i].name}</h4>
                        <h5 class="card-text">${((products[i].price)).replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1.')} vnđ</h5>
                        <input data-toggle="modal" data-target="#onDetail" type="button" class="btn btn-warning text-light font-weight-bolder " value="Chi tiết" onclick="onDetail(${i});">
                        <input type="button" class="btn btn-success font-weight-bold " value="Bỏ vào giỏ hàng" onclick="onCart(${products[i].code});">
                  </div>
                </div>
            </div>
        `
        };

        var detailProduct = document.getElementById('detailProduct'); 
        //Chi tiết sản phẩm
        function onDetail(index) {
            var products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [] ;
            detailProduct.innerHTML = "";
            for(let i = 0 ; i<products.length ; i++){
                if(i == index) {
                    detailProduct.innerHTML = `<div class="modal fade" id="onDetail">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <header class="modal-header bg-warning justify-content-center">
                    
                              <h3 class="modal-title text-light">Chi Tiết Sản Phẩm</h3>
                           
                            </header>
                            <div class="modal-body">
                              
                                <div class="col-12 text-center"><img  src="${products[i].img}" style="width: 200px; height: 250px;"> </div>
                                <table>
                                <tr>
                                    <td width="50%"><label> Tên sản phẩm </label></td>
                                    <td><label> ${products[i].name} </label> <td>
                                </tr>
                                <tr>
                                    <td  width="50%"><label> Chất liệu </label></td>
                                    <td><label> ${products[i].material} </label> <td>
                                </tr>
                                <tr>
                                    <td  width="50%"><label> Màu sắc </label></td>
                                    <td><label> ${products[i].color} </label> <td>
                                </tr>
                                <tr>
                                    <td  width="50%"><label> Trọng lượng </label></td>
                                    <td><label> ${products[i].weight} </label> <td>
                                </tr>
                                <tr>
                                    <td  width="50%"><label> Form giầy </label></td>
                                    <td><label> ${products[i].form} </label> <td>
                                </tr>
                                <tr>
                                    <td  width="50%"><label> Size </label></td>
                                    <td><label> ${products[i].size} </label> <td>
                                </tr>
                                <tr>
                                    <td  width="50%"><label> Chất lượng </label></td>
                                    <td><label>  ${products[i].quality} </label> <td>
                                </tr>
                                </table>
                               
                            </div>
                        </div>
                    </div>
                  </div>      `; 
                }
            }
                
           
        }
        //Mua sản phẩm 
        var sum = 0;
          function onCart(index){ 
            let products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [] ;  
            let listTMP = localStorage.getItem('listTMP') ? JSON.parse(localStorage.getItem('listTMP')) : [] ;
            let carts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [] ;
            var tmp = 0;

            //Xét trường hợp đăng nhập mới mua được hàng
            if(sessionStorage.length ==0) {
                alert('Phải đăng nhập thì mới mua hàng được');
            }else{
                document.getElementById('cart').style.display = "block";
                products.forEach((product) => {
                    if(carts.length == 0) {
                        if(product.code == index){
                            carts.push({
                                code : product.code,
                                name : product.name,
                                img  : product.img,
                                price : product.price,
                                count  : 1,   
                            });
                        }
                        localStorage.setItem('carts',JSON.stringify(carts));
                    }else if(product.code == index){
                        carts.forEach((cart) => {
                            if(cart.code == index){
                                cart.count = Number(cart.count)+1;
                                sum++;
                            }
                        else{
                                tmp++;
                            }
                        });
                    }
                    if (tmp == carts.length){
                        sum++;
                        if(product.code == index) {
                            carts.push({
                                code : product.code,
                                name : product.name,
                                img  : product.img,
                                price : product.price,
                                count  : 1,
                            });
                        }
                    }               
                        localStorage.setItem('carts',JSON.stringify(carts));
    
                    }); //product.forEach số code : 265
    
                    if(listTMP.length < 0) {
                        listTMP.push(sum);
                        localStorage.setItem('listTMP',JSON.stringify(sum));
                    }else{
                        var total = JSON.parse(localStorage.getItem('listTMP'))+1;
                        localStorage.setItem('listTMP',total);
                    }
    
                    document.getElementById("countProduct").innerText = localStorage.getItem('listTMP');
            }
                
        }



