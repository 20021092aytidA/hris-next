"use client";

export default function Modal({
  open,
  close,
  children,
  className,
}: {
  open: boolean;
  close: any;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`${className ?? ""} ${open ? "" : "hidden"} z-20 fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.2)]`}
    >
      <div
        className={`fixed top-0 left-0 w-full -z-1 h-full bg-[rgba(0,0,0,0.2)]`}
        onClick={close}
      ></div>
      <div>{children}</div>
    </div>
  );
}
