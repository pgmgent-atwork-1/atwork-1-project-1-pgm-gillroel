(() => {

    const app = {

        initialize() {
            this.cachesElements();
            this.buildUI();
            

        },

        buildUI() {
            
            this.$art.innerHTML = this.generateHTMLForArtAndExhibitions();
            this.$categorie.innerHTML = this.generateHTMLForCategories();
            this.$years.innerHTML = this.generateHTMLForyears();
        },

        cachesElements() {
            this.$art = document.querySelector(".artContainer");
            this.$categorie = document.querySelector(".categories")
            this.$years = document.querySelector(".years");

        },




        generateHTMLForArtAndExhibitions(i) {

            const artMapped = ARTS.map((arts) => {

                function tags(arts){
                    if(arts.tags.length >1){
                        return `${arts.tags.join(" / ")}`
                    }else {
                        return `${arts.tags}`;
                    }
                }

                function ifLocation(arts){
                    if(arts.location === null) {
                        return "";
                    }else {
                        return `- ${arts.location}`
                    }
                }


                function locationTags(arts){
                    return `${tags(arts)} ${ifLocation(arts)}`

                }

                function ifImg(arts){
                    if(arts.length > 0){

                        for(let i = 0; i< arts.length; i++){
                            return `<img src="art-and-exhibitions/img/${arts[i]}" loading="lazy" alt="${arts.images}">`;
                        }
                        
                    }else {
                        return "";

                        
                    }
                    
                }

                

                return `
                <div class = "artCards"><div class="textContainerArt">
                    <a href="#">${arts.title}</a>
                    <h3>${locationTags(arts)}</h3>
                </div>
                <div class="artContainerimg">
                ${ifImg(arts.images)}
                </div>
                </div>
                `;
            
            }).join("");
            console.log(artMapped);
            return artMapped;
        
        },

        generateHTMLForCategories() {
            let html = "<ul>"
            html += categories.map((categorie) => {
                return `<li><button class="category" data-category="${categorie}">${categorie}</button></li>`
            }).join("");
            html += "</ul>";
            return html;
        },

        generateHTMLForyears() {
            const htmlYears = years.map((year) => {
                return `<a href="${year}">${year}</a>`
            }).join("");
            return htmlYears;

        },

        filterCategory() {
            this.categoryActive = "Show all";
            const $category = document.querySelector(".category");
            for(const $button of $category){
                $button.addEventListener("click", () => {
                    const category = $btn.dataset.category;
                    this.categoryActive = category;
                },false);
            }

        }
        
    


    };




    app.initialize();

})();