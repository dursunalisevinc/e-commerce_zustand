import { Check } from "lucide-react";
import React from "react";

interface CheckboxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
}

const Checkbox = ({ checked, onChange }: CheckboxProps) => {
    return (
        <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                className="hidden"
            />
            <div className={`${checked ? "bg-primary-600" : "bg-secondary-50"} h-5 w-5 rounded border border-secondary-100 shadow flex items-center justify-center`}>
                {checked && <Check color="white" />}
            </div>
        </label>
    );
};

export default Checkbox;
