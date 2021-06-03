import NavBarAdmin from "../../../components/navbaradmin";
import {
    useParams,
    $$
} from '../../../untils';
import productAPI from "../../../api/productAPI";
import categoryAPI from "../../../api/categoryAPI";
import firebase from "../../../firebase";
const EitProduct = {
    async render() {
        const {
            id
        } = useParams();
        const {
            data: result
        } = await productAPI.read(id);
        const {
            data: cate
        } = await categoryAPI.editProduct(result.categoryId);
        // console.log(cate);
        const categories = cate.map(element => {
            return /*hrml*/ `
            <option value="${element.id}">${element.name}</option>
            `;
        }).join("");
        // console.log(cate);
        return /*html */ `
        ${NavBarAdmin.render()}
        <div class="main-panel">
            <!-- Navbar -->
            <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                <div class="container-fluid">
                    <div class="navbar-wrapper">
                        <a class="navbar-brand uppercase" href="javascript:;">Update product</a>
                    </div>
                </div>
            </nav>
            <!-- End Navbar -->
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-10">
                            <div class="card">
                                <div class="card-header card-header-primary">
                                    <h4 class="card-title">Update product</h4>
                                </div>
                                <div class="card-body">
                                    <form id="form-update-product">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">ID product (disabled) </label>
                                                    <input type="text" value="${result.id}" class="form-control" disabled>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Name product</label>
                                                    <input type="text" class="form-control"  value="${result.name}"  id="name" name="name_product"
                                                        >
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Price</label>
                                                    <input type="number"  value="${result.price}"  name="price" class="form-control" id="price"
                                                        >
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Promotional</label>
                                                    <input type="number"  value="${result.sale}"  class="form-control" name="promotional"
                                                        id="promotional">
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Introduction</label>
                                                    <textarea name="introduction" cols="30" id="introduction" rows="10"
                                                        class="form-control border  product" > ${result.introduce} </textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Content</label>
                                                    <textarea name="content" cols="30" rows="10" id="content"
                                                        class="form-control border  product" > ${result.content}</textarea>
                                                </div>
                                            </div>
                                        </div>
                                             <div class="row">
                                            <div class="col-md-12">
                                                <div class="">
                                                    <label class="bmd-label-floating">Image</label>
                                                    <img src="${result.imageIntro}" alt="" class=" h-40" id="image-old">
                                                    <input type="file" class="form-control"  name="promotional"
                                                    id="image-new">
                                                </div>
                                            </div>
                                         </div>
                                         <div class="row">
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label class="bmd-label-floating">Album</label>
                                                    <img src="${result.album[0]}" class="w-32 h-32 object-contain" id="album1-old">
                                                    <input type="file" class="form-control album" name="promotional"
                                                    id="album1" >
                                                    <img src="${result.album[1]}" class="w-32 h-32 object-contain"  id="album2-old">
                                                    <input type="file" class="form-control album" name="promotional"
                                                    id="album2" >
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class=" mt-[5px]">
                                                <label class="bmd-label-floating"> </label>
                                                <img src="${result.album[2]}" class="w-32 h-32 object-contain"  id="album3-old">
                                                    <input type="file" class="form-control album" name="promotional"
                                                    id="album3" >
                                                    <img src="${result.album[3]}" class="w-32 h-32 object-contain"  id="album4-old">
                                                    <input type="file" class="form-control album" name="promotional"
                                                    id="album4" >
                                                </div>
                                            </div>
                                        
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Classify product</label>
                                                   <div class="flex justify-start items-center gap-3">
                                                   <input type="radio" name="classify" value="male" id="male" checked>
                                                   <label for="male" class=" py-1 classify text-gray-800"> Male
                                                   </label>
                                                   <input type="radio" name="classify" value="female" id="famale" >
                                                    <label for="famale" class=" py-1 classify text-gray-800"> Female
                                                    </label>
                                                   </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Size product</label>
                                                    <div class="flex justify-between items-center">
                                                    <input type="checkbox" name="size" value="XXS" id="XXS" checked>
                                                    <label for="XXS" class=" py-1  text-gray-800"> XXS
                                                    </label>
                                                    <input type="checkbox" name="size" value="XS" id="XS" >
                                                    <label for="XS" class=" py-1  text-gray-800">
                                                        XS </label>
                                                    <input type="checkbox" name="size" value="XS-S" id="XS-S" >
                                                    <label for="XS-S" class=" py-1  text-gray-800"> XS-S
                                                    </label>
                                                    <input type="checkbox" name="size" value="S" id="S" >
                                                    <label for="S" class=" py-1  text-gray-800"> S
                                                    </label>
                                                    <input type="checkbox" name="size" value="M" id="M" >
                                                    <label for="M" class=" py-1  text-gray-800"> M
                                                    </label>
                                                    <input type="checkbox" name="size" value="M-L" id="M-L" >
                                                    <label for="M-L" class=" py-1  text-gray-800">
                                                        M-L </label>
                                                    <input type="checkbox" name="size" value="L" id="L" >
                                                    <label for="L" class=" py-1  text-gray-800"> L
                                                    </label>
                                                    <input type="checkbox" name="size" value="XL" id="XL" >
                                                    <label for="XL" class=" py-1  text-gray-800">
                                                        XL </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Category product</label>
                                                    <select name="category" id="category" class="form-control" required>
                                                    <option value="${result.categoryId}">${result.category.name}</option>
                                                      ${categories}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary pull-left">Update
                                            product</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="footer">
                <div class="container-fluid">
                    <div class="copyright float-center">
                        &copy;
                        <script>
                            document.write(new Date().getFullYear())
                        </script>, made with <i class="material-icons">favorite</i> by
                        <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a> for a better web.
                    </div>
                </div>
            </footer>
        </div>
    </div>
    <!--   Core JS Files   -->
        `;
    },
    async afterRender() {
        const {
            id
        } = useParams();
        const {
            data: result
        } = await productAPI.read(id);
        // console.log(result);
        $$('#form-update-product').addEventListener('submit', (e) => {
            e.preventDefault();
            const albums = $$('.album');
            const gAlnums = [];
            // albums.forEach(element => {
            //     if (element.files[0]) {
            //         gAlnums.push(element.files[0].name);
            //     }
            // });
            // console.log(gAlnums);
            var imgIntro = '';
            var album = [];

            async function checkImgIntro() {
                if ($$('#image-new').value == ' ') {
                    imgIntro = $$('#image-old').src
                } else {
                    imgIntro = ($$('#image-new').files[0]);
                    let storageRef = firebase.storage().ref(`images/${imgIntro.name}`)
                    storageRef.put(imgIntro).then(() => {
                        storageRef.getDownloadURL().then((url) => {
                            imgIntro = url;
                        })
                    })
                }
            }
            checkImgIntro();





            // if ($$('#album1').value == ' ') {
            //     album.push($$('#album1-old').src)
            // } else {
            //     const album1 = $$('#album1').files[0];
            //     let storageRef = firebase.storage().ref(`images/${album1.name}`)
            //     storageRef.put(album1).then(() => {
            //         storageRef.getDownloadURL().then(url => {
            //             album.push(url)
            //         })
            //     })
            // }
            // console.log($$('#album2').value);
            // if ($$('#album2').value == ' ') {
            //     album.push($$('#album2-old').src)
            //     console.log(0);
            // } else {
            //     const album2 = $$('#album2').files[0];

            //     let storageRef = firebase.storage().ref(`images/${album2.name}`)
            //     console.log(album2);
            //     storageRef.put(album2).then(() => {
            //         console.log('update');
            //         // storageRef.getDownloadURL().then(url => {
            //         //     console.log(url);
            //         //     album.push(url)
            //         //     console.log(album);
            //         // })
            //     })
            // }

            // console.log(album);
            // console.log(imgIntro);
            // const newProduct = {
            //     ...result,
            //     name: $$('#name').value,
            //     categoryId: $$('#category').value,
            //     content: $$('#content').value,
            //     price: $$('#price').value,
            //     sale: $$('#promotional').value,
            //     introduce: $$('#introduction').value,
            //     images: [imgIntro],
            //     size: $$('#size').value,
            //     classify: $$('#classify').value
            // }
            // console.log(newProduct);
        });
    }

}


export default EitProduct;