(() => {

    // indexof() 



    // const $buttonTop = document.querySelector(".button");

    // $buttonTop.addEventListener('click', () => {
    //     document.documentElement.scrollTop = 0;

    // }, false)



    // begin atelier studio

    const app = {
        initialize() {
            this.generateTime();
        },


        generateTime() {

            function createTime() {
                const today = new Date();
                const time = `<p>Time in belgium ${today.getHours()}:${today.getMinutes()}</p>`;
                
                console.log(time);
                return time;

            }

            this.$time = document.querySelectorAll(".time").forEach((time) => {
                time.innerHTML = createTime(); 
            });

        }

    };
    app.initialize()

})();


