import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import project1 from "@assets/image_1760462174037.png";
import project2 from "@assets/image_1760462186188.png";
import project3 from "@assets/image_1760462192071.png";
import project4 from "@assets/stock_images/solar_panel_installa_533796c4.jpg";
import project5 from "@assets/stock_images/solar_panel_installa_884f876e.jpg";
import project6 from "@assets/stock_images/battery_storage_syst_3e4f4263.jpg";

interface Project {
  id: number;
  image: string;
  location: string;
  size: string;
  year: string;
  details: string[];
}

const projects: Project[] = [
  {
    id: 1,
    image: project1,
    location: "Vaxholm",
    size: "6.4 kW",
    year: "2024",
    details: [
      "20 solpaneler installerade",
      "Årsproduktion: 6 400 kWh",
      "ROI-period: 8-10 år",
      "Batterilagring: 10 kWh",
    ],
  },
  {
    id: 2,
    image: project2,
    location: "Stockholm",
    size: "8.2 kW",
    year: "2024",
    details: [
      "26 premiumpaneler",
      "Årsproduktion: 8 200 kWh",
      "Företagsinstallation",
      "Fjärrövervakningssystem",
    ],
  },
  {
    id: 3,
    image: project3,
    location: "Lidingö",
    size: "5.5 kW",
    year: "2023",
    details: [
      "18 solpaneler",
      "Årsproduktion: 5 500 kWh",
      "BRF-installation",
      "15 kWh batterilagring",
    ],
  },
  {
    id: 4,
    image: project4,
    location: "Vaxholm",
    size: "7.0 kW",
    year: "2023",
    details: [
      "22 solpaneler installerade",
      "Årsproduktion: 7 000 kWh",
      "Modern villainstallation",
      "Smart energihantering",
    ],
  },
  {
    id: 5,
    image: project5,
    location: "Uppsala",
    size: "9.5 kW",
    year: "2024",
    details: [
      "30 högeffektiva paneler",
      "Årsproduktion: 9 500 kWh",
      "Flerfamiljshus",
      "20 kWh batterisystem",
    ],
  },
  {
    id: 6,
    image: project6,
    location: "Täby",
    size: "4.8 kW",
    year: "2023",
    details: [
      "16 solpaneler",
      "Årsproduktion: 4 800 kWh",
      "Kompakt taklösning",
      "5 års garanti ingår",
    ],
  },
];

export default function ProjectGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = projects.map((project) => ({
    src: project.image,
    title: `${project.location} – ${project.size} – ${project.year}`,
    description: project.details.join(" • "),
  }));

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Våra projekt</h2>
          <p className="text-lg text-muted-foreground">
            Framgångsrika installationer i hela Sverige
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer hover-elevate rounded-md overflow-hidden border bg-card"
              onClick={() => {
                setCurrentIndex(index);
                setLightboxOpen(true);
              }}
              data-testid={`project-${project.id}`}
            >
              <div className="aspect-[3/2] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={`Solar installation in ${project.location}`}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-4 bg-card">
                <p className="font-semibold text-foreground">
                  {project.location} – {project.size} – {project.year}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={slides}
          index={currentIndex}
        />
      </div>
    </section>
  );
}
