var app = new Vue({
    el: '#app',
    data: {
        profileName: "",
        finalPrice: 0, 
        cart: [],
        foodList: [
            {imageUrl:"./Image/nasiPadang.jpg" , name:"Nasi Padang", price: 15000},
            {imageUrl:"./Image/Lumpia.jpg" , name:"Lumpia", price: 10000},
            {imageUrl:"./Image/nasiGoreng.jpg" , name:"Nasi Goreng", price: 12000},
            {imageUrl:"./Image/SateAyam.jpg" , name:"Sate Ayam", price: 12000}
        ],
        drinkList: [
            {imageUrl:"./Image/coffe.jpg" , name:"Coffe", price: 11000},
            {imageUrl:"./Image/HotChocolate.jpg" , name:"Hot Chocolate", price: 10000},
            {imageUrl:"./Image/greenTea.jpg" , name:"Green Tea", price: 9500},
            {imageUrl:"./Image/bobba.jpg" , name:"Bobba with Brown Sugar", price: 8000}
        ],
        dessertList: [
            {imageUrl:"./Image/iceCream.jpg" , name:"Ice Cream", price: 13000},
            {imageUrl:"./Image/muffins.jpg" , name:"Muffins", price: 5000},
            {imageUrl:"./Image/cake.jpg" , name:"Chocolate Cake", price: 7000}
        ]
    },
    methods: {
        addToCart: function(Tname, Tprice){
            same = false;
            if(this.cart.length>0){
                for(let i =0; i<this.cart.length;i++){
                    if(Tname == this.cart[i].name){
                        same = true;
                        qty = this.cart[i].quantity;
                        this.cart[i].quantity = qty + 1;   
                    }
                }
                if(!same){
                    this.cart.push({name: Tname, price: Tprice, quantity: 1});
                }
            }else{
                this.cart.push({name: Tname, price: Tprice, quantity: 1});
            }
            this.finalPrice = this.finalPrice + Tprice;
            
            var cartList = document.getElementById('cartList').offsetHeight;

            if(cartList < 400){
                document.getElementById('cartList').style.overflowY  =  "hidden";
            }else{
                document.getElementById('cartList').style.overflowY  =  "scroll";
            }
        },
        increaseItem: function(Tname, Tprice){
            for(let i=0;i<this.cart.length;i++){
                if(Tname == this.cart[i].name){
                    qty = this.cart[i].quantity;
                    this.cart[i].quantity = qty + 1;
                }
            }
            this.finalPrice = this.finalPrice + Tprice;
        },
        decreaseItem: function(Tname, Tprice){
            index = 0;
            qty = 0;
            for(let i=0;i<this.cart.length;i++){
                if(Tname == this.cart[i].name){
                    qty = this.cart[i].quantity;
                    this.cart[i].quantity = qty - 1;
                    index = i;
                }
            }
            if(qty==1){
                this.cart.splice(index, 1);
            }
            this.finalPrice = this.finalPrice - Tprice;
        }
    }
})