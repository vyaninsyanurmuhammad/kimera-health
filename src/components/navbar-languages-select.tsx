import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectGroup,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";

const NavbarLanguagesSelect = () => {
  return (
    <>
      <Select defaultValue="sgp">
        <SelectTrigger className="w-48 rounded-full focus:ring-0 focus:ring-offset-0">
          <div className="flex flex-row gap-2.5 items-center">
            <Globe size={16} />
            <SelectValue placeholder="Select a timezone" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Europe & Africa</SelectLabel>
            <SelectItem value="gmt">Greenwich</SelectItem>
            <SelectItem value="cat">Central Africa</SelectItem>
            <SelectItem value="eat">East Africa</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Asia</SelectLabel>
            <SelectItem value="msk">Moscow</SelectItem>
            <SelectItem value="ist">India</SelectItem>
            <SelectItem value="cst_china">China</SelectItem>
            <SelectItem value="jst">Japan</SelectItem>
            <SelectItem value="kst">Korea</SelectItem>
            <SelectItem value="ist_indonesia">Indonesia</SelectItem>
            <SelectItem value="sgp">Singapore</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};

export default NavbarLanguagesSelect;
