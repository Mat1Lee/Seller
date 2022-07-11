import SanPham from "../models/SanPham.js";
import SpService from "../service/SanPhamServices.js";

let Spser = new SpService();

let productsEle = document.querySelector('.products');
let showSpList = (SpList) => {
    let content = "";
    for (const index in SpList) {
        let { name, price, screen, backCamera, frontCamera, img, desc, type } =
        SpList[index];

        content += `
        
                    <div class="col-12 col-md-6 col-lg-4">
                        <div id ="cardPhone" class="card cardPhone">
                        
                            <img class="img-fluid card__img" src="${img}"">
                            <div class="cardBody">
                                <div class="body__tren d-flex justify-content-sm-between mt-1 mr-3 ml-3 ">
                                    <div>
                                        <h3 id ="name">${name}</h3>
                                        <p>Accessories</p>
                                    </div>
                                    <div>
                                        <h3 id="price">${Number(
                                            price
                                        ).toLocaleString()}</h3>
                                    </div>
                                </div>
                                <div class="card-body d-flex justify-content-between">
                                    <div class="cardPhone__rating">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </div>
                                    <div class="div">
                                        <button class="BTN-byNow">By now</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
        
        
        
        
        
        `;
    }
    document.querySelector(".product__content1").innerHTML = content;
    $('.nav-item #gioHang').click(() => {

        renderCart();
    });

};

let renderSpList = () => {
    Spser.getListSp()

    .then((result) => {

            showSpList(result.data);
        })
        .catch((err) => {
            console.log(err);
        });
};
renderSpList();


let searchSp = () => {

    Spser.getListSp()

    .then((result) => {

            let tenSp = document.querySelector("#search").value;
            let tenSearch = result.data.filter(value => {
                return value.name.toUpperCase().includes(tenSp.toUpperCase());

            })
            showSpList(tenSearch);
            console.log(tenSearch);

        })
        .catch((err) => {
            console.log(err);
        });








};
window.searchSp = searchSp;

let addItemtoCart = () => {



}

let renderCart = () => {
    let totalPay = 0
    Spser.getListSp()

    .then((result) => {

        if (result.length) {

            cartList.map((product, index) => {
                let content = ""
                content +=
                    `
                    <div class="cart-item mb-3 mt-3">
                        <div class="cart-item__img" style="background-image: url(${product.image})"></div>
                        <div class="cart-item__name ms-5 me-4">${product.name}</div>
                        <div class="cart-item__price ms-5 me-4">${product.price}</div>
                        
                        <div class="cart-item__quantity ms-5 me-4">SL: ${product.quantity}</div>
                        <button class="cart-item__delete-btn btn">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>`

                totalPay += (product.price) * product.quantity;
            })
            $('#cartModal .modal-body').after(`
            <div class="cart-total">
                <span class="total-title">Tổng giá trị đơn hàng: </span>
                <span class="total-money">${getMoney(totalPay)}</span>
            </div>
        `)
        }
        // } else clearCart();




    }).catch((err) => {
        console.log(err);
    });


};
renderCart();



let getMoney = (price) => {
    return price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'VND'
    });

}

let removeItem = (id) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            products.splice(i, 1);
        }
    }
    renderUI(products);
}



let handleClick = () => {
    let elem = document.querySelectorAll("# ");
    console.log(elem)

}

handleClick();