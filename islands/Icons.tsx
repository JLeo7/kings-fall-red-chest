import { useEffect, useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import IconButton, { IconData } from "../components/IconButton.tsx";

export default function Counter() {
  const iconList = [
    {
      url: "/assets/icon-1.png",
      order: 1,
      location: "Pendulos",
      locationImageUrl: "/assets/icon-1.png",
      locationDescription: "",
    },
    {
      url: "/assets/icon-2.png",
      order: 2,
      location: "1er cofre",
      locationImageUrl: "/assets/icon-2.png",
      locationDescription: "",
    },
    {
      url: "/assets/icon-3.png",
      order: 3,
      location: "Totems",
      locationImageUrl: "/assets/icon-3.png",
      locationDescription:
        "En el totem izquierdo, en las plataformas de arriba donde hace respawn el caballero",
    },
    {
      url: "/assets/icon-4.png",
      order: 4,
      location: "Warpriest",
      locationImageUrl: "/assets/icon-4.png",
      locationDescription: "",
    },
    {
      url: "/assets/icon-5.png",
      order: 5,
      location: "Laberinto",
      locationImageUrl: "/assets/icon-5.png",
      locationDescription:
        "Justo antes de entrar a Golgoroth, en uno de los huecos",
    },
    {
      url: "/assets/icon-6.png",
      order: 6,
      location: "Golgoroth",
      locationImageUrl: "/assets/icon-6.png",
      locationDescription: "",
    },
    {
      url: "/assets/icon-7.png",
      order: 7,
      location: "Penes gigantes",
      locationImageUrl: "/assets/icon-7.png",
      locationDescription: "A la derecha del 3er cofre",
    },
    {
      url: "/assets/icon-8.png",
      order: 8,
      location: "Penes gigantes",
      locationImageUrl: "/assets/icon-8.png",
      locationDescription: "Justo antes de entrar al cuarto de Oryx",
    },
    {
      url: "/assets/icon-9.png",
      order: 9,
      location: "Oryx",
      locationImageUrl: "/assets/icon-9.png",
      locationDescription: "Arriba de la entrada",
    },
  ];
  const [selectedIcons, setSelectedIcons] = useState<IconData[]>([]);

  return (
    <div>
      {selectedIcons.length === 3 ? (
        <div className="grid grid-cols-1 gap-8">
          {selectedIcons
            .sort((a, b) => a.order - b.order)
            .map((iconData) => (
              <div className="grid grid-cols-3">
                <IconButton key={iconData.order} iconUrl={iconData.url} />
                <div className="col-span-2">
                  <div className="font-bold text-xl">{iconData.location}</div>
                  <div>{iconData.locationDescription}</div>
                </div>
              </div>
            ))}
          <Button onClick={() => setSelectedIcons([])}>Volver</Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8">
          <p className="font-bold text-xl">Seleccione los 3 circulos</p>
          <div className="grid grid-cols-3 gap-8">
            {iconList.map((iconData) => {
              const isSelected = selectedIcons.some(
                (selectedIcon) => selectedIcon.order === iconData.order
              );
              return (
                <IconButton
                  key={iconData.order}
                  iconUrl={iconData.url}
                  handleSetIcon={() => {
                    if (!isSelected) {
                      setSelectedIcons([...selectedIcons, iconData]);
                    }
                  }}
                  isSelected={isSelected}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
