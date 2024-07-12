let cart=[]
function cart(id,name,price){
    const existing_item=cart.find(item=>item.id===id);
    //if the item already exists, increase the quatity
    if(existing_item){                          
        existing_item+=1;
    }
    //if the item doesnt exist, add the item
    else{
        const newItem = { id, name, price, quantity: 1 };
        cart.push(newItem);
    }
}
update_cart_display();
function update_cart_display(){
    
}