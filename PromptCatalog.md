# Prompt de Implementación: Página de Inicio y Catálogo (Airbnb Clone)

**Contexto del Proyecto:**
Estoy construyendo un clon de Airbnb con Next.js (App Router). Mi estructura de carpetas sigue un patrón de "Clean Architecture" con:
- `/components/ui`: Componentes atómicos (Button, BadgeTag).
- `/components/layout`: Estructura global (Navbar, BottomNavigation).
- `/components/views`: Orquestadores de página (HomePageView).
- `/hooks`: Lógica de negocio reutilizable (useHomeListings).

---

## 🛠 Tarea 1: Finalizar Página de Inicio (/)

Basándote en los requisitos de la imagen, completa la lógica en `useHomeListings.ts` y `HomePageView.tsx`:

1. **Simulación de Carga:** - Implementar un `useEffect` con `setTimeout` (1 segundo) que inicie `isLoading` en `true` y lo cambie a `false` tras cargar los datos.
   - Mostrar el componente `LoadingIndicator` mientras `isLoading` sea verdadero.
2. **Filtros Funcionales:** - Asegurar que la `CategoryFilterBar` use el estado del hook para resaltar visualmente la categoría seleccionada.
3. **Búsqueda en Tiempo Real:** - El campo de búsqueda debe actualizar el estado local en cada pulsación (`onSearchChange`) y filtrar las tarjetas visibles instantáneamente.
4. **Grid Responsivo:** - La cuadrícula de alojamientos debe mostrar una sola columna en móvil y expandirse a varias en escritorio.

---

## 🛠 Tarea 2: Implementar Página de Catálogo (/catalog)

Siguiendo los requisitos de la imagen:

1. **Cabecera de Resultados:**
   - Crear un componente que muestre el número de resultados encontrados.
   - Implementar un control de ordenación (Ascendente / Descendente por precio) usando `useState`.
2. **Área de Mapa:**
   - Añadir un contenedor a la derecha (escritorio) o abajo (móvil) que sirva como placeholder del mapa (un recuadro gris con el texto "Mapa").
3. **Reutilización:**
   - Utilizar exactamente el mismo componente de tarjeta de alojamiento definido para la página de inicio para mantener la consistencia.

---

## 📋 Reglas de Salida
- **Código Completo:** No simplifiques; entrega el código funcional listo para copiar.
- **Tipado:** Usa las interfaces definidas en `src/types/home.ts` y `explore.ts`.
- **Estilos:** Usa exclusivamente Tailwind CSS para cumplir con el diseño responsivo solicitado.