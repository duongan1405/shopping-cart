let accounts = localStorage.getItem('accounts') ? JSON.parse(localStorage.getItem('accounts')) : [];
let carts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [];
var checkForm = document.getElementById('checkForm');
var checkBuy1 = document.getElementById('checkBuy1');
var checkBuy2 = document.getElementById('checkBuy2');
function loadDatas() {
    var tmp = 0;
    var tmpMoney = "";
    var money = 0;
    var totalMoney = "";
    var name = document.getElementById('tenKH');
    var phone = document.getElementById('phoneKH');
    var mail = document.getElementById('mailKH');
    var address = document.getElementById('addressKH');
    accounts.forEach((account) => {
        if(account.user == sessionStorage.key(1)) {
            name.value = account.name;
            phone.value = account.phone;
            mail.value = account.mail;
            address.value = account.address;
        };
    });

    carts.forEach((cart) => {
        var total = (cart.price * cart.count);
        document.getElementById('nameSP').innerHTML += `<li>${cart.name} x ${cart.count}</li>`;
        document.getElementById('moneySP').innerHTML += `${total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1.')} VNG <br>`;
        //Tiền dự kiến
        tmp += ((cart.price * cart.count));
        tmpMoney = `${tmp.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1.')} VNĐ`;
        
        //Th1 cộng tổng bill < 3tr /
        //Th2 sp1 <3tr xong cộng tiếp sp khác ->> >3tr
        //Th3 sp1 >3tr -> tổng bill >3tr /
        if(tmp<3000000) {
            document.getElementById('shipping').innerHTML = '30.000 VND';
            if(tmp*31 >3000000){
                money += ((cart.price * cart.count));
            }else
            if(money == 0 ){
                money += ((cart.price * cart.count)+30000);
            }else{
                money += ((cart.price * cart.count));
            }
        totalMoney = `${money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1.')} VNĐ`;
        }else if(money > 0 ||money==0){
                document.getElementById('shipping').innerHTML = 'Free Shipping';
                money += ((cart.price * cart.count));
                totalMoney = `${money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1.')} VNĐ`;
        }

        //Tổng tiền
        
    })
    document.getElementById('tmpMoney').innerHTML = tmpMoney;
    document.getElementById('totalMoney').innerHTML = totalMoney;
}
document.querySelector('.btn.btn-warning').onclick = () => {
    document.getElementById('errForm').innerHTML = "";
    document.getElementById('errCheck').innerHTML = "";
    if(checkForm.checked === false){
        document.getElementById('errForm').innerHTML = "Phải tích ở mục này";
    }else if(checkBuy1.checked === false && checkBuy2.checked === false) {
        document.getElementById('errCheck').innerHTML ="Phải chọn phương thức thanh toán";
    }else{
    alert('Thanh toán thành công');
    }
}