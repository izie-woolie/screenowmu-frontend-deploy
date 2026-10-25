import { Description, Radio } from "@heroui/react";
interface CustomRadioProps {
  value: string;
  label: string;
}

export default function CustomRadio({ value, label }: CustomRadioProps) {
  return (
    <Radio
      value={value}
      className="flex-1 rounded-xl border border-gray-200 px-4 py-3 cursor-pointer transition-colors data-selected:border-rose-500 data-selected:bg-rose-50"
    >
      <Radio.Content className="flex items-center gap-2 w-full">
        <Radio.Control className="bg-danger">
          <Radio.Indicator />
        </Radio.Control>
        <Description className="text-sm font-medium text-gray-800">
          {label}
        </Description>
      </Radio.Content>
    </Radio>
  );
}
