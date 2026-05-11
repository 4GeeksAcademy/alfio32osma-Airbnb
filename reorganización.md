# Prompt: Reorganización Arquitectónica del Proyecto

**Para la IA:**
Actúa como un Arquitecto de Software Senior experto en Next.js (App Router). Mi proyecto está creciendo y necesito reorganizar la estructura de archivos para mejorar la escalabilidad y el mantenimiento, siguiendo estrictamente mi modelo definido en `flujoTrabajo.md`.

---

## 📋 Tareas de Reorganización

### 1. Reestructuración de `/components`
Actualmente, la carpeta es una lista plana. Debes proponer una división por responsabilidades:
- **`/components/ui`**: Para componentes atómicos y agnósticos al negocio (ej: `Button.tsx`, `BadgeTag.tsx`, `LoadingIndicator.tsx`).
- **`/components/layout`**: Para elementos de estructura global (ej: `TopNavbar.tsx`, `BottomNavigation.tsx`).
- **`/components/shared`**: Para componentes de negocio reutilizables (ej: `PropertyCard.tsx`, `ListingCard.tsx`).
- **`/components/views`**: Para componentes orquestadores que representan una página completa (ej: `HomePageView.tsx`).

### 2. Limpieza de `/app`
- Asegúrate de que la carpeta `/app` contenga exclusivamente archivos de enrutamiento y configuración global (`page.tsx`, `layout.tsx`, `globals.css`).
- Cualquier lógica de renderizado de vista debe moverse a `/components/views`.

### 3. Alineación de Lógica (Hooks, Services, Types)
- Verifica que los archivos en `/hooks`, `/services` y `/types` sigan una nomenclatura coherente entre sí (ej: `homeService.ts` debe alimentar a `useHomeListings.ts` usando los tipos de `home.ts`).

---

## 🛠️ Resultado Esperado
1. Genera un **árbol de directorios (ASCII)** que muestre dónde debe quedar cada archivo actual según esta nueva lógica.
2. Indica específicamente qué archivos deben ser **movidos** y a qué ruta exacta.
3. Asegúrate de que todas las importaciones se mantengan funcionales (usando `@/components/...` si los alias están configurados).

**Referencia:** Usa siempre `flujoTrabajo.md` como la verdad absoluta para decidir la ubicación de cualquier archivo.