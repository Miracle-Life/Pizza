window.onload = function () {
    var k =localStorage.getItem('data');
    var order = JSON.parse(k);
    console.log(order);
document.getElementById('name_order').textContent=order.delivery.name;
document.getElementById('tel_order').textContent=order.delivery.phone;
document.getElementById('str_order').textContent=order.delivery.street;
    document.getElementById('sum').textContent='Сумма '+ order.sum + 'грн =  ';
if(order.ingredients && order.ingredients.length){
    for(let i=0; i<order.ingredients.length; i++){
        if(order.ingredients[i].checked){
            document.getElementById('ord_right').textContent += order.ingredients[i].name + "   , " ;
        }
    }
}


};