import { fetchAzkarByType } from "@/actions";
import Dhikr from "@/components/Dhikr";
import { IDhikrListProps } from "@/definitions";
import { FC } from "react";

const typeToRpcName: Record<string, string> = {
  morning: "morning",
  evening: "evening",
  sleep: "sleeping",
  prayer: "prayer",
};

const DhikrList: FC<IDhikrListProps> = async ({ type = "morning" }) => {
  const rpcTypeName = typeToRpcName[type] ?? type;
  const response = await fetchAzkarByType(rpcTypeName);

  return (
    <section className="w-full px-5 flex flex-col gap-5">
      {response.map((dhikr) => (
        <Dhikr key={dhikr.dhikr_id} {...dhikr} />
      ))}
    </section>
  );
};

export default DhikrList;
