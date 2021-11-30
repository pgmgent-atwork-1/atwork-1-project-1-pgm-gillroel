(() => {

    const app = {

        initialize() {
            this.cachesElements();
            this.buildUI();
            

        },

        buildUI() {
            
            this.$art.innerHTML = this.generateHTMLForArtAndExhibitions();
        },

        cachesElements() {
            this.$art = document.querySelector(".artContainer");

        },

        generateHTMLForArtAndExhibitions() {
            const artMapped = ARTS.map((arts) => {
                return `<h1>${arts.title}</h1>`;
            }).join("");
            
            return artMapped;
        }

    };

    app.initialize();

})();