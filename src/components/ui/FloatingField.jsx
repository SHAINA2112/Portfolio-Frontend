import { useId } from "react";
import { cn } from "../../utils/cn";

/**
 * Text input / textarea with an animated floating label and focus glow.
 * Fully controlled — parent owns the value and error state.
 */
export default function FloatingField({
  label,
  name,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  as = "input",
  rows = 5,
}) {
  const id = useId();
  const Tag = as;

  return (
    <div className="relative">
      <Tag
        id={id}
        name={name}
        type={as === "input" ? type : undefined}
        rows={as === "textarea" ? rows : undefined}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder=" "
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "peer w-full resize-none rounded-xl border bg-transparent px-4 pb-2.5 pt-5 text-sm text-text-primary outline-none transition-all duration-300",
          "placeholder-transparent focus:shadow-[0_0_0_3px_rgba(34,211,238,0.15)]",
          error
            ? "border-red-400/60 focus:border-red-400"
            : "border-glass focus:border-cyan",
        )}
      />
      <label
        htmlFor={id}
        className={cn(
          "pointer-events-none absolute left-4 top-3.5 font-accent text-sm text-text-secondary transition-all duration-300",
          "peer-focus:top-2 peer-focus:text-xs peer-focus:text-cyan",
          "peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs",
        )}
      >
        {label}
      </label>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
