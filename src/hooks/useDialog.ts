import { useCallback, useState } from 'react';

export const useDialog = (id: string) => {
  const [isOpen, setIsOpen] = useState(false);

  const el = useCallback(() => document.getElementById(id) as HTMLDialogElement | null, [id]);

  const open = useCallback(() => {
    const d = el();
    if (d?.showModal) {
      d.showModal();
      setIsOpen(true);
    }
  }, [el]);

  const close = useCallback(() => {
    const d = el();
    if (d?.close) {
      d.close();
      setIsOpen(false);
    }
  }, [el]);

  const toggle = useCallback(() => (isOpen ? close() : open()), [isOpen, open, close]);

  return { open, close, toggle, isOpen };
};
