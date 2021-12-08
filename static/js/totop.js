(() =>{

const app = {
    initialize() {
        this.cachesElements();
        this.addEventListener();
        
    },

    cachesElements() {
        this.$buttonTop = document.querySelector(".button");
    },



      
    addEventListener() {
    
    this.$buttonTop.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;

    }, false)

}





};
app.initialize()

})();
