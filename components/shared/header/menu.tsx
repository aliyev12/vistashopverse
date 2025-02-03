import { Button } from "@/components/ui/button";
import {
  EllipsisVertical,
  ShoppingCart,
  ShoppingCartIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import ModeToggle from "./mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import UserButton from "./user-button";
import Search from "./search";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ModeToggle />
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCartIcon /> Cart
          </Link>
        </Button>
        <UserButton />
      </nav>
      <nav className="md:hidden ">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start gap-1">
            <SheetTitle>Menu</SheetTitle>
            <div className="block md:hidden w-full my-4">
              <Search />
            </div>
            <UserButton />
            <Button asChild variant="ghost">
              <Link href="/cart">
                <ShoppingCart /> Cart
              </Link>
            </Button>
            <ModeToggle />
            <SheetDescription>
              <span className="sr-only">Mobile display of shopping items</span>
            </SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
