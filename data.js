// =============================================================
// PORTFOLIO DATA — Hamish Baxter
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
                caption: "Spirit of New Zealand — Leadership at sea"
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
                body: "I do not view Artificial Intelligence merely as a rendering tool — I view it as a <span class='highlight'>computational partner</span>. By integrating AI-driven generative tools into the early phases of spatial strategy, my teams can iterate through hundreds of conceptual retail footprints in the time it previously took to draft three."
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
    // ARCHITECTURE PROJECTS — Globe Pins
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
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Harrods/Harrods/192722-002©Greshoff(H).webp",
                    "Portfolio-images_webp/Harrods/Harrods/192722-008©Greshoff(H).webp",
                    "Portfolio-images_webp/Harrods/Harrods/192722-011©Greshoff(H).webp",
                    "Portfolio-images_webp/Harrods/Harrods/192722-013©Greshoff(H).webp"
                ]
            },
            {
                type: "text",
                body: "Few briefs carry the weight of Harrods. Working on the Knightsbridge flagship concepts and the London Heathrow T3, T4, and T5 airport retail environments as part of the team at <span class='highlight'>Wanda Creative</span> in London was one of the most demanding and rewarding experiences of my early career — a masterclass in what happens when luxury, engineering, and genuine artistry are asked to coexist."
            },
            {
                type: "text",
                body: "Airport retail operates under constraints that high street design never faces. Every material we specified had to meet stringent fire resistance, commercial durability, and security standards — bomb-proof glazing, commercial-grade fixings, internationally sourced finishes that could survive the relentless footfall of one of the world's busiest transit hubs. The extraordinary thing is that none of this shows. The finished spaces feel precisely as they should: effortlessly luxurious, quietly exceptional."
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
                body: "My contribution spanned both the creative and the technical. I drew floor plans, developed lighting specifications, built 3D models in Cinema 4D, and produced renders and presentation visuals — including early experiments with machine learning tools to accelerate the visualisation process. I worked closely with manufacturers and international suppliers, developing an understanding of materials science and global procurement that has stayed with me ever since."
            },
            {
                type: "image",
                src: "Portfolio-images_webp/Harrods/Harrods/Harrods LHR T3 Concept Design (1).webp",
                caption: "Harrods LHR T3 — concept design development"
            },
            {
                type: "text",
                body: "Some of the most formative moments happened around the large angled drafting table at Wanda Creative, working alongside <span class='highlight'>Roger Cook</span> — one of the founding directors and a master of hand-drawn architectural interior renders. Watching Roger work, and learning to use those tools myself, gave me a discipline and spatial intuition that no software can replicate. I was also fortunate to learn under <span class='highlight'>Michael Foley</span>, co-founder and CEO, and <span class='highlight'>Lisa Brown</span>, General Manager — people whose standards, generosity, and belief in young designers shaped everything I do."
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
                body: "One of the deepest lessons this project gave me was one I didn't expect: a foundation in user experience design. Thinking about how a traveller — tired, time-conscious, carrying luggage — moves through a luxury retail space, remains aware of their departure gate, and still finds the space and calm to browse and discover, is fundamentally a UX problem. The physical and digital design challenges are the same. I've carried that insight into every digital product I've worked on since."
            },
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Harrods/Harrods T3/192722-009©Greshoff(H).webp",
                    "Portfolio-images_webp/Harrods/Harrods T3/192722-026©Greshoff(H).webp",
                    "Portfolio-images_webp/Harrods/Harrods T3/192722-059©Greshoff(H).webp",
                    "Portfolio-images_webp/Harrods/Harrods T3/192722-071©Greshoff(H).webp"
                ]
            },
            {
                type: "bullets",
                heading: "Skills & Scope",
                items: [
                    "Architectural floor plans, technical drawings and lighting specification",
                    "3D modelling in Cinema 4D and 3ds Max; rendering and visualisation",
                    "Hand sketching and Photoshop compositing on large-format drawings",
                    "International material sourcing and supplier coordination",
                    "Aviation-grade technical specification — fire, security and durability compliance",
                    "Early machine learning tools for visual development and ideation"
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
                    "Full retail masterplan across multiple terminal zones at Hamad International Airport",
                    "Over a year of design development in the lead-up to the Qatar 2022 FIFA World Cup",
                    "Spaces designed for beauty, fragrance, alcohol, chocolate, food gifts and fashion",
                    "Golden Eagle installation as centrepiece of the Great Hall alcohol tower",
                    "Sustainable flooring: recycled stone composite achieving the look of marble at reduced cost and environmental impact",
                    "Cultural pattern work developed in collaboration with local Qatari artists"
                ]
            },
            {
                type: "gallery",
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
            },
            {
                type: "bullets",
                heading: "Skills Developed",
                items: [
                    "Large-scale retail masterplanning and passenger flow strategy",
                    "Sustainable material research, specification and client advocacy",
                    "Spatial design across multiple retail categories simultaneously",
                    "Cultural sensitivity and collaboration with local artists and consultants",
                    "VR walkthrough production for client presentation and approval",
                    "Managing design delivery under major event deadlines"
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
        title: "Qatar Duty Free — Car Podium",
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
                body: "A specialist podium installation for high-value automotive display within the Qatar Duty Free estate. The brief required a theatrical, gallery-quality setting that positions luxury vehicles as objets d'art rather than commercial inventory — a true statement moment within the terminal."
            },
            {
                type: "image",
                src: "Portfolio-images_webp/Qatar Duty Free  Car Podium/Podiumm Developed  Camera 2 No Background.webp",
                caption: "Podium structure — isolated camera 2 view"
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
                body: "The SN1000 project is a landmark retail installation within the Qatar Duty Free estate — a flagship space designed to anchor the concourse and create a defining moment of brand identity for international travellers. The project spanned from concept sketches through to VR walkthroughs and construction documentation."
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
                caption: "SN1000 — developed concept render"
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
        airport: "Kuala Lumpur International Airport",
        content: [
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Dufry Malaysia/Dufry Malaysia Travel Retail Store  (1).webp",
                    "Portfolio-images_webp/Dufry Malaysia/Dufry Malaysia Travel Retail Store  (2).webp",
                    "Portfolio-images_webp/Dufry Malaysia/Dufry Malaysia Travel Retail Store  (3).webp",
                    "Portfolio-images_webp/Dufry Malaysia/Dufry Malaysia Travel Retail Store  (5).webp"
                ]
            },
            {
                type: "text",
                body: "A travel retail store environment for Dufry — the world's largest travel retailer — within one of Southeast Asia's premier aviation gateways. The design had to operate at global brand standard while responding to the local cultural context of Kuala Lumpur International."
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
                type: "image",
                src: "Portfolio-images_webp/Dufry Malaysia/CIMG2466.webp",
                caption: "On-site photography during construction phase"
            },
            {
                type: "bullets",
                heading: "Scope of Work",
                items: [
                    "Store interior architecture and fitout design",
                    "Gondola and fixture layout optimised for conversion",
                    "Wayfinding and category zoning strategy",
                    "Coordination with Dufry global brand standards"
                ]
            },
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Dufry Malaysia/Dufry Malaysia Travel Retail Store  (10).webp",
                    "Portfolio-images_webp/Dufry Malaysia/Dufry Malaysia Travel Retail Store  (11).webp",
                    "Portfolio-images_webp/Dufry Malaysia/Dufry Malaysia Travel Retail Store  (12).webp",
                    "Portfolio-images_webp/Dufry Malaysia/Dufry Malaysia Travel Retail Store  (13).webp"
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
                caption: "Developed concept — experiential zone detail"
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
        airport: "Heathrow, Gatwick & Paddington, UK",
        content: [
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/WHSmith/Web Optimised/Render WHS T4SWC.webp",
                    "Portfolio-images_webp/WHSmith/Web Optimised/Render WHS T4SWC (1).webp",
                    "Portfolio-images_webp/WHSmith/Web Optimised/Render WHS T4SWC (2).webp",
                    "Portfolio-images_webp/WHSmith/Web Optimised/Render 3 T4SWC.webp"
                ]
            },
            {
                type: "text",
                body: "A multi-site retail design programme for one of the UK's most established travel retail brands — bringing clarity, warmth, and commercial efficiency to formats spanning Heathrow T3, T4, Gatwick South, and Paddington Station."
            },
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/WHSmith/Web Optimised/WHSmith LHR T3 Design Concept (1).webp",
                    "Portfolio-images_webp/WHSmith/Web Optimised/WHSmith LHR T3 Design Concept (2).webp",
                    "Portfolio-images_webp/WHSmith/Web Optimised/WHSmith LHR T3 Design Concept (3).webp",
                    "Portfolio-images_webp/WHSmith/Web Optimised/WHSmith LHR T3 Design Concept (4).webp"
                ]
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
                type: "gallery",
                images: [
                    "Portfolio-images_webp/WHSmith/Web Optimised/WHSmith Paddington Design Concept (1).webp",
                    "Portfolio-images_webp/WHSmith/Web Optimised/WHSmith Paddington Design Concept (2).webp",
                    "Portfolio-images_webp/WHSmith/Web Optimised/WHSmith Paddington Design Concept (3).webp",
                    "Portfolio-images_webp/WHSmith/Web Optimised/WHSmith Paddington Design Concept (4).webp"
                ]
            },
            {
                type: "bullets",
                heading: "Key Outcomes",
                items: [
                    "Modernised fixture system adaptable across store formats",
                    "Improved category legibility and product discoverability",
                    "Rollout-ready design documentation across 4 sites",
                    "Heathrow T3, T4, Gatwick South, and Paddington Station"
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
                body: "A kiosk and concession redesign for the Millies Cookies brand — bringing warmth, appetite appeal, and operational clarity to one of the UK's most recognisable baked goods brands. The project included both built outcomes and concept design options for the counter display system."
            },
            {
                type: "image",
                src: "Portfolio-images_webp/Millies Cookies/counter display Opt3.webp",
                caption: "Counter display system — Option 3"
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
        airport: "Baker Street, London Underground",
        content: [
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/COOP London/13 Coop_Baker Street Render Entrance View.webp",
                    "Portfolio-images_webp/COOP London/14 Coop_Baker Street Render Shopfront View.webp",
                    "Portfolio-images_webp/COOP London/16 Coop_Baker Street Render Straight View.webp",
                    "Portfolio-images_webp/COOP London/17 Coop_Baker Street Render Bakery Coffee Counter.webp"
                ]
            },
            {
                type: "text",
                body: "A convenience retail environment for the Co-op within London's underground transit estate — demonstrating that community-minded grocery retail can hold its own in premium concourse environments through smart spatial design and honest material use."
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
                type: "gallery",
                images: [
                    "Portfolio-images_webp/COOP London/COOP-London-food-retail-interior-design-cgi-render (1).webp",
                    "Portfolio-images_webp/COOP London/COOP-London-food-retail-interior-design-cgi-render (3).webp",
                    "Portfolio-images_webp/COOP London/COOP-London-food-retail-interior-design-cgi-render (4).webp",
                    "Portfolio-images_webp/COOP London/COOP-London-food-retail-interior-design-cgi-render (6).webp"
                ]
            },
            {
                type: "bullets",
                heading: "Scope",
                items: [
                    "Store layout and fixture strategy for underground footprint",
                    "Brand environment integration",
                    "Bakery and coffee counter design",
                    "Night-mode and entrance threshold treatments"
                ]
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
        airport: "North Atlantic & Norwegian Fjords",
        content: [
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Norwegian Cruise Lines/Norwegian Cruise Line Interior Experiential Design Concept (1).webp",
                    "Portfolio-images_webp/Norwegian Cruise Lines/Norwegian Cruise Line Interior Experiential Design Concept (2).webp",
                    "Portfolio-images_webp/Norwegian Cruise Lines/Norwegian Cruise Line Interior Experiential Design Concept (3).webp",
                    "Portfolio-images_webp/Norwegian Cruise Lines/Norwegian Cruise Line Interior Experiential Design Concept (4).webp"
                ]
            },
            {
                type: "text",
                body: "Interior experiential design concepts for Norwegian Cruise Lines — a brand synonymous with the freedom of the open sea. The design language references Nordic craft traditions and the elemental quality of ocean light, translated into onboard spaces that feel both expansive and intimately considered."
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
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Norwegian Cruise Lines/Norwegian Cruise Line Interior Experiential Design Concept (9).webp",
                    "Portfolio-images_webp/Norwegian Cruise Lines/Norwegian Cruise Line Interior Experiential Design Concept (10).webp",
                    "Portfolio-images_webp/Norwegian Cruise Lines/Norwegian Cruise Line Interior Experiential Design Concept (11).webp",
                    "Portfolio-images_webp/Norwegian Cruise Lines/Norwegian Cruise Line Interior Experiential Design Concept (12).webp"
                ]
            },
            {
                type: "bullets",
                heading: "Design Highlights",
                items: [
                    "Public realm and passenger lounge environments",
                    "F&B outlet concept and spatial design",
                    "Material specification for marine environment compliance",
                    "Passenger experience and wayfinding strategy"
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
        airport: "Heathrow, Belfast & Aberdeen, UK",
        content: [
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/World Duty Free/WDF London with psd people/View 1.webp",
                    "Portfolio-images_webp/World Duty Free/WDF London with psd people/View 2.webp",
                    "Portfolio-images_webp/World Duty Free/WDF London with psd people/View 3.webp",
                    "Portfolio-images_webp/World Duty Free/WDF London with psd people/View 5.webp"
                ]
            },
            {
                type: "text",
                body: "A multi-site retail design programme for World Duty Free across UK airports — bringing international retail standards to gateway environments where the traveller profile demands sophisticated, culturally attuned design. Projects spanned Heathrow, Belfast International, and Aberdeen."
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
                type: "gallery",
                images: [
                    "Portfolio-images_webp/World Duty Free/WDF Aberdeen/World Dutry Free Travel Retail Design Aberdeen (1).webp",
                    "Portfolio-images_webp/World Duty Free/WDF Aberdeen/World Dutry Free Travel Retail Design Aberdeen (2).webp",
                    "Portfolio-images_webp/World Duty Free/WDF Aberdeen/World Dutry Free Travel Retail Design Aberdeen (3).webp",
                    "Portfolio-images_webp/World Duty Free/WDF Aberdeen/World Dutry Free Travel Retail Design Aberdeen (4).webp"
                ]
            },
            {
                type: "image",
                src: "Portfolio-images_webp/World Duty Free/WDF HEathrow Christian Dior/World Duty Free Christian Dior Heathrow Design Concept.webp",
                caption: "World Duty Free x Christian Dior — Heathrow concept"
            },
            {
                type: "bullets",
                heading: "Project Scope",
                items: [
                    "Retail interior architecture across 3 airports",
                    "Category merchandising and display strategy",
                    "Premium brand partnership environments (incl. Christian Dior)",
                    "Concourse integration and threshold design"
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
        title: "Timebox — Dufry Zurich",
        airport: "Zurich Airport, Switzerland",
        content: [
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Timebox Zurich/Dufry Timebox Travel Retail Watch Store Interior Design Render 1.webp",
                    "Portfolio-images_webp/Timebox Zurich/Dufry Timebox Travel Retail Watch Store Interior Design Render 2.webp",
                    "Portfolio-images_webp/Timebox Zurich/Dufry Timebox Travel Retail Watch Store Interior Design Render 3.webp",
                    "Portfolio-images_webp/Timebox Zurich/Dufry Timebox Travel Retail Watch Store Interior Design Render 4.webp"
                ]
            },
            {
                type: "text",
                body: "A specialist watch and timepiece retail environment in Zurich — Europe's horological capital. The design had to honour Swiss precision culture while creating an accessible, contemporary retail experience for international travellers encountering the category for the first time."
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
                type: "image",
                src: "Portfolio-images_webp/Timebox Zurich/Dufry Zurich Timebox Watch Store Travel Retail Design Plan GA.webp",
                caption: "General arrangement plan — Timebox Zurich"
            },
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Timebox Zurich/Dufry Watch & Jewellery Collection - Sketch Wallbay 1.webp",
                    "Portfolio-images_webp/Timebox Zurich/Dufry Watch & Jewellery Collection - Sketch Wallbay 4.webp",
                    "Portfolio-images_webp/Timebox Zurich/Dufry Watch & Jewellery Collection - Sketch Wallbay 5.webp",
                    "Portfolio-images_webp/Timebox Zurich/Dufry Watch & Jewellery Collection - Sketch Internal preliminary view.webp"
                ]
            },
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Timebox Zurich/timeboxzurichairporttaxfree18.webp",
                    "Portfolio-images_webp/Timebox Zurich/timeboxzurichairporttaxfree19.webp",
                    "Portfolio-images_webp/Timebox Zurich/timeboxzurichairporttaxfree23.webp",
                    "Portfolio-images_webp/Timebox Zurich/timeboxzurichairporttaxfree26.webp"
                ]
            },
            {
                type: "bullets",
                heading: "Design Principles",
                items: [
                    "Display architecture for high-security product showcase",
                    "Lighting calibrated for watch and jewellery appeal",
                    "Premium material palette reflecting Swiss craft heritage",
                    "Customer journey from browse to consultation"
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
                body: "A vibrant retail concept for Havaianas — the Brazilian flip-flop brand whose colour and energy are as much a product as the footwear itself. The design translates the brand's exuberant DNA into a travel retail format without losing its essential playfulness."
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
        title: "Ray-Ban — QDF Sunglasses Concept",
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
                body: "A travel retail concept for Ray-Ban — exploring how one of the world's most iconic eyewear brands can create a standalone retail moment within the transient, high-footfall environment of international departure halls. Developed within the Qatar Duty Free estate."
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
        status: "built",
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
                body: "Industrial and interior design for superyacht and marine environments — spaces that must perform at the absolute pinnacle of material quality, craftsmanship, and spatial engineering. Every surface must withstand the marine environment while delivering an experience indistinguishable from the finest private residences."
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
                caption: "Industrial Design Honours — boat design project"
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
    // DIGITAL PROJECTS — UX/UI Panel
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
                body: "UX/UI design for Smartly — a payroll and HR platform serving thousands of New Zealand businesses. The challenge was bringing clarity and warmth to a product category historically associated with complexity and anxiety, making compliance feel genuinely manageable."
            },
            {
                type: "image",
                src: "Portfolio-images_webp/Smartly/Smartly web Iphone macbook s.webp",
                caption: "Responsive design — mobile and desktop views"
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
        status: "built",
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
                body: "Mobile application design for Polhill Reserve — a community environmental initiative connecting Wellington residents with local conservation efforts. The product needed to feel alive with the energy of the outdoor environment it serves, while remaining functional and accessible for a diverse user base."
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
                body: "Brand and digital design concept for Spaceman Coffee — an Auckland specialty café with a character rooted in curiosity, precision, and a slightly otherworldly commitment to the craft of espresso. The digital touchpoints needed to match the brand's sense of playful seriousness."
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
        status: "concept",
        title: "Fuelmizas",
        airport: "Digital / Web",
        content: [
            {
                type: "image",
                src: "Portfolio-images_webp/Fuelmizas/Macbook Fuelmizas UX Web.webp",
                caption: "Fuelmizas — web UX concept"
            },
            {
                type: "text",
                body: "UX and web design concept for Fuelmizas — exploring the convergence of fuel culture, performance aesthetics, and premium digital retail. The project asked what a motorsport-inspired digital brand experience looks like when stripped of cliché and rebuilt with precision."
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
        airport: "New Zealand — Global",
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
                body: "Digital experience design for Zespri — the world's leading kiwifruit marketer. The work explored how a global agri-food brand with deep New Zealand roots could communicate its story of provenance, quality, and nutrition across digital touchpoints in international markets."
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

    {
        id: 106,
        type: "digital",
        lat: 0,
        lon: 0,
        status: "built",
        title: "Tarquin Design — Brand Assets",
        airport: "New Zealand",
        content: [
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Tarquin Design Brand Assets/Tarquin logo stamp.webp",
                    "Portfolio-images_webp/Tarquin Design Brand Assets/Tarquin Square.webp",
                    "Portfolio-images_webp/Tarquin Design Brand Assets/ocean waves  tarquin design cover.webp",
                    "Portfolio-images_webp/Tarquin Design Brand Assets/Tarquin over water.webp"
                ]
            },
            {
                type: "text",
                body: "Brand identity and asset development for Tarquin Design — establishing a visual language at the intersection of spatial and digital design disciplines. The brand needed to feel both architectural in its rigour and dynamic in its digital application."
            },
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Tarquin Design Brand Assets/IMG_20200216_145552_192.webp",
                    "Portfolio-images_webp/Tarquin Design Brand Assets/IMG_20200216_150056_877.webp",
                    "Portfolio-images_webp/Tarquin Design Brand Assets/IMG_20200216_150218_476.webp",
                    "Portfolio-images_webp/Tarquin Design Brand Assets/IMG_20200216_150556_648.webp"
                ]
            },
            {
                type: "bullets",
                heading: "Deliverables",
                items: [
                    "Logo design, brand mark and stamp variants",
                    "Colour system and typographic hierarchy",
                    "Digital and print asset suite",
                    "Brand guidelines documentation"
                ]
            }
        ]
    },

    {
        id: 107,
        type: "digital",
        lat: 0,
        lon: 0,
        status: "built",
        title: "Datacom",
        airport: "Auckland, New Zealand",
        content: [
            {
                type: "gallery",
                images: [
                    "Portfolio-images_webp/Datacom/Datacom Primary Logo - Datacom Blue.webp",
                    "Portfolio-images_webp/Datacom/Datacom Greyscale Logo - For print use - CMYK Datacom Black.webp",
                    "Portfolio-images_webp/Datacom/Datacom Reversed Logo - For digital use - RBG White.webp"
                ]
            },
            {
                type: "text",
                body: "Design engagement for Datacom — one of Australasia's largest technology services companies. The project focused on translating complex enterprise service offerings into accessible, human-centred digital experiences for both B2B and B2C audiences."
            },
            {
                type: "bullets",
                heading: "Deliverables",
                items: [
                    "Brand asset and logo system refinement",
                    "Digital design system and component library",
                    "Interface design for enterprise platform",
                    "Responsive web experience design"
                ]
            }
        ]
    }

];

// ─────────────────────────────────────────────────────────
// Categorise for app consumption
// ─────────────────────────────────────────────────────────
const globeProjects   = portfolioData.filter(p => p.type === "architecture");
const digitalProjects = portfolioData.filter(p => p.type === "digital");
const pageData        = portfolioData.filter(p => p.type === "page");
