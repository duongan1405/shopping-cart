//Hiển thị chi tiết sản phẩm
// function onDetail(index) {
        //     detailProduct.innerHTML = "";
        //     products.forEach((product) => {
        //         if(product.code == index) {
        //             detailProduct.innerHTML = `<div class="modal fade" id="onDetail">
        //             <div class="modal-dialog">
        //                 <div class="modal-content">
        //                     <header class="modal-header bg-warning justify-content-center">
                    
        //                       <h3 class="modal-title text-light">Chi Tiết Sản Phẩm</h3>
                           
        //                     </header>
        //                     <article class="modal-body">
        //                       <div class="row">
        //                         <div class="col-12 text-center"><img  src="img/${product.img}" style="width: 200px; height: 250px;"> </div>
        //                         <div class="col-6"> 
        //                             <p> Tên sản phẩm </p>
        //                             <p>Chất liệu </p>
        //                             <p>Trọng lượng<p>
        //                             <p> Form giầy </p>
        //                             <p> Size</p>
        //                         </div>
        //                         <div class="col-6"> 
        //                             <p> ${product.name} </p>
        //                             <p> Da tự nhiên có cấu trúc đẹp </p>
        //                             <p>250 gram/chiếc<p>
        //                             <p> Phù hợp form chân bè </p>
        //                             <p> 39 | 40 | 41 | 42 | 43</p>
        //                         </div>
        //                       </div>
        //                 </div>
        //             </div>
        //           </div>      `; 
        //         }
        //     });
        // }

//Show sản phẩm
        // var products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [] ;
    // var showProduct = document.getElementById('showProduct');
    // showProduct.innerHTML =  "";
    // if(products.length > 0){
    //     for(let i = 0 ; i<products.length ; i++) {
    //         showProduct.innerHTML += `
    //         <div class="col-12 col-12 col-md-6 col-lg-4 col-xl-4 text-center mt-3">
    //             <div class="card text-center"" style="width: 18rem;">
    //                 <img src="img/${products[i].img}" class="card-img-top" >
    //               <div class="card-body">
    //                     <h4 class="card-title">${products[i].name}</h4>
    //                     <p class="card-text">${(products[i].price).replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1.')} vnđ</p>
    //                     <input data-toggle="modal" data-target="#m_sign" type="button" class="btn btn-warning text-light font-weight-bolder " value="Chi tiết" onclick="onDetail(${products[i].code});">
    //                     <input type="button" class="btn btn-success font-weight-bold " value="Bỏ vào giỏ hàng" onclick="onCart(${products[i].code});">
    //               </div>
    //             </div>
    //         </div>
    //     `
    //     };