"use client";
export default function DeleteBtn({ id }: { id: number }) {
  return (
    <button className="badge badge-error cursor-pointer hover:scale-115">
      delete
    </button>
  );
}
