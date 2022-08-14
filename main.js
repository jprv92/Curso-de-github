const drawTotalCart=(cart)=>{
    const DOMCartTotal=document.getElementById("card-total");
    DOMCartTotal.innerHTML =  `$ ${cart.total}`
}