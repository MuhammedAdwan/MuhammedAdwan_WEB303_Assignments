/*
    Assignment 05
*/

$(document).ready(function () {

    class ContentItem {
        id;
        name;
        description;
        genre;

        constructor(id, name, description, genre) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.genre = genre;
        }

        updateContentItem(id, name, description, genre) {
            if((this.id ==id) && (this.name !=null) && (description !=null) && (genre !=null)){
                this.name = name;
                this.description = description;
                this.genre = genre;
            }
        }
        toString() {
            $("#content").append(
                '<div class="content-item-wrapper" id="content-item-' + this.id + '">' + 
                "<h2>" + this.name + "</h2> " + 
                "<p>" + this.description + "</p> " + 
                "<div>" + this.genre + "</div>" + 
                '</div>'
            );
        }
            
        };

        //lets create an array of 5 content items
        let ContentItems = [
            new ContentItem(0, "The Matrix", "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.", "Action"),
            new ContentItem(1, "The Matrix Reloaded", "Freedom fighters use extraordinary skills and weaponry to revolt against machines.", "Action"),
            new ContentItem(2, "The Matrix Revolutions", "The human city of Zion defends itself against the massive invasion of the machines as Neo fights to end the war at another front while also opposing the rogue Agent Smith.", "Action"),
            new ContentItem(3, "The Matrix 4", "The plot is currently unknown.", "Action"),
            new ContentItem(4, "The Matrix 5", "The plot is currently unknown.", "Action"),
        ];

        //lets update the html file to display the contents.
        ContentItems.forEach((item) => {
            item.toString();
        });

        $(".content-item-wrapper").css({
            "border": "2px solid red",
            "width": "70%",
            "padding": "10px",
            "margin": "20px auto",
        })

        //add 2 buttons to my page (Bonus question)

        $("#updatedBtn").click(() => {
            for (let i = 0; i < ContentItems.length; i++) {
                ContentItems[i].updateContentItem(i, "the name updated", "the description updated", "the genre updated");
            }

            //rerendering the updated button
            $("#content").empty();
            ContentItems.forEach((item) => {
                item.toString();
            });
        });
        
        $("#notUpdatedBtn").click(() => {
            console.log("notUpdatedBtn clicked"); 
        
            for (let i = 0; i < ContentItems.length; i++) {
                console.log("Updating item", i); 
                ContentItems[i].updateContentItem(i, "not updated", "not updated", "not updated");
            }
        
            // rendering the button
            $("#content").empty();
            ContentItems.forEach((item) => {
                item.toString();
            });
        });
    });
