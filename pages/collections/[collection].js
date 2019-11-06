import { useRouter } from "next/router";
import DefaultLayout from "../../layouts/default";
import DropdownMenu from "../../components/dropdown-menu";

const dropdownItems = [
  { title: "Item 1", href: "bla/item-1" },
  { title: "Item 2", href: "bla/item-2" },
  { title: "Item 3", href: "bla/item-3" },
  { title: "Item 4", href: "bla/item-4" },
  { title: "Item 5", href: "bla/item-5" }
];

const Collection = () => {
  const router = useRouter();
  const { collection } = router.query;

  return (
    <DefaultLayout>
      <DropdownMenu title="Dropdown" items={dropdownItems} />
      <p>{collection}</p>
    </DefaultLayout>
  );
};

export default Collection;
