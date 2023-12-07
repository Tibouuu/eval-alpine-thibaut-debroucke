export default function Menu() {
    return {
        menuBurger: false,
        menuOpen: false,
        init(){
            window.addEventListener('resize', this.ifResponsive);
        },
        ifResponsive() {
            this.menuBurger = window.matchMedia('(max-width: 768px)').matches;
        },
        clickMenu() {
            this.menuOpen = !this.menuOpen
        },
       isMenuOpen() {
           return window.matchMedia('(max-width: 768px)').matches || this.menuBurger;
        },
    };
};
