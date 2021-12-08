(() => {

    const app = {

        initialize() {
            this.cachesElements();
            this.buildUI();
            

        },

        buildUI() {
            this.$pressReleases.innerHTML = this.generateHTMLForPress();

        },


        cachesElements() {
            this.$pressReleases = document.querySelector(".pressReleases");
            

        },

        generateHTMLForPress() {

            const htmlPressMapped = press.map((art) => {

                return `
                <div class="pressCards">
                <img src="press/img/${art.images}" alt="${art.images}">
                <h3>${art.subtitle}</h3>
                <h2>${art.title}</h2>
                <p>${art.synopsis}</p>
                <a href="press/detail/index.html">${art.linkCategory}</a>
            </div>`
            }).join("");
            
            return htmlPressMapped;

        },
        

    };

    app.initialize();

})();