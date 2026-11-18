import { MenuLink } from "./MenuLink";

interface MenuItem {
  href: string;
  label: string;
}

interface MenuLinksProps {
  items: MenuItem[];
  open: boolean;
  onClose: () => void;
}

export function MenuLinks({ items, open, onClose }: MenuLinksProps) {
  return (
    <nav aria-label="Menú principal" className="flex flex-col gap-1">
      {items.map((item, index) => (
        <MenuLink
          key={item.href}
          href={item.href}
          label={item.label}
          index={index}
          open={open}
          onClose={onClose}
        />
      ))}
    </nav>
  );
}
