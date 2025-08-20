import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function NotFound() {
  const goHome = useNavigate();
  useEffect(() => goHome("/"), [goHome]);
  return;
}
