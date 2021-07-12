var carts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [] ;
let products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [] ;
let listTMP = localStorage.getItem('listTMP') ? JSON.parse(localStorage.getItem('listTMP')) : [] ;
var showCart = document.getElementById('showCart');
function loadCart() {
    var totalName = "";
    var tmpMoney = 0;
    var totalMoney = "";
    showCart.innerHTML = " ";
    if(carts.length > 0) {
        for(let i = 0 ; i<carts.length ; i++){
            var total = (carts[i].price * carts[i].count);
            showCart.innerHTML += 
            `<tr>
            <td><img  src="img/${carts[i].img}" style="width: 150px; height: 170px;"></td>
            <td>${carts[i].name}</td>
            <td>
            <input class="" type="button" value="-" onclick="onDESC(${carts[i].code},${i});">
            ${carts[i].count} 
            <input class="" type="button" value="+" onclick="onASC(${carts[i].code});">  </td>
            <td>${carts[i].price.replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1.')} vnđ</td>
            <td>${total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1.')} vnđ</td>
            <td> <button class="text-danger font-weight-bolder" type='button' onclick='delCart(${i})' > Delete </button>
            </td> </tr>`
            totalName += `<li>${carts[i].name}</li>`;
            tmpMoney += ((carts[i].price * carts[i].count));
            totalMoney = `${tmpMoney.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1.')} VNĐ`
        };
        
    }else {
        document.getElementById('buy').style.display ="none";
        document.getElementById('tableCart').style.display = "none";
        document.getElementById('tableNofi').style.display = "block";
        document.getElementById('nofiCart').innerHTML = "<h5>Chưa có gì trong giỏ hàng</h5>";
    
        }
        document.getElementById('total').innerHTML = `Số tiền dự kiến : ${totalMoney}`;
}

function onASC(indexCart) { //101
    products.forEach((product) => {
        if(product.code == indexCart){ 
            carts.forEach((cart) => {
                if(cart.code == indexCart){ 
                    cart.count = Number(cart.count)+1;
                    var total = JSON.parse(localStorage.getItem('listTMP'))+1;
                    localStorage.setItem('listTMP',total);
                };
            });
        };
    });
    
    localStorage.setItem('carts',JSON.stringify(carts));
    loadCart();
}

function onDESC(indexCart,index) { //101
    products.forEach((product) => {
        if(product.code == indexCart){ 
            carts.forEach((cart) => {
                if(cart.code == indexCart){ 
                    cart.count = Number(cart.count)-1;
                    var total = JSON.parse(localStorage.getItem('listTMP'))-1;
                    localStorage.setItem('listTMP',total);
                };
                if(cart.count == 0){
                    carts.splice(index,1);
                }
            });
        };
    });
    localStorage.setItem('carts',JSON.stringify(carts));
    loadCart();
}
    

function delCart(i) {
        var del = confirm("Bạn có chắc chắn muốn xóa !! ");
        
        if(del){
            listTMP = JSON.parse(localStorage.getItem('listTMP')-carts[i].count);
            carts.splice(i,1);
            
        }
        localStorage.setItem('carts',JSON.stringify(carts));
        localStorage.setItem('listTMP',JSON.stringify(listTMP));
        loadCart();
}
    