    document
        .getElementById("quoteForm")
        .addEventListener("submit", function(event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value;

            const service =
                document.getElementById("service").value;

            alert(
                "Thank you " + name +
                "! Your quote request has been received."
            );

            this.reset();

        });


    /* ================= HEADER SHADOW ================= */

    window.addEventListener("scroll", function() {

        const header =
            document.querySelector("header");

        if (window.scrollY > 50) {
            header.style.boxShadow =
                "0 5px 20px rgba(0,0,0,0.15)";
        } else {
            header.style.boxShadow =
                "0 2px 10px rgba(0,0,0,0.08)";
        }

    });
