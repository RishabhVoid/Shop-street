import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Categories } from "@/constants";

interface Props {
  categories: string[];
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

const CategoryChooser = ({ categories, setCategories }: Props) => {
  const handleCategoryAdd = (category: string) => {
    if (categories.includes(category)) {
      setCategories((categories) =>
        categories.filter((item) => item !== category)
      );
      return;
    }
    setCategories((categories) => [...categories, category]);
  };

  return (
    <div className="mb-4">
      <label htmlFor="Choose categories" className="font-primary">
        Choose categories
      </label>
      <DropdownMenu>
        <DropdownMenuTrigger className="font-primary align-left bg-accent text-white py-1 w-full rounded-[5px]">
          Choose category
        </DropdownMenuTrigger>
        <div className="flex flex-wrap items-center">
          {categories.map((category) => (
            <li
              key={category}
              className="list-none capitalize text-white bg-blue-600 p-1 m-1 rounded-[5px] w-auto"
            >
              #{category}
            </li>
          ))}
        </div>
        <DropdownMenuContent className="bg-white h-[20rem] rounded-[5px] overflow-y-scroll custom_scroll">
          {Categories.map((category) => (
            <DropdownMenuItem
              key={category}
              className={`capitalize cursor-pointer ${
                categories.includes(category.toLowerCase()) &&
                "bg-blue-500 text-white"
              }`}
              onClick={() => handleCategoryAdd(category)}
            >
              {category}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CategoryChooser;