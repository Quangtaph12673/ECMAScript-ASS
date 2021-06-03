import Header from '../components/header';
import Footer from '../components/footer';
import categoryAPI from '../api/categoryAPI';
import 'owl.carousel';
import {
    $$,
    prices
} from '../untils';
import {
    useParams
} from '../untils';
import productAPI from '../api/productAPI';

const ProductDetail = {
    async render() {
        // console.log(useParams());
        const {
            id
        } = useParams();
        // const response = await fetch("http://localhost:3001/products");
        // const data = await response.json();
        // console.log(data);
        // const result = data.find(element => {
        //     return element.id == id;
        // })
        // console.log(result.name);

        const {
            data: result
        } = await productAPI.read(id);
        // console.log(await result.categoryId);
        const {
            data: cate
        } = await categoryAPI.read(result.categoryId, id);
        const productCate = cate.map(element => {
            return /*html */ `
            <article class="group my-8 md:my-0 md:mx-2 xl:mx-0 ">
            <div class="relative  overflow-hidden">
                <img src="${element.imageIntro}" alt="" class="w-full object-cover">
                <div class="absolute top-0 mt-4 ml-4">
                    <span class="bg-green-400 text-sm px-2 py-1 text-white">NEW</span>
                </div>
                <div class="flex justify-center">
                    <div
                        class="absolute bottom-0 mb-8   text-xs  xl:text-xl transition duration-500 ease-in-out transform translate-y-40 group-hover:translate-y-0">
                        <a href="#"
                            class="bg-gray-200 text-sm  p-3 md:m-1 md:p-1 lg:p-3 xl:p-2 xl:px-3 rounded-full  hover:bg-red-600 hover:text-white"><i
                                class="fas fa-expand-arrows-alt transform hover:rotate-360 transition duration-500 ease-in-out "></i></a>
                        <a href="#"
                            class="bg-gray-200 text-sm  p-3 md:m-1  md:p-1 lg:p-3 xl:p-2 xl:px-3 rounded-full mx-4 hover:bg-red-600 hover:text-white"><i
                                class="far fa-heart transform hover:rotate-360 transition duration-500 ease-in-out "></i></a>
                        <a href="#"
                            class="bg-gray-200 text-sm  p-3  md:m-1  md:p-1 lg:p-3 xl:p-2 xl:px-3 rounded-full  hover:bg-red-600 hover:text-white"><i
                                class="fas fa-cart-plus transform hover:rotate-360 transition duration-500 ease-in-out "></i></a>
                    </div>
                </div>
            </div>
            <div class="text-center pt-4">
                <a href="#/products/${element.id}" class="block hover:text-red-500">${element.name}</a>
                <span class="block py-2 text-sm text-yellow-400"><i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i></span>
                <span class="font-medium">${prices(Number(element.price))}</span>
            </div>
        </article>
            `;
        }).join("");
        const size = result.size.map((element) => {
            return /*html */ `
            <option  value="${element}">${element}</option>
            `;
        }).join("");
        const imgChild = result.album.map((element) => {
            return /*html*/ `
            <div>
            <img src="${element}"  style="Width:500px; height:588px" alt="" id="imgAll" class="object-cover shadow">
        </div>
            `;
        }).join("");
        return /*html*/ `
        ${Header.render()}
            <div class="container mx-auto px-16 pt-[120px]">
                <div class="my-3">
                    <a href="./index.html"><span><i class="fas fa-home"></i></span>
                        <span style="font-family: FontAwesome;">Home > ${result.classify} >${result.name} <span class="text-gray-600"></span></span>
                        </i></a>
                </div>
                <div class="grid md:grid-cols-2  mt-10 md:mt-0 wow fadeInDown " >
                    <div class=" ">
                        <div class="">
                        <div  class="owl-carousel">
                        <div>
                        <img src="${result.imageIntro}"  style="Width:500px; height:588px" alt="" id="imgAll" class="object-cover shadow">
                    </div>
                    ${imgChild}
                        </div>
                        </div>
                    </div>
                    <!-- end content-img -->
                    <div >
                        <div class="mx-8">
                            <div>
                                <h3 class=" font-semibold text-xl md:text-3xl uppercase">
                                ${result.name}
                                </h3>
                                <span class="text-sm text-gray-600">Brand: ${result.category.name}</span>
                            </div>
                            <div>
                                <span class="inline-block py-2 text-xs text-yellow-500"><i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i></span>
                                <span class="inline text-xs text-gray-700">( 138 reviews )</span>
                            </div>
                            <div class="pb-6">
                                <span class="text-red-700 text-3xl font-semibold inline-block pt-2 pr-2"> ${prices(Number(result.price))} </span>
                                <span class="text-gray-500 text-lg line-through font-medium"> ${prices(Number(result.sale))}</span>
                            </div>
                            <p class="text-sm text-gray-700 pb-8">Nemo enim ipsam
                                voluptatem quia aspernatur aut odit aut loret
                                fugit, sed<br> quia
                                consequuntur magni
                                lores eos qui ratione voluptatem sequi nesciunt.</p>
                            <div>
                                <span>Quantity:</span>
                                <div class="inline-block border border-gray-500 rounded-full py-3 text-gray-700">  
                                <div class="flex justify-between items-center gap-5">
                                <span  class=" cursor-pointer pl-3" id="minus">-</span>
                                <input type="text" name="" id="number" value="1" min="0"
                                    class=" outline-none text-center  w-12 bg-[#eeeeee]">
                                 <span  class="cursor-pointer pr-3" id="plus">+</span>
                                </div>
                                </div>
                                <a href="/#/shopcart"
                                    class="bg-red-700 text-white py-3 px-6 rounded-full inline-block my-8 outline-none "><span>
                                        <i class="fas fa-cart-plus"> </i> ADD TO CART
                                    </span> </a>
                                <div class="inline-block">
                                    <span class="border boder-gray-700 rounded-full p-4 mx-2"><i
                                            class="far fa-heart"></i></span>
                                    <span class="border boder-gray-700 rounded-full p-4 "><i
                                            class="fas fa-sliders-h"></i></span>
                                </div>
                            </div>
                            <hr class="my-8">
                            <div>
                                <div class="flex">
                                    <span>Availability:</span>
                                    <div class="pl-12">
                                        <label for="" class="text-gray-600 text-sm "><input type="checkbox" name=""
                                                id="">
                                            In
                                            Stock</label>
                                    </div>
                                </div>
                                <div class=" flex relative">
                                    <span>Available size:</span>
                                    <div class="pl-6 ">
                                    <select name="" id="size" class="px-3 w-[45px] bg-[#eeeeee] shadow ml-1">
                                         ${size}
                                    </select>
                                    </div>
                                   
                                </div>
                                <div class="">
                                    <span>Promotions:</span>
                                    <span class="pl-10  text-sm text-gray-700">Free shipping</span>
                                </div>
                            </div>
                        </div>
                        <!-- end shop cart -->
                    </div>
                </div>
                <div class="mt-20">
                    <section class="wow rotateIn" data-wow-duration="2s" ">
                <nav>
                    <ul class=" flex justify-center">
                        <li class="text-lg font-medium"><a href="#"></a>Description</li>
                        <li class="text-lg px-2 md:px-14"><a href="#"></a>Specification</li>
                        <li class="text-lg"><a href="#"></a>Reviews ( 2 )</li>
                        </ul>
                        </nav>
                        <article class="text-gray-600 pt-12">
                            <h6 class="text-gray-800 text-base font-medium">Description</h6>
                            <p class="pt-6 pb-4">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                                loret
                                fugit, sed quia
                                consequuntur magni dolores eos qui ratione voluptatem sequi<br> nesciunt loret. Neque
                                porro
                                lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia
                                voluptas sit aspernatur aut odit aut loret<br> fugit, sed quia ipsu consequuntur magni
                                dolores eos qui ratione voluptatem sequi nesciunt. Nulla consequat massa quis enim.</p>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                dolor.
                                Aenean massa. Cum sociis natoque penatibus et magnis dis<br> parturient montes, nascetur
                                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                        </article>
                    </section>
                    <section class="mt-20">
                        <h5 class="pb-8 font-semibold text-xl text-center">
                            RELATED PRODUCTS
                        </h5>
                        <div class="md:flex justify-between  gap-3 wow bounceInUp" data-wow-duration=" 1s">
                            ${productCate}
                        </div>
                    </section>
                </div>
                <!-- end content bottom -->
            </div>
            <section class="instagram md:flex my-16 ">
                <div class="relative group overflow-hidden">
                    <a href="#"><img src="./images/instagram/insta-1.jpg" alt="" class="w-screen object-cover"></a>
                    <div class="absolute  inset-0 opacity-75 hover:bg-white ">
                        <div
                            class=" absolute inset-0 text-white hidden group-hover:block  text-center hover:text-red-800 py-40">
                            <span><i class="fab fa-instagram block"></i><br>
                                <a href="#">@ ashion_shop</a>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="relative group overflow-hidden">
                    <a href="#"><img src="./images/instagram/insta-2.jpg" alt="" class="w-screen object-cover"></a>
                    <div class="absolute  inset-0 opacity-75 hover:bg-white ">
                        <div
                            class="absolute inset-0 text-white  text-center hidden group-hover:block hover:text-red-800  py-40">
                            <span><i class="fab fa-instagram block "></i><br>
                            </span>
                            <a href="#">@ ashion_shop</a>
                        </div>
                    </div>
                </div>
                <div class="relative group overflow-hidden">
                    <a href="#"><img src="./images/instagram/insta-3.jpg" alt="" class="w-screen object-cover"></a>
                    <div class="absolute  inset-0 opacity-75 hover:bg-white ">
                        <div
                            class="absolute inset-0 text-white hidden group-hover:block text-center hover:text-red-800 py-40">
                            <span><i class="fab fa-instagram block "></i><br>
                            </span>
                            <a href="#">@ ashion_shop</a>
                        </div>
                    </div>
                </div>
                <div class="relative group overflow-hidden">
                    <a href="#"><img src="./images/instagram/insta-4.jpg" alt="" class="w-screen object-cover"></a>
                    <div class="absolute  inset-0 opacity-75 hover:bg-white ">
                        <div
                            class="absolute inset-0 text-white hidden group-hover:block text-center hover:text-red-800 py-40">
                            <span><i class="fab fa-instagram block "></i><br>
                            </span>
                            <a href="#">@ ashion_shop</a>
                        </div>
                    </div>
                </div>
                <div class="relative group overflow-hidden">
                    <a href="#"><img src="./images/instagram/insta-5.jpg" alt="" class="w-screen object-cover"></a>
                    <div class="absolute  inset-0 opacity-75 hover:bg-white ">
                        <div
                            class="absolute inset-0 hidden group-hover:block text-white  text-center hover:text-red-800 py-40">
                            <span><i class="fab fa-instagram block "></i><br>
                            </span>
                            <a href="#">@ ashion_shop</a>
                        </div>
                    </div>
                </div>
                <div class="relative group overflow-hidden">
                    <a href="#"><img src="./images/instagram/insta-6.jpg" alt="" class="w-screen object-cover"></a>
                    <div class="absolute  inset-0 opacity-75 hover:bg-white ">
                        <div
                            class="absolute inset-0 text-white hidden group-hover:block  text-center hover:text-red-800 py-40">
                            <span><i class="fab fa-instagram block "></i><br>
                            </span>
                            <a href="#">@ ashion_shop</a>
                        </div>
                    </div>
                </div>
            </section>
            <!-- end section instagram -->
            ${Footer.render()}
            `;
    },
    async afterRender() {
        $(document).ready(function () {
            $('.owl-carousel').owlCarousel({
                items: 1,
                loop: true,
                margin: 10,
                autoplay: true,
                autoplayTimeout: 2000,
                autoplayHoverPause: true
            });
        });
        var minus = $$('#minus');
        var number = $$('#number');
        var plus = $$('#plus');
        minus.onclick = () => {
            number.value = Number(number.value) - 1;
            if (number.value <= 1) {
                number.value = 1;
            }
        }
        plus.onclick = () => {
            number.value = Number(number.value) + 1;
        }

    }
}
export default ProductDetail;