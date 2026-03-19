import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import { useAuth } from "./AuthContext";

const FavoritesContext = createContext({
  favorites: [],
  isFavorite: () => false,
  toggleFavorite: () => {},
});

export function FavoritesProvider({ children }) {
  const { user } = useAuth();
  const userKey = user?.email ?? "__anon";

  const [favoritesByUser, setFavoritesByUser] = useState({});

  const favorites = useMemo(() => favoritesByUser[userKey] ?? [], [favoritesByUser, userKey]);

  const isFavorite = useCallback(
    (placeId) => favorites.some((place) => place.id === placeId),
    [favorites]
  );

  const toggleFavorite = useCallback(
    (place) => {
      setFavoritesByUser((prev) => {
        const current = prev[userKey] ?? [];
        const exists = current.some((p) => p.id === place.id);
        const next = exists ? current.filter((p) => p.id !== place.id) : [...current, place];
        return { ...prev, [userKey]: next };
      });
    },
    [userKey]
  );

  const value = useMemo(
    () => ({ favorites, isFavorite, toggleFavorite }),
    [favorites, isFavorite, toggleFavorite]
  );

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
