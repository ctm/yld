// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item affix "><a href="welcome.html">Welcome</a></li><li class="chapter-item "><a href="life.html">Life</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="life/too-public.html">Too Public?</a></li><li class="chapter-item "><a href="life/my-beliefs.html">My Beliefs</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="life/my-beliefs/multiple-universes.html">Multiple Universes</a></li><li class="chapter-item "><a href="life/my-beliefs/soy.html">Soy</a></li></ol></li></ol></li><li class="chapter-item "><a href="running.html">Running</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="resources.html">Resources</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="resources/books.html">Books</a></li><li class="chapter-item "><a href="resources/music.html">Music</a></li></ol></li><li class="chapter-item "><a href="running/other_gpx_files.html">GPX Files</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="running/other_gpx_files/foothills_50k.html">Foothills 50k</a></li><li class="chapter-item "><a href="running/other_gpx_files/wmfa_50k.html">White Mesa Fat Ass 50k</a></li></ol></li><li class="chapter-item "><a href="running/direct.html">As Race Director</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="running/direct/foothills-fat-ass.html">Foothills Fat Ass</a></li><li class="chapter-item "><a href="running/direct/chimney_melon_50k.html">Chimney Melon 50k</a></li><li class="chapter-item "><a href="running/direct/baldy_50k.html">Baldy 50k</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="running/direct/baldy_50k/results.html">Results</a></li></ol></li><li class="chapter-item "><a href="running/direct/white_mesa_50k.html">White Mesa 50k</a></li></ol></li><li class="chapter-item "><a href="running/past.html">As Entrant</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="running/dnfs.html">DNFs</a></li><li class="chapter-item "><a href="running/past/2021.html">2021</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="running/past/2021/hardrock.html">Hardrock</a></li></ol></li><li class="chapter-item "><a href="running/past/2022.html">2022</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="running/past/2022/cedro.html">Cedro Peak 50k</a></li><li class="chapter-item "><a href="running/past/2022/cocodona-250.html">Cocodona 250</a></li><li class="chapter-item "><a href="running/past/2022/big_cottonwood_marathon.html">Big Cottonwood Marathon</a></li><li class="chapter-item "><a href="running/past/2022/aa_50k.html">AA 50k</a></li><li class="chapter-item "><a href="running/past/2022/torgbc.html">Tour of the Rio Grande</a></li><li class="chapter-item "><a href="running/past/2022/mt_taylor_50k.html">Mt. Taylor 50k</a></li><li class="chapter-item "><a href="running/past/2022/feral_hog_50k_rucksack.html">Feral Hog 50k Rucksack</a></li><li class="chapter-item "><a href="running/past/2022/tortugas_mountain.html">Tortugas Mountain 24 Hour Challenge</a></li><li class="chapter-item "><a href="running/past/2022/duke_city_marathon.html">Duke City Marathon</a></li><li class="chapter-item "><a href="running/past/2022/tatonka_5k.html">Tatonka 5k</a></li><li class="chapter-item "><a href="running/past/2022/forever_young_six_miler.html">Forever Young 6 miler</a></li><li class="chapter-item "><a href="running/past/2022/jj100.html">Javelina Jundred</a></li><li class="chapter-item "><a href="running/past/2022/dptr_106m.html">Deadman Peaks 106 miler</a></li><li class="chapter-item "><a href="running/past/2022/wmfa50k.html">White Mesa Fat Ass 50k</a></li><li class="chapter-item "><a href="running/past/2022/ed_t.html">Ed Thanksgiving&#39;s Group Run</a></li><li class="chapter-item "><a href="running/past/2022/black_friday.html">Black Friday Turkey Trots</a></li><li class="chapter-item "><a href="running/past/2022/bbf50k.html">Bosque Bigfoot 50k</a></li><li class="chapter-item "><a href="running/past/2022/tucson_marathon.html">Tucson Marathon</a></li><li class="chapter-item "><a href="running/past/2022/grinch_lunch.html">The Grinch Lunch</a></li></ol></li><li class="chapter-item "><a href="running/past/2023.html">2023</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="running/past/2023/foothills_fat_ass.html">Foothills Fat Ass</a></li><li class="chapter-item "><a href="running/past/2023/sandia-snowshoe-race.html">Sandia Snowshoe Race</a></li><li class="chapter-item "><a href="running/past/2023/resolutions-stink.html">Resolutions Stink!</a></li><li class="chapter-item "><a href="running/past/2023/the-quad.html">Mt. Taylor Winter Quadrathlon</a></li><li class="chapter-item "><a href="running/past/2023/v-day.html">V Day</a></li><li class="chapter-item "><a href="running/past/2023/king-of-the-hill.html">King of the Hill</a></li><li class="chapter-item "><a href="running/past/2023/shenanigains.html">Shenanigains</a></li><li class="chapter-item "><a href="running/past/2023/bmdm.html">Bataan Memorial Death March</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="running/past/2023/bmdm/my-race.html">My Race</a></li></ol></li><li class="chapter-item "><a href="running/past/2023/academy-of-pain.html">Academy of Pain</a></li><li class="chapter-item "><a href="running/past/2023/brew-crowning.html">Burque Brew Tour Crowning</a></li><li class="chapter-item "><a href="running/past/2023/berta.html">Berta Fun Run</a></li><li class="chapter-item "><a href="running/past/2023/cocodona-250.html">Cocodona 250</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="running/past/2023/cocodona-250/creepy-crawly.html">Creepy Crawly Winner</a></li></ol></li><li class="chapter-item "><a href="running/past/2023/wser.html">Western States</a></li><li class="chapter-item "><a href="running/past/2023/barge-fun-run.html">BARGE Fun Run</a></li><li class="chapter-item "><a href="running/past/2023/tatonka_5k.html">Tatonka 5k</a></li><li class="chapter-item "><a href="running/past/2023/duke_city_marathon.html">Duke City Marathon</a></li><li class="chapter-item "><a href="running/past/2023/jj100.html">Javelina Jundred</a></li><li class="chapter-item "><a href="running/past/2023/dptr_53m.html">Deadman Peaks 53 Miler</a></li><li class="chapter-item "><a href="running/past/2023/wmfa50k.html">White Mesa Fat Ass 50k</a></li><li class="chapter-item "><a href="running/past/2023/souls-of-sorrow.html">Socorro Souls of Sorrow</a></li><li class="chapter-item "><a href="running/past/2023/ed_t.html">Ed Thanksgiving&#39;s Group Run</a></li><li class="chapter-item "><a href="running/past/2023/black_friday.html">Black Friday Turkey Trots</a></li><li class="chapter-item "><a href="running/past/2023/bbf50k.html">Bosque Bigfoot 50k</a></li></ol></li></ol></li><li class="chapter-item "><a href="unicycling.html">Unicycling</a></li><li class="chapter-item "><a href="running/my-beliefs.html">My Beliefs</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="running/my-beliefs/knees.html">Knees</a></li><li class="chapter-item "><a href="running/my-beliefs/rest-days.html">Rest Days</a></li></ol></li></ol></li><li class="chapter-item "><a href="programming.html">Programming</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="programming/pdp8.html">PDP-8</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="programming/pdp8/first-hack.html">My First Hack</a></li></ol></li><li class="chapter-item "><a href="programming/pdp11.html">PDP-11</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="programming/pdp11/not-worthy.html">I am Not Worthy</a></li></ol></li><li class="chapter-item "><a href="programming/ancient-peripherals.html">Ancient Peripherals</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="programming/ancient-peripherals/punch-cards.html">Punch Cards</a></li></ol></li><li class="chapter-item "><a href="programming/blown.html">Blown Opportunities</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="programming/blown/steve-jobs.html">Steve Jobs</a></li></ol></li><li class="chapter-item "><a href="programming/rust.html">Rust</a></li></ol></li><li class="chapter-item "><a href="poker.html">Poker</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="poker/wsop-chip-bet.html">WSOP Chip Bet</a></li></ol></li><li class="chapter-item "><a href="bataan.html">Bataan</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="bataan/death-march.html">Death March</a></li><li class="chapter-item "><a href="bataan/memorial-death-march.html">Memorial Death March</a></li></ol></li><li class="chapter-item "><a href="thanks.html">Thanks</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="thanks/agdg.html">AGDG</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="thanks/agdg/agdgat.html">AGDGAT</a></li></ol></li><li class="chapter-item "><a href="thanks/barge.html">BARGE</a></li><li class="chapter-item "><a href="thanks/team_rwb.html">Team RWB</a></li><li class="chapter-item "><a href="thanks/george.html">GEORGE</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
