// =============================================================
// PORTFOLIO DATA: Hamish Baxter
// =============================================================
// CONTENT BLOCK TYPES:
//   { type: "text",    body: "..." }
//   { type: "image",   src: "path.webp", caption: "..." }
//   { type: "gallery", images: ["a.webp", "b.webp", ...] }
//   { type: "bullets", heading: "...", items: ["...", "..."] }
// =============================================================

const portfolioData = [

    // ─────────────────────────────────────────────────────────
    // PAGE DATA
    // ─────────────────────────────────────────────────────────

    {
        id: "about",
        type: "page",
        title: "Hamish Baxter",
        subtitle: "Design Leader · Spatial & Digital Architecture",
        content: [
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Watercolour Images/images-bio-about/hamish-baxter-watercolour-about1.webp",
                    "Portfolio-images_webp/Watercolour Images/images-bio-about/hamish-baxter-watercolour-about2.webp",
                    "Portfolio-images_webp/Watercolour Images/images-bio-about/hamish-baxter-watercolour-about3.webp",
                    "Portfolio-images_webp/Watercolour Images/Images-bio-leadership/Hamish Baxter design studio watercolour.webp"
                ]
            },
            {
                type: "text",
                body: "My work spans the intersection of complex digital ecosystems and high-volume physical architecture. I specialise in the environments where the world intersects: international transit hubs, premium retail concourses, and global brand flagships."
            },
            {
                type: "text",
                body: "I currently direct multidisciplinary teams, fostering a culture of rigorous critique, cross-functional collaboration, and strategic alignment with the C-suite. My mandate is to translate spatial vision into measurable business value."
            },
            {
                type: "image",
                src: "Portfolio-images_webp/Watercolour Images/Images-bio-leadership/Hamish Baxter Spirit of NZ Leadership.webp",
                caption: "Spirit of New Zealand: Leadership at sea"
            },
            {
                type: "text",
                body: "I believe that the best design is invisible. It guides millions of tired travellers seamlessly toward moments of delight, commerce, and calm."
            }
        ]
    },

    {
        id: "ai",
        type: "page",
        title: "AI & Research",
        subtitle: "Pioneering the next era of architectural workflows.",
        content: [
            {
                type: "text",
                body: "I do not view Artificial Intelligence merely as a rendering tool: I view it as a <span class='highlight'>computational partner</span>. By integrating AI-driven generative tools into the early phases of spatial strategy, my teams can iterate through hundreds of conceptual retail footprints in the time it previously took to draft three."
            },
            {
                type: "text",
                body: "As an early adopter of LLM-assisted workflows, I build internal tools to automate repetitive data mapping and bridge the gap between raw spatial data and immersive digital experiences."
            },
            {
                type: "bullets",
                heading: "Current Applications",
                items: [
                    "Generative floorplan ideation at concept phase",
                    "LLM-assisted brief synthesis and stakeholder alignment docs",
                    "AI-driven material and finish specification libraries",
                    "Automated portfolio and CMS tooling"
                ]
            },
            {
                type: "text",
                body: "My approach ensures that AI adoption scales <span class='highlight'>design velocity without sacrificing architectural rigour</span> or brand consistency."
            }
        ]
    },

    // ─────────────────────────────────────────────────────────
    // ARCHITECTURE PROJECTS: Globe Pins
    // ─────────────────────────────────────────────────────────

    {
        id: 1,
        type: "architecture",
        lat: 51.4700,
        lon: -0.4543,
        status: "built",
        title: "Heathrow / We Know Group",
        airport: "London Heathrow, UK",
        content: [
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Heathrow/We Know Group London/Render with Car No WKG logos(1).webp"
                ]
            },
            {
                type: "text",
                body: "A premium retail environment at one of the world's busiest transit hubs. The brief called for a concourse experience that could guide high-volume passenger flow seamlessly into luxury retail zones without sacrificing dwell quality."
            },
            {
                type: "bullets",
                heading: "Key Deliverables",
                items: [
                    "Spatial strategy and retail footprint planning",
                    "Material specification and finish schedules",
                    "Lighting design and passenger flow modelling",
                    "Contractor documentation and site oversight"
                ]
            }
        ]
    },

    {
        id: 2,
        type: "architecture",
        lat: 51.4994,
        lon: -0.1632,
        status: "built",
        title: "Harrods",
        airport: "Knightsbridge & London Heathrow T3, T4 & T5",
        content: [
            {
                type: "bullets",
                heading: "At a Glance",
                items: [
                    { label: "Knightsbridge flagship concepts and LHR T3, T4 and T5 airport retail", anchor: "the-brief" },
                    { label: "Aviation-grade engineering: fire, security and durability compliance", anchor: "airport-engineering" },
                    { label: "3D modelling, rendering and early machine learning visualisation tools", anchor: "the-craft" },
                    { label: "Hand sketching under founding director Roger Cook", anchor: "the-team" },
                    { label: "International material sourcing and supplier coordination", anchor: "the-craft" },
                    { label: "UX design foundation learned through moving people through physical space", anchor: "what-i-took-away" }
                ]
            },
            {
                type: "gallery",
                id: "the-brief",
                heading: "The Brief",
                images: [
                    "Portfolio-images_webp/Harrods/Harrods/192722-002©Greshoff(H).webp",
                    "Portfolio-images_webp/Harrods/Harrods/192722-008©Greshoff(H).webp",
                    "Portfolio-images_webp/Harrods/Harrods/192722-011©Greshoff(H).webp",
                    "Portfolio-images_webp/Harrods/Harrods/192722-013©Greshoff(H).webp"
                ]
            },
            {
                type: "text",
                body: "Few briefs carry the weight of Harrods. Working on the Knightsbridge flagship concepts and the London Heathrow T3, T4, and T5 airport retail environments as part of the team at <span class='highlight'>Wanda Creative</span> in London was one of the most demanding and rewarding experiences of my early career: a masterclass in what happens when luxury, engineering, and genuine artistry are asked to coexist."
            },
            {
                type: "text",
                id: "airport-engineering",
                heading: "Airport Engineering",
                body: "Airport retail operates under constraints that high street design never faces. Every material we specified had to meet stringent fire resistance, commercial durability, and security standards: bomb-proof glazing, commercial-grade fixings, internationally sourced finishes that could survive the relentless footfall of one of the world's busiest transit hubs. The extraordinary thing is that none of this shows. The finished spaces feel precisely as they should: effortlessly luxurious, quietly exceptional."
            },
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Harrods/Harrods/Harrods Knightbridge - Arcade 1.webp",
                    "Portfolio-images_webp/Harrods/Harrods/Harrods Knightbridge - Arcade 2.webp",
                    "Portfolio-images_webp/Harrods/Harrods/Harrods Knightbridge - Arcade 3.webp",
                    "Portfolio-images_webp/Harrods/Harrods/Harrods Knightbridge - Sig 1.webp"
                ]
            },
            {
                type: "text",
                id: "the-craft",
                heading: "The Craft",
                body: "My contribution spanned both the creative and the technical. I drew floor plans, developed lighting specifications, built 3D models in Cinema 4D, and produced renders and presentation visuals: including early experiments with machine learning tools to accelerate the visualisation process. I worked closely with manufacturers and international suppliers, developing an understanding of materials science and global procurement that has stayed with me ever since."
            },
            {
                type: "image",
                src: "Portfolio-images_webp/Harrods/Harrods/Harrods LHR T3 Concept Design (1).webp",
                caption: "Harrods LHR T3: concept design development"
            },
            {
                type: "text",
                id: "the-team",
                heading: "The Team",
                body: "Some of the most formative moments happened around the large angled drafting table at Wanda Creative, working alongside <span class='highlight'>Roger Cook</span>: one of the founding directors and a master of hand-drawn architectural interior renders. Watching Roger work, and learning to use those tools myself, gave me a discipline and spatial intuition that no software can replicate. I was also fortunate to learn under <span class='highlight'>Michael Foley</span>, co-founder and CEO, and <span class='highlight'>Lisa Brown</span>, General Manager: people whose standards, generosity, and belief in young designers shaped everything I do."
            },
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Harrods/Harrods/Harrods Knightbridge - Seasonal 1.webp",
                    "Portfolio-images_webp/Harrods/Harrods/Harrods Knightbridge - Seasonal 2.webp",
                    "Portfolio-images_webp/Harrods/Harrods/Harrods LHR T3 Concept Design (3).webp",
                    "Portfolio-images_webp/Harrods/Harrods/Harrods LHR T3 Concept Design (5).webp"
                ]
            },
            {
                type: "text",
                id: "what-i-took-away",
                heading: "What I Took Away",
                body: "One of the deepest lessons this project gave me was one I didn't expect: a foundation in user experience design. Thinking about how a traveller: tired, time-conscious, carrying luggage: moves through a luxury retail space, remains aware of their departure gate, and still finds the space and calm to browse and discover, is fundamentally a UX problem. The physical and digital design challenges are the same. I've carried that insight into every digital product I've worked on since."
            },
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Harrods/Harrods T3/192722-009©Greshoff(H).webp",
                    "Portfolio-images_webp/Harrods/Harrods T3/192722-026©Greshoff(H).webp",
                    "Portfolio-images_webp/Harrods/Harrods T3/192722-059©Greshoff(H).webp",
                    "Portfolio-images_webp/Harrods/Harrods T3/192722-071©Greshoff(H).webp"
                ]
            }

        ]
    },

    {
        id: 3,
        type: "architecture",
        lat: 25.2730,
        lon: 51.6080,
        status: "built",
        title: "Qatar Duty Free",
        subtitle: "Retail Masterplan, Hamad International Airport, Doha",
        airport: "Hamad International Airport, Doha",
        content: [
            {
                type: "bullets",
                heading: "At a Glance",
                items: [
                    { label: "Full retail masterplan across multiple terminal zones", anchor: "the-scale" },
                    { label: "Over a year of work in the lead-up to the Qatar 2022 FIFA World Cup", anchor: "masterplanning" },
                    { label: "Golden Eagle installation in the Great Hall above the alcohol tower", anchor: "the-great-hall" },
                    { label: "Sustainable recycled stone composite flooring: sourced regionally", anchor: "materials-sustainability" },
                    { label: "Cultural pattern work with local Qatari artists and consultants", anchor: "culture-collaboration" },
                    { label: "Beauty, fragrance, chocolate, food gifts and fashion zones", anchor: "the-great-hall" }
                ]
            },
            {
                type: "gallery",
                id: "the-scale",
                heading: "The Scale",
                images: [
                    "Portfolio-images_webp/Qatar Duty Free/Almotahajiba View.webp",
                    "Portfolio-images_webp/Qatar Duty Free/BRAND Shopfront View.webp"
                ]
            },
            {
                type: "text",
                body: "Hamad International Airport sits at a crossroads of the world. Passengers from dozens of cultures pass through its terminals daily, and Qatar Duty Free needed to meet every one of them with something worthy of the occasion. Working as part of the team at Wanda Creative, this project represented over a year of sustained design effort, some of the greatest creative freedom I have experienced on a project, and a genuinely exceptional budget that demanded exceptional ideas in return."
            },
            {
                type: "text",
                id: "masterplanning",
                heading: "Masterplanning",
                body: "The scale of the masterplanning work was significant. Our team was responsible for designing the passenger journey from arrival gates through to the main retail concourse and food court areas, using high-contrast floor plans to guide travellers across vast terminal spaces and connect the retail zones to one another. This kind of spatial thinking at terminal scale taught me more about user experience and wayfinding than almost anything else in my career."
            },
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/QDF SN1000/Concept Renders Qatar Duty Free /QDF Sketch Travel Retail (1).webp",
                    "Portfolio-images_webp/QDF SN1000/Concept Renders Qatar Duty Free /QDF Sketch Travel Retail (2).webp",
                    "Portfolio-images_webp/QDF SN1000/Concept Renders Qatar Duty Free /QDF Sketch Travel Retail (3).webp",
                    "Portfolio-images_webp/QDF SN1000/Concept Renders Qatar Duty Free /QDF Sketch Travel Retail (4).webp"
                ]
            },
            {
                type: "text",
                id: "materials-sustainability",
                heading: "Materials & Sustainability",
                body: "One of the moments I am most proud of on this project was a materials decision. The client had specified real marble for the flooring throughout. We researched and presented an alternative: a high-quality recycled stone composite tile, sourced from a supplier closer to the region, that achieved the same visual effect as marble at a substantially reduced cost and with a significantly lower environmental footprint. They agreed. Seeing those floors installed and knowing the reasoning behind them still feels meaningful."
            },
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/QDF SN1000/Concept Renders Qatar Duty Free /Qatar Doha Retail Design Render (1).webp",
                    "Portfolio-images_webp/QDF SN1000/Concept Renders Qatar Duty Free /Qatar Doha Retail Design Render (2).webp",
                    "Portfolio-images_webp/QDF SN1000/Concept Renders Qatar Duty Free /Qatar Doha Retail Design Render (3).webp",
                    "Portfolio-images_webp/QDF SN1000/Concept Renders Qatar Duty Free /Qatar Doha Retail Design Render (4).webp"
                ]
            },
            {
                type: "text",
                id: "the-great-hall",
                heading: "The Great Hall",
                body: "The beauty and fragrance hall was a central focus of the project. The cultural importance of perfume across the Gulf region meant this space needed to be exceptional, generous, and deeply considered. Alongside it, the Great Hall featured a Golden Eagle installation rising above a tower display for spirits and alcohol, a piece of theatre that anchored the space and gave travellers a genuine landmark moment within the terminal."
            },
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/QDF SN1000/VR Images/VRX0001.webp",
                    "Portfolio-images_webp/QDF SN1000/VR Images/VRX0002.webp",
                    "Portfolio-images_webp/QDF SN1000/VR Images/VRX0003.webp",
                    "Portfolio-images_webp/QDF SN1000/VR Images/VRX0004.webp"
                ]
            },
            {
                type: "text",
                id: "culture-collaboration",
                heading: "Culture & Collaboration",
                body: "Throughout the project, the Qatari family who owned the airport were careful to involve local artists and cultural consultants in the decorative programme. I was fortunate to work with some of those patterns and installations directly, learning about the historical trade routes and ancient geometric traditions that informed them. That process of learning, listening, and implementing with care is something I have carried into every subsequent project that asked me to work within a culture other than my own."
            },
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/QDF SN1000/QDF Fashion 1.webp",
                    "Portfolio-images_webp/QDF SN1000/QDF Fashion 2.webp",
                    "Portfolio-images_webp/QDF SN1000/QDF Fashion 3.webp",
                    "Portfolio-images_webp/QDF SN1000/QDF Fashion 4.webp"
                ]
            }

        ]
    },

    {
        id: 4,
        type: "architecture",
        lat: 25.2632,
        lon: 51.6150,
        status: "built",
        title: "Qatar Duty Free: Car Podium",
        airport: "Hamad International Airport, Doha",
        content: [
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Qatar Duty Free  Car Podium/Podiumm Developed  Camera 1 Floor and Glass.webp",
                    "Portfolio-images_webp/Qatar Duty Free  Car Podium/Podiumm Developed  Camera 2.webp",
                    "Portfolio-images_webp/Qatar Duty Free  Car Podium/Podiumm Developed  Camera 3.webp"
                ]
            },
            {
                type: "text",
                body: "A specialist podium installation for high-value automotive display within the Qatar Duty Free estate. The brief required a theatrical, gallery-quality setting that positions luxury vehicles as objets d'art rather than commercial inventory: a true statement moment within the terminal."
            },
            {
                type: "image",
                src: "Portfolio-images_webp/Qatar Duty Free  Car Podium/Podiumm Developed  Camera 2 No Background.webp",
                caption: "Podium structure: isolated camera 2 view"
            },
            {
                type: "bullets",
                heading: "Design Approach",
                items: [
                    "Bespoke podium engineering and structural coordination",
                    "Lighting design for automotive-grade reveal",
                    "Wayfinding and customer journey integration",
                    "Premium finish specification throughout"
                ]
            }
        ]
    },

    {
        id: 5,
        type: "architecture",
        lat: 25.2580,
        lon: 51.6050,
        status: "built",
        title: "QDF SN1000",
        airport: "Hamad International Airport, Doha",
        content: [
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/QDF SN1000/QDF 1.webp",
                    "Portfolio-images_webp/QDF SN1000/QDF 2.webp",
                    "Portfolio-images_webp/QDF SN1000/QDF 3.webp",
                    "Portfolio-images_webp/QDF SN1000/QDF 4.webp"
                ]
            },
            {
                type: "text",
                body: "The SN1000 project is a landmark retail installation within the Qatar Duty Free estate: a flagship space designed to anchor the concourse and create a defining moment of brand identity for international travellers. The project spanned from concept sketches through to VR walkthroughs and construction documentation."
            },
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/QDF SN1000/Concept Renders Qatar Duty Free /QDF Sketch Travel Retail (1).webp",
                    "Portfolio-images_webp/QDF SN1000/Concept Renders Qatar Duty Free /QDF Sketch Travel Retail (2).webp",
                    "Portfolio-images_webp/QDF SN1000/Concept Renders Qatar Duty Free /QDF Sketch Travel Retail (3).webp",
                    "Portfolio-images_webp/QDF SN1000/Concept Renders Qatar Duty Free /QDF Sketch Travel Retail (4).webp"
                ]
            },
            {
                type: "image",
                src: "Portfolio-images_webp/QDF SN1000/Concept Renders Qatar Duty Free /Qatar Doha Retail Design Render (1).webp",
                caption: "SN1000: developed concept render"
            },
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/QDF SN1000/VR Images/VRX0001.webp",
                    "Portfolio-images_webp/QDF SN1000/VR Images/VRX0002.webp",
                    "Portfolio-images_webp/QDF SN1000/VR Images/VRX0003.webp",
                    "Portfolio-images_webp/QDF SN1000/VR Images/VRX0004.webp"
                ]
            },
            {
                type: "bullets",
                heading: "Deliverables",
                items: [
                    "Concept through to construction documentation",
                    "Feature joinery and bespoke fixture design",
                    "VR walkthrough for client approval",
                    "Material and finish procurement support"
                ]
            }
        ]
    },

    {
        id: 6,
        type: "architecture",
        lat: 3.1390,
        lon: 101.6869,
        status: "built",
        title: "Dufry Malaysia",
        subtitle: "Travel Retail Store, Genting Highlands, Malaysia",
        airport: "Genting Highlands, Malaysia",
        content: [
            {
                type: "bullets",
                heading: "At a Glance",
                items: [
                    { label: "New Dufry store in the Genting Highlands resort destination, Malaysia", anchor: "the-location" },
                    { label: "Cyberpunk-influenced design: dark ceilings, neon lighting, synthetic materials", anchor: "the-design-language" },
                    { label: "Hand-drawn zigzag ceiling plan translated into a 3D molded fascia", anchor: "the-design-language" },
                    { label: "Laser-focused product spotlighting creating dramatic pools of light", anchor: "lighting" },
                    { label: "Airport-standard navigation clarity within an exploratory, adventurous atmosphere", anchor: "culture-navigation" },
                    { label: "Remarkably fast build turnaround from 2D drawings to completed retail space", anchor: "the-build-team" }
                ]
            },
            {
                type: "gallery",
                id: "the-location",
                heading: "The Location",
                images: [
                    "Portfolio-images_webp/Dufry Malaysia/Dufry Malaysia Travel Retail Store  (1).webp",
                    "Portfolio-images_webp/Dufry Malaysia/Dufry Malaysia Travel Retail Store  (2).webp",
                    "Portfolio-images_webp/Dufry Malaysia/Dufry Malaysia Travel Retail Store  (3).webp",
                    "Portfolio-images_webp/Dufry Malaysia/Dufry Malaysia Travel Retail Store  (5).webp"
                ]
            },
            {
                type: "text",
                body: "Genting Highlands is not an airport. People arrive there to celebrate, to spend, to be somewhere extraordinary. That distinction shaped everything about this project. Working with the team at Wanda Creative for Dufry: the world's largest travel retailer: we were asked to create a new store that carried the navigational clarity and retail expertise of international airport design, but expressed itself in a design language suited to a destination where the rules could be pushed further."
            },
            {
                type: "text",
                id: "the-design-language",
                heading: "The Design Language",
                body: "The direction we landed on was somewhere between cyberpunk and jungle. Dark, stimulating, synthetic, and alive. The ceiling was blacked out entirely, with a hand-drawn zigzag lighting plan I developed on paper: lines of blue and pink light cutting across the void above. That drawing was taken directly into production and molded into a three-dimensional fascia. Seeing a hand sketch become an architectural element in that way, without losing any of its energy in translation, was one of the more satisfying moments of this project."
            },
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Dufry Malaysia/Dufry Malaysia Travel Retail Store  (6).webp",
                    "Portfolio-images_webp/Dufry Malaysia/Dufry Malaysia Travel Retail Store  (7).webp",
                    "Portfolio-images_webp/Dufry Malaysia/Dufry Malaysia Travel Retail Store  (8).webp",
                    "Portfolio-images_webp/Dufry Malaysia/Dufry Malaysia Travel Retail Store  (9).webp"
                ]
            },
            {
                type: "text",
                id: "lighting",
                heading: "Lighting",
                body: "Lighting was the real instrument of the design. Rather than flooding the space with even, global illumination, I specified laser-focused spotlights trained directly on the retail displays. The effect was of moving through a space with texture and rhythm: bright pools of product light surrounded by deeper shadow, then another burst of colour and interest around the next corner. It felt a little like a jungle in that sense: areas of intensity and areas of quiet, with something worth discovering in each."
            },
            {
                type: "image",
                src: "Portfolio-images_webp/Dufry Malaysia/CIMG2466.webp",
                caption: "On-site during construction: Genting Highlands"
            },
            {
                type: "text",
                id: "culture-navigation",
                heading: "Culture & Navigation",
                body: "Culturally, designing for an Asian market allowed for a bolder, more inorganic design language than would have felt appropriate in London or Zurich. Synthetic materials, neon accents, clean geometric lines: the aesthetic of a futuristic city that never quite sleeps. And yet underneath all of that visual energy, the bones of the store were built on the same principles of good retail navigation we had refined across years of airport work. Customers could find their way through clearly and efficiently, but they could also wander, pause, and discover."
            },
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Dufry Malaysia/Dufry Malaysia Travel Retail Store  (10).webp",
                    "Portfolio-images_webp/Dufry Malaysia/Dufry Malaysia Travel Retail Store  (11).webp",
                    "Portfolio-images_webp/Dufry Malaysia/Dufry Malaysia Travel Retail Store  (12).webp",
                    "Portfolio-images_webp/Dufry Malaysia/Dufry Malaysia Travel Retail Store  (13).webp"
                ]
            },
            {
                type: "text",
                id: "the-build-team",
                heading: "The Build Team",
                body: "The build teams on this project were extraordinary. The speed at which they moved from flat 2D drawings to a fully completed three-dimensional retail environment was genuinely impressive, and their ability to interpret and execute the more unusual design details with precision and care made the whole experience a pleasure. Good design depends on good makers, and this project had exceptional ones."
            },
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Dufry Malaysia/CIMG2467.webp",
                    "Portfolio-images_webp/Dufry Malaysia/CIMG2469.webp",
                    "Portfolio-images_webp/Dufry Malaysia/CIMG2470.webp",
                    "Portfolio-images_webp/Dufry Malaysia/CIMG2474.webp"
                ]
            }

        ]
    },

    {
        id: 7,
        type: "architecture",
        lat: 51.5155,
        lon: -0.1410,
        status: "built",
        title: "Hamleys",
        airport: "Regent Street, London",
        content: [
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Hamleys/Hamleys Design concept (1).webp",
                    "Portfolio-images_webp/Hamleys/Hamleys Design concept (2).webp",
                    "Portfolio-images_webp/Hamleys/Hamleys Design concept (3).webp",
                    "Portfolio-images_webp/Hamleys/Hamleys Design concept (4).webp"
                ]
            },
            {
                type: "text",
                body: "A flagship retail interior for one of the world's most beloved toy brands. Working within the Regent Street flagship required balancing the theatrical, experience-driven expectations of families with the operational rigour of a high-volume retail machine."
            },
            {
                type: "image",
                src: "Portfolio-images_webp/Hamleys/Hamleys Design concept (5).webp",
                caption: "Developed concept: experiential zone detail"
            },
            {
                type: "bullets",
                heading: "Design Focus",
                items: [
                    "Multi-floor spatial wayfinding and narrative flow",
                    "Experiential zone design and category architecture",
                    "Material specification for high-traffic durability",
                    "Seasonal transformation framework"
                ]
            }
        ]
    },

    {
        id: 8,
        type: "architecture",
        lat: 51.5080,
        lon: -0.1281,
        status: "built",
        title: "WHSmith",
        subtitle: "Retail Design Programme, UK & International Airports",
        airport: "Heathrow, Gatwick, Paddington & Sydney Airport",
        content: [
            {
                type: "bullets",
                heading: "At a Glance",
                items: [
                    { label: "New design language and material system created from scratch", anchor: "a-new-design-language" },
                    { label: "Flagship locations: Heathrow T3, T4, Gatwick South, Paddington, Sydney Airport", anchor: "the-programme" },
                    { label: "Warm timber, stone tiles and reading-focused spotlight lighting", anchor: "materials-lighting" },
                    { label: "Environmentally certified suppliers specified throughout", anchor: "sustainability" },
                    { label: "Custom shelving and display engineering details developed in-house", anchor: "technical-work" },
                    { label: "Measurable commercial growth at every completed store", anchor: "the-outcome" }
                ]
            },
            {
                type: "gallery",
                id: "the-programme",
                heading: "The Programme",
                images: [
                    "Portfolio-images_webp/WHSmith/Web Optimised/Render WHS T4SWC.webp",
                    "Portfolio-images_webp/WHSmith/Web Optimised/Render WHS T4SWC (1).webp",
                    "Portfolio-images_webp/WHSmith/Web Optimised/Render WHS T4SWC (2).webp",
                    "Portfolio-images_webp/WHSmith/Web Optimised/Render 3 T4SWC.webp"
                ]
            },
            {
                type: "text",
                body: "WHSmith is one of those rare brands that sits inside the daily lives of millions of people without ever quite demanding their attention. The challenge the team at Wanda Creative was given was not just to refresh individual stores, but to build an entirely new design language for the brand across some of the world's busiest travel environments: one that could work as well in a compact train station kiosk as in a flagship airport terminal."
            },
            {
                type: "text",
                id: "a-new-design-language",
                heading: "A New Design Language",
                body: "We kept their signature blue prominent throughout, but built an entirely new material world around it. Earthy stone tile textures at floor level, warm timber shelving, and carefully considered warm lighting in every location. Lighting in particular mattered enormously. WHSmith sells books, magazines and stationery alongside food and travel essentials, and a customer browsing a novel in an airport deserves the same quality of reading light as they would find at home. Every feature display included dedicated reading spotlights as a result."
            },
            {
                type: "gallery",
                id: "materials-lighting",
                heading: "Materials & Lighting",
                images: [
                    "Portfolio-images_webp/WHSmith/Web Optimised/WHSmith LHR T3 Design Concept (1).webp",
                    "Portfolio-images_webp/WHSmith/Web Optimised/WHSmith LHR T3 Design Concept (2).webp",
                    "Portfolio-images_webp/WHSmith/Web Optimised/WHSmith LHR T3 Design Concept (3).webp",
                    "Portfolio-images_webp/WHSmith/Web Optimised/WHSmith LHR T3 Design Concept (4).webp"
                ]
            },
            {
                type: "text",
                id: "technical-work",
                heading: "Technical Work",
                body: "My contribution spanned the full range of the design process. I produced 3D models and rendered visuals for client presentations, and I was also responsible for a significant body of technical drawing work: engineering details for the custom shelving displays and product stands that the shopfitting trades would eventually build. I have a deep respect for the craftspeople and tradespeople who execute this kind of work, and seeing skilled shopfitters bring those details to life across multiple sites was genuinely satisfying."
            },
            {
                type: "text",
                id: "sustainability",
                heading: "Sustainability",
                body: "Sustainability mattered to us on this programme. We specified suppliers with credible environmental credentials and certifications throughout, a standard I pushed for and one the client was receptive to. These kinds of decisions are easier to make when a client moves quickly and trusts your thinking: and WHSmith were exactly that kind of partner."
            },
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/WHSmith/Web Optimised/WHSmith Travel Retail Design Gatwick South (2).webp",
                    "Portfolio-images_webp/WHSmith/Web Optimised/WHSmith Travel Retail Design Gatwick South (3).webp",
                    "Portfolio-images_webp/WHSmith/Web Optimised/WHSmith Travel Retail Design Gatwick South (4).webp",
                    "Portfolio-images_webp/WHSmith/Web Optimised/WHSmith Travel Retail Design Gatwick South (5).webp"
                ]
            },
            {
                type: "text",
                id: "the-outcome",
                heading: "The Outcome",
                body: "The stores we completed are genuinely hybrid spaces. A traveller in a hurry can grab food and navigate to their gate in under two minutes. A traveller with time can find a quiet corner, browse the books, and feel comfortable doing so. That dual functionality does not happen by accident. It is the result of careful category zoning, clear graphic navigation, and a material palette warm enough to slow people down without making them feel like they are wasting time. Every store we completed saw measurable commercial growth."
            },
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/WHSmith/Web Optimised/WHSmith Paddington Design Concept (1).webp",
                    "Portfolio-images_webp/WHSmith/Web Optimised/WHSmith Paddington Design Concept (2).webp",
                    "Portfolio-images_webp/WHSmith/Web Optimised/WHSmith Paddington Design Concept (3).webp",
                    "Portfolio-images_webp/WHSmith/Web Optimised/WHSmith Paddington Design Concept (4).webp"
                ]
            },
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/WHSmith/Web Optimised/WHSmith_Heathrow-T4_Design Concept (1).webp",
                    "Portfolio-images_webp/WHSmith/Web Optimised/WHSmith_Heathrow-T4_Design Concept (2).webp",
                    "Portfolio-images_webp/WHSmith/Web Optimised/WHSmith_Heathrow-T4_Design Concept (3).webp",
                    "Portfolio-images_webp/WHSmith/Web Optimised/WHSmith_Heathrow-T4_Design Concept (4).webp"
                ]
            }

        ]
    },

    {
        id: 9,
        type: "architecture",
        lat: 51.5200,
        lon: -0.1400,
        status: "built",
        title: "Camden Food Co",
        airport: "London Transit Concourse",
        content: [
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Camden Food Co /Camden food Co Exterior VR.webp",
                    "Portfolio-images_webp/Camden Food Co /Camden food Co Interior 1 VR.webp",
                    "Portfolio-images_webp/Camden Food Co /Camden food Co Interior 2 VR.webp",
                    "Portfolio-images_webp/Camden Food Co /camden food co concept design (1).webp"
                ]
            },
            {
                type: "text",
                body: "A food and beverage environment that captures the energy of London's most iconic market district within the controlled environment of a transit concourse. The challenge was infusing genuine character into a format often stripped of it by the demands of airport certification and operator uniformity."
            },
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Camden Food Co /camden food co concept design (2).webp",
                    "Portfolio-images_webp/Camden Food Co /camden food co concept design (3).webp"
                ]
            },
            {
                type: "bullets",
                heading: "Approach",
                items: [
                    "Brand environment strategy and spatial concept",
                    "Material and finish specification with market authenticity",
                    "Menu display and digital integration",
                    "Queuing flow and counter ergonomics"
                ]
            }
        ]
    },

    {
        id: 10,
        type: "architecture",
        lat: 54.9783,
        lon: -1.6178,
        status: "built",
        title: "Millies Cookies",
        airport: "Metrocentre, Newcastle",
        content: [
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Millies Cookies/Millies Metrocentre Newcastle UK (2).webp",
                    "Portfolio-images_webp/Millies Cookies/Millies Metrocentre Newcastle UK (4).webp",
                    "Portfolio-images_webp/Millies Cookies/Millies Metrocentre Newcastle UK (12).webp",
                    "Portfolio-images_webp/Millies Cookies/Millies Metrocentre Newcastle UK (19).webp"
                ]
            },
            {
                type: "text",
                body: "A kiosk and concession redesign for the Millies Cookies brand: bringing warmth, appetite appeal, and operational clarity to one of the UK's most recognisable baked goods brands. The project included both built outcomes and concept design options for the counter display system."
            },
            {
                type: "image",
                src: "Portfolio-images_webp/Millies Cookies/counter display Opt3.webp",
                caption: "Counter display system: Option 3"
            },
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Millies Cookies/Option 1a.webp",
                    "Portfolio-images_webp/Millies Cookies/Option 1b.webp",
                    "Portfolio-images_webp/Millies Cookies/Option 4A.webp"
                ]
            },
            {
                type: "bullets",
                heading: "Deliverables",
                items: [
                    "Kiosk architecture and compact footprint design",
                    "Counter display system with multiple concept options",
                    "Brand expression within constrained retail envelope",
                    "Lighting for product appeal and warmth"
                ]
            }
        ]
    },

    {
        id: 11,
        type: "architecture",
        lat: 51.5220,
        lon: -0.1571,
        status: "built",
        title: "COOP London",
        subtitle: "Convenience Retail, Baker Street Underground Station",
        airport: "Baker Street, London Underground",
        content: [
            {
                type: "bullets",
                heading: "At a Glance",
                items: [
                    { label: "Multi-exit convenience store within Baker Street Underground", anchor: "the-space" },
                    { label: "Bomb and fire rating compliance: same rigour as airport retail", anchor: "security-as-design-tool" },
                    { label: "Evacuation planning and retail navigation designed as a unified system", anchor: "security-as-design-tool" },
                    { label: "Warm timber, exposed Victorian brick and stone-effect tiles", anchor: "materials-atmosphere" },
                    { label: "Lighting tuned for food freshness and underground comfort", anchor: "materials-atmosphere" },
                    { label: "Design language retained in the completed £2.1m store", anchor: "the-completed-store" }
                ]
            },
            {
                type: "gallery",
                id: "the-space",
                heading: "The Space",
                images: [
                    "Portfolio-images_webp/COOP London/13 Coop_Baker Street Render Entrance View.webp",
                    "Portfolio-images_webp/COOP London/14 Coop_Baker Street Render Shopfront View.webp",
                    "Portfolio-images_webp/COOP London/16 Coop_Baker Street Render Straight View.webp",
                    "Portfolio-images_webp/COOP London/17 Coop_Baker Street Render Bakery Coffee Counter.webp"
                ]
            },
            {
                type: "text",
                body: "Baker Street Underground Station is an ancient space. Its bones predate most of the city built above it, and designing within it means working around constraints that have no equivalent in new-build retail: irregular geometry, multiple exits pulling passengers in competing directions, strict bomb and fire rating requirements, and the particular challenge of a location that exists entirely below ground: cut off from natural light, fresh air, and the visual cues that help people orient themselves in the world above."
            },
            {
                type: "text",
                id: "two-kinds-of-customer",
                heading: "Two Kinds of Customer",
                body: "The Co-op brief asked us to make this space work for everyone passing through. Commuters in a hurry needed to move through efficiently, picking up a coffee or a cold drink without breaking stride. Others needed the space and encouragement to slow down, browse the food offer, pick up a newspaper or a meal for the evening. Both groups needed to feel welcome at the same time, in the same space, without the design favouring one at the expense of the other."
            },
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/COOP London/11 Coop_Baker Street Render Tube Shopfronts.webp",
                    "Portfolio-images_webp/COOP London/12 Coop_Baker Street Render Tube Coffee crop.webp",
                    "Portfolio-images_webp/COOP London/15 Coop_Baker Street Render Clock View.webp",
                    "Portfolio-images_webp/COOP London/18 Coop_Baker Street Render Onewater View.webp"
                ]
            },
            {
                type: "text",
                id: "security-as-design-tool",
                heading: "Security as Design Tool",
                body: "The security and evacuation requirements that come with a tube station shaped the spatial plan from the very beginning. Designing for rapid passenger evacuation and designing for clear retail navigation turn out to demand almost exactly the same things: wide, unobstructed sightlines, clear category zoning, multiple entry and exit points that read intuitively. Constraints that initially felt limiting ended up producing a better store. That tends to happen more often than you might expect."
            },
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/COOP London/COOP-London-food-retail-interior-design-cgi-render (1).webp",
                    "Portfolio-images_webp/COOP London/COOP-London-food-retail-interior-design-cgi-render (3).webp",
                    "Portfolio-images_webp/COOP London/COOP-London-food-retail-interior-design-cgi-render (4).webp",
                    "Portfolio-images_webp/COOP London/COOP-London-food-retail-interior-design-cgi-render (6).webp"
                ]
            },
            {
                type: "text",
                id: "materials-atmosphere",
                heading: "Materials & Atmosphere",
                body: "The material palette was chosen specifically to counteract the environment outside the store. Baker Street station is yellow and worn in the way that only very old underground spaces can be. We wanted stepping into the Co-op to feel like a breath of fresh air. Warm timber shelving, stone-effect floor tiles, and lighting calibrated to sit just slightly warm of neutral: warm enough to make food look fresh and appetising, cool enough to avoid the heaviness that can make underground spaces feel oppressive."
            },
            {
                type: "text",
                id: "the-details",
                heading: "The Details",
                body: "Chiller placement for cold drinks was given serious attention. Drinks are one of the highest-impulse purchases in transit retail, and making them easy to access without creating bottlenecks in the main passenger through-flow was a spatial puzzle worth solving carefully. The coffee kiosk: a compact hole-in-the-wall format: was positioned to catch passengers on their way in without disrupting the natural movement through the space."
            },
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/COOP London/COOP-London-food-retail-interior-design-cgi-render (7).webp",
                    "Portfolio-images_webp/COOP London/COOP-London-food-retail-interior-design-cgi-render (8).webp",
                    "Portfolio-images_webp/COOP London/14.2 Coop_Baker Street Render Shopfront night View.webp",
                    "Portfolio-images_webp/COOP London/14 Coop_Baker Street Render Shopfront View.webp"
                ]
            },
            {
                type: "text",
                id: "the-completed-store",
                heading: "The Completed Store",
                body: "One material decision I am particularly proud of was the choice to expose the original Victorian brickwork of the tube building rather than cover it over. It was a gesture that grounded the store in its own history and gave it an authenticity that no applied finish could replicate. That decision, along with the warm timber shelving and natural material palette, survived into the final completed store: which opened a couple of years after I had left Wanda Creative, with a reported investment of £2.1 million. Seeing the design language we developed retained and built is one of the quiet satisfactions of this work."
            },
            {
                type: "text",
                body: "You can read about the completed store at <a href=\"https://www.conveniencestore.co.uk/store-development/co-op-invests-21m-in-on-the-go-concept-store-in-london/657776.article\" target=\"_blank\" class=\"inline-link\">The Grocer: Co-op invests £2.1m in on-the-go concept store in London</a>."
            }

        ]
    },

    {
        id: 12,
        type: "architecture",
        lat: 59.9139,
        lon: 10.7522,
        status: "concept",
        title: "Norwegian Cruise Lines",
        subtitle: "Onboard Retail Concept, NCL Fleet",
        airport: "Norwegian Cruise Lines Fleet",
        content: [
            {
                type: "bullets",
                heading: "At a Glance",
                items: [
                    { label: "Modular retail concept for cruise ship interiors: scalable across the NCL fleet", anchor: "the-brief" },
                    { label: "Long, narrow marine retail spaces designed for passenger flow and sea motion", anchor: "naval-design" },
                    { label: "Full design journey: loose hand sketches through to high-fidelity 3D video walkthroughs", anchor: "the-process" },
                    { label: "Technology retail section with product-inspired display concepts", anchor: "the-spaces" },
                    { label: "3D modelling and video production skills developed alongside senior designer Jon Webb", anchor: "the-team" },
                    { label: "Engineering crossover: airport-grade fixture security translated to marine environment", anchor: "naval-design" }
                ]
            },
            {
                type: "gallery",
                id: "the-brief",
                heading: "The Brief",
                images: [
                    "Portfolio-images_webp/Norwegian Cruise Lines/Norwegian Cruise Line Interior Experiential Design Concept (1).webp",
                    "Portfolio-images_webp/Norwegian Cruise Lines/Norwegian Cruise Line Interior Experiential Design Concept (2).webp",
                    "Portfolio-images_webp/Norwegian Cruise Lines/Norwegian Cruise Line Interior Experiential Design Concept (3).webp",
                    "Portfolio-images_webp/Norwegian Cruise Lines/Norwegian Cruise Line Interior Experiential Design Concept (4).webp"
                ]
            },
            {
                type: "text",
                body: "Norwegian Cruise Lines came to Wanda Creative for a retail concept that could work across their fleet: a modular system of interior retail spaces that could be adapted and deployed on different ships as the opportunity arose. For me, it was a project that connected directly to something I have cared about since university: naval architecture and marine engineering. Designing for a ship is a specific and wonderful kind of problem."
            },
            {
                type: "text",
                id: "naval-design",
                heading: "Naval Design",
                body: "Cruise ship retail spaces are long and narrow: a very different geometry to the open-plan airport environments I was most familiar with. Masterplanning a corridor-like retail space requires a different spatial logic: the passenger journey is more linear, product discovery has to happen within a tighter envelope, and every display unit has to be engineered to handle the gentle motion of a ship at sea. That last requirement turned out to be less unfamiliar than it sounds. Years of designing for airports: where fixtures are bolted down for security and safety: had already given us a rigorous approach to anchorage and structural detailing. The marine environment demanded the same discipline, applied slightly differently."
            },
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Norwegian Cruise Lines/Norwegian Cruise Line Interior Experiential Design Concept (5).webp",
                    "Portfolio-images_webp/Norwegian Cruise Lines/Norwegian Cruise Line Interior Experiential Design Concept (6).webp",
                    "Portfolio-images_webp/Norwegian Cruise Lines/Norwegian Cruise Line Interior Experiential Design Concept (7).webp",
                    "Portfolio-images_webp/Norwegian Cruise Lines/Norwegian Cruise Line Interior Experiential Design Concept (8).webp"
                ]
            },
            {
                type: "text",
                id: "the-spaces",
                heading: "The Spaces",
                body: "The brief gave us genuine creative freedom across a range of different retail environments on board. A technology section was among the most interesting to work on: we drew on the products themselves for display inspiration, letting the character of the technology category shape the visual language of the space rather than applying a generic retail aesthetic over the top of it. The result was something that felt specific and considered rather than generic."
            },
            {
                type: "text",
                id: "the-process",
                heading: "The Process",
                body: "This project gave me one of the most complete design journeys I have experienced on a single commission. It began with loose, exploratory hand sketches: deliberately rough, full of energy: which the client responded to warmly. From there we moved through Photoshop compositing, texturing and colour development, then into full 3D modelling and finally video walkthrough production. Each stage built on the last, and the discipline of maintaining the spirit of the original sketches all the way through to photorealistic renders is something I learned to value enormously on this project."
            },
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Norwegian Cruise Lines/Norwegian Cruise Line Interior Experiential Design Concept (9).webp",
                    "Portfolio-images_webp/Norwegian Cruise Lines/Norwegian Cruise Line Interior Experiential Design Concept (10).webp",
                    "Portfolio-images_webp/Norwegian Cruise Lines/Norwegian Cruise Line Interior Experiential Design Concept (11).webp",
                    "Portfolio-images_webp/Norwegian Cruise Lines/Norwegian Cruise Line Interior Experiential Design Concept (12).webp"
                ]
            },
            {
                type: "text",
                id: "the-team",
                heading: "The Team",
                body: "Much of the 3D modelling and video production on this project was led by <span class='highlight'>Jon Webb</span>, a senior designer whose technical skill and generosity as a collaborator made this one of the most educational projects of my time at Wanda Creative. Watching Jon work: and being given the space to learn alongside him: accelerated my understanding of 3D production and video visualisation in a way that classroom learning never could. I am grateful for his mentorship and for the quality of work the two of us were able to produce together."
            },
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Norwegian Cruise Lines/Norwegian Cruise Line Interior Experiential Design Concept (14).webp",
                    "Portfolio-images_webp/Norwegian Cruise Lines/Norwegian Cruise Line Interior Experiential Design Concept (15).webp"
                ]
            }

        ]
    },

    {
        id: 13,
        type: "architecture",
        lat: 57.1497,
        lon: -2.0943,
        status: "built",
        title: "World Duty Free",
        subtitle: "Travel Retail Fitouts, UK Airports",
        airport: "Heathrow, Belfast & Aberdeen, UK",
        content: [
            {
                type: "bullets",
                heading: "At a Glance",
                items: [
                    { label: "Long-term client relationship across multiple UK airport sites", anchor: "the-brief" },
                    { label: "High-contrast black, white and bright lighting design language rolled out across formats", anchor: "the-design-language" },
                    { label: "Masterplanning of passenger flow: wide walkways, clear sightlines, no overcrowding", anchor: "masterplanning" },
                    { label: "World of Whiskey and Gin Lounge: warm bespoke environments within the broader retail estate", anchor: "bespoke-spaces" },
                    { label: "Modular brand environments that gave personality without overwhelming the overall store", anchor: "bespoke-spaces" },
                    { label: "New store fits built in the late 2010s and early 2020s: still open today", anchor: "the-brief" }
                ]
            },
            {
                type: "gallery",
                id: "the-brief",
                heading: "The Brief",
                images: [
                    "Portfolio-images_webp/World Duty Free/WDF London with psd people/View 1.webp",
                    "Portfolio-images_webp/World Duty Free/WDF London with psd people/View 2.webp",
                    "Portfolio-images_webp/World Duty Free/WDF London with psd people/View 3.webp",
                    "Portfolio-images_webp/World Duty Free/WDF London with psd people/View 5.webp"
                ]
            },
            {
                type: "text",
                body: "World Duty Free was one of Wanda Creative's most significant ongoing client relationships, and I was fortunate to work across many of the projects that came through. These were full new store fits: the old interiors stripped out and rebuilt from scratch: across airports in Heathrow, Belfast and Aberdeen, completed in the late 2010s and early 2020s. You can still visit them today."
            },
            {
                type: "text",
                id: "the-design-language",
                heading: "The Design Language",
                body: "World Duty Free had an established design language: high-contrast black and white floor tiles, crisp bright lighting, stark white surfaces, a modern and sharp retail aesthetic. My role was not to reinvent it but to help roll it out intelligently across spaces that were each different in shape, scale, and configuration. That kind of work: adapting a fixed design system to endlessly variable real-world conditions: teaches you a great deal about what makes a concept truly robust."
            },
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/World Duty Free/WDF Belfast/WDF Travel Retail Belfast (1).webp",
                    "Portfolio-images_webp/World Duty Free/WDF Belfast/WDF Travel Retail Belfast (2).webp",
                    "Portfolio-images_webp/World Duty Free/WDF Belfast/WDF Travel Retail Belfast (3).webp",
                    "Portfolio-images_webp/World Duty Free/WDF Belfast/WDF Travel Retail Belfast (4).webp"
                ]
            },
            {
                type: "text",
                id: "masterplanning",
                heading: "Masterplanning",
                body: "A large part of my contribution was spatial masterplanning: working out how passengers should move through each store given its unique geometry and position within the terminal. The guiding principle was clarity without sterility. Walkways were kept wide and unobstructed, the high-contrast floor pattern giving travellers an intuitive read of where to go even in a hurry. We used pattern interrupts and product moments to create interest and encourage dwell, but we never placed anything that blocked sightlines or made the exit feel uncertain. A passenger who needed to catch a flight could always see their way through. A passenger with time could explore and discover."
            },
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/World Duty Free/WDF Aberdeen/World Dutry Free Travel Retail Design Aberdeen (1).webp",
                    "Portfolio-images_webp/World Duty Free/WDF Aberdeen/World Dutry Free Travel Retail Design Aberdeen (2).webp",
                    "Portfolio-images_webp/World Duty Free/WDF Aberdeen/World Dutry Free Travel Retail Design Aberdeen (3).webp",
                    "Portfolio-images_webp/World Duty Free/WDF Aberdeen/World Dutry Free Travel Retail Design Aberdeen (4).webp"
                ]
            },
            {
                type: "text",
                id: "bespoke-spaces",
                heading: "Bespoke Spaces",
                body: "Within the broader retail environment, certain categories earned something more considered. The World of Whiskey concept: developed by my predecessors at Wanda Creative and already standing the test of time: brought warm natural timbers and rich, tactile materials into sharp contrast with the crisp white retail world surrounding it. The effect was powerful precisely because of that contrast. The Gin Lounge carried a similar sensibility. These spaces worked because they felt genuinely different without breaking the coherence of the overall store."
            },
            {
                type: "image",
                src: "Portfolio-images_webp/World Duty Free/WDF HEathrow Christian Dior/World Duty Free Christian Dior Heathrow Design Concept.webp",
                caption: "World Duty Free x Christian Dior: Heathrow concept"
            },
            {
                type: "text",
                heading: "A Stage for Brands",
                body: "One of the things I am most proud of from this body of work is a design philosophy rather than a single decision. The World Duty Free stores were deliberately restrained: confident in their own aesthetic without trying to compete with the brands they housed. That neutrality was a considered choice. When the environment itself is calm and clear, brands can express their own personality through packaging, displays and graphics without the whole thing becoming overwhelming. I saw it encourage better packaging design and more thoughtful visual merchandising from the brands themselves. The space created the conditions for others to do their best work."
            },
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/World Duty Free/WDF London with psd people/View 6.webp",
                    "Portfolio-images_webp/World Duty Free/WDF London with psd people/View 7.webp",
                    "Portfolio-images_webp/World Duty Free/WDF London with psd people/View 9.webp",
                    "Portfolio-images_webp/World Duty Free/WDF London with psd people/View 10.webp"
                ]
            }

        ]
    },

    {
        id: 14,
        type: "architecture",
        lat: 47.4581,
        lon: 8.5550,
        status: "built",
        title: "Timebox: Dufry Zurich",
        subtitle: "Watch and Jewellery Retail Concept, Zurich Airport",
        airport: "Zurich Airport, Switzerland",
        content: [
            {
                type: "bullets",
                heading: "At a Glance",
                items: [
                    { label: "First-of-kind retail concept for Dufry: solo concept lead role", anchor: "the-opportunity" },
                    { label: "Designed specifically for a younger, aspirational watch audience", anchor: "designing-for-a-new-audience" },
                    { label: "Teal colour palette: distinctive, rare and subtly maritime", anchor: "colour-materials" },
                    { label: "Fingerprint ceiling in LED strip lighting: the concept of uniqueness, quietly expressed", anchor: "the-concept" },
                    { label: "Topographic and fingerprint line graphics printed on feature walls", anchor: "colour-materials" },
                    { label: "Manufacturing drawings used the designer's actual fingerprint, unaltered", anchor: "the-fingerprint" }
                ]
            },
            {
                type: "gallery",
                id: "the-opportunity",
                heading: "The Opportunity",
                images: [
                    "Portfolio-images_webp/Timebox Zurich/Dufry Timebox Travel Retail Watch Store Interior Design Render 1.webp",
                    "Portfolio-images_webp/Timebox Zurich/Dufry Timebox Travel Retail Watch Store Interior Design Render 2.webp",
                    "Portfolio-images_webp/Timebox Zurich/Dufry Timebox Travel Retail Watch Store Interior Design Render 3.webp",
                    "Portfolio-images_webp/Timebox Zurich/Dufry Timebox Travel Retail Watch Store Interior Design Render 4.webp"
                ]
            },
            {
                type: "text",
                body: "Timebox at Zurich Airport was a genuinely personal project. While it was very much a team effort: and I am grateful for every person at Wanda Creative who shaped and improved it: this was the first concept where I took a leading role as the originating designer. The colour palette, the material choices, and the central idea behind the store all came from me, developed in close collaboration with an exceptional team who helped bring it to life."
            },
            {
                type: "text",
                id: "designing-for-a-new-audience",
                heading: "Designing for a New Audience",
                body: "The brief had a specific audience in mind: younger people. Not the traditional watch buyer browsing heavy, gold-trimmed cabinets in a darkened boutique, but a traveller in their twenties or thirties discovering that a well-made timepiece could be both attainable and aspirational. Watches as part of an active, mobile, curious lifestyle rather than as inherited jewellery. That distinction shaped every decision made in the store."
            },
            {
                type: "text",
                body: "Traditional high-end watch retail tends toward weight and enclosure: dark timbers, polished bronze, low light, hushed atmosphere. All of it signals exclusivity to a generation that already knows it belongs there. This store was designed for a generation that is still forming its relationship with quality and craft. The response was the opposite: bright, open, full of glass and clear display cases, light flooding every surface. The message was one of welcome and accessibility rather than gatekeeping."
            },
            {
                type: "gallery",
                id: "the-concept",
                heading: "The Concept",
                images: [
                    "Portfolio-images_webp/Timebox Zurich/Dufry Watch & Jewellery Collection - Sketch Wallbay 1.webp",
                    "Portfolio-images_webp/Timebox Zurich/Dufry Watch & Jewellery Collection - Sketch Wallbay 4.webp",
                    "Portfolio-images_webp/Timebox Zurich/Dufry Watch & Jewellery Collection - Sketch Wallbay 5.webp",
                    "Portfolio-images_webp/Timebox Zurich/Dufry Watch & Jewellery Collection - Sketch Internal preliminary view.webp"
                ]
            },
            {
                type: "text",
                body: "The concept started with a simple observation about watches. They are mass produced objects that become deeply personal. A metal timepiece ages with its owner, develops a patina, accumulates scratches and memories. The watch you have worn for ten years is not the same object it was when you bought it. It has become yours in a way that almost nothing else you own does. The store needed to speak to that idea of personal uniqueness: quietly, without ever stating it. The answer was a fingerprint. A ceiling installation of LED strip lighting traced in the pattern of a fingerprint: a subtle, abstract gesture that most customers would read as an interesting lighting feature without ever consciously registering its meaning."
            },
            {
                type: "image",
                src: "Portfolio-images_webp/Timebox Zurich/Dufry Zurich Timebox Watch Store Travel Retail Design Plan GA.webp",
                caption: "General arrangement plan: Timebox Zurich"
            },
            {
                type: "text",
                id: "colour-materials",
                heading: "Colour & Materials",
                body: "For the colour palette I chose teal: a colour that at the time was genuinely rare in retail environments. It was distinctive without being aggressive, and it carried a secondary resonance that felt right for the category. Many of the world's most celebrated watches are built for water: diving, sailing, maritime exploration. Combined with topographic and fingerprint line graphics printed across the feature walls, the teal gave the whole space a quality of depth, as though you were looking at something through water."
            },
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Timebox Zurich/small_1_timebox_zrh_feb_b008_0005.webp",
                    "Portfolio-images_webp/Timebox Zurich/small_2_timebox_zrh_feb_b008_0002.webp",
                    "Portfolio-images_webp/Timebox Zurich/small_3_timebox_zrh_feb_b008_0003.webp",
                    "Portfolio-images_webp/Timebox Zurich/small_4_timebox_zrh_feb_b008_0006.webp"
                ]
            },
            {
                type: "text",
                id: "the-fingerprint",
                heading: "The Fingerprint",
                body: "There is one detail about this project that I have never spoken about publicly. When I produced the technical drawings for the fingerprint ceiling installation and the wall graphics, I traced my own finger to generate the pattern. I expected the manufacturers to substitute a generic print or simplify the geometry. They did not. My actual fingerprint went into the manufacturing drawings, unaltered, and was built exactly as drawn. Somewhere in Zurich Airport, in the ceiling of that store, is something that is literally mine. I find that quietly wonderful."
            },
            {
                type: "text",
                id: "the-build",
                heading: "The Build",
                body: "Looking back, I think there was something quietly wise in the decision to give this particular brief to a young designer. The brand team and the company were investing in a concept aimed at a younger audience, and they chose to back a younger design sensibility to match. I was grateful for that trust at the time, and I appreciate it even more now. It produced something that an older, more experienced hand might not have arrived at: and I think the space is better for it."
            },
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Timebox Zurich/timeboxzurichairporttaxfree18.webp",
                    "Portfolio-images_webp/Timebox Zurich/timeboxzurichairporttaxfree19.webp",
                    "Portfolio-images_webp/Timebox Zurich/timeboxzurichairporttaxfree23.webp",
                    "Portfolio-images_webp/Timebox Zurich/timeboxzurichairporttaxfree26.webp"
                ]
            }

        ]
    },

    {
        id: 15,
        type: "architecture",
        lat: 3.1412,
        lon: 101.6865,
        status: "concept",
        title: "Havaianas",
        airport: "Kuala Lumpur International Airport",
        content: [
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Havianas/Havaianas Design Concept sketch (1).webp",
                    "Portfolio-images_webp/Havianas/Havaianas Design Concept sketch (2).webp",
                    "Portfolio-images_webp/Havianas/Havaianas Design Concept sketch (3).webp",
                    "Portfolio-images_webp/Havianas/Havaianas Design Concept sketch (4).webp"
                ]
            },
            {
                type: "text",
                body: "A vibrant retail concept for Havaianas: the Brazilian flip-flop brand whose colour and energy are as much a product as the footwear itself. The design translates the brand's exuberant DNA into a travel retail format without losing its essential playfulness."
            },
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Havianas/Havaianas Design Concept sketch (5).webp",
                    "Portfolio-images_webp/Havianas/Havaianas Design Concept sketch (6).webp",
                    "Portfolio-images_webp/Havianas/Havaianas Design Concept sketch (7).webp",
                    "Portfolio-images_webp/Havianas/Havaianas Design Concept sketch (8).webp"
                ]
            },
            {
                type: "bullets",
                heading: "Approach",
                items: [
                    "Brand environment concept developed through hand sketch",
                    "Colour system and product display strategy",
                    "Compact footprint optimisation for transit retail",
                    "Brand compliance and rollout documentation"
                ]
            }
        ]
    },

    {
        id: 16,
        type: "architecture",
        lat: 25.2550,
        lon: 51.6100,
        status: "concept",
        title: "Ray-Ban: QDF Sunglasses Concept",
        airport: "Hamad International Airport, Doha",
        content: [
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Ray Ban Sunglasses Concept/Web Optimised/Interior walkway view.webp",
                    "Portfolio-images_webp/Ray Ban Sunglasses Concept/Web Optimised/SUNGLASSES VISUAL 1 c.webp",
                    "Portfolio-images_webp/Ray Ban Sunglasses Concept/Web Optimised/SUNGLASSES VISUAL 3 c.webp",
                    "Portfolio-images_webp/Ray Ban Sunglasses Concept/Web Optimised/Wallbay All.webp"
                ]
            },
            {
                type: "text",
                body: "A travel retail concept for Ray-Ban: exploring how one of the world's most iconic eyewear brands can create a standalone retail moment within the transient, high-footfall environment of international departure halls. Developed within the Qatar Duty Free estate."
            },
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Ray Ban Sunglasses Concept/Web Optimised/Gondola sunglasses test HPP5 Colour.webp",
                    "Portfolio-images_webp/Ray Ban Sunglasses Concept/Web Optimised/HPP 1300.webp",
                    "Portfolio-images_webp/Ray Ban Sunglasses Concept/Web Optimised/HPP DOUBLE 1300.webp",
                    "Portfolio-images_webp/Ray Ban Sunglasses Concept/Web Optimised/Cash Desk Gondola Angle 2.webp"
                ]
            },
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Ray Ban Sunglasses Concept/Web Optimised/QDF Fashion 1.webp",
                    "Portfolio-images_webp/Ray Ban Sunglasses Concept/Web Optimised/QDF Fashion 2.webp",
                    "Portfolio-images_webp/Ray Ban Sunglasses Concept/Web Optimised/QDF Fashion 3.webp",
                    "Portfolio-images_webp/Ray Ban Sunglasses Concept/Web Optimised/QDF Fashion 4.webp"
                ]
            },
            {
                type: "bullets",
                heading: "Concept Scope",
                items: [
                    "Retail unit concept design and spatial narrative",
                    "Gondola, HPP and wallbay display system design",
                    "Brand environment adaptation for travel retail",
                    "Visual merchandising and lighting concept"
                ]
            }
        ]
    },

    {
        id: 17,
        type: "architecture",
        lat: -36.8485,
        lon: 174.7633,
        status: "concept",
        title: "Superyacht & Boat Design",
        airport: "New Zealand & Australia",
        content: [
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Superyacht and boat/evolute header.webp",
                    "Portfolio-images_webp/Superyacht and boat/Agility Aerial Render small.webp",
                    "Portfolio-images_webp/Superyacht and boat/evolute detail renders.webp",
                    "Portfolio-images_webp/Superyacht and boat/Final render m5odel.webp"
                ]
            },
            {
                type: "text",
                body: "Industrial and interior design for superyacht and marine environments: spaces that must perform at the absolute pinnacle of material quality, craftsmanship, and spatial engineering. Every surface must withstand the marine environment while delivering an experience indistinguishable from the finest private residences."
            },
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Superyacht and boat/evolute modelling.webp",
                    "Portfolio-images_webp/Superyacht and boat/evolute icebergs.webp",
                    "Portfolio-images_webp/Superyacht and boat/studio render1.webp",
                    "Portfolio-images_webp/Superyacht and boat/studio render2.webp"
                ]
            },
            {
                type: "image",
                src: "Portfolio-images_webp/Superyacht and boat/Hamish Baxter_Boats project_Industrial Design Hons.webp",
                caption: "Industrial Design Honours: boat design project"
            },
            {
                type: "bullets",
                heading: "Specialisations",
                items: [
                    "Superyacht exterior form and industrial design",
                    "Marine-grade material specification and compliance",
                    "Custom joinery and bespoke furniture coordination",
                    "3D modelling, visualisation and presentation"
                ]
            }
        ]
    },

    // ─────────────────────────────────────────────────────────
    // DIGITAL PROJECTS: UX/UI Panel
    // ─────────────────────────────────────────────────────────

    {
        id: 101,
        type: "digital",
        lat: 0,
        lon: 0,
        status: "built",
        title: "Smartly",
        airport: "New Zealand",
        content: [
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Smartly/Smartly web Iphone macbook.webp",
                    "Portfolio-images_webp/Smartly/Smartly no backg web dashboard landing page.webp",
                    "Portfolio-images_webp/Smartly/Smartly web no backg mobile 1.webp",
                    "Portfolio-images_webp/Smartly/Smartly web no backg mobile2.webp"
                ]
            },
            {
                type: "text",
                body: "UX/UI design for Smartly: a payroll and HR platform serving thousands of New Zealand businesses. The challenge was bringing clarity and warmth to a product category historically associated with complexity and anxiety, making compliance feel genuinely manageable."
            },
            {
                type: "image",
                src: "Portfolio-images_webp/Smartly/Smartly web Iphone macbook s.webp",
                caption: "Responsive design: mobile and desktop views"
            },
            {
                type: "bullets",
                heading: "Design Focus",
                items: [
                    "End-to-end product UX audit and redesign strategy",
                    "Dashboard and reporting interface design",
                    "Onboarding flow simplification",
                    "Accessible, WCAG-compliant component system"
                ]
            }
        ]
    },

    {
        id: 102,
        type: "digital",
        lat: 0,
        lon: 0,
        status: "concept",
        title: "Polhill App",
        airport: "Wellington, New Zealand",
        content: [
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Polhill App/polhill1.webp",
                    "Portfolio-images_webp/Polhill App/polhill2.webp",
                    "Portfolio-images_webp/Polhill App/Polhill3.webp",
                    "Portfolio-images_webp/Polhill App/Polhill4.webp"
                ]
            },
            {
                type: "text",
                body: "Mobile application design for Polhill Reserve: a community environmental initiative connecting Wellington residents with local conservation efforts. The product needed to feel alive with the energy of the outdoor environment it serves, while remaining functional and accessible for a diverse user base."
            },
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Polhill App/Polhill5.webp",
                    "Portfolio-images_webp/Polhill App/Polhill6.webp",
                    "Portfolio-images_webp/Polhill App/Polhill7.webp",
                    "Portfolio-images_webp/Polhill App/Polhill8.webp"
                ]
            },
            {
                type: "bullets",
                heading: "Key Features Designed",
                items: [
                    "Trail navigation and mapping interface",
                    "Community contribution and reporting flows",
                    "Volunteer coordination and event management",
                    "Environmental impact tracking and visualisation"
                ]
            }
        ]
    },

    {
        id: 103,
        type: "digital",
        lat: 0,
        lon: 0,
        status: "concept",
        title: "Spaceman Coffee",
        airport: "Auckland, New Zealand",
        content: [
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Spaceman Coffee/Spaceman iPhone XR Isometric UI.webp",
                    "Portfolio-images_webp/Spaceman Coffee/Spaceman Light iPhone XR Isometric UI.webp",
                    "Portfolio-images_webp/Spaceman Coffee/Iphone Hand Blend Light.webp",
                    "Portfolio-images_webp/Spaceman Coffee/Iphone Hand Dark Roast.webp"
                ]
            },
            {
                type: "text",
                body: "Brand and digital design concept for Spaceman Coffee: an Auckland specialty café with a character rooted in curiosity, precision, and a slightly otherworldly commitment to the craft of espresso. The digital touchpoints needed to match the brand's sense of playful seriousness."
            },
            {
                type: "bullets",
                heading: "Concept Scope",
                items: [
                    "Brand identity system and visual language",
                    "iOS app UX and visual design (light and dark modes)",
                    "Menu and ordering interface concept",
                    "Social and digital content framework"
                ]
            }
        ]
    },

    {
        id: 104,
        type: "digital",
        lat: 0,
        lon: 0,
        status: "built",
        title: "Fuelmizas",
        airport: "Digital / Web",
        content: [
            {
                type: "image",
                src: "Portfolio-images_webp/Fuelmizas/Macbook Fuelmizas UX Web.webp",
                caption: "Fuelmizas: web UX concept"
            },
            {
                type: "text",
                body: "UX and web design concept for Fuelmizas: exploring the convergence of fuel culture, performance aesthetics, and premium digital retail. The project asked what a motorsport-inspired digital brand experience looks like when stripped of cliché and rebuilt with precision."
            },
            {
                type: "bullets",
                heading: "Concept Areas",
                items: [
                    "Brand identity and web concept",
                    "UX and visual design",
                    "Customer journey mapping",
                    "Operator presentation and feasibility"
                ]
            }
        ]
    },

    {
        id: 105,
        type: "digital",
        lat: 0,
        lon: 0,
        status: "built",
        title: "Zespri",
        airport: "New Zealand: Global",
        content: [
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Zespri/Mockups/Canopy Homepage Mockup Macbook Pro.webp",
                    "Portfolio-images_webp/Zespri/Mockups/Mobile Mockup Zespri Home.webp",
                    "Portfolio-images_webp/Zespri/Mockups/Mobile Mockup Zespri Event.webp",
                    "Portfolio-images_webp/Zespri/Mockups/Mobile Mockup Zespri Guided Journey 101.webp"
                ]
            },
            {
                type: "text",
                body: "Digital experience design for Zespri: the world's leading kiwifruit marketer. The work explored how a global agri-food brand with deep New Zealand roots could communicate its story of provenance, quality, and nutrition across digital touchpoints in international markets."
            },
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Zespri/Mockups/Mobile Mockup Zespri Events.webp",
                    "Portfolio-images_webp/Zespri/Mockups/Mobile Mockup Zespri Search.webp",
                    "Portfolio-images_webp/Zespri/Mockups/Mobile Mockup Zespri seasonal spring.webp"
                ]
            },
            {
                type: "bullets",
                heading: "Deliverables",
                items: [
                    "Web and mobile UX design across core journeys",
                    "Seasonal content and campaign framework",
                    "Events and guided journey interfaces",
                    "Global market adaptation and localisation strategy"
                ]
            }
        ]
    },

];

// ─────────────────────────────────────────────────────────
// Categorise for app consumption
// ─────────────────────────────────────────────────────────
const globeProjects   = portfolioData.filter(p => p.type === "architecture");
const digitalProjects = portfolioData.filter(p => p.type === "digital");
const pageData        = portfolioData.filter(p => p.type === "page");
