// Bunu konsola yapıştırın

class Youtube {
    constructor(artist) {
        this.artist = artist;
        this.videos = [];
    }

    getVideos() {
        return new Promise((resolve, reject) => {
            if (!location.href.includes("youtube"))
                return reject("Lütfen Youtube'u açın!");
            if (!this.artist || this.artist == "")
                return reject("Lütfen sanatçıyı girin veya düzeltin!");

            const els = document.querySelectorAll("[id=meta]");

            for (let i = 0; i < els.length; i++) {
                const views = els[i].getElementsByClassName(
                    "style-scope ytd-grid-video-renderer"
                );

                for (let ind = 0; ind < views.length; ind++) {
                    let view = views[ind].innerHTML;

                    if (view.includes("görüntüleme")) {
                        view = view.replace(/&nbsp;/g, "");

                        if (view.includes("B")) {
                            let zero = "00";
                            if (!view.includes(",")) zero += "0";
                            view = view.slice(0, view.indexOf("B")) + zero;
                        } else if (view.includes("Mn")) {
                            let zero = "00000";
                            if (!view.includes(",")) zero += "0";
                            view =
                                view
                                    .slice(0, view.indexOf("M"))
                                    .replace(/,/g, "") + zero;
                        } else if (view.includes("g")) {
                            view = view
                                .slice(0, view.indexOf("g"))
                                .replace(/,/g, "");
                        }

                        const element = els[i].getElementsByTagName("a")[0];
                        if (
                            Number(view) &&
                            element.ariaLabel
                                .toLowerCase()
                                .includes(this.artist.trim().toLowerCase())
                        ) {
                            this.videos.push({
                                title: element.innerText,
                                view: Number(view),
                                url: element.href,
                            });
                        }
                    }
                }
            }

            resolve(this);
        });
    }

    mostViewed() {
        return this.videos.find(
            (m) => m.view == Math.max(...this.videos.map((v) => v.view))
        );
    }

    leastViewed() {
        return this.videos.find(
            (m) => m.view == Math.min(...this.videos.map((v) => v.view))
        );
    }

    leastToMost() {
        return this.videos.sort((a, b) => a.view - b.view);
    }

    mostToLeast() {
        return this.videos.sort((a, b) => b.view - a.view);
    }
}
