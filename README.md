# Task Dashboard

Task Dashboard es una aplicación diseñada para la gestión de tareas y la visualización de estadísticas relacionadas con ellas. Este proyecto utiliza tecnologías modernas como React, TypeScript y Vite para ofrecer una experiencia de usuario fluida y responsiva.

## Características

- **Estadísticas de Tareas**: Visualización de estadísticas mediante gráficos de pastel y barras en la página `EstadisticasPage`.
- **Página de Inicio**: Una página de inicio (`HomePage`) con características destacadas, testimonios y un botón de llamada a la acción.
- **Navegación**: Un componente `Navbar` con funcionalidad de barra lateral colapsable para facilitar la navegación.
- **Gestión de Tareas**: Página `TareasPage` para gestionar tareas, con funciones de búsqueda y marcado de tareas completadas.
- **Gestión de Estado**: Uso de `TaskContext` para manejar el estado global de las tareas.
- **Hook Personalizado**: `useTasks` para acceder y manipular los datos de las tareas.
- **HOC de Registro**: `withLogger` para registrar el ciclo de vida de los componentes.
- **Integración con API**: Servicio para obtener tareas desde una API externa.
- **Estilos Responsivos**: Diseño adaptable para todos los componentes y páginas.
- **Configuración Moderna**: Proyecto configurado con TypeScript y Vite.

## Tecnologías Utilizadas

- **React**: Biblioteca para construir interfaces de usuario.
- **TypeScript**: Superset de JavaScript que añade tipado estático.
- **Vite**: Herramienta de construcción rápida para proyectos modernos.
- **CSS**: Estilos responsivos para una mejor experiencia en dispositivos móviles y de escritorio.

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/manuelcuevas0/task-dashboard.git