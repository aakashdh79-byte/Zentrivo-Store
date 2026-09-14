const products=[
{name:"Orbit Mini Speaker",cat:"tech",price:1499,mark:"◉"},
{name:"Pulse Smart Lamp",cat:"tech",price:2199,mark:"✦"},
{name:"Flex Resistance Kit",cat:"fitness",price:999,mark:"∞"},
{name:"Core Training Mat",cat:"fitness",price:1299,mark:"＋"},
{name:"Hydration Bottle",cat:"fitness",price:799,mark:"◌"},
{name:"Paw Comfort Bed",cat:"pets",price:1899,mark:"⌂"},
{name:"Pet Travel Bowl",cat:"pets",price:649,mark:"◍"},
{name:"LED Desk Dock",cat:"tech",price:1799,mark:"Z"}
];
let cart=0;
const productsEl=document.querySelector("#products");
function render(filter="all"){
 productsEl.innerHTML=products.filter(p=>filter==="all"||p.cat===filter).map(p=>`<article class="product"><div class="product-art">${p.mark}</div><div class="product-info"><small>${p.cat}</small><h3>${p.name}</h3><div class="price-row"><span class="price">₹${p.price.toLocaleString("en-IN")}</span><button class="add" aria-label="Add ${p.name}" onclick="addToCart()">+</button></div></div></article>`).join("");
}
function addToCart(){cart++;document.querySelector("#cartCount").textContent=cart;showToast("Added to your Zentrivo cart");}
function showToast(t){const el=document.querySelector("#toast");el.textContent=t;el.classList.add("show");clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>el.classList.remove("show"),1800)}
document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));btn.classList.add("active");render(btn.dataset.filter)}));
document.querySelector("#cartBtn").addEventListener("click",()=>showToast(cart?`${cart} item${cart>1?"s":""} in cart`:"Your cart is empty"));
document.querySelector("#subscribe").addEventListener("submit",e=>{e.preventDefault();e.target.reset();showToast("You're on the Zentrivo list ✦")});
render();