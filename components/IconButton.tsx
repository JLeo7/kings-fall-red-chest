import { useState } from "preact/hooks";

export interface IconData {
    url:string;
    order: number;
  }

interface IconButtonProps {
  iconUrl: '',
  handleSetIcon: () =>void;
}

export default function IconButton({handleSetIcon,iconUrl}: IconButtonProps) {
  return (
    <div class='icon-container flex justify-center'><img
    src={iconUrl}
    onCLick={() => handleSetIcon()}
    class="w-32 h-32 shadow-lg shadow-cyan-500"
  />
  </div>
  );
}
