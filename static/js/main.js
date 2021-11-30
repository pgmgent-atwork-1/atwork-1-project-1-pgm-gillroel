(() => {

    // indexof() 



    // const $buttonTop = document.querySelector(".button");

    // $buttonTop.addEventListener('click', () => {
    //     document.documentElement.scrollTop = 0;

    // }, false)



    // begin atelier studio

    const app = {
        initialize() {
            this.cachesElements();
            this.buildUI();
            // this.generateHTMLForArtExhibitionsHome();
        },


        cachesElements() {
            
            this.$artExhibitions = document.querySelector(".cardContainer");
            this.$atelierStudio = document.querySelector(".studioContainer");
        },

        
        buildUI() {
            
            this.$artExhibitions.innerHTML = this.generateHTMLForArtExhibitionsHome();
            this.$atelierStudio.innerHTML = this.generateHTMLForAtelierStudioHome();
        },

        generateHTMLForArtExhibitionsHome() {
            const artExhibitions = ARTS.filter(art => art.highlight === true);
            const mapped = artExhibitions.map((art) => {
                return `<div class="card">
                <img src="art-and-exhibitions/img/${art.images[0]}" loading="lazy"
                    alt="art-and-exhibitions">
                <h3>${art.tags[0]} — ${art.location}</h3>
                <h2>${art.title}</h2>
                <p>${art.discription}
                </p>
                <a href="#">learn more</a>
            </div>`;

            }).join("");
            console.log(mapped);
            return mapped;
            
        },

        generateHTMLForAtelierStudioHome() {
            const atelier = ateliers.filter(art => art.highlight === true);
            const atelierMapped = atelier.map((art) => {
                return `<div class="studioCards">
                <img src="atelier-studio/img/${art.images}" loading="lazy"
                    alt="atelier-studio">
                <h3>${art.subtitle}</h3>
                <h2>${art.title}</h2>
                <p>${art.synopsis}
                </p>
                <a href="#">Learn more</a>
            </div>`

            }).join("");
            return atelierMapped;
        }

    };
    app.initialize()

})();

