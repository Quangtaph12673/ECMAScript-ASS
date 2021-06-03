const NavBarAdmin = {
    render() {
        return /*html*/ `
        <div class="sidebar" data-color="purple" data-background-color="white" >
        <!--
    Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"

    Tip 2: you can also add an image using data-image tag
-->
        <div class="logo"><a href="#/" class="simple-text logo-normal">
                <img src="../../images/logo.png" alt="" class="mx-auto">
            </a></div>
        <div class="sidebar-wrapper">
            <ul class="nav">
                <li class="nav-item   ">
                    <a class="nav-link" href="./information.html">
                        <i class="material-icons">dashboard</i>
                        <p>INFORMATION</p>
                    </a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" href="./user.html">
                        <i class="material-icons">person</i>
                        <p>USER</p>
                    </a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" href="/#/listproducts">
                        <i class="material-icons">content_paste</i>
                        <p>PRODUCT</p>
                    </a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" href="#/listcategory">
                        <i class="material-icons">library_books</i>
                        <p>CATEGORY</p>
                    </a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" href="./comment.html">
                        <i class="far fa-comment"></i></i>
                        <p>COMMENT</p>
                    </a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" href="./Slide.html">
                        <i class="fab fa-slideshare"></i>
                        <p>SLIDE</p>
                    </a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" href="./cart.html">
                        <i class="fas fa-shopping-cart"></i>
                        <p>CART</p>
                    </a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" href="./contact.html">
                        <i class="fas fa-id-card-alt"></i>
                        <p>CONTACT</p>
                    </a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" href="./postnews.html">
                        <i class="far fa-newspaper"></i>
                        <p>BLOG</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
        `;
    }
}
export default NavBarAdmin;