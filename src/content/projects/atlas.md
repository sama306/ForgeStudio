---
title: "Atlas"
category: "Development"
shortDescription: "Una plataforma de mapas de alto rendimiento que procesa millones de puntos de datos en tiempo real, construida con WebGL y optimizada para cualquier dispositivo."
coverImage: "/images/projects/atlas/cover.jpg"
gallery:
  - "/images/projects/atlas/gallery-1.jpg"
  - "/images/projects/atlas/gallery-2.jpg"
  - "/images/projects/atlas/gallery-3.jpg"
client: "Atlas Geospatial"
year: 2025
role: "Development, Arquitectura de Software, DevOps"
challenge: "Atlas Geospatial necesitaba reemplazar su plataforma de visualización cartográfica, que colapsaba al superar los 100 000 puntos de datos simultáneos. Su equipo de logística requería una herramienta capaz de renderizar millones de ubicaciones en tiempo real, con actualizaciones cada 500 ms y sin pérdida de frames, incluso en dispositivos móviles de gama media."
solution: "Reescribimos el motor de renderizado utilizando WebGL y Web Workers para distribuir la carga de procesamiento entre múltiples hilos. Implementamos un sistema de cuadrícula dinámica (quadtree) que ajusta el nivel de detalle según el zoom y la capacidad del dispositivo, y optimizamos el pipeline de datos con memoria compartida (SharedArrayBuffer) para minimizar la latencia entre la API y el renderizado."
result: "La plataforma actualizada soporta más de 5 millones de puntos simultáneos sin degradación de rendimiento. El tiempo de carga inicial se redujo de 12 segundos a 1.2 segundos. Atlas Geospatial expandió su operación a 12 nuevos países gracias a la capacidad Multi-IoT de la nueva plataforma."
---
