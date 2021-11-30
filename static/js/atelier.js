(() => {

const app = {
    initialize() {
        this.cachesElements();
        this.buildUI();
    },

    buildUI() {
        this.$atelierStudioContainer.innerHTML = this.generateHTMLForAtelierStudio();
    },

    cachesElements() {
        this.$atelierStudioContainer = document.querySelector(".atelierStudioContainer");   
    },

    generateHTMLForAtelierStudio() {

        const html = ateliers.map((arts) => {
            
            return `
            <div class="cardAtelier">
                <img src="atelier-studio/img/${arts.images}" loading="lazy" alt="${arts.images}">
                <h3>${arts.subtitle}</h3>
                <h2>${arts.title}</h2>
                <p>${arts.synopsis}</p>
                <a href="#">learn more</a>
            </div>`
        }).join("");
        return html;
    },
};
app.initialize()

})();
