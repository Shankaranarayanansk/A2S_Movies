import { filterOptions } from "@/config";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";

function ProductFilter({ filters, handleFilter }) {
  return (
    <div className="bg-background rounded-lg shadow-sm">
      <div className="p-4 border-b">
        <h2 className="text-lg font-extrabold">Filters</h2>
      </div>
      <div className="p-4 space-y-4">
        <div>
          <h3 className="text-base font-bold">Category</h3>
          <div className="grid gap-2 mt-2">
            {filterOptions.category?.map((option) => (
              <Label
                key={option.id}
                className="flex font-medium items-center gap-2"
              >
                <Checkbox
                  checked={
                    filters?.category?.includes(option.id)
                  }
                  onCheckedChange={() => handleFilter("category", option.id)}
                />
                {option.label}
              </Label>
            ))}
          </div>
        </div>
        <Separator />
      </div>
    </div>
  );
}

export default ProductFilter;
