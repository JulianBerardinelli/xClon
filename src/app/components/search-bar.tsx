import { Input, Navbar, NavbarContent } from "@nextui-org/react";
import { IconSearch } from "@tabler/icons-react";

export function SearchBar() {
    return (
        <Navbar>
        <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-full h-10 ",
            mainWrapper: "h-full",
            input: "text-small ",
            inputWrapper: "h-full font-normal text-default-500 bg-slate-800 hover:bg-slate-800 transition rounded-full",
          }}
          placeholder="Buscar"
          size="sm"
          startContent={<IconSearch size={18} />}
          type="search"
          />
          </NavbarContent>
          </Navbar>
    )
}