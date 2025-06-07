import { Tools, ToolsType } from "../../types";

import { LuPencil } from "react-icons/lu";
import { FiMinus, FiMousePointer, FiSquare, FiCircle } from "react-icons/fi"; // Import FiCircle
import { IoHandRightOutline, IoText } from "react-icons/io5";
import "./action-bar-style.css";

type ActionBarProps = {
  tool: ToolsType;
  setTool: (tool: ToolsType) => void;
};

export function ActionBar({ tool, setTool }: ActionBarProps) {
  return (
    <div className="actionBar">
      {Object.values(Tools).map((t, index) => (
        <div
          className={`inputWrapper ${tool === t ? "selected" : ""}`}
          key={t}
          onClick={() => setTool(t)}
        >
          <input
            type="radio"
            id={t}
            checked={tool === t}
            onChange={() => setTool(t)}
            readOnly
          />
          <label htmlFor={t}>{t}</label>
          {t === "pan" && <IoHandRightOutline />}
          {t === "selection" && <FiMousePointer />}
          {t === "rectangle" && <FiSquare />}
          {t === "line" && <FiMinus />}
          {t === "pencil" && <LuPencil />}
          {t === "text" && <IoText />}
          {t === "circle" && <FiCircle />} {/* Add this line */}
          <span>{index + 1}</span>
        </div>
      ))}
    </div>
  );
}
