(() => {

    const app = {
        initialize() {
            this.cachesElements();
            this.buildUI();
        },


        cachesElements() {
            
            this.$artExhibitions = document.querySelector(".cardContainer");
            this.$atelierStudio = document.querySelector(".studioContainer");
            this.$time = document.querySelector(".contactContainer");
            
        },

        
        buildUI() {
            
            this.$artExhibitions.innerHTML = this.generateHTMLForArtExhibitionsHome();
            this.$atelierStudio.innerHTML = this.generateHTMLForAtelierStudioHome();
            this.$time.innerHTML = this.generateTime();
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
                <a href="art-and-exhibitions/index.html">learn more</a>
            </div>`;

            }).join("");
            console.log(mapped);
            return mapped;
            
        },

        generateHTMLForAtelierStudioHome() {
            const atelier = ateliers.filter(art => art.highlight === true);
            const atelierMapped = atelier.map((art) => {

                function subtitle(art) {
                    if(art.subtitle === null){
                        return "";
                    }else {
                        return art.subtitle
                    }
                }

                return `<div class="studioCards">
                <img src="atelier-studio/img/${art.images}" loading="lazy"
                    alt="atelier-studio">
                <h3>${subtitle(art)}</h3>
                <h2>${art.title}</h2>
                <p>${art.synopsis}
                </p>
                <a href="atelier-studio/index.html">Learn more</a>
            </div>`

            }).join("");
            return atelierMapped;
        },

        generateTime() {
            const today = new Date();
            const time = `<p>Time in belgium ${today.getHours()}:${today.getMinutes()}</p>;`
            
            console.log(time);
            return time;
        }

    };
    app.initialize()

})();

