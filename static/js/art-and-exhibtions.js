(() => {

    const app = {

        initialize() {
            this.cachesElements();
            this.buildUI();
            this.generateHTML();
            // this.filterCategory();
            
            

        },

        buildUI() {
            
            this.$art.innerHTML = this.generateHTML();
            this.$categorie.innerHTML = this.generateHTMLForCategories();
            this.$years.innerHTML = this.generateHTMLForYears();
        },

        cachesElements() {
            this.$art = document.querySelector(".artContainer");
            this.$categorie = document.querySelector(".categories");
            this.$years = document.querySelector(".years");

        },


        years() {
            const years =  [];
            for( const works of ARTS){
                if(!years.includes(works.year)){
                    years.push(works.year);
                }

            }
            console.log(years);

        },


        generateHTML() {
            const years =  [];
            for( const works of ARTS){
                if(!years.includes(works.year)){
                    years.push(works.year);
                }

            }

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

            const html = years.map((year) => {
                const work = ARTS.filter((work) => work.year === year).map((work) => {
                    return `<li> <div class = "artCards"><div class="textContainerArt">
                    <a href="art-and-exhibitions/detail/index.html">${work.title}</a>
                    <h3>${locationTags(work)}</h3>
                </div>
                <div class="artContainerimg">
                ${work.images.map(image => {
                    return `
                    <img src="art-and-exhibitions/img/${image}" loading="lazy" alt="${image}">
                    `
                }).join("")}
                
                </div>
                </div>
                </li>`

                }).join("");
                return `<div>
                <h2 id="${year}" name="${year}">${year}</h2>
                <ul>
                ${work}
                </ul>
                </div>`
                }).join("");

                
                return html;

        },

        generateHTMLForCategories() {
            let html = "<ul>"
            html += categories.map((categorie) => {
                return `<li><button class="category" data-category="${categorie}">${categorie}</button></li>`
            }).join("");
            html += "</ul>";
            return html;
        },

        generateHTMLForYears() {
            const htmlYears = years.map((year) => {
                return `<a href="art-and-exhibitions/index.html#${year}">${year}</a>`
            }).join("");
            return htmlYears;
            

        },

        
        categoryActive: null,

        // filterCategory() {

        //     const $category = document.querySelectorAll(".category");
        //     for(const $button of $category){
        //         $button.addEventListener("click", () => {
        //             const category = $button.dataset.category
        //             this.categoryActive = category;
        //             this.generateHTMLFilter();
                    

        //             console.log(this.categoryActive);
                    
        //         },false); 
                
        //     }

        //     this.generateHTMLFilter();
            

        // },


        // generateHTMLFilter() {
        //     const filter = ARTS.filter((work) => {
        //     work.tags[0] === this.categoryActive;
        //     })
        //     this.$art.innerHTML = this.generateArtwork(filter);
        // },

        // // generateArtwork(items) {
        // //     return items.map((item) => {
        // //         return`<h1> ${item.title}</h1>`;

        // //     }).join("");
        // // },

    };




    app.initialize();

})();