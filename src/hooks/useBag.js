import { createContext, useContext, useMemo, useCallback, useState, createElement } from 'react';

const BagContext = createContext(null);

export function getBagItemPrice(item) {
  return item.saleprice ?? item.price ?? 0;
}

export function BagProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToBag = useCallback((book) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === book.id);
      if (existing) {
        return prev.map((item) =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...prev,
        {
          id: book.id,
          title: book.title,
          author: book.author,
          coverImage: book.coverImage,
          price: book.price,
          saleprice: book.saleprice,
          quantity: 1,
        },
      ];
    });
  }, []);

  const removeFromBag = useCallback((bookId) => {
    setItems((prev) => prev.filter((item) => item.id !== bookId));
  }, []);

  const updateQuantity = useCallback((bookId, quantity) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((item) => item.id !== bookId));
      return;
    }

    setItems((prev) =>
      prev.map((item) =>
        item.id === bookId ? { ...item, quantity } : item
      )
    );
  }, []);

  const totalCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () =>
      items.reduce(
        (sum, item) => sum + getBagItemPrice(item) * item.quantity,
        0
      ),
    [items]
  );

  const value = useMemo(
    () => ({
      items,
      addToBag,
      removeFromBag,
      updateQuantity,
      totalCount,
      subtotal,
      isEmpty: items.length === 0,
    }),
    [items, addToBag, removeFromBag, updateQuantity, totalCount, subtotal]
  );

  return createElement(BagContext.Provider, { value }, children);
}

export function useBag() {
  const context = useContext(BagContext);
  if (!context) {
    throw new Error('useBag must be used within BagProvider');
  }
  return context;
}
