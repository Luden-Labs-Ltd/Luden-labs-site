// Calculates map opacity from the count of visited projects in localStorage.
export const getVisitedOpacity = () => {
  try {
    // Read the visited list from localStorage and normalize to an array.
    const raw = localStorage.getItem("visitedProjects");
    const parsed = raw ? JSON.parse(raw) : [];
    // Convert count to opacity: 10 visited -> 1.0, 3 visited -> 0.3.
    const count = Array.isArray(parsed) ? parsed.length : 0;
    return Math.min(1, count / 10);
  } catch {
    // Fall back to fully hidden if storage is invalid.
    return 0;
  }
};
