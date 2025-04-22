import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
import { useTheme } from "@/hooks/useTheme";

interface CustomSelectProps {
    value?: string;
    onChange?: (value: string) => void;
    label?: string;
    placeholder?: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({ placeholder }) => {
    const { theme, setTheme } = useTheme()

    return (
      <Select value={theme} onValueChange={setTheme}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    );
}